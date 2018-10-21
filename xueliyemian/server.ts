import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number
    ){}
}
class Course2{
    constructor(
        public id2:number,
        public course2Name:string,
        public images2:string,
        public present2:string,
        public period2:number,
        public person2:number
    ){}
}

class Shequ{
    constructor(
        public essayid:number,
        public title:string, 
        public touxiang:string,
        public img:string,
        public essay:string,
        public name:string,
        public time:string,
        public read:number,
        public talk:number

    ){}
}

const courses = [
    new Course(1,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(2,'Web开发',"http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(3,'软件测试',
    "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(4,'H5与css',
    "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(5,'信息素养',
    "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(6,'计算机科学导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(7,'数据结构',
    "http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(8,'新生训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(9,'暑期训练营',
    "http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130",10,90),
    new Course(10,'软件过程',
    "http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130",10,90),
    new Course(11,'网络原理',
    "http://usercontent.edu2act.cn/media/team/18-03-07/BGWzBhRgmujgPmLn4efeFd.png?imageView2/1/w/230/h/130",10,90),
    new Course(12,'JAVA SE',
    "http://usercontent.edu2act.cn/media/team/18-03-05/RLZ9pTwpocUfCYqRWvmACZ.jpg?imageView2/1/w/230/h/130",10,90),
    
]

const courses2 = [
    new Course2(1,'Github开源',"http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",'完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料',14,3736),
    new Course2(2,'CSS3基础',"http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",'CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及',12,2317),
    new Course2(3,'HTML5基础',"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",'HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的Java',12,1312),
    new Course2(4,'Selenium IDE WEB',"http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",'上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工',13,3794),
    new Course2(5,'扩展的软件过程',"http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",'ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法',12,2269),
    new Course2(6,'网页制作与开发',"http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",'本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教',42,1572),
    new Course2(7,'产品交互设计那些事',"http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190",'本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲',5,1084),
    new Course2(8,'VR AR产品设计',"http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190",'“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析',3,4335),
    new Course2(9,'ProcessOn界面原型',"http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190",'ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制图功能。',2,4234),
    new Course2(10,'ProcessOn绘制流程图',"http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190",'绘制流程图是在产品设计过程中需求调研阶段非常重要的手段。流程图可以让流程图',4,3053),
    new Course2(11,'项目管理平台',"http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190",'本课程讲解了项目管理平台redmine的安装部署、管理员维护、普通用户使用。',8,4423),
    new Course2(12,'墨刀入门',"http://usercontent.edu2act.cn/media/cs/16-07-14/zuW3YV2EzoSoEbxVmDyrK9.png?imageView2/1/w/320/h/190",'本课程重点讲解一款在线快速原型设计工具——墨刀的使用方法和操作技巧。结合具体',4,4898),

]

const shequ = [
    new Shequ(1,'类定义关键字详解','http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg','JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.','3-张馨元','2018-10-09',58,0),
    new Shequ(2,'数据结构-线性表的经典应用','http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg','1. 一元多项式的表示和相加        在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。','杨伟彬','2018-10-08',52,0),
    new Shequ(3,'栈和队列之间的相互转化','http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg','队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列','7-李建涛','2018-10-01',58,2),
    new Shequ(4,'Javascript event （事件对象）','http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/RWcUSnA6qeiKBmf5KK96K9.jpg','在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定','刘孟祎','2018-09-28',53,0),
    new Shequ(5,'数据结构-快速排序','http://usercontent.edu2act.cn/media/userheader/18-06-27/qaxwRNWziva8oHjepZHiga.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/Q64M9X69ScA6Refyycn85d.jpg','快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。','张钰茹','2018-09-27',34,0),
    new Shequ(6,'Javascript中事件的绑定','http://usercontent.edu2act.cn/media/userheader/16-11-10/jut8pNbf66NgrWMdGPWejD.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/4cQyhZvxEuX2RFjQUx3waR.jpg','事件是您在编程时系统内的发生的动作或者发生的事情，系统通过它来告诉您在您愿意的情况下您可以以某种方式对它做出回应。','陶卓','2018-09-26',105,0),
    new Shequ(7,'创建视频课程的方法说明','http://usercontent.edu2act.cn/media/userheader/17-08-21/3ZhbH44vcqrHhidpqxrejJ.png?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/YrRncuw8TTWhCd9ZyrJd3K.png','教师用户登录后访问 http://www.edu2act.net/trainer/course/list/ 可以创建视频课程。具体操作流程如下：1. 通过上面的链接，进入所有课程页面点击','雪梨教育 ','2018-09-21',53,0)
    
    
]

//同步课
app.get('/api',(req,res)=>{
    res.json(courses);
})
app.get('/api/courses',(req,res)=>{
    res.json(courses);
})
app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id == req.params.id));
})
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
})

//课程
app.get('/api',(req,res)=>{
    res.json(courses2);
})
app.get('/api/courses2',(req,res)=>{
    res.json(courses2);
})
app.get('/api/courses2/:id2',(req,res)=>{
    res.json(courses2.find((ele)=>ele.id2 == req.params.id2));
})
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses2);
})

//社区
app.get('/api',(req,res)=>{
    res.json(shequ);
})
app.get('/api/shequ',(req,res)=>{
    res.json(shequ);
})
app.get('/api/shequ/:essayid',(req,res)=>{
    res.json(shequ.find((ele)=>ele.essayid == req.params.essayid));
})
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(shequ);
})


app.listen(8000);

