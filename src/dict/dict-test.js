class meow {
    constructor(options) {
        this.maxexample = 2;
        this.word = '';
    }
    
       async displayName() {
        return "אנגלית טכנית"
    }
        async findTerm(word) {
        let dict = {
            "jigsaw":"מסור אנכי,גקסון",
            "drill":"מקדחה",
            "slot bit":"חריץ"
        }
        this.word = word.toLowerCase();
        if(this.word in dict) {
            return dict[this.word];
        } else {
            return "המילה לא נמצאה במילון"
        }
    }

}