'use strict'
function buildForm(formName, def) {
  var form = document.forms[formName];
  for (var elem of def) {
    function createWrap(elem, form) {
      var wrap = document.createElement('label');
      var wrapText = document.createTextNode(elem.label);
      wrap.appendChild(wrapText);
      form.appendChild(wrap);
      return wrap;
    }
    switch (elem.kind) {
      case 'longtext':
      case 'shorttext':
      case 'number':
        if ('label' in elem) {
          var wrap = createWrap(elem, form);
        } else {
          wrap = form;
        }
        var input = document.createElement('input');
        wrap.appendChild(input);
        input.setAttribute('name', elem.name);
        input.setAttribute('type', 'text');
        var linebreak = document.createElement('br');
        form.appendChild(linebreak);
        break;
      case 'combo':
        if ('label' in elem) {
          var wrap = createWrap(elem, form);
        } else {
          wrap = form;
        }
        var select = document.createElement('select');
        wrap.appendChild(select);
        select.setAttribute('name', elem.name);
        for (var variant of elem.variants) {
          var option = document.createElement('option');
          select.appendChild(option);
          option.setAttribute('value', variant.value);
          option.textContent = variant.text;
        }
        var linebreak = document.createElement('br');
        form.appendChild(linebreak);
        break;
      case 'radio':
        if ('label' in elem) {
          var wrap = createWrap(elem, form);
        } else {
          wrap = form;
        }
        for (var variant of elem.variants) {
          var input = document.createElement('input');
          wrap.appendChild(input);
          input.setAttribute('name', elem.name);
          input.setAttribute('type', 'radio');
          input.setAttribute('value', variant.value);
          wrap.innerHTML += variant.text;
        }
        var linebreak = document.createElement('br');
        form.appendChild(linebreak);
        break;
      case 'check':
        if ('label' in elem) {
          var wrap = createWrap(elem, form);
        } else {
          wrap = form;
        }
        var input = document.createElement('input');
        wrap.appendChild(input);
        input.setAttribute('name', elem.name);
        input.setAttribute('type', 'checkbox');
        input.checked = true;
        var linebreak = document.createElement('br');
        form.appendChild(linebreak);
        break;
      case 'memo':
        if ('label' in elem) {
          var wrap = createWrap(elem, form);
        } else {
          wrap = form;
        }
        var linebreak = document.createElement('br');
        wrap.appendChild(linebreak);
        var textarea = document.createElement('textarea');
        wrap.appendChild(textarea);
        textarea.setAttribute('name', elem.name);
        var linebreak = document.createElement('br');
        form.appendChild(linebreak);
        break;
      case 'submit':
        var input = document.createElement('input');
        form.appendChild(input);
        input.setAttribute('type', 'submit');
        input.setAttribute('value', elem.caption);
    }
  }
}


var formDef1 =
  [
    { label: "???????????????? ??????????:", kind: 'longtext', name: 'sitename' },
    { label: "URL ??????????:", kind: 'longtext', name: 'siteurl' },
    { label: '?????????????????????? ?? ??????????:', kind: 'number', name: 'visitors' },
    { label: 'E-mail ?????? ??????????:', kind: 'shorttext', name: 'email' },
    {
      label: '?????????????? ????????????????:', kind: 'combo', name: 'division',
      variants: [{ text: '????????????????', value: 1 }, { text: '???????????????? ??????', value: 2 }, { text: '?????????????? ??????????????', value: 3 }]
    },
    {
      label: '????????????????????:', kind: 'radio', name: 'payment',
      variants: [{ text: '????????????????????', value: 1 }, { text: '??????????????', value: 2 }, { text: 'VIP', value: 3 }]
    },
    { label: '?????????????????? ????????????:', kind: 'check', name: 'votes' },
    { label: '???????????????? ??????????:', kind: 'memo', name: 'description' },
    { caption: '????????????????????????', kind: 'submit' },
  ];
var formDef2 =
  [
    { label: '??????????????:', kind: 'longtext', name: 'lastname' },
    { label: '??????:', kind: 'longtext', name: 'firstname' },
    { label: '????????????????:', kind: 'longtext', name: 'secondname' },
    { label: '??????????????:', kind: 'number', name: 'age' },
    { caption: '????????????????????????????????????', kind: 'submit' },
  ];
buildForm('form1', formDef1);
buildForm('form2', formDef2);



/*function buildForm(formName, def) {

  var form = document.forms[formName];
  for (var elem of def) {

    if ('label' in elem) {
      var newTag = document.createElement('label');
      var newText = document.createTextNode(elem.label);
      newTag.appendChild(newText);
      form.appendChild(newTag);
      var linebreak = document.createElement('br');
      form.appendChild(linebreak);
      switch (elem.kind) {
        case 'longtext':
        case 'shorttext':
        case "number":
          newTag.innerHTML += '<input type="text" name="' + elem.name + '">';
          break;
        case 'combo':
          var select = document.createElement('select');
          newTag.appendChild(select);
          select.setAttribute('name', elem.name);
          var str = '';
          for (var variant of elem.variants) {
            str += ('<option value="' + variant.value + '">' + variant.text + '</option>');
          }
          select.innerHTML = str;
          break;
        case 'radio':
          var sum = '';
          for (var variant of elem.variants) {
            sum += '<input type="radio" name="' + elem.name + '" value="' + variant.value + '">' + variant.text;
          }
          newTag.innerHTML += sum;
          break;
        case 'check':
          newTag.innerHTML += '<input type="checkbox" name="' + elem.name + '" checked>';
          break;
        case 'memo':
          newTag.innerHTML += '<br><textarea name="' + elem.name + '"></textarea>';
      }
    }
    if ('caption' in elem) {
      var newTag = document.createElement('input');
      form.appendChild(newTag);
      newTag.setAttribute('type', elem.kind);
      newTag.setAttribute('value', elem.caption);
    }
  }
}*/
