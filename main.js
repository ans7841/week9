function test () {
    let name = prompt("Введите имя")
    document.getElementById('name').textContent = "Имя: " + name
    document.getElementById('name').style.cssText = "color: black; font-size: 22px"

    let surname = prompt("Введите фамилию")
    document.getElementById('surname').textContent = "Фамилия: " + surname
    document.getElementById('surname').style.cssText = "color: black; font-size: 22px"

    let age = prompt("Введите возраст")
    document.getElementById('age').textContent = "Возраст: " + age
    document.getElementById('age').style.cssText = "color: black; font-size: 22px"

    let date = prompt("Введите дату рождения")
    document.getElementById('date').textContent = "Дата рождения: " + date
    document.getElementById('date').style.cssText = "color: black; font-size: 22px"

    let line = prompt("Ваша специальность")
    document.getElementById('line').textContent = "Специальность: " + line
    document.getElementById('line').style.cssText = "color: black; font-size: 22px"

    let about = prompt("Немного о себе")
    document.getElementById('about').textContent = "О себе: " + about
    document.getElementById('about').style.cssText = "color: black; font-size: 22px"
}