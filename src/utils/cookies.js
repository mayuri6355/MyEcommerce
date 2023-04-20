const Cookie = {
    save: function(cname, cvalue, attributes) {
        let exdays = 365;
        let path = '/';

        if (attributes.days) {
            exdays = parseInt(attributes.days);
        }
        if (attributes.path) {
            path = attributes.path;
        }

        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = 'expires=' + d.toUTCString();
        document.cookie =
            cname +
            '=' +
            cvalue +
            '; domain=.' +
            process.env.MIX_REACT_APP_ROOT_DOMAIN +
            ';' +
            expires +
            ';path=' +
            path +
            ';';

        document.cookie =
            cname + '=' + cvalue + ';' + expires + ';path=' + path + ';';
    },

    get: function(cname) {
        var name = cname + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    },

    delete: function(cname, path = '/') {
        document.cookie =
            cname +
            '=; expires=Thu, 01 Jan 1970 00:00:00 UTC' +
            '; domain=.' +
            process.env.MIX_REACT_APP_ROOT_DOMAIN +
            '; path=' +
            path +
            ';';

        document.cookie =
            cname +
            '=; expires=Thu, 01 Jan 1970 00:00:00 UTC' +
            '; path=' +
            path +
            ';';
    }
};

export default Cookie;
