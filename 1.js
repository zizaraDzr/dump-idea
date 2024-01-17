var initialData = [{
    id: 1,
    name: 'Первый этап',
    start: '2018-01-20',
    end: '2018-01-24'
}, {
    id: 2,
    name: 'Второй этап',
    start: '2018-06-01',
    end: '2018-07-01'
}, {
    id: 3,
    name: 'Третий этап',
    start: '2018-03-20',
    end: '2018-04-12'
}];

var data = getData(initialData);
console.log(data);
console.log(initialData);

function getData (items) {
	var resultData = JSON.parse(JSON.stringify(items));
	resultData.forEach(data => {
        data['stages'] = [];
        var start = new Date(data.start);
        var end = new Date(data.end);

        // To calculate the time difference of two dates 
        var Difference_In_Time = end.getTime() - start.getTime(); 

        // To calculate the no. of days between two dates 
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

        for(var i = 0; i < Difference_In_Days; i++) {
            var curDate = new Date(start.setDate(start.getDate() + 1));
            data['stages'].push(curDate.toISOString().split('T')[0]);
        }
    });

    return resultData;
}