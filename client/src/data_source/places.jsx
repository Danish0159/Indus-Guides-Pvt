const places = [
    {
        id: 1,
        imgSrc: "https://www.discoverwalks.com/blog/wp-content/uploads/2022/07/badshahi_masjid_-_main_building.jpg",
        mapLink: "https://www.google.com/maps/place/Badshahi+Mosque/@31.5879709,74.3081387,17z/data=!4m14!1m7!3m6!1s0x39191c9dbf0ddeb1:0x13bfcdb10fb490de!2sBadshahi+Mosque!8m2!3d31.5879664!4d74.3107136!16s%2Fm%2F025td3k!3m5!1s0x39191c9dbf0ddeb1:0x13bfcdb10fb490de!8m2!3d31.5879664!4d74.3107136!16s%2Fm%2F025td3k",
        alternate:"Badshahi Mosque",
        placeName: "Badshahi Mosque",
        city: "Lahore",
        details:"The Badshahi Mosque is a Mughal-era congregational mosque in Lahore, capital of the Pakistani province of Punjab. The mosque is located west of Lahore Fort along the outskirts of the Walled City of Lahore, and is widely considered to be one of Lahore's most iconic landmarks. The Badshahi Mosque was built between 1671 and 1673 and by the Mughal emperor Aurangzeb"
    },
    {
        id: 2,
        imgSrc: "https://c1.wallpaperflare.com/preview/258/515/614/lahore-lahore-city-lhr-lahore-pakistan.jpg",
        mapLink: "https://www.google.com/maps/place/Minar-e-Pakistan/@31.5925148,74.3069101,17z/data=!3m1!4b1!4m6!3m5!1s0x39191c82d18c2ced:0x1aa4688a984fdde1!8m2!3d31.5925148!4d74.309485!16s%2Fg%2F11h38md34s",
        alternate:"Minar-e-pakistan",
        placeName: "Minar-e-pakistan",
        city: "Lahore",
        details:"Minar E Pakistan is a tower located in Lahore, Pakistan. The tower was built between 1960 and 1968 on the site where the All-India Muslim League passed the Lahore Resolution (which was later called the Pakistan Resolution) on 23 March 1940 - the first official call for a separate and independent homeland for the Muslims of British India, as espoused by the two-nation theory. The resolution eventually helped lead to the creation of Pakistan in 1947."
    },
    {
        id: 3,
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Entrance_of_Wazir_Khan_Mosque.jpg",
        mapLink: "https://www.google.com/maps/place/Masjid+Wazir+Khan/@31.5832802,74.3030151,14z/data=!4m6!3m5!1s0x39191b68076b3149:0x5c8d9d4d735a88e9!8m2!3d31.5832802!4d74.3236145!16zL20vMDM3YzEy",
        alternate:"Wazir Khan Mosque",
        placeName: "Wazir Khan Mosque",
        city: "Lahore",
        details:"The Wazir Khan Mosque is a 17th-century mosque located in the city of Lahore, capital of the Pakistani province of Punjab. The mosque was commissioned during the reign of the Mughal Emperor Shah Jahan as a part of an ensemble of buildings that also included the nearby Shahi Hammam baths. Construction of Wazir Khan Mosque began in 1634 C.E., and was completed in 1641. It is on the UNESCO World Heritage Tentative List."
    },
    {
        id: 4,
        imgSrc: "https://www.wallpapertip.com/wmimgs/20-209779_badshahi-mosque-lahore-lahore-fort.jpg",
        mapLink: "https://www.google.com/maps/place/Lahore+Fort/@31.5881995,74.3128485,17z/data=!3m1!4b1!4m6!3m5!1s0x39191b622e82346f:0x35bdc71e324cb4ec!8m2!3d31.5881995!4d74.3154234!16zL20vMDJtMzBo",
        alternate:"Lahore Fort",
        placeName: "Lahore Fort",
        city: "Lahore",
        details:"The Lahore Fort is a citadel in the city of Lahore, Pakistan. The fortress is located at the northern end of walled city Lahore, and spreads over an area greater than 20 hectares. It contains 21 notable monuments, some of which date to the era of Emperor Akbar. The Lahore Fort is notable for having been almost entirely rebuilt in the 17th century, when the Mughal Empire was at the height of its splendour and opulence."
    },
    {
        id: 5,
        imgSrc: "https://e0.pxfuel.com/wallpapers/255/15/desktop-wallpaper-lahore-museum-lahore.jpg",
        mapLink: "https://www.google.com/maps/place/Lahore+Museum/@31.568387,74.305522,17z/data=!3m1!4b1!4m6!3m5!1s0x39191ca8f5a906f1:0xc5dad8adc056fa92!8m2!3d31.568387!4d74.3080969!16zL20vMDdmaHJo",
        alternate:"Lahore Museum",
        placeName: "Lahore Museum",
        city: "Lahore",
        details:"The Lahore Museum is a museum located in Lahore, Pakistan. Founded in 1865 at a smaller location and opened in 1894[1] at its current location on The Mall in Lahore during the British colonial period, Lahore Museum is Pakistan's largest museum, as well as one of its most visited ones. The museum houses an extensive collection of Buddhist art from the ancient Indo-Greek and Gandhara kingdoms."
    },
    {
        id: 6,
        imgSrc: "https://www.thehistoryhub.com/wp-content/uploads/2016/07/Shalimar-Garden.jpg",
        mapLink: "https://www.google.com/maps/place/Shalamar+Garden/@31.5843201,74.3802053,17z/data=!3m1!4b1!4m6!3m5!1s0x39191be37671dcbf:0x786a0e2a0b53d6ef!8m2!3d31.5843201!4d74.3827802!16zL20vMDM0Z2o4",
        alternate:"Shalimar Gardens",
        placeName: "Shalimar Gardens",
        city: "Lahore",
        details:"The Shalamar Gardens are a Mughal garden complex located in Lahore, Pakistan. The gardens date from the period when the Mughal Empire was at its artistic and aesthetic zenith, and are now one of Pakistan's most popular tourist destinations.The Shalimar Gardens were laid out as a Persian paradise garden intended to create a representation of an earthly utopia in which humans co-exist in perfect harmony with all elements of nature."
    },
    {
        id: 7,
        imgSrc: "https://e0.pxfuel.com/wallpapers/947/419/desktop-wallpaper-pakistan-beautiful-places-beauty-in-pakistan.jpg",
        mapLink: "https://www.google.com/maps/place/Shah+Faisal+Masjid/@33.7295198,73.0345787,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbefce01e6917:0x3e66e0de3e2598c0!8m2!3d33.7295198!4d73.0371536!16zL20vMDI0OHk1",
        alternate:"Faisal Mosque",
        placeName: "Faisal Mosque",
        city: "Islamabad",
        details:"The Faisal Mosque is the national mosque of Pakistan, located in capital Islamabad. It is the fifth-largest mosque in the world and the largest within South Asia, located on the foothills of Margalla Hills in Pakistan's capital city of Islamabad. It is named after the late King Faisal of Saudi Arabia. The mosque features a contemporary design consisting of eight sides of concrete shell and is inspired by the design of a typical Bedouin tent."
    },
    {
        id: 8,
        imgSrc: "https://media.istockphoto.com/id/535695503/photo/pakistan-monument-islamabad.jpg?s=612x612&w=0&k=20&c=bNqjdf8L-5igcRB89DdMgx0kNOmyeo1J_zzXmoxxl8w=",
        mapLink: "https://www.google.com/maps/place/Pakistan+Monument/@33.6930721,73.0663292,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbfe8eb6fcb0d:0x8b69f5187f009ac1!8m2!3d33.6930721!4d73.0689041!16s%2Fm%2F02rb63p",
        alternate:"Pakistan Monument",
        placeName: "Pakistan Monument",
        city: "Islamabad",
        details:"The Pakistan Monument is a national monument and heritage museum located on the western Shakarparian Hills in Islamabad, Pakistan. The monument was constructed to symbolize the unity of the Pakistani people. The four large petals represent each of the four main cultures of Pakistan, the Punjabi, the Baloch, the Sindhi and the Pakhtun. The three smaller petals represent: the minorities, Azad Kashmir and Gilgit-Baltistan."
    },
    {
        id: 9,
        imgSrc: "https://e1.pxfuel.com/desktop-wallpaper/463/283/desktop-wallpaper-new-shared-daman-e-koh-islamabad-islamabad.jpg",
        mapLink: "https://www.google.com/maps/place/Daman-e-Koh/@33.73829,73.0539481,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbf16d96fc917:0xf73e570c5d7bf4ae!8m2!3d33.73829!4d73.056523!16zL20vMGZjbTNy",
        alternate:"Daman-e-Koh",
        placeName: "Daman-e-Koh",
        city: "Islamabad",
        details:"Daman-e-Koh is a viewing point and hill top garden north of Islamabad and located in the middle of the Margalla Hills. Its name is a conjunction of two Persian words, which together means foot hills. It is about 2400 ft from sea level and almost 500 ft from the city of Islamabad. It is a popular destination for the residents as well as the visitors to the capital."
    },
    {
        id: 10,
        imgSrc: "https://www.dostpakistan.pk/wp-content/uploads/2012/11/lokvirsa1.jpg",
        mapLink: "https://www.google.com/maps/search/+Lok+Virsa+Museum/@33.6887198,73.030987,13z",
        alternate:"Lok Virsa Museum",
        placeName: "Lok Virsa Museum",
        city: "Islamabad",
        details:"Heritage Museum also known as Lok Virsa Museum is a museum administered and managed by Lok Virsa - National Institute of Folk & Traditional Heritage. It is a museum of history and culture in Islamabad, Pakistan, located on the Shakarparian Hills showcasing the living cultures of Pakistan.The museum opened in 1974 and became an autonomous institute in 2002 following the Lok Virsa Legal Status Ordinance, 2002."
    },
    {
        id: 11,
        imgSrc: "https://i.pinimg.com/originals/cb/c9/bc/cbc9bc32e82a30e3d0b01ec919838f79.jpg",
        mapLink: "https://www.google.com/maps/place/Shahdara+Valley+Restaurant/@33.7782779,73.0048222,11z/data=!4m6!3m5!1s0x38dfc15205dfa303:0xe618ae1d2218f1ef!8m2!3d33.7782779!4d73.1696171!16s%2Fg%2F11ckncjrk1",
        alternate:"Shahdara Valley",
        placeName: "Shahdara Valley",
        city: "Islamabad",
        details:"Shahdara Village is a village situated in the suburbs of Margalla Hills in Islamabad, Pakistan. It is located 7 km from Barakhao, 10 km away from Aiwan-e-Sadr (the official residence of the President of Pakistan), and 15 km from Faizabad Islamabad. Shahdara Village is also located near Quaid-e-Azam University.The climate of Shahdara is similar to Islamabad."
    },
    {
        id: 12,
        imgSrc: "https://th-thumbnailer.cdn-si-edu.com/cs0YVDIrhGPWHYYH6TbRMeeZGLQ=/fit-in/1072x0/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/38327513202637e9d6659668c938234505e62a51.JPG",
        mapLink: "https://www.google.com/maps/place/Mohatta+Palace+Museum/@24.814321,67.0301058,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33da5119982f9:0xc10bd6083f6ed6b2!8m2!3d24.814321!4d67.0326807!16zL20vMGJxa3Nz",
        alternate:"Mohatta Palace",
        placeName: "Mohatta Palace",
        city: "Karachi",
        details:"The Mohatta Palace is a museum located in Karachi, Sindh, Pakistan. Designed by Muhammad komail Hussain, the palace was built in 1927 in the posh seaside locale of Clifton as the summer home of Shivratan Mohatta, a Hindu Marwari businessman from what is now the modern-day Indian state of Rajasthan. The palace was built in the tradition of stone palaces of Rajasthan, using pink Jodhpur stone in combination with the local yellow stone from nearby Gizri."
    },
    {
        id: 13,
        imgSrc: "https://e0.pxfuel.com/wallpapers/431/132/desktop-wallpaper-karachi-14-august-2017-mazar-e-quaid.jpg",
        mapLink: "https://www.google.com/maps/place/Mazar-e-Quaid/@24.8746236,67.0369722,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e5e736977c1:0x70ed36c8a6891d3a!8m2!3d24.8746236!4d67.0395471!16zL20vMGI1azUz",
        alternate:"Mazar-e-Quaid",
        placeName: "Mazar-e-Quaid",
        city: "Karachi",
        details:"Mazar-e-Quaid also known as Jinnah Mausoleum or the National Mausoleum, is the final resting place of Muhammad Ali Jinnah, the founder of Pakistan. Designed in a 1960s modernist style, it was completed in 1971, and is an iconic symbol of Karachi as well as one of the most popular tourist sites in the city.[1] The mausoleum complex also contains the tomb of Jinnah's sister, Māder-e Millat Fatima Jinnah, as well as those of Liaquat Ali Khan and Nurul Amin, the first and eighth Prime Ministers of Pakistan respectively."
    },
    {
        id: 14,
        imgSrc: "https://wallpapers.com/images/high/karachi-pakistan-national-museum-vrey4l501tvnwkw8.webp",
        mapLink: "https://www.google.com/maps/place/National+Museum+Of+Pakistan/@24.8528561,67.0153701,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e0bf23fd65b:0xb242a7f5486accb2!8m2!3d24.8528561!4d67.017945!16zL20vMGg2azh6?entry=ttu",
        alternate:"National Museum of Pakistan",
        placeName: "National Museum of Pakistan",
        city: "Karachi",
        details:"The National Museum of Pakistan is located in Karachi, Pakistan. The National Museum of Pakistan was established in Frere Hall in 1951, replacing the defunct Victoria Museum. Once the museum was inaugurated the government of Pakistan deemed it wise to constitute an Advisory Council in 1950 with a primary duty to counsel the museum on the issues of enriching its collection through new acquisitions and purchase of antiquities and works of arts."
    },
    {
        id: 15,
        imgSrc: "https://res.cloudinary.com/raastay/images/f_auto,q_auto/v1626423294/Multan-Fort_612829836/Multan-Fort_612829836.jpg?_i=AA",
        mapLink: "https://www.google.com/maps/place/Tomb+of+Hazrat+Shah+Rukn-e-Alam/@30.1991273,71.4691621,17z/data=!3m1!4b1!4m6!3m5!1s0x393b33fea7d1cc09:0x37a1710776c8a032!8m2!3d30.1991273!4d71.471737!16s%2Fm%2F0zg6x70?entry=ttu",
        alternate:"Tomb of Shah Rukn-e-Alam",
        placeName: "Tomb of Shah Rukn-e-Alam",
        city: "Multan",
        details:"The Tomb of Shah Rukn-e-Alam located in Multan, Pakistan, is the mausoleum of the 14th century Punjabi Sufi saint Sheikh Rukn-ud-Din Abul Fateh. The shrine is considered to be the earliest example of Tughluq architecture, and is one of the most impressive shrines in Asia. The shrine attracts over 100,000 pilgrims to the annual urs festival that commemorates his death."
    },
    {
        id: 16,
        imgSrc: "https://res.cloudinary.com/raastay/images/f_auto,q_auto/v1626423292/Patrick-Alexander-Vans-Agnew-Monumentorientalarchitecture.com_/Patrick-Alexander-Vans-Agnew-Monumentorientalarchitecture.com_.jpg?_i=AA",
        mapLink: "https://www.google.com/maps/place/Monument+of+Van+Alexander+Agnew/@30.198679,71.4722416,17z/data=!3m1!4b1!4m6!3m5!1s0x393b33ef18da7087:0x8ca59df8172cd955!8m2!3d30.198679!4d71.4748165!16s%2Fg%2F11rjzkrw86?entry=ttu",
        alternate:"Patrick Alexander Vans Agnew Monument",
        placeName: "Patrick Alexander Vans Agnew Monument",
        city: "Multan",
        details:"In the centre of Multan near Ibn-e-Qasim Bagh, which has found within Fort Khona, you will find a huge tower named Patrick Alexander Vans Agnew. This considers the iconic landmark where it marks the foundation of the Sikh Evolution.It is a memorial to a British civil servant called Patrick Alexander who has murdered by the retainers of Dewan Mulraj."
    },
    {
        id: 17,
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Nishan-E-Manzil_Gujranwala_20140925.jpg/800px-Nishan-E-Manzil_Gujranwala_20140925.jpg?20140925104044",
        mapLink: "https://www.google.com/maps/place/Nishan-e-Manzil+Rd,+Rahwali+Cantonment,+Gujranwala,+Punjab,+Pakistan/@32.246285,74.1119868,17z/data=!3m1!4b1!4m6!3m5!1s0x391f25f834f526b1:0x5e2089d036d6e56c!8m2!3d32.246285!4d74.1145617!16s%2Fg%2F1wt3lswh?entry=ttu",
        alternate:"Nishan-E-Manzil",
        placeName: "Nishan-E-Manzil",
        city: "Gujranwala",
        details:"Nishan Manzil is basically situated in Gujranwala Garrison which is military cantonment almost 15 miles from the city. And it is in real the most cleanist Place in this industrial city. Their is a very good restaurant and a small Zoo. Across the road is a very good Jogging track and small gym. You won't miss this place once you ll enter the Garrison."
    },
    {
        id: 18,
        imgSrc: "https://live.staticflickr.com/386/19827438349_23d65f6d70_b.jpg",
        mapLink: "https://www.google.com/maps/place/Sharanwala+baradari/@32.1558655,74.1859998,17z/data=!3m1!4b1!4m6!3m5!1s0x391f2b38293a519d:0x820f2194f9bf13f9!8m2!3d32.1558655!4d74.1885747!16s%2Fg%2F11j3w6gp11?entry=ttu",
        alternate:"Sheranwala Bagh Baradari",
        placeName: "Sheranwala Bagh Baradari",
        city: "Gujranwala",
        details:"Sheranwala Bagh Baradari (built 1788, damaged or destroyed 1992, rebuilt 2012 onward) The Sheranwala Bagh Baradari is a garden pavilion reportedly built by Mahan Singh, the father of the famous Maharaja Ranjit Singh. It is a classic baradari, which literally means '12 doors' in reference to the three open bays on each side of the structure. Some sources suggest it was built in 1788 at the behest of Sardar Mahan Singh, but it may have been constructed concurrently with the Mahan Singh Samadhi (tomb) in the 1830s."
    },
    {
        id: 19,
        imgSrc: "https://thecityjournal.net/wp-content/uploads/2017/05/mosque.jpg",
        mapLink: "https://www.google.com/maps/place/Masjid+Mahabat+Khan/@34.010615,71.5706304,17z/data=!3m1!4b1!4m6!3m5!1s0x38d93d62bd2030c7:0x3fcdfb776487cdf6!8m2!3d34.010615!4d71.5732053!16zL20vMGR5aDQ5?entry=ttu",
        alternate:"Mahabat Khan Mosque",
        placeName: "Mahabat Khan Mosque",
        city: "Peshawar",
        details:"The Mahabat Khan Mosque, sometimes spelt Mohabbat Khan Mosque, is a 17th-century Mughal-era mosque in Peshawar, Pakistan. The mosque was built in 1630, and named after the Mughal governor of Peshawar, Nawab Mohabat Khan Kamboh, father of Nawab Khairandesh Khan Kamboh. The mosque's white marble façade is considered to be one of Peshawar's most iconic sights."
    },
    {
        id: 20,
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/44/Bala_Hisar_Fort.jpg",
        mapLink: "https://www.google.com/maps/place/Bala+Hisar+Fort,+Hashtnagri,+Peshawar,+Khyber+Pakhtunkhwa,+Pakistan/@34.013002,71.567224,17z/data=!3m1!4b1!4m6!3m5!1s0x38d917d7a1b36261:0xd874aa3a461a0e9f!8m2!3d34.013002!4d71.5697989!16zL20vMGM0Ymc2?entry=ttu",
        alternate:"Bala Hissar",
        placeName: "Bala Hissar",
        city: "Peshawar",
        details:"Bala Hissar, also spelt Bala Hisar, is a historic fortress located in Peshawar, Khyber Pakhtunkhwa, Pakistan. First mentioned by 7th-century explorer Xuanzang, the fort was used as a royal residence for the Durrani Empire since 1747, when the Afghan king, Ahmad Shah Durrani, conquered Peshawar. The Marathas briefly occupied it after capturing Peshawar in 1758 but it was soon retaken by the Afghans. The Sikhs destroyed and reconstructed the fort after capturing Peshawar in March 1823."
    },
    {
        id: 21,
        imgSrc: "https://i.pinimg.com/736x/b0/e1/72/b0e1727026dd56d11658af2d1a6044d1.jpg",
        mapLink: "https://www.google.com/maps/place/Peshawar+Museum/@34.0078293,71.5556315,17z/data=!3m1!4b1!4m6!3m5!1s0x38d917c511c42029:0xa6ccb5fb8034969f!8m2!3d34.0078293!4d71.5582064!16zL20vMGQxOGd0?entry=ttu",
        alternate:"Peshawar Museum",
        placeName: "Peshawar Museum",
        city: "Peshawar",
        details:"The Peshawar Museum (Urdu: پشاور میوزیم(colloquial); پشاور عجائب گھر (official)) is a museum located in Peshawar, capital of Pakistan's Khyber Pakhtunkhwa province. The Peshawar Museum is notable for its collection of Buddhist artwork dating from the ancient Gandhara region.The Peshawar Museum was founded in 1907 as 'Victoria Hall', in memory of Queen Victoria."
    },
    {
        id: 22,
        imgSrc: "https://thumbs.dreamstime.com/b/bab-e-khyber-gate-was-built-mouth-fabled-pass-where-jamrud-fort-also-located-60322582.jpg",
        mapLink: "https://www.google.com/maps/place/Baab+e+Khyber,+Torkham+Hwy,+Jamrud,+Khyber+Pakhtunkhwa,+Pakistan/@34.0024033,71.3775493,17z/data=!3m1!4b1!4m6!3m5!1s0x38d90e28644bff3f:0xf3426115e019e797!8m2!3d34.0024033!4d71.3801242!16s%2Fm%2F010qql48?entry=ttu",
        alternate:"Bab-e-Khyber",
        placeName: "Bab-e-Khyber",
        city: "Peshawar",
        details:"The Bab-e-Khyber is a monument situated at the entrance of the Khyber Pass in the Khyber Pakhtunkhwa province of Pakistan. The gate is located immediately west of Peshawar, with the historic Jamrud Fort lying adjacent to it.The gate was built in 1963 by the military government of Ayub Khan. Khyber Gate is considered to be the most famous post-independence structure in Khyber Agency."
    },
    {
        id: 23,
        imgSrc: "https://live.staticflickr.com/107/272108868_82965639e3_c.jpg",
        mapLink: "https://www.google.com/maps/place/Hanna+Lake/@30.2554226,67.0960432,16z/data=!3m1!4b1!4m6!3m5!1s0x3ed2d8b19bd6242f:0xb9c4bcd77e898859!8m2!3d30.255825!4d67.0985881!16zL20vMGNxeHhq?entry=ttu",
        alternate:"Hanna Lake",
        placeName: "Hanna Lake",
        city: "Quetta",
        details:"Hanna Lake is a lake in Urak Valley near Quetta, in Balochistan Province, in southwestern Pakistan. It is surrounded by mountains.Hanna Lake is in the hills close to where the Urak Valley begins, 17 kilometres east from Quetta city. The reservoir was constructed in 1894 during the British Colonial era on the land of local tribesmen, and is one of the main attractions in the city. It forms a great historical bridge wall between two mountains, the depths like battlements of a fort, for the storing of water."
    },
    {
        id: 24,
        imgSrc: "https://www.youlinmagazine.com/articles/1554.jpg",
        mapLink: "https://www.google.com/maps/place/QUAID-I-AZAM+RESIDENCY,+ZIARAT/@30.3788827,62.8481178,7z/data=!4m10!1m2!2m1!1sQuaid-e-Azam+Residency!3m6!1s0x392d20764eef8369:0x1bcd25b95a77614!8m2!3d30.3788827!4d67.7260475!15sChZRdWFpZC1lLUF6YW0gUmVzaWRlbmN5kgENaGlzdG9yaWNfc2l0ZeABAA!16s%2Fm%2F05pdgkb?entry=ttu",
        alternate:"Quaid-e-Azam Residency",
        placeName: "Quaid-e-Azam Residency",
        city: "Quetta",
        details:"Quaid-e-Azam Residency, also known as Ziarat Residency, is located in Ziarat, Balochistan, Pakistan. It is where Muhammad Ali Jinnah spent the last two months and ten days of his life, nursed by A. S. Nathaniel. It is the most famous landmark of the city, constructed in 1892 during the British Raj. The building is a wooden structure, originally designed as a sanatorium before being converted into the summer residence of the agent of the Governor General"
    },
    {
        id: 25,
        imgSrc: "https://www.trendinginsocial.com/wp-content/uploads/2023/03/Hanna-Urak-Valley-Balochistan-598x330.jpg",
        mapLink: "https://www.google.com/maps/search/Urak+Valley/@30.2755972,67.1821123,15z/data=!3m1!4b1?entry=ttu",
        alternate:"Urak Valley",
        placeName: "Urak Valley",
        city: "Quetta",
        details:"Urak Valley, also known as the Hanna Urak Valley, is a valley surrounded by mountains in the Quetta District of Balochistan Province, in western Pakistan. It is located near Hana Lake, and 28 kilometres from Quetta city. A small waterfall at its end marks entrance to the adjacent Wali Tangi Dam.Urak Valley has a population of 24000, and is the ancestral home of the Kakar tribe of Pashtuns.Agriculture in the valley includes growing apple trees of good quality and a few other fruits."
    },
    {
        id: 26,
        imgSrc: "https://i.pinimg.com/originals/1b/ca/63/1bca63e04f5a7383917503b6aab0e213.jpg",
        mapLink: "https://www.google.com/maps/place/Koh-i-Murdar/@30.4771954,66.7849244,10z/data=!4m10!1m2!2m1!1sKoh-i-Murdar!3m6!1s0x3ed2de91172eea39:0x381fe483da3814d9!8m2!3d30.1886111!4d67.0625!15sCgxLb2gtaS1NdXJkYXKSAQRwZWFr4AEA!16s%2Fg%2F1tg5sjqz?entry=ttu",
        alternate:"Koh-i-Murdar",
        placeName: "Koh-i-Murdar",
        city: "Quetta",
        details:"Koh-e-Mehardar is a peak located in the mountain range of the Sulaiman Mountains System, located in the East of Quetta District, in western Pakistan.The highest peak of Koh-e-Mehardar mountain range is at one of the 'Chahr Shakh' peaks, 3,184 metres (10,446 ft). It is the fourth highest peak in Quetta District and sixth highest peak of Balochistan."
    }
];

export default places;