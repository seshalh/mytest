import settings from "./../config.json";
Object.filter = (obj, predicate) =>
  Object.keys(obj)
  .filter(key => predicate(obj[key]))
  .reduce((res, key) => ((res[key] = obj[key]), res), {});

const Settings = {
  install: function install(Vue, options) {
    Vue.mixin({
      data: function data() {
        return {
          settings
        };
      },
      computed: {
        allSettings() {
           return Object.filter(
              this.settings['Settings'],
              setting => setting
            );
          return this.settings;
        }
      }
    });
  }
};

export default Settings;
