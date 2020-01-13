// Zadnie 3
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn.btn-primary').addEventListener('click', e => {
        const form = document.forms[0];

        if(form['team1'].value === form['team2'].value) {
            e.preventDefault();
        }
        else if(Number.parseInt(form['points1'].value) < 0 || Number.parseInt(form['points2'].value) < 0) {
            e.preventDefault();
        }
        else {
            e.preventDefault();
            const td = document.createElement('td');
            const data = [form['team1'].value, form['team2'].value, form['points1'].value + ' - ' + form['points2'].value];
            const tr = document.createElement('tr');
            for(let info of data) {
                const td = document.createElement('td');
                td.innerHTML = info;
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
        
    });
});