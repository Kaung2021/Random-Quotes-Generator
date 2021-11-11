var quotes = [
     '\"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"',
     '\"The way to get started is to quit talking and begin doing. -Walt Disney"',
     "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
     '\"Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa"',
     '\"You will face many defeats in life, but never let yourself be defeated. -Maya Angelou"',
     '\"Dreaming, after all, is a form of planning. -Gloria Steinem"',
     '\""When everything seems to be going against you, remember that the airplane takes off against the wind, not with it." -Henry Ford"',
     '\"I have learned over the years that when one\'s mind is made up,this diminishes fear.-Rosa Parks"',
     '"I didn\'t fail the test. I just found 100 ways to do it wrong. -Benjamin Franklin"',
     '"I attribute my success to this: I never gave or took any excuse." -Florence Nightingale'

]
     //function to run the quotes
        function quotesgen(){
             var randomNumber = Math.floor(Math.random() * quotes.length);
             document.getElementById('quotes').innerHTML = quotes[randomNumber]
        }