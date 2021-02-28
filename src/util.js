import { v4 as uuidv4 } from 'uuid'
const chillHop = () => {
    return [
        {
            id: uuidv4(),
            name: `Jazz Cabbage`,
            artist: `Ian Ewing, Strehlow`,
            colors: ['#A84A4A', '#DAA691'],
            song: 'https://mp3.chillhop.com/serve.php/?mp3=9363',
            coverPicture: 'https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg',
            active: true
        },
        {
            id: uuidv4(),
            name: `Momentary Loss`,
            artist: `Aarigod`,
            colors: ['#A4BE65', '#19220D'],
            song: `https://mp3.chillhop.com/serve.php/?mp3=13009`,
            coverPicture: `https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg`,
            active: false
        },
        {
            id: uuidv4(),
            name: `Home Court`,
            artist: `Blue Wednesday, Shopan`,
            colors: ['#B9A7D9', '#7D5E87'],
            song: `https://mp3.chillhop.com/serve.php/?mp3=11233`,
            coverPicture: `https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg`,
            active: false
        },
        {
            id: uuidv4(),
            name: `Maple Leaf Pt.2`,
            artist: `Philanthrope`,
            colors: ['#8C332F', '#92574A'],
            song: `https://mp3.chillhop.com/serve.php/?mp3=10243`,
            coverPicture: `https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg`,
            active: false
        },
    ]
}

export default chillHop