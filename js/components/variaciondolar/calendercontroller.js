const cal_months_labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]

var state = {
	month: '',
	year: ''
}

function changeState(option) {
	if(isNaN(option)) {
		state.month = option
	} else {
		state.year = option
	}
}

const SelectMonth = {
	view: function() {
		let selectOptions = []
		
		let dateMonth = new Date().getMonth()
		
		for(let i = -1; i < cal_months_labels.length; i++){
			if(dateMonth === i) {
				selectOptions.push(m('option', { value: i, selected: 'selected' }, cal_months_labels[i]))
			} else {
				selectOptions.push(m('option', { value: i }, cal_months_labels[i]))
			}
		}
		
		return m('select', selectOptions)
	}
}

const SelectYear = {
	oncreate: function() {
		var x, i, j, selElmnt, a, b, c;
		/* Look for any elements with the class "custom-select": */
		x = document.getElementsByClassName("custom-select");
		
		for (i = 0; i < x.length; i++) {
			selElmnt = x[i].getElementsByTagName("select")[0];
			/* For each element, create a new DIV that will act as the selected item: */
			a = document.createElement("DIV");
			a.setAttribute("class", "select-selected");
			a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
			x[i].appendChild(a);
			/* For each element, create a new DIV that will contain the option list: */
			b = document.createElement("DIV");
			b.setAttribute("class", "select-items select-hide");
			for (j = 1; j < selElmnt.length; j++) {
			/* For each option in the original select element,
			create a new DIV that will act as an option item: */
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function(e) {
				changeState(e.target.innerHTML)
				/* When an item is clicked, update the original select box,
				and the selected item: */
				var y, i, k, s, h;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				h = this.parentNode.previousSibling;
				for (i = 0; i < s.length; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					for (k = 0; k < y.length; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
					}
				}
				h.click();
			});
			b.appendChild(c);
			}
			x[i].appendChild(b);
			a.addEventListener("click", function(e) {
			/* When the select box is clicked, close any other select boxes,
			and open/close the current select box: */
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
			});
		}
	
		function closeAllSelect(elmnt) {
			/* A function that will close all select boxes in the document,
			except the current select box: */
			var x, y, i, arrNo = [];
			x = document.getElementsByClassName("select-items");
			y = document.getElementsByClassName("select-selected");
			for (i = 0; i < y.length; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i)
			} else {
				y[i].classList.remove("select-arrow-active");
			}
			}
			for (i = 0; i < x.length; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
			}
		}
	
		/* If the user clicks anywhere outside the select box,
		then close all select boxes: */
		document.addEventListener("click", closeAllSelect);
	},
	view: function() {
		let date = new Date()
		let dateYear = date.getFullYear()

		return m('select', [
			m('option', dateYear)
		])
	}
}


const CalenderController = {
	view: function(vnode) {
		return m('#calender-controller', [
			m('.custom-select', m(SelectMonth)),
			m('.custom-select', m(SelectYear)),
			m('button', { onclick: () => vnode.attrs.searchCalender(state.month) }, 'Ver')
		])
	}	
}

export default CalenderController