// All images are AWS-hosted

const QUESTIONS = [
    {
        question: "What is the capital city of Scotland?",
        options: ["London", "Edinburgh", "Glasgow", "Loch Ness"],
        correctAnswerIndex: 1,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/scotland.jpg" ,
        imageAlt: "The Scottish capital",
        id: cuid()
    },
    {
        question: "In which city could you find the famous landmark Christ the Redeemer?",
        options: ["Rio de Janeiro", "Caracas", "Mexico City", "Bogota"],
        correctAnswerIndex: 0,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/christ.jpg",
        imageAlt: "Christ the Redeemer",
        id: cuid()
    },
    {
        question: "Patagonia is a geographical region shared by Argentina and which other south American country?",
        options: ["Peru", "Uruguay", "Chile", "Brazil"],
        correctAnswerIndex: 2,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/patagonia.jpeg",
        imageAlt: "Mountain range in Patagonia",
        id: cuid()
    },
    {
        question: "Tenzing-Hillary airport, rated by pilots as one of the most dangerous in the world, can be found in which country?",
        options: ["Colombia","Belize","Iceland","Nepal"],
        correctAnswerIndex: 3,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/airport.jpg",
        imageAlt: "A runway at Tenzing-Hillary airport",
        id: cuid()
    },
    {
        question: "The colourful Chichicastenango market can be found in which country?",
        options: ["Guatemala", "Morocco", "Japan", "Uzbekistan"],
        correctAnswerIndex: 0,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/market.jpg",
        imageAlt: "Bright and colourful masks at Chichicastenango market",
        id: cuid()
    },
    {
        question: "In terms of the geographical size, what is the largest US state?",
        options: ["Rhode Island","Alaska","California","Texas"],
        correctAnswerIndex: 1,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/usa.jpg",
        imageAlt: "US flags blowing in the wind",
        id: cuid()
    },
    {
        question: "The famous blue city, Chefchaouen, can be found in which country?",
        options: ["Greece","Croatia","Morocco","France"],
        correctAnswerIndex: 2,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/blue.jpg",
        imageAlt: "Blue steps in the heart of Chefchaouen city",
        id: cuid()
    },
    {
        question: "How many official languages are spoken in Switzerland?",
        options: ["1","2","3","4"],
        correctAnswerIndex: 3,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/switzerland.png",
        imageAlt: "Swiss flag blowing in the wind in front of mountains",
        id: cuid()
    },
    {
        question: "What is the capital of Australia?",
        options: ["Canberra","Sydney","Melbourne","Adelaide"],
        correctAnswerIndex: 0,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/kangaroo.jpeg",
        imageAlt: "Kangaroo looking at the cameras",
        id: cuid()
    },
    {
        question: "What is the capital of Finland?",
        options: ["Oulu","Helsinki","Lapland","Tampere"],
        correctAnswerIndex: 1,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/finland.jpg",
        imageAlt: "Waterfront of the Finnish capital at sunset",
        id: cuid()
    },
    {
        question: "Which French city has the nickname 'The Pink City' thanks to its blushing pink-brick buildings?",
        options: ["Paris","Marseille","Toulouse","Bordeaux"],
        correctAnswerIndex: 2,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/pinkcity.jpg",
        imageAlt: "Sunset in the 'Pink City'",
        id: cuid()
    },
    {
        question: "The ancient city of Constantinople is now known by what name?",
        options: ["Jordan","Moscow","Dubai","Istanbul"],
        correctAnswerIndex: 3,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/constantinople.jpg",
        imageAlt: "View over the modern-day Constantinople",
        id: cuid()
    },
    {
        question: "South Africa land locks which country?",
        options: ["Lesotho","Namibia","Ethiopia","Ghana"],
        correctAnswerIndex: 0,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/southafrica.jpg",
        imageAlt: "An elephant and her two babies walk across a plain",
        id: cuid()
    },
    {
        question: "New Zealand has the highest sheep to person ratio in the world, with how many sheep per one person?",
        options: ["3","6","9","12"],
        correctAnswerIndex: 2,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/sheep.jpeg",
        imageAlt: "Herd of sheep in New Zealand",
        id: cuid()
    },
    {
        question: "How many writing systems does Japan have?",
        options: ["1","2","3","4"],
        correctAnswerIndex: 2,
        imageSrc: "https://travel-quiz.s3-us-west-1.amazonaws.com/questionImages/japanese.jpeg",
        imageAlt: "Japanese writing on paper",
        id: cuid()
    }
];