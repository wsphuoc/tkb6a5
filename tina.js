let tnmonhoc=[
    {
        id: "toan",
        ten: "Toán",
        link: "https://meet.google.com/zwb-wuey-iwg"
    },
    {
        id: "shl",
        ten: "Sinh hoạt lớp",
        link: "https://meet.google.com/zwb-wuey-iwg"
    },
    {
        id: "van",
        ten: "Văn",
        link: "https://meet.google.com/rcq-rbyq-att"
    },
    {
        id: "gdcd",
        ten: "Giáo dục công dân",
        link: "https://meet.google.com/nqr-nstz-dhh"
    },
    {
        id: "khtn",
        ten: "Khoa học tự nhiên",
        link: "https://meet.google.com/zkd-fwgd-pfw"
    },
    {
        id: "anh",
        ten: "Tiếng Anh",
        link: "https://meet.google.com/bed-tgfa-het"
    },
    {
        id: "hdtn",
        ten: "Hoạt động trải nghiệm",
        link: "https://meet.google.com/exx-gvht-mfb"
    },
    {
        id: "congnghe",
        ten: "Công nghệ",
        link: "https://meet.google.com/ccz-cwur-grk"
    },
    {
        id: "theduc",
        ten: "Thể dục",
        link: "https://meet.google.com/bwd-ndwt-nvd"
    },
    {
        id: "mythuat",
        ten: "Mỹ thuật",
        link: "https://meet.google.com/vtb-jwbx-uhs"
    },
    {
        id: "nhac",
        ten: "Nhạc",
        link: "https://meet.google.com/qxu-jxpb-uho"
    },
    {
        id: "lsdp",
        ten: "Lịch sử địa phương",
        link: "https://meet.google.com/rcq-rbyq-att"
    },
    {
        id: "tinhoc",
        ten: "Tin học",
        link: "https://meet.google.com/wrj-bhwa-uij"
    },
    {
        id: "lichsu",
        ten: "Lịch sử",
        link: "https://meet.google.com/zgf-vdzf-gec"
    },
    {
        id: "dialy",
        ten: "Địa lý",
        link: "https://meet.google.com/uxj-vokt-sjk"
    }
];
let tntkb=[
    {
        thu: "2",
        buoi: "s",
        mon: ["toan","van","gdcd","khtn"]
    },
    {
        thu: "3",
        buoi: "s",
        mon: ["van","anh","hdtn"]
    },
    {
        thu: "4",
        buoi: "s",
        mon: ["congnghe", "theduc", "khtn", "toan"]
    },
    {
        thu: "5",
        buoi: "s",
        mon: ["mythuat", "nhac", "lsdp"]
    },
    {
        thu: "6",
        buoi: "s",
        mon: ["khtn", "anh", "tinhoc"]
    },
    {
        thu: "7",
        buoi: "s",
        mon: ["shl", "lichsu", "dialy", "toan"]
    }
];
function tntkbhtml(thu, buoi){
    let s="";
    for (let i=0; i<tntkb.length; i++){
        let tkb = tntkb[i];
        if(parseInt(tkb.thu)== thu && tkb.buoi==buoi){
            let monids = tkb.mon;
            for (let j=0; j<monids.length; j++){
                let monid=monids[j];
                for (let k=0; k<tnmonhoc.length; k++){
                    let monhoc = tnmonhoc[k];
                    if(monhoc.id==monid){
                        let linkarr = monhoc.link.split("/");
                        let nlinkarr = linkarr.length;
                        s += '<div>';
                        s += '<a class="nav-link" target="_blank" href="' + monhoc.link + '"' + '>';
                        s += monhoc.ten;
                        s += '</a>';
                        s += '</div>';
                        s += '<div class="tkb-break">' + linkarr[nlinkarr-1] + '</div>';
                        break;
                    }
                }
            }
            return s;
        }
    }
    return s;
}