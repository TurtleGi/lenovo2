window.onload = function () {
    var navLeft = document.querySelector(".nav_left")
    var navProject=navLeft.querySelectorAll(".nl-li")
    var headDetail1 = navProject[0].querySelector(".headDetail")
    var headDetail2 = navProject[1].querySelector(".headDetail")
    var cover=document.querySelector("#cover")
    var headDnav1=navProject[0].querySelector(".headDnav")
    var headDnav2=navProject[1].querySelector(".headDnav")
    var headList1=headDnav1.querySelectorAll("li")
    var headList2=headDnav2.querySelectorAll("li")
    var headBanner1=navProject[0].querySelectorAll(".headBanner")
    var headBanner2=navProject[1].querySelectorAll(".headBanner")
    navProject[0].addEventListener("mouseenter", function () {
        headDetail1.style.display = "block"
        cover.style.display="block"
    })
    headList1[0].addEventListener("mouseenter",function(){
        for(var i=0;i<headBanner1.length;i++){
        headBanner1[i].style.display="none"
   
    }
    for(var i=0;i<headList1.length;i++){
        headList1[i].classList.remove("headNavActive")
    }
    headBanner1[0].style.display="flex"
    headList1[0].classList.add("headNavActive")
    })
     headList1[1].addEventListener("mouseenter",function(){
         for(var i=0;i<headBanner1.length;i++){
         headBanner1[i].style.display="none"

     }
     for(var i=0;i<headList1.length;i++){
        headList1[i].classList.remove("headNavActive")
    }
     headBanner1[1].style.display="flex"
     headList1[1].classList.add("headNavActive")
     })
    navProject[0].addEventListener("mouseleave", function () {
        headDetail1.style.display="none"
        cover.style.display="none"
     
    })





    navProject[1].addEventListener("mouseenter", function () {
        headDetail2.style.display="block"
        
        cover.style.display="block"
    })
    
    headList2[0].addEventListener("mouseenter",function(){
        for(var i=0;i<headBanner2.length;i++){
        headBanner2[i].style.display="none"

    }
    for(var i=0;i<headList2.length;i++){
        headList2[i].classList.remove("headNavActive")
    }
    headBanner2[0].style.display="flex"
    headList2[0].classList.add("headNavActive")
    })
     headList2[1].addEventListener("mouseenter",function(){
         for(var i=0;i<headBanner2.length;i++){
         headBanner2[i].style.display="none"

     }
     for(var i=0;i<headList2.length;i++){
        headList2[i].classList.remove("headNavActive")
    }
     headBanner2[1].style.display="flex"
     headList2[1].classList.add("headNavActive")
     })
    navProject[1].addEventListener("mouseleave", function () {
         headDetail2.style.display = "none" 
        cover.style.display="none"
     
    })
 
   



    //?????????
    {

        var pic = document.querySelector('.pic')
        axios.get("http://112.74.73.147:39010/getImg")
            .then(function (response) {
                console.log(response);
                pic.src = response.data
            }, function (err) {
                console.log(err);
            })
        {

            var focus = document.querySelector('.focus');
            var ol = document.querySelector('.circle');
            var ul = focus.querySelector('ul');

            for (var i = 0; i < ul.children.length; i++) {
                var li = document.createElement("li");
                ol.appendChild(li)
                // ???????????????????????????
                li.setAttribute('index', i);//?????????????????????  
                ol.children[0].className = "circle_active"
                li.addEventListener('mouseenter', function () {

                    // ????????????
                    for (var i = 0; i < ol.children.length; i++) {
                        ol.children[i].className = '';

                    }

                    this.className = 'circle_active';

                    var index = this.getAttribute('index');
                    // console.log(index);
                    //???????????????????????????????????????
                    num = index;//???????????????
                    circle = index;
                    var focusWidth = focus.offsetWidth;//??????????????????


                    animate(ul, -index * focusWidth);


                })
            }

            //?????????????????????
            var first = ul.children[0].cloneNode(true);
            ul.appendChild(first);
            var focusWidth = focus.offsetWidth;
            var num = 0;
            var circle = 0;
            // ????????????
            var btnr = document.querySelector('.next');
            var btnl = document.querySelector('.prev');
            focus.addEventListener('mouseenter', function () {
                btnl.style.display = "block"
                btnr.style.display = "block"
            })
            focus.addEventListener('mouseleave', function () {
                btnl.style.display = "none"
                btnr.style.display = "none"
            })
            btnr.addEventListener('click', function () {


                if (num == ul.children.length - 1) {
                    ul.style.left = 0;
                    num = 0;
                }
                num++;
                animate(ul, -num * focusWidth);


                circle++;
                if (circle == ol.children.length) {
                    circle = 0;
                }
                circleChange();


            })

            btnl.addEventListener('click', function () {
                if (num == 0) {
                    num = ul.children.length - 1;
                    ul.style.left = -num * focusWidth + 'px';
                }
                num--;
                animate(ul, -num * focusWidth);
                circle--;
                /*  if(circle<0){
                     circle=ol.children.length-1;
                 } */
                circle = circle < 0 ? ol.children.length - 1 : circle;
                circleChange();


            });
            //??????bug??????
            function circleChange() {
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';

                }

                ol.children[circle].className = 'circle_active';


            }
            //??????????????????
            var timer = setInterval(function () {


                if (num == 8) {
                    ul.style.left = 0;
                    num = 0;
                }
                num++;
                circle++;
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';
                }

                if (circle == 8) {
                    circle = 0;
                    ol.children[0].className = '';

                }
                ol.children[circle].className = 'circle_active';


                animate(ul, -num * focusWidth);

            }, 4000)
        }
    }
    // ????????????
    {
        var newsPic = document.querySelector(".newsPic")
        var nFocusWidth = newsPic.offsetWidth
        var newsUl = document.querySelector(".bgimg_news")
        // var newsLi=newsUl.querySelectorAll("li")
        var list1 = document.querySelector(".list1")
        var listNum = document.querySelectorAll(".listNum")
        list1.addEventListener("mouseenter", function () {
            animate(newsUl, 0)
            for (var i = 0; i < 3; i++) {
                newsCircleLi[i].classList.remove("activeCircle")
            }
            newsCircleLi[0].classList.add("activeCircle")
            listNum[1].style.color = "#c9c9c9"
            listNum[2].style.color = "#c9c9c9"
            listNum[0].style.color = "#e12726"
            list2.style.backgroundColor = "#f4f4f4"
            list3.style.backgroundColor = "#f4f4f4"
            this.style.backgroundColor = "#fff"
        })
        var list2 = document.querySelector(".list2")
        list2.addEventListener("mouseenter", function () {
            animate(newsUl, -1 * nFocusWidth)
            for (var i = 0; i < 3; i++) {
                newsCircleLi[i].classList.remove("activeCircle")
            }
            newsCircleLi[1].classList.add("activeCircle")
            listNum[0].style.color = "#c9c9c9"
            listNum[2].style.color = "#c9c9c9"
            listNum[1].style.color = "#e12726"
            list1.style.backgroundColor = "#f4f4f4"
            list3.style.backgroundColor = "#f4f4f4"
            this.style.backgroundColor = "#fff"

        })
        var list3 = document.querySelector(".list3")
        list3.addEventListener("mouseenter", function () {
            for (var i = 0; i < 3; i++) {
                newsCircleLi[i].classList.remove("activeCircle")
            }
            newsCircleLi[2].classList.add("activeCircle")
            animate(newsUl, -2 * nFocusWidth)
            listNum[0].style.color = "#c9c9c9"
            listNum[1].style.color = "#c9c9c9"
            listNum[2].style.color = "#e12726"
            list1.style.backgroundColor = "#f4f4f4"
            list2.style.backgroundColor = "#f4f4f4"
            this.style.backgroundColor = "#fff"
        })

        var oUl = document.getElementById('drag');
        var aLi = oUl.getElementsByTagName('li');
        var newsCircle = document.querySelector('.newsCircle')
        var newsCircleLi = newsCircle.getElementsByTagName('li')
        var disX = 0;
        var downX = 0;
        var iNow = 0;
        var timer = null;
        var iSpeed = 0;
        oUl.onmousedown = function (ev) {
            var ev = ev || window.event;
            disX = ev.clientX - oUl.offsetLeft;//??????????????????????????????ul???????????????
            downX = ev.clientX;//??????????????????????????????	
            clearInterval(timer);
            document.onmousemove = function (ev) {
                var ev = ev || window.event;
                oUl.style.left = ev.clientX - disX + 'px';//??????????????????ul??????????????????????????????
            };
            document.onmouseup = function (ev) {
                document.onmousemove = null;
                document.onmouseup = null;//?????????????????????????????????????????????????????????
                var ev = ev || window.event;
                if (ev.clientX < downX) {
                    //alert('???');
                    if (iNow != aLi.length - 1) {
                        iNow++;
                    }

                    animate(oUl, - iNow * aLi[0].offsetWidth);//?????????????????????ul????????????
                    for (var i = 0; i < 3; i++) {
                        newsCircleLi[i].classList.remove("activeCircle")
                    }
                    newsCircleLi[iNow].classList.add("activeCircle")
                }
                else {
                    //alert('???');

                    if (iNow != 0) {
                        iNow--;
                    }
                    animate(oUl, - iNow * aLi[0].offsetWidth);
                    for (var i = 0; i < 3; i++) {
                        newsCircleLi[i].classList.remove("activeCircle")
                    }
                    newsCircleLi[iNow].classList.add("activeCircle")
                }

            };
            return false;//??????????????????
        };

        // function startMove(iTarget){//??????????????????????????????
        //     clearInterval(timer);//???????????????
        //     timer = setInterval(function(){	//???????????????	
        //         iSpeed += (iTarget - oUl.offsetLeft)/6;
        //         iSpeed *= 0.75;		
        //         if( Math.abs(iSpeed)<=1 && Math.abs(iTarget - oUl.offsetLeft)<=1 ){
        //             clearInterval(timer);
        //             iSpeed = 0;
        //             oUl.style.left = iTarget + 'px';
        //         }
        //         else{
        //             oUl.style.left = oUl.offsetLeft + iSpeed + 'px';
        //         }

        //     },30);
        // }


    }
    // ????????????
    {        // ????????????????????????  

        var eNum = 0
        var box = document.querySelector(".exampleBox")
        var boxLists = box.getElementsByTagName("li")
        var ePrev = document.querySelector(".ePrev")
        var eNext = document.querySelector(".eNext")

        var eUl = document.querySelector(".bgimg_ep")
        var eLi = document.querySelector(".eLi")
        var sFirst = eUl.children[0].cloneNode(true)
        eUl.appendChild(sFirst)
        var eFocusWidth = eLi.offsetWidth


        for (i = 0; i < boxLists.length; i++) {
            boxLists[i].setAttribute("index", i)
            boxLists[i].addEventListener("mouseenter", function () {
                var boxNum = parseInt(this.getAttribute("index"))
                for (var j = 0; j < 4; j++) {
                    boxLists[j].className = "box" + (j + 1)
                }
                boxLists[boxNum].classList.add("active_li")

                eNum = boxNum
                animate(eUl, -boxNum * eFocusWidth)

            })
        }


        var square = 0
        function exampleNext() {
            if (eNum == eUl.children.length - 1) {
                eNum = 0;
                eUl.style.left=0;
            }
            eNum++
            animate(eUl, -eNum * eFocusWidth);
            square = eNum
            if (square == 4) {
                square = 0
                boxLists[3].classList.remove("active_li")
                boxLists[square].classList.add("active_li")
            }
            else {
                boxLists[square - 1].classList.remove("active_li")
                boxLists[square].classList.add("active_li")
            }

        }
        function examplePrev() {

            if (eNum == 0) {
                eNum = eUl.children.length - 1;
                eUl.style.left = -eNum * eFocusWidth + 'px';
            }
            eNum--;
            animate(eUl, -eNum * eFocusWidth);
            square = eNum

            console.log(square);


            square = square < 0 ? eUl.children.length - 2 : square;

            if (square == eUl.children.length - 2) {
                boxLists[0].classList.remove("active_li")
            }

            if (square < eUl.children.length - 2) {
                boxLists[square + 1].classList.remove("active_li")
            }
            boxLists[square].classList.add("active_li")

            animate(eUl, -eNum * eFocusWidth);

        }
        eNext.addEventListener('click', function () {
            exampleNext()

        })
        ePrev.addEventListener('click', function () {
            examplePrev()
        });




    }
    // ????????????
    {
        var cMsg = document.querySelectorAll('.msg_charity')
        let imgArr = new Array()
        var charityUl = document.querySelector('.bgimg_charity')
        var cur_li = charityUl.querySelectorAll('li')
        for (var i = 0; i < cur_li.length; i++) {
            var ele = cur_li[i]
            imgArr.push(ele)
        }

        let len = imgArr.length - 1

        var cNext = document.querySelector(".cNext")
        cNext.addEventListener("click", function () {
            getNext()
        })
        var cPrev = document.querySelector(".cPrev")
        cPrev.addEventListener("click", function () {
            getPrev()
        })

        function getPrev() {
            let imgTurn = imgArr[0]
            imgArr.shift()
            imgArr.push(imgTurn)

            for (let i = 0; i < imgArr.length; i++) {
                imgArr[i].style.zIndex = i;
                imgArr[i].style.transform = "scale(1)";


            }

            imgArr[len - 2].style.left = "0px"

            imgArr[len - 1].style.zIndex = 100
            imgArr[len - 1].style.left = "300px"
            imgArr[len - 1].style.transform = "scale(1.4)"

            imgArr[len - 1].style.opacity = 1

            imgArr[len].style.left = "600px"
            var cMsg_active = imgArr[len - 2].querySelector('.msg_charity')
            var cMsg = imgArr[len - 1].querySelector('.msg_charity')
            cMsg.style.display = "block"
            cMsg_active.style.display = "none"
            console.log(imgArr[len - 1]);

        }


        function getNext() {
            let imgTurn = imgArr[len]
            imgArr.pop()
            imgArr.unshift(imgTurn)

            for (let i = 0; i < imgArr.length; i++) {
                imgArr[i].style.zIndex = i;
                imgArr[i].style.transform = "scale(1)";


            }
            imgArr[len - 2].style.left = "0px"
            imgArr[len - 1].style.zIndex = 100
            imgArr[len - 1].style.left = "300px"
            imgArr[len - 1].style.transform = "scale(1.4)"
            imgArr[len - 1].style.opacity = 1
            imgArr[len].style.left = "600px"
            var cMsg_active = imgArr[len].querySelector('.msg_charity')
            var cMsg = imgArr[len - 1].querySelector('.msg_charity')
            cMsg.style.display = "block"
            cMsg_active.style.display = "none"
            console.log(imgArr[len - 1]);
        }

    }
    // ????????????
    {
        var hot_ul = document.querySelector(".bgimg_hot")

        var hNum = 0
        var hfocusWidth = document.querySelector('.hot_li').offsetWidth
        {
            var hNext = document.querySelector(".hotNext")
            var hPrev = document.querySelector('.hotPrev')
            hNext.addEventListener("click", function () {
                gethotNext()
            })
            hPrev.addEventListener("click", function () {
                gethotPrev()
            })

        }
        var list_hot = document.querySelector(".list_hot")
        var listLi = list_hot.querySelectorAll("li")
        var hot_li = hot_ul.querySelectorAll("li")
        hot_li[1].style.transform = "scale(1.3)"
        listLi[0].classList.add("activeList")
        var hFirst = hot_ul.children[1].cloneNode(true)
        hot_ul.appendChild(hFirst)
        hFirst.style.transform = "scale(1)"
        hFirst.classList.add("activeHot")

        hFirst.style.zIndex = "2"
        for (var j = 0; j < 9; j++) {

            listLi[j].setAttribute("index", j)
            listLi[j].addEventListener("mouseenter", function () {
                for (var i = 0; i < 9; i++) {
                    listLi[i].style.color = ""
                    listLi[i].classList.remove("activeList")
                }
                this.style.color = "#e1140a"
                this.classList.add("activeList")
                var listNum = parseInt(this.getAttribute("index"))

                console.log(listNum)
                hNum = listNum
                if (listNum == 8) {
                    hot_li[listNum].style.transform = "scale(1)"
                    hot_li[listNum].style.zIndex = "2"
                    hot_li[listNum].classList.add("activeHot")
                    hot_li[listNum + 1].style.transform = "scale(1.3)"
                    hot_li[listNum + 1].style.zIndex = "100"
                    hot_li[listNum + 1].classList.remove("activeHot")
                }
                else {
                    hot_li[listNum].style.transform = "scale(1)"
                    hot_li[listNum].style.zIndex = "2"
                    hot_li[listNum].classList.add("activeHot")
                    hot_li[listNum + 1].style.transform = "scale(1.3)"
                    hot_li[listNum + 1].classList.remove("activeHot")
                    hot_li[listNum + 1].style.zIndex = "100"
                    hot_li[listNum + 2].style.transform = "scale(1)"

                    hot_li[listNum + 2].classList.add("activeHot")
                    hot_li[listNum + 2].style.zIndex = "2"
                }
                animate(hot_ul, -listNum * 400)
            })
                ;
        }

        function gethotNext() {
            hot_li[9].style.transform = "scale(1)"
            hot_li[9].style.zIndex = "2"
            hot_li[9].classList.add("activeHot")
            hNum++;
            console.log(hNum);
            if (hNum < 8)
                hot_li[hNum + 2].classList.add("activeHot")
            if (hNum == 9) {
                hNum = 0
                hot_ul.style.left = 0

            }
            for (var i = 0; i < 9; i++) {
                listLi[i].style.color = ""
                listLi[i].classList.remove("activeList")
            }
            listLi[hNum].style.color = "#e1140a"
            listLi[hNum].classList.add("activeList")
            hot_li[hNum].style.transform = "scale(1)"
            hot_li[hNum].style.zIndex = "2"
            hot_li[hNum].classList.add("activeHot")
            hot_li[hNum + 1].style.transform = "scale(1.3)"
            hot_li[hNum + 1].style.zIndex = "100"
            hot_li[hNum + 1].classList.remove("activeHot")


            animate(hot_ul, -hNum * 400);
        }

        function gethotPrev() {
            hNum--;

            if (hNum < 0) {
                hot_ul.style.left = - 3200 + 'px';
                hot_li[9].style.zIndex = "100"
                hot_li[9].style.transform = "scale(1.3)"
                
                hot_li[9].classList.remove("activeHot")
                hNum = 8;
                hot_li[1].style.transform = "scale(1)"
                hot_li[8].classList.add("activeHot")
            }
            if (hNum == 8) {
                hot_li[hNum + 1].style.transform = "scale(1.3)"
                hot_li[hNum + 1].style.zIndex = "100"
                hot_li[hNum + 1].classList.remove("activeHot")
            }
            else {
                hot_li[hNum].classList.add("activeHot")
                hot_li[hNum + 2].style.transform = "scale(1)"
                hot_li[hNum + 1].style.transform = "scale(1.3)"
                hot_li[hNum + 2].style.zIndex = "2"
                hot_li[hNum + 2].classList.add("activeHot")
                hot_li[hNum + 1].style.zIndex = "100"
                hot_li[hNum + 1].classList.remove("activeHot")
            }
            for (var i = 0; i < 9; i++) {
                listLi[i].style.color = ""
                listLi[i].classList.remove("activeList")
            }
            listLi[hNum].style.color = "#e1140a"
            listLi[hNum].classList.add("activeList")
            animate(hot_ul, -hNum * 400)
        }
    }
    { //??????JavaScript
        var weibo = document.querySelector(".weibo")
        var wechat = document.querySelector('.wechat')
        var follow = document.querySelector('.follow')
        weibo.addEventListener("mouseenter", function () {
            this.style.transform = "rotate(360deg)"

        })
        weibo.addEventListener("mouseleave", function () {
            this.style.transform = "rotate(-360deg)"
        })
        wechat.addEventListener("mouseenter", function () {
            this.style.transform = "rotate(360deg)"
            follow.style.height = "160px"

        })
        wechat.addEventListener("mouseleave", function () {
            this.style.transform = "rotate(-360deg)"
            follow.style.height = "0"
        })
        //  background-position: 1px 515px;
        var flag = 0;
        var country = document.querySelector('.country')
        var countryList = document.querySelector('.countryList')
        country.addEventListener("click", function () {

            if (flag == 0) {
                countryList.style.display = "block"
                flag = 1
            }
            else {
                countryList.style.display = "none"
                flag = 0
            }


            countryList.addEventListener("mouseleave", function () {
                countryList.style.display = "none"
                flag = 0
            })
        })
    }
}

