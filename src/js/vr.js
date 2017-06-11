
// // insertA/tmplA
// var vr = new VR()
// vr.bind('a','b','c')
// vr.update('a', [1,2,3])
// vr.add('b', [1111])

;(function($,win, doc) {

    var selfList = {
        source: {}
    }

    var deal = {
        _init: function(name) {
            var i = 0,
                len = name.length;
            for (;i < len; i += 1) {
                for (var key in name[i]) {
                    selfList.source[key] = {
                        tmpl: 'tmpl' + key.slice(0,1).toUpperCase() + key.slice(1),
                        insert: '#insert' + key.slice(0,1).toUpperCase() + key.slice(1),
                        value: name[i][key].value
                    }
                }
            }
            console.log(selfList)
            this._render();
        },
        _update: function(name, value) {
            $(selfList.source[name].insert).html(template(selfList.source[name].tmpl, value));
            selfList.source[name].value = value;
        },
        _add: function(name, value) {
            selfList.source[name] = {
                tmpl: 'tmpl' + name.slice(0,1).toUpperCase() + name.slice(1),
                insert: '#insert' + name.slice(0,1).toUpperCase() + name.slice(1),
                value: value
            }
        },
        _remove: function(name) {
            selfList.source[name].value = '';
        },
        _remove: function(name) {
            delete selfList.source[name];
        },
        _render: function(name) {
            var source = selfList.source;
            if (name) {
                $(source[name].insert).html(template(source[name].tmpl, source[name].value));
            } else {
                for (var key in source) {
                    $(source[key].insert).html(template(source[key].tmpl, source[key].value));
                }
            }
        }
    }


    function VR() {}
    VR.prototype = {
        version: '0.0.1',
        init: function(name) {
            deal._init(name)
            return this;
        },
        update: function(name, value) {
            deal._update(name, value)
        },
        add: function(name, value) {
            deal._add(name, value)
            deal._update(name, value)
        },
        remove: function(name) {
            deal._update(name)
        },
        delete: function() {
            deal._delete(name)
        }
    }

    win.VR = VR

}(jQuery, window, document));