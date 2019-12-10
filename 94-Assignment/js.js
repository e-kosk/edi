$.getJSON('plan.json', function (data) {

    var output = '<table>';
    output += '<tr><th>termin</th><th>godz</th><th>nauczyciel</th><th>przedmiot</th><th>sala</th></tr>';
    $.each(data, function (key, val) {
        if (val.kolokwium){
            output += '<tr class="red">';
        }else{
            output += '<tr>';
        }
        output += '<td>'+val.termin+'</td>' + '<td>'+val['od-godz']+' - '+val['do-godz']+'</td>' + '<td>'+val.nauczyciel['#text']+'</td>' + '<td class="subject" data-eng="'+val.eng+'">'+val.przedmiot+'</td>' + '<td>'+val.sala+'</td>';
        output += '</tr>';
        if (val.kolokwium){
            output += '<tr class="kolokwium-info hidden"><td colspan="5">'+val.kolokwium+'</td></tr>'
        }
    });
    output += '</table>';
    $('#plan').html(output);

    $('.red').each(function () {
        $(this).hover(function () {
            $(this).next().removeClass('hidden').addClass('visible')
        }, function () {
            $(this).next().removeClass('visible').addClass('hidden')
        })
    });

    $('td.subject').each(function () {
        let that = this;
        $(this).click(function () {
            $(this).text($(this).attr('data-eng'));
        })
    })

});
