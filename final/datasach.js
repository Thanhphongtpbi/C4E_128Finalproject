let datasach = [
    {
        name: " Những Tù Nhân  của địa lý ",
        address: "https://newshop.vn/public/uploads/products/35143/sach-nhung-tu-nhan-cua-dia-ly.jpg",
        c: "best seller"
    },
    {
        name: " Mùi Hương ",
        address: "https://newshop.vn/public/uploads/products/22386/mui-huong.jpg",
        l: "like",
        c: "best seller",
    },
    {
        name: " Sức mạnh của người mẹ nhật ",
        address: "https://newshop.vn/public/uploads/products/11104/suc-manh-cua-nguoi-me-nhat-bia.png",
        c: "best seller",
    },
    {
        name: " Phía tây không có gì lạ ",
        address: "https://newshop.vn/public/uploads/products/11199/bia-trc.gif",
        c: "best seller"
    },
    {
        name: " Nhà Giả Kim ",
        address: "https://newshop.vn/public/uploads/products/3363/nha-gia-kim.jpg",
        c: "best seller"
    },    {
        name: " Cha giàu cha nghèo ",
        address: "https://newshop.vn/public/uploads/products/4900/cha-giau-cha-ngheo.jpg",
        c: "best seller",
        a : 0,
    },
    {
        name: " Onepiece ",
        address: "https://newshop.vn/public/uploads/products/46853/sach-one-piece-tap-93-nhan-vat-tieng-tam-cua-lang-ebisu.jpg",
        c: "best seller"
    },
    {
        name: " Bí Kí Kinh Doanh Của Người Do Thái  ",
        address: "https://newshop.vn/public/uploads/products/15360/nghe-thuat-kinh-doanh-cua-nguoi-do-thai.jpg",
        c: "best seller"
    },
    {
        name: "Từ Điển Tiếng em ",
        address: "https://salt.tikicdn.com/cache/400x400/ts/product/e2/8b/5b/40f08ef5c3c5dca101d64e0887ed2d89.jpg.webp",
        l: "like"
    }, {
        name: " Gió thổi mùa trăng năm ấy ",
        address: "https://salt.tikicdn.com/cache/400x400/ts/product/62/e4/be/bbf89dc3c6319109ef461d3b875f7840.png.webp",
        l: "like"
    }, 
    {
        name: " Đọc Vị Bất Kỳ Ai  ",
        address: "https://salt.tikicdn.com/cache/400x400/ts/product/a5/d8/34/841d0260cc305115f6753c25caadd5b0.jpg.webp",
        l: "like"
    }, 
    {
        name: " Khéo Ăn khéo Nói Sẽ Được Lòng Thiên Hạ ",
        address: "https://salt.tikicdn.com/cache/400x400/ts/product/22/a9/48/c55f8c043e5ff5842aa15dc1f3b6c20f.jpg.webp",
        l: "like",
    }, 
    {
        name: " Nghệ Thuật Từ Chối ",
        address: "https://salt.tikicdn.com/cache/400x400/ts/product/67/02/06/0747f0d843db55db3801a8051916dd39.jpg.webp",
        c: "best seller",
        l: "like",
        id : 1,
    },
]
function change(id,text) {
    const ele= document.getElementById(id);
    if(ele)
    ele.innerText=Text
}
console.log(datasach);
console.log(datasach[1].address);
let best = document.getElementById("bestseller");
let love = document.getElementById("like")
console.log(best);
// console.log(bestseller,'${ asdfdffgfdf}') 

 
for (let i = 0; i < datasach.length; i++) {
    // const n = array[i].name;
    // const a  = array[i].addresss;
    if (datasach[i].c == "best seller") {
        best.innerHTML +=  ` <div class="item">
        <div><img src=${datasach[i].address}></div>
        <p> ${datasach[i].name}</p>
    </div>`
    }
    if (datasach[i].l == "like") {
        love.innerHTML +=  ` <div class="item">
        <div><img src=${datasach[i].address}></div>
        <p> ${datasach[i].name}</p>
        
    </div>`
    }
}
// function (params) {
    
// }