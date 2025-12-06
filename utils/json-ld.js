// biome-ignore format: json-ld expected to be raw JSON objects.

const jsonLdObjects = [
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Qi Smile",
        "url": "https://www.qismile.com",
        "sameAs": [
            "https://www.youtube.com/@qismile",
            "https://www.pinterest.com/qismilehealingarts/"
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Shibashi (Taiji Qi-Gong) Demonstration with 128 Hz Soundscapes",
        "description": "Qi Smile qi-gong teacher Deniz demonstrating the full sequence of the famous qi-gong form Shibashi.",
        "thumbnailUrl": "https://i.ytimg.com/vi/_wKfqRayEyA/mqdefault.jpg",
        "uploadDate": "2024-08-18T00:00:00:00Z",
        "embedUrl": "https://www.youtube.com/embed/_wKfqRayEyA",
        "url": "https://www.youtube.com/watch?v=_wKfqRayEyA"
    },
    {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Qì-Gong Lesson: Essentials of Tàijí Qì-Gong (Shibashi)",
        "description": "Qi Smile qi-gong teacher Deniz teaching essentials skills to learn the famous qi-gong form Shibashi.",
        "thumbnailUrl": "https://i.ytimg.com/vi/_BNJsBJVULo/mqdefault.jpg",
        "uploadDate": "2021-04-21T00:00:00:00Z",
        "embedUrl": "https://www.youtube.com/embed/_BNJsBJVULo",
        "url": "https://www.youtube.com/watch?v=_BNJsBJVULo"
    },
    {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "1 Hour Meditation Soundscape @ 128 Hz",
        "description": "Qi Smile meditative soundscape music to relax and focus your mind.",
        "thumbnailUrl": "https://i.ytimg.com/vi/xEC416vquQc/mqdefault.jpg",
        "uploadDate": "2024-06-24T00:00:00:00Z",
        "embedUrl": "https://www.youtube.com/embed/xEC416vquQc",
        "url": "https://www.youtube.com/watch?v=xEC416vquQc",
        "genre": "Meditative music",
        "byArtist": {
            "@type": "MusicGroup",
            "name": "Qi Smile"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "1 Hour Meditation Music for Qi Gong, Yoga also for Study or Creative Work",
        "description": "Qi Smile meditative soundscape music to relax and focus your mind.",
        "thumbnailUrl": "https://i.ytimg.com/vi/STTzy2JO2Jk/mqdefault.jpg",
        "uploadDate": "2020-03-03T00:00:00:00Z",
        "embedUrl": "https://www.youtube.com/embed/STTzy2JO2Jk",
        "url": "https://www.youtube.com/watch?v=STTzy2JO2Jk",
        "genre": "Meditative music",
        "byArtist": {
            "@type": "MusicGroup",
            "name": "Qi Smile"
        }
    }
]

// console.log(jsonLdObjects)

jsonLdObjects.forEach((obj) => {
	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.textContent = JSON.stringify(obj);
	document.head.append(script);
});
