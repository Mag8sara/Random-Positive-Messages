        // place your images in this array
        var random_images_array = ['P1.jpg', 'P2.jpg', 'P3.jpg', 'P4.jpg'];

        function getRandomImage(imgAr, path) {
            path = path || 'images/'; // default path here
            var num = Math.floor(Math.random() * imgAr.length);
            var img = imgAr[num];
            var imgStr = '<img src="' + path + img + '" alt = "" class ="futurework-img Allimg"  id ="myimg">';
            //document.write(imgStr);
            if (document.contains(document.getElementById("myimg"))) {
                document.getElementById("myimg").remove();
                document.body.insertAdjacentHTML('beforeend', imgStr);
                document.close();
            } else {
                document.body.insertAdjacentHTML('beforeend', imgStr);
                document.close();
            }
        }