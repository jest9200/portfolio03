const express = require("express");
const MongoClient = require("mongodb").MongoClient;
//데이터베이스의 데이터 입력,출력을 위한 함수명령어 불러들이는 작업

const app = express();
const port = 8080;

//ejs 태그를 사용하기 위한 세팅
app.set("view engine","ejs");
//사용자가 입력한 데이터값을 주소로 통해서 전달되는 것을 변환(parsing)
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//css/img/js(정적인 파일)사용하려면 이코드를 작성!
app.use(express.static('public'));

// 로그인 회원가입 위한 설정
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


//데이터 베이스 연결작업
let db; //데이터베이스 연결을 위한 변수세팅(변수의 이름은 자유롭게 지어도 됨)

MongoClient.connect("mongodb+srv://jest9200:wjdtmdgur92@cluster0.iggxwpy.mongodb.net/?retryWrites=true&w=majority",function(err,result){
    //에러가 발생했을경우 메세지 출력(선택사항)
    if(err) { return console.log(err); }

    //위에서 만든 db변수에 최종연결 ()안에는 mongodb atlas 사이트에서 생성한 데이터베이스 이름
    db = result.db("portfolio03");

    //db연결이 제대로 됬다면 서버실행
    app.listen(port,function(){
        console.log("서버연결 성공");
    });
});


// 로그인 시 검증 처리
passport.use(new LocalStrategy({
    usernameField: "memberid",
    passwordField: "memberpass",
    session: true,
},      //해당 name값은 아래 매개변수에 저장
    function (memberid, memberpass, done) {
        //회원정보 콜렉션에 저장된 아이디랑 입력한 아이디랑 같은지 체크                                 
        db.collection("members").findOne({ memberid: memberid }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            //비밀번호 체크 여기서 user는 db에 저장된 아이디의 비번값
            if (memberpass == user.memberpass) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        });
    }
));

//처음 로그인 했을 시 세션 생성 memberid는 데이터에 베이스에 로그인된 아이디
passport.serializeUser(function (user, done) {
    done(null, user.memberid)
});

//다른 페이지(서브페이지,게시판 페이지 등 로그인 상태를 계속 표기하기 위한 작업)
//로그인이 되있는 상태인지 체크
passport.deserializeUser(function (memberid, done) {
    db.collection('members').findOne({ memberid: memberid }, function (err, result) {
        done(null, result);
    })
});


app.get("/",function(req,res){
    res.render("index.ejs",{login:req.user});
});



// 회원가입
app.get("/join",function(req,res){
    res.render("join.ejs",{login:req.user});
});

app.post("/joindb",(req,res)=>{
    db.collection("members").findOne({memberid:req.body.memberid},(err,member)=>{
        if(member){
            res.send("<script> alert('This E-mail is already subscribed.'); location.href='/join'; </script>");
        } else {
            db.collection("count").findOne({name:"회원"},(err,result)=>{
                db.collection("members").insertOne({
                    memberno:result.memberCount,
                    memberid:req.body.memberid,
                    memberpass:req.body.memberpass,
                    membername:req.body.membername,
                    memberbirth:req.body.memberbirth,
                    memberphone:req.body.memberphone,
                },(err)=>{
                    db.collection("count").updateOne({name:"회원"},{$inc:{memberCount:1}},(err)=>{
                        res.send("<script> alert('Member registration completed.'); location.href='/login' </script>");
                    })
                })
            })
        }
    })
})

// 로그인
app.get("/login",function(req,res){
    res.render("login.ejs",{login:req.user});
});

app.post("/logincheck", passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    res.redirect("/"); //로그인 성공시 메인페이지로 이동
})

// 로그인하지않고 notice 들어갔을때 경고창 띄우기
app.get("/booklogin",(req,res)=>{
    res.send("<script>alert('You need to login for reservation.'); location.href = '/login'</script>")
})


// 로그아웃
app.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/");
    })
})

// 로그인페이지에서 경고창띄우기위해 axios 사용 
app.post("/user", (req, res) => {
    db.collection("members").findOne({ memberid: req.body.memberid, memberpass: req.body.memberpass }, (err, result) => {
        if (result === null) {
            res.send(result);
        }
    })
});


// 예약 첫번째 페이지 요청
app.get("/bookdetail",(req,res)=>{
    res.render("bookdetail.ejs",{login:req.user});
})

// 예약 두번째 페이지 요청
app.get("/bookfinish/:num",(req,res)=>{
    db.collection("bookinfo").findOne({num:Number(req.params.num)},(err,result)=>{
        res.render("bookfinish.ejs",{data:result,login:req.user});
    })
})

// 예약페이지 정보 db에 넣기
app.get("/bookfirst",(req,res)=>{
    db.collection("count").findOne({name:"예약번호"},(err,countResult)=>{
        db.collection("bookinfo").insertOne({
            username:req.query.username,
            num:countResult.bookCount,
            checkin:req.query.checkdate.substring(0,10), //체크인 날짜
            checkout:req.query.checkdate.slice(-10), //체크아웃 날짜
            adult:Number(req.query.adult), //게스트 성인 수
            child01:Number(req.query.child01), //게스트 어린이(초등생) 수
            child02:Number(req.query.child02), //게스트 유아 수
            totalRoom:Number(req.query.totalRoom), //방 갯수
            room01:Number(req.query.room01), //single room 선택 갯수
            room02:Number(req.query.room02), //twin room 선택 갯수
            room03:Number(req.query.room03), //universal room 선택 갯수
            room04:Number(req.query.room04) //king room 선택 갯수
        },(err,result)=>{
            db.collection("count").updateOne({name:"예약번호"},{$inc:{bookCount:1}},(err,result)=>{
                res.redirect(`/bookfinish/${countResult.bookCount}`)
            })
        })
    })
})

// mypage 목록페이지
app.get("/mypage/list",(req,res)=>{
    db.collection("bookinfo").find().toArray((err,result)=>{
        res.render("mypage_list.ejs",{data:result,login:req.user})
    })
})

// mypage 상세페이지
app.get("/mypage/detail/:num", (req, res) => {
    db.collection("bookinfo").findOne({ num: Number(req.params.num) }, (err, result) => {
        res.render("mypage_detail.ejs", { data: result, login: req.user });
    })
})

// 예약취소 cancel
app.get("/cancel/:num",(req,res)=>{
    db.collection("bookinfo").deleteOne({num:Number(req.params.num)},(err,result)=>{
        res.redirect("/mypage/list");
    })
})


