global.jQuery = require('jquery');
jqueryUI = require('jquery-ui');
bootstrap = require('bootstrap');
fabricJS = require('fabric');
mustache = require('mustache');

// // IIFE - Immediately Invoked Function Expression
// ;(function(myApp){
//     "use strict";

//     // The global jQuery object is passed as a parameter
//     myApp(jQuery, window, document);

//     }(function($, window, document){

//         // The $ is now locally scoped
//         $(function(){
//             // The DOM is ready!
//             console.log("hi!...");
//         });
//         // The rest of your code goes here!


//     }
// ));


// IIFE - Immediately Invoked Function Expression
;(function(myApp){
    "use strict";

    // The global jQuery object is passed as a parameter
    myApp(jQuery, window, document);

    }(function($, window, document){

        // The $ is now locally scoped
        $(function(){
            // The DOM is ready!
            console.log("hi!...");

            var MAX_FILE_UPLOAD_SIZE = 5000000;

            initCanvas();

            $("#stage").droppable({
                tolerance: "pointer",
                drop: function (event, ui) {
                    //do not allow "dropping" of layer widget
                    if (ui.draggable.attr("data-layerWidget")) {
                        return;
                    }

                    var imageSrc = ui.draggable.find(">img").attr("src");   
                    var itemType = ui.draggable.attr("data-itemType");      
                    addImageToCanvas(imageSrc, itemType);
                },
                over: function (event, ui) {
                    //noop
                },
                out: function (event, ui) {
                    //noop
                }
            });

        });
        // The rest of your code goes here!

        function initCanvas(){
            var stage = new fabric.Canvas('stage', {
                width: 500,
                height: 500,
                // strokeWidth: 5,
                // stroke: 'rgba(100,200,200, 0.5)'
            });
        }
    }
));
    //var canvas = new fabric.Canvas('canvas');
    // canvas.setHeight(500);
    // canvas.setWidth(500);
    //canvas.setBackgroundColor("#ffcc00");
    //canvas.setBackgroundImage("img/batman2.jpg",
        // canvas.renderAll.bind(canvas), {
        //     setBackgroundImageOpacity: 1,
        //     backgroundImageStretch: false
        // }
    //     canvas.renderAll.bind(canvas);
    // );

    //canvas.setBackgroundColor(null, canvas.renderAll.bind(canvas));
//     var MAX_FILE_UPLOAD_SIZE = 5000000;

//     var stage = new fabric.Canvas('stage', {
//         width: 500,
//         height: 500,
//         strokeWidth: 5,
//         stroke: 'rgba(100,200,200, 0.5)'
//     });

//     $("#stage").droppable({
//         tolerance: "pointer",
//         drop: function (event, ui) {
//             //do not allow "dropping" of layer widget
//             if (ui.draggable.attr("data-layerWidget")) {
//                 return;
//             }

//             var imageSrc = ui.draggable.find(">img").attr("src");   
//             var itemType = ui.draggable.attr("data-itemType");      
//             addImageToCanvas(imageSrc, itemType);
//         },
//         over: function (event, ui) {
//             //noop
//         },
//         out: function (event, ui) {
//             //noop
//         }
//     });
    

//     console.log("Hi!");
// })(jQuery);
    