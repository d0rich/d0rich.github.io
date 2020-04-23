var search = function(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i];
        }
    }
}

var Projects = new Vue ({
  el: '#ProjectsContent',
  data: {
    videoShow: false,
    bigProjectShow: false,
    PageData: null,
    NowVideoLink: 'https://player.vimeo.com/video/388640735',
    NowProjectName: 'Тизер для "События"',
    NowHashtags: '#Video #MotionDesign #Compositing #Teaser',
    NowDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad',
    NowScreens: [],
    Prevues:[
      {id:'001', Big:false, MainImg:'img/Projects/Sobitie_2019/Main.png', HashTags:'#Video #MotionDesign #Teaser', name:'Тизер для "События"',
        mainscreens:['img/Projects/Sobitie_2019/1.png','img/Projects/Sobitie_2019/2.png'],
        videolink: 'https://player.vimeo.com/video/388640735',
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad'},
      {id:'002', Big:false, MainImg:'img/Projects/Proriv_2020/Main.png', HashTags:'#Video #MotionDesign #Compositing #Teaser', name:'Тизер для ССервО "Прорыв"',
        mainscreens:['img/Projects/Sobitie_2019/1.png','img/Projects/Sobitie_2019/2.png'],
        videolink: 'https://player.vimeo.com/video/388779111',
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad'},
      {id:'003', Big:true, MainImg:'img/Projects/Proriv_2020/Main.png', HashTags:'#GameDev', name:'Игра Splash: Glory and victims',
        mainscreens:['img/Projects/Sobitie_2019/1.png','img/Projects/Sobitie_2019/2.png'],
        FirstImg:[], videolink: ['https://player.vimeo.com/video/388779111'],
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad',
        Tiles: [
          {video:[], mainimg:['img/Projects/Sobitie_2019/1.png'] ,
           subimg:['img/Projects/Match3_2020/BlueBot.svg', 'img/Projects/Match3_2020/RedBot.svg', 'img/Projects/Match3_2020/GreenBot.svg', 'img/Projects/Match3_2020/OrangeBot.svg'],
           subdescription:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'},
          {video:[], mainimg:['img/Projects/Sobitie_2019/1.png'] ,
           subimg:['img/Projects/Match3_2020/BlueBot.svg', 'img/Projects/Match3_2020/RedBot.svg', 'img/Projects/Match3_2020/GreenBot.svg', 'img/Projects/Match3_2020/OrangeBot.svg'],
           subdescription:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'}
        ]
      },
    ]

  },
  computed:{
    ProjectsListShow: function(){
      if (this.videoShow || this.bigProjectShow)
      return false
      else return true
    }
  },
  methods:{
      NowPage(event){
        id=event.target.id;
        this.PageData=search(id, this.Prevues);
        if (this.PageData.Big)
        this.NowBig();
        else this.NowVideo();
        document.getElementById('Heading').classList.add("ActiveShow");
      },
      NowVideo(){
        this.videoShow = true;
      },
      NowBig(){
        this.bigProjectShow = true;
      },
      NowProjects(){
        this.videoShow = false;
        this.bigProjectShow = false;
        this.PageData = null;
        document.getElementById('Heading').classList.remove("ActiveShow");
      }
  }
})
