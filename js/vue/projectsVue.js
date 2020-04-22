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
    ProjectsShow: true,
    NowVideoLink: 'https://player.vimeo.com/video/388640735',
    NowProjectName: 'Тизер для "События"',
    NowHashtags: '#Video #MotionDesign #Compositing #Teaser',
    NowDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad',
    NowScreens: [],
    Prevues:[
      {id:'001', MainImg:'img/Projects/Sobitie_2019/Main.png', HashTags:'#Video #MotionDesign #Teaser', name:'Тизер для "События"',
        link:'projects-id1.html', mainscreens:['img/Projects/Sobitie_2019/1.png','img/Projects/Sobitie_2019/2.png'],
        videolink: 'https://player.vimeo.com/video/388640735',
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad'},
      {id:'002', MainImg:'img/Projects/Proriv_2020/Main.png', HashTags:'#Video #MotionDesign #Compositing #Teaser', name:'Тизер для ССервО "Прорыв"',
        link:'projects-id1.html', mainscreens:['img/Projects/Sobitie_2019/1.png','img/Projects/Sobitie_2019/2.png'],
        videolink: 'https://player.vimeo.com/video/388779111',
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad'}
    ]

  },
  methods:{
      NowPage(event){
      id=event.target.id;
      PageData=search(id, this.Prevues);
      this.ProjectsShow = false;
      this.NowVideoLink = PageData.videolink;
      this.NowProjectName = PageData.name;
      this.NowHashtags = PageData.HashTags;
      this.NowDescription = PageData.description;
      this.NowScreens = [];
    }
  }
})
