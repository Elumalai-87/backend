function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function onDomContentLoaded() {
  const selectTrigger = document.querySelector('.select-trigger');
  const customOptions = document.querySelector('.custom-options');
  selectTrigger.addEventListener('click', function () {
    customOptions.classList.toggle('show');
  });
  document.addEventListener('click', function (event) {
    if (!selectTrigger.contains(event.target)) {
      customOptions.classList.remove('show');
    }
  });
  const checkboxes = document.querySelectorAll('.custom-option input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedOptions);
  });

  function updateSelectedOptions() {
    const selectedOptions = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.parentElement.textContent.trim());
    if (selectedOptions.length) {
      selectTrigger.querySelector('span').textContent = selectedOptions.join(', ');
    } else {
      selectTrigger.querySelector('span').textContent = 'Select options';
    }
  }
  console.log('im from function');
}
onDomContentLoaded();
console.log('im from angular json file');


const form = document.querySelector(".form");
console.dir(form);


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // logic for getting the lang from user
  const lang = [];

  for (let i = 0; i <= 6; i++) {
    if (form[i].checked) {
      lang.push(form[i].value);
    }
  }
  const bodyData = {
    lang: lang,
    gender: form[7].value,
    age: form[8].value,
    slang: form[9].value
  }
  const res = await fetch(`http://localhost:2500/voice?lang=${lang}&gender=${form[7].value}&age=${form[8].value}&slang=${form[9].value}`)
  const data = await res.json();
  console.log(data);
})
