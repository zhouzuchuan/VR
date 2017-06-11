/**
 * Created by admin on 2017/6/8.
 */
"use strict";


$(function() {
    var vr = new VR();

    var arr = [
        {
            name: '111',
            value: '11111111'
        },{
            name:'22222',
            value:'222222222222222222222'
        }
    ]

    vr.init([{
        name: {
            value: arr[0]
        }
    }])


    $(document).on('click','body', function() {
        vr.update('name',arr[1])
        vr.add('chuan',arr[0])
    })









})