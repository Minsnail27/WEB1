var Body = {
    setColor : function(color) {
        $('body').css('color',color);
    },
    setBackgroundColor : function(color) {
        $('body').css('backgroundColor',color);
    }
}

var Link = {
    setColor : function(color) {
        $('a').css('color',color);
    }
}

function nightDayHandler(self) {
    if (self.value === 'night') {
        Body.setColor('white');
        Body.setBackgroundColor('black');

        Link.setColor('powderblue');

        self.value = 'day'
    }
    else {
        Body.setColor('black');
        Body.setBackgroundColor('white');

        Link.setColor('blue');

        self.value = 'night'
    }
}