


function deepCopy(obj) {
  let rv;

  switch (typeof obj) {
    case "object":
      if (obj === null) {
        rv = null;
      } else {
        switch (toString.call(obj)) {
          case "[object Array]":
            rv = obj.map(deepCopy);
            break;
          case "[object Date]":
            rv = new Date(obj);
            break;
          case "[object RegExp]":
            rv = new RegExp(obj);
            break;
          default:
            rv = Object.keys(obj).reduce(function (prev, key) {
              prev[key] = deepCopy(obj[key]);
              return prev;
            }, {});
            break;
        }
      }
      break;
    default:
      rv = obj;
      break;
  }
  return rv;
}

function toJsHelper<T = any>(obj: T, value) {
  return Object.assign(value, deepCopy(obj));
}

export default function toJS<T = any>(source: T) {
  return toJsHelper<T>(source, {});
}
