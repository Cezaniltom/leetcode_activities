function phrase(lyrics) {
    const arrLyrics = ['a', 'e', 'i', 'o', 'u'];
    const res = lyrics.toLowerCase().split('');
    let count = 0;

    res.forEach(item => {
        if(arrLyrics.includes(item)) {
            count++
        };
    });
    return count;
}

console.log(phrase('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates autem et minima quia, porro nulla, eligendi optio ea voluptas quasi, odit inventore corporis magni nobis vero delectus. Facere, ullam.'))