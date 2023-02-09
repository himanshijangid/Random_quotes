function generateQuote() {

    var quotes = {
        "― Manoj Arora" : "“Your assets are your employees. Invest more on those performing well. Let the non-performers go.”",

        "— T. Harv Eker" :"“Rich people believe ‘I create my life.’ Poor people believe ‘Life happens to me.’”",

        "— Margaret Bonnano" : "“Being rich is having money; being wealthy is having time.”",

       " — David Bailey" : "“To get rich, you have to be making money while you’re asleep.”",

        "— Warren Buffett" : "“Risk comes from not knowing what you’re doing.”",

        "– Zig Ziglar" :"“Rich people have small TVs and big libraries, and poor people have small libraries and big TVs.”",

        " – Will Rogers" : "“Too many people spend money they earned..to buy things they don’t want..to impress people that they don’t like.”",

        "– Robert Kiyosaki" : "“It’s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.” ",

        "– Paul Samuelson" : "“Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.”",

        "– " : "“An investment in knowledge pays the best interest.”",

        "– Jim Rohn" : "“Time is more value than money. You can get more money, but you cannot get more time.”",
        
        "– Warren Buffett" : "“I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy.”",
        
        "– Benjamin Franklin" : "“Money never made a man happy yet, nor will it. The more a man has, the more he wants. Instead of filling a vacuum, it makes one.”",

        "– Samuel Butler" : "“Friendship is like money, easier made than kept.”" 
    }


    var authors = Object.keys(quotes);

     var author = authors[Math.floor(Math.random() * authors.length)];

     var quote = quotes[author];

     document.getElementById("quote").innerHTML= quote;

     document.getElementById("author").innerHTML= author;
}
     