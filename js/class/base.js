var base = (function () {
    var self = this; self.Name = "base";

    function initialize() {
        console.log(self.Name + ".initialize()");
        try {
            /* HACK: Forces the Bootstrap Modal to refresh on each load. */
            $('body').on('hidden.bs.modal', '.modal', function () {
                $(this).removeData('bs.modal');
            });
        }
        catch (err) {
            ex.log(err, self.Name + ".initialize()");
        }
    }

    function onDeviceReady() {
        initialize();
    }

    return { onDeviceReady: onDeviceReady };
}());

$(function () {
    document.addEventListener("deviceready", base.onDeviceReady(), false);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  NAME:   String.format()
//  SCOPE:      Global
//  DEFINE:     Modifies the String prototype adding String.format() functionality.
//  Example:    "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
              ? args[number]
              : match
            ;
        });
    };
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  NAME:       Number.format()
//  SCOPE:      Global
//  DEFINE:     Modifies the Number prototype adding Number.format() functionality.
//  Example:    100254.format(2, ".", ","); Output = 100,254.00
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Number.prototype.format = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d === undefined ? "." : d,
        t = t === undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

//////////////////////////////////////////////////////////////////////////////////////////////////
// NAME:    find()
// DEFINE:  Search all 'id's (or any other property), regardless of its depth in the object
// SCOPE:   Global
//////////////////////////////////////////////////////////////////////////////////////////////////
function find(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(find(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  NAME:   generateGUID()
//  SCOPE:  Global
//  DEFINE: GUID generator method in the format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function generateGUID() {
    var value = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    return value;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  NAME:   getCookie()
//  SCOPE:  Global
//  DEFINE: Get cookie by name
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value) {
    document.cookie = name + '=' + value + '; expires=Sat, 1 Jan 2050 00:00:00 UTC; path=/'
}
