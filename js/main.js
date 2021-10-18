let lastModified = document.lastModified;

let g2top = `<a href="#top"><i class="fas fa-arrow-up"></i></a>`;


document.getElementById("last-modified").innerHTML = "Last Modified: " + lastModified + "<br>" + " Page location is " + window.location.href + g2top;