const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);
const playlist = $('.playlist');

const app = {
    songs: [
        {
            name: "I'm The One",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song1.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Tic Toe",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song2.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Austin Mahone",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song3.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Baby",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song4.mp3',
            image: '..assets/img/image.png'
        },
        {
            name: "No Reason",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song5.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Number One",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song6.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Cheating On You",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song7.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Double Take",
            singer: "Lưu Huy Quân",
            path: '..assets/music/song8.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Pano",
            singer: "Lưu Huy Quân",
            path: '..assets/music/song9.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Shoti LDR",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song10.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Cupid",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song11.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Nothin' On You",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song12.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Treasure DaDaRi",
            singer: "Lưu Huy Quân",
            path: '..assets/music/song13.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Mây Lang Thang",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song14.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Như Anh Mơ",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song25.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Thiên Thần Tình Yêu",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song16.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "10 Ngàn Năm",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song17.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Từ Ngày Em Đến",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song18.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Giấu Trời Mang Đi",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song19.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Chuyện Đôi Ta",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song20.mp3',
            image: '.assets/img/ìno.png'
        },
        {
            name: "Đã Lỡ Yêu Em Rồi",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song21.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Tình Yêu Chậm Trễ",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song22.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Muộn Rồi Mà Sao Còn",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song23.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Như Anh Đã Thấy Em",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song24.mp3',
            image: '.assets/img/image.png'
        },
        {
            name: "Em Có Nhớ Anh Không",
            singer: "Lưu Huy Quân",
            path: '.assets/music/song25.mp3',
            image: '.assets/img/image.png'
        },
    ],
    render: function () {
        const htmls = this.songs.map(song => {
            console.log(song.path)
            return `
            <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                <i class="fas fa-ellipsis-h"></i>
                </div>
                </div>
                `;
            });
            playlist.innerHTML = htmls.join('')
    },
    start: function () {
        this.render();
    }
};

app.start();