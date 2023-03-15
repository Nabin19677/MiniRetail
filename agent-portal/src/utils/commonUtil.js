import moment from 'moment';
import { CUSTOM_FIELD_DATE_FORMAT } from '../constants';
import { getLocalStorage } from './storageUtil';
export const toUpper = (v, prev) => {
  if (v === prev) {
    return v;
  }
  return v && v.charAt(0).toUpperCase() + v.slice(1);
};

export const urlToList = (url) => {
  if (url) {
    const urlList = url.split('/').filter((i) => i);
    return urlList.map((urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`);
  }
};

export const setFieldValue = (form, name, value, type) => {
  if (form) {
    // index 0 -> formlist name
    // index 1 -> formlist key
    // index 3 -> formitem
    // use multiple form instance for more nested usage
    if (type === 'list' && name.length === 3) {
      const data = Object.assign({}, form.getFieldValue(name[0]));
      data[name[1]] = { ...data[name[1]], [name[name.length - 1]]: value };
      form.setFieldsValue(name[0], data);
      return;
    }
    const fixname = [];
    if (typeof name == 'object') {
      name.forEach((node) => {
        fixname.push(node);
      });
    } else {
      fixname.push(String(name));
    }
    let fieldsValue;
    fixname.reverse().forEach((node) => {
      fieldsValue = {
        [String(node)]: fieldsValue != undefined ? fieldsValue : value,
      };
    });
    form.setFieldsValue(fieldsValue);
  }
};

export const isEmpty = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const stringExplode = (str, delimiter) => {
  return str.split(delimiter);
};

export const isDuplicate = (array, title) => {
  return array.some((el) => el.title === title);
};

export const arrayCompare = (arr1, arr2) => {
  if (!arr1 || !arr2) return;
  let result;
  arr1.forEach((e1, i) =>
    arr2.forEach((e2) => {
      if (e1.length > 1 && e2.length) {
        result = arrayCompare(e1, e2);
      } else if (e1 !== e2) {
        result = false;
      } else {
        result = true;
      }
    })
  );
  return result;
};

export const stringCompare = (str1, str2) => {
  const string1 = !isEmpty(str1) ? str1.toString() : '';
  const string2 = !isEmpty(str2) ? str2.toString() : '';
  return string1 === string2;
};

export const objectCompare = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const exactMatchByKey = (matchVal, myArray, matchKey = 'key') => {
  if (myArray) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i][matchKey] === matchVal) {
        return myArray[i];
      }
    }
  }
};

export const matchBySearchKey = (matchKey, arrayItems) => {
  if (arrayItems) {
    return arrayItems.filter((item) => {
      return item.searchKey.toLowerCase().search(matchKey.toLowerCase()) !== -1;
    });
  }
};

export const matchByDynamicKey = (matchKey, myArray) => {
  if (myArray) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i][matchKey]) {
        return myArray[i][matchKey];
      }
    }
  }
};

export const hasPermission = (permissionCode, permissions) => {
  return permissions && permissions.includes(permissionCode);
};



export const getSortingOrder = (sorterOrdered) => {
  let orderType;
  if (sorterOrdered) {
    if (sorterOrdered === 'descend') {
      orderType = 'DESC';
    } else {
      orderType = 'ASC';
    }
  }
  return orderType;
};

// static getSortingOrder = (sorterOrdered: any) => {
//   let orderType: any;
//   if (sorterOrdered) {
//     if (sorterOrdered === "descend") {
//       orderType = "DESC";
//     } else {
//       orderType = "ASC";
//     }
//   }
//   return orderType;
// };

export const setColorStyle = (str1, str2, oldData, colorCode = 'red') => {
  const isEqual = stringCompare(str1, str2);
  const styleCode = !isEmpty(oldData)
    ? isEqual
      ? { color: '' }
      : { color: colorCode }
    : { color: '' };
  return styleCode;
};

export const getStatusLabel = (value) => {
  return value === 'true' || value === '1' || value === true ? 'YES' : 'NO';
};

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    } catch (ex) {
      resolve('');
    }
  });
};

export const getFieldPropertyValue = (data, compareKey, compareCode, returnKey) => {
  let result,
    obj = '';
  let elements = [];
  if (Array.isArray(compareKey)) {
    compareKey.map((key) => {
      obj =
        Array.isArray(data) &&
        data.filter((d) => {
          return key === d[`${compareCode}`];
        });
      if (obj && obj[0] !== undefined && obj[0] !== null) {
        elements.push(obj[0][`${returnKey}`]);
      }
    });
    result = elements.join(', ');
  } else {
    obj =
      Array.isArray(data) &&
      data.filter((d) => {
        return compareKey === d[`${compareCode}`];
      });
    if (obj && obj[0] !== undefined && obj[0] !== null) {
      result = obj[0][`${returnKey}`];
    }
  }
  return result;
};

// used for safari not supporting date.
export const formatDateToYYYYMMDD = (targetDate, delim = '-') => {
  if (typeof targetDate === 'string') {
    const targetValue = targetDate.split('-');
    let formattedDate = `${targetValue[2]}`.length === 1 ? `0${targetValue[2]}` : targetValue[2];
    let formattedMonth = `${targetValue[1]}`.length === 1 ? `0${targetValue[1]}` : targetValue[1];
    return `${targetValue[0]}${delim}${formattedMonth}${delim}${formattedDate}`;
  }
};


export const capitalize = (str) => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1);
};

export const splitCamelCase = (str) => {
  return str?.replace(/([a-z])([A-Z0-9])/g, '$1 $2');
};
export const checkProperties = (obj) => {
  for (var key in obj) {
    if (obj[key] !== null && obj[key] !== '') return false;
  }
  return true;
};
export const getGender = (value) => {
  if (!value) return value;
  let gender = { M: 'MALE', F: 'FEMALE', O: 'OTHER' };
  if (!gender[value]) return value;
  return gender[value];
};
export const getIssueAuthorityInfo = (value) => {
  let issueAuthority = {
    '002': 'DEPARTMENT OF TRANSPORATATION MANAGEMENT',
    '008': 'DISTRICT ADMINISTRATION OFFICE',
    '001': 'ELECTION COMISSION',
    '006': 'EMBASSY',
    '009': 'EMPLOYMENT ORGANIZATION',
    '004': 'HOME MINISTRY',
    '015': 'INLAND REVENUE DEPARTMENT',
    '003': 'MINISTRY OF FOREIGN AFFAIRS',
    '012': 'MINISTRY OF INDUSTRY, COMMERCE AND SUPPLY',
    '010': 'MUNICIPALITY OFFICE',
    '014': 'MUNICIPALITY OFFICE',
    '016': 'NEPAL RASTRA BANK',
    '013': 'OFFICE OF COMPANY REGISTRAR',
    '005': 'OTHERS',
    '007': 'RURAL MUNICIPALITY OFFICE',
    '017': 'SECURITY BOARD OF NEPAL',
    '011': 'WARD OFFICE',
  };
  if (!issueAuthority[value]) return value;
  return issueAuthority[value];
};
export const getMaritalStatus = (value) => {
  let maritalStatus = {
    MST01: 'MARRIED',
    MST03: 'WIDOW',
    MST02: 'UNMARRIED',
    MST04: 'WIDOWER',
    MST05: 'LEGALLY SEPARATED',
    MST06: 'DIVORCED',
  };
  if (!maritalStatus[value]) return value;
  return maritalStatus[value];
};
export const getResidentInfo = (value) => {
  let residentValue = {
    green_card: 'Green Card Holder',
    resident: 'Resident',
    non_resident: 'Non Resident',
    none: 'NO',
  };
  if (!residentValue[value]) return 'NO';
  return residentValue[value];
};
export const getAccountForInfo = (value) => {
  if (!value) return value;
  let accountForValue = {
    single: 'Single',
    joint: 'Joint',
    minor: 'Minor',
    institutions: 'Institutions',
  };
  return accountForValue[value];
};

// export const isAllowed = (permissionCode) => {
//   const loginInfo = utils.getMeta();
//   const permissions = loginInfo?.permissions;
//   let isAuthorized = false;
//   Array.isArray(permissionCode) &&
//     permissionCode.forEach((code) => {
//       if (Array.isArray(permissions) && permissions.includes(code)) {
//         isAuthorized = true;
//       }
//     });
//   return isAuthorized;
// };
