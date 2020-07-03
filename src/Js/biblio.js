import $ from 'jquery'
import Logo from  '../img/not-logo.png'

export function arrayRemove(arr, value) { 
	return arr.filter(function(ele){ return ele !== value; });}

// affiche une valeur en console
export const AffCons = (val) => {console.log(val)}

// Pour le passage d'un onglet a un autre
export const AfficheOnglet = (li) => {

		let div = li.parentNode.parentNode

		if (li.classList.contains('active')){
			return false;
		}

		div.querySelector('.tab .active').classList.remove('active')
		li.classList.add('active')

		div.parentNode.querySelector('.nav-content.active').classList.remove('active')

		// We got atribut of li, split it to get am array which contains the correct selector 
		let currentOngletId = "#" + li.getAttribute('id').split('-')[1]
		div.parentNode.querySelector(currentOngletId).classList.add('active')

}

export const OnClickOnglet = (e) => {
	let onglet = e.currentTarget 
	AfficheOnglet(onglet)
	DisplayAzero("#afaire")
	DisplayAzero("#complete")
}

// Pour faire disparaitre la description de toute les taches
export const DisplayAzero = (idparent) => {
	// let parent = document.querySelector(idparent)
	let itemlist = $(idparent).find('.item')
	for(var k = 0; k<itemlist.length; k++)
	{
		let p = $(itemlist[k]).find('.tline').find('.item-option')
      let more = $(itemlist[k]).find('.fline').find('div').find('.expand_more')
      let less = $(itemlist[k]).find('.fline').find('div').find('.expand_less')
      less.css("display", "none")
      more.css("display", "block")
		p.css('display', 'none')
	}
}

export const GetNumTodayDate	 = () => {

   var tdate = new Date();
   var dd = tdate.getDate(); //yields day
   var MM = tdate.getMonth() ; //yields month
   var yyyy = tdate.getFullYear(); //yields year

   let currentDate = null
   if (( MM+1) < 10 && (dd < 10)) 
   {
   		currentDate= yyyy + "-0" + ( MM+1)+ "-0"  + dd ;
   		// currentDate= "0" + dd + "/0" +( MM+1) + "/" + yyyy;
   }
   else if (( MM+1) > 10 && (dd < 10))
   {
   		currentDate= yyyy + "-" + ( MM+1)+ "-0"  + dd ;
   		// currentDate= "0" + dd  + ( MM+1) + "/" + yyyy;
   }
   else if (( MM+1) < 10 && (dd > 10)) {
   		currentDate= yyyy + "-0" + ( MM+1)+ "-"  + dd ;
   		// currentDate=  dd + "/0" +( MM+1) + "/" + yyyy;
   }
   else
   {
   		currentDate= yyyy + "-" + ( MM+1)+ "-"  + dd ;
   }
   

   return currentDate

}
export const GetTodayDate = () => {
   var tdate = new Date();
   var dd = tdate.getDate(); //yields day
   var MM = tdate.getMonth() + 1; //yields month
   var yyyy = tdate.getFullYear(); //yields year

   let mois = null

   switch(MM){
   	case 1:
   		mois = " Janvier "
   		break;
   	case 2:
   		mois = " Fevrier "
   		break;
   	case 3:
   		mois = " Mars "
   		break;
   	case 4:
   		mois = " Avril "
   		break;
   	case 5:
   		mois = " Mai "
   		break;
   	case 6:
   		mois = " Juin "
   		break;
   	case 7:
   		mois = " Juillet "
   		break;
   	case 8:
   		mois = " Aout "
   		break;
   	case 9:
   		mois = " Septembre "
   		break;
   	case 10:
   		mois = " Octobre "
   		break;
   	case 11:
   		mois = " Novembre "
   		break;
   	case 12:
   		mois = " Decembre "
		   break;
	default: 
		console.log("Date value incorrect !")
		break
   }

   var currentDate = dd + mois  + yyyy;
   // if (( MM+1) < 10 && (dd < 10)) 
   // {
   // 		currentDate= "0" + dd + "/0" +( MM+1) + "/" + yyyy;
   // }
   // else if (( MM+1) > 10 && (dd < 10))
   // {
   // 		currentDate= "0" + dd  + ( MM+1) + "/" + yyyy;
   // }
   // else if (( MM+1) < 10 && (dd > 10)) {

   // 		currentDate=  dd + "/0" +( MM+1) + "/" + yyyy;
   // }
   // else
   // {
   // 		currentDate= dd + "/" +( MM+1) + "/" + yyyy;
   // }
   return currentDate;
}

export const ToFormateDate = (oldDate) => {							
	let Alldate = oldDate.split("-")
		var MM = Alldate[1][1]
		let lmois = null
   switch(MM)
   {
   	case "1":
   		lmois = " Janvier "
   		break
   	case "2":
   		lmois = " Fevrier "
   		break
   	case "3":
   		lmois = " Mars "
   		break
   	case "4":
   		lmois = " Avril "
   		break
   	case "5":
   		lmois = " Mai "
   		break
   	case "6":
   		lmois = " Juin "
   		break
   	case "7":
   		lmois = " Juillet "
   		break
   	case "8":
   		lmois = " Aout "
   		break
   	case "9":
   		lmois = " Septembre "
   		break
   	case "10":
   		lmois = " Octobre "
   		break
   	case "11":
   		lmois = " Novembre "
   		break
   	case "12":
   		lmois = " Decembre "
		   break
	default: 
		console.log("Date value incorrect !")
		break
   }
	let day = Alldate[2]
	if(Alldate[2] < 10 )
	{
		day = Alldate[2][1]
	}
	let truedate =  day + lmois + Alldate[0]
	return truedate
}

export const CollapseDesc = (e) => {
   e.preventDefault()
   let item = e.currentTarget.parentNode.parentNode.parentNode.parentNode
   let parent = item.parentNode
   if ($(item).find('.tline').find('.item-option').css('display') === 'none')
   {
      if($(item).find('.tline').find('.item-option').text() !== "")
      {
         DisplayAzero(parent)
         $(item).find('.tline').find('.item-option').css('display', 'block')
         let more = $(item).find('.fline').find('div').find('.expand_more')
         let less = $(item).find('.fline').find('div').find('.expand_less')
         less.css("display", "block")
         more.css("display", "none")

      }
   }
   else
   {
      $(item).find('.tline').find('.item-option').css('display', 'none')
         let more = $(item).find('.fline').find('div').find('.expand_more')
         let less = $(item).find('.fline').find('div').find('.expand_less')
         less.css("display", "none")
         more.css("display", "block")
   }
}

export const ResetModal = () => {
	$('#addmodal').on('show.bs.modal', function (argument) {
		document.querySelector("#nom").value = ""
		document.querySelector("#jour").value = ""
	  	document.querySelector("#heure").value = ""
	  	document.querySelector("#heure").min = "00:00"
	  	document.querySelector("#descrip").value = ""
	  	$(".timeerr").css("display", "none")
	  	$(".dateerr").css("display", "none")
		$(".liberr").css("display", "none")
	})
	$('#modifymodal').on('show.bs.modal', function (argument) {
		$(".timeerr").css("display", "none")
		$(".dateerr").css("display", "none")
		$(".liberr").css("display", "none")
	})
}

// Recupere l'heure actuelle avec la minute augmenter de 1
export const GetTime = () => {
	let basedate =  new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"})
   let date = null
   if(basedate.split(":")[0] === "24"){
      date = "00:" + basedate.split(":")[1]
   }
   else
   {
      date = basedate
   }
	return date 
} 

export const FilterList = (oldlist, tache) => {
	let newlist = []
	for(var i = 0; i < oldlist.length; i++)
	{
		if (tache.date > oldlist[i].date) {
			newlist = [...newlist, tache]
			for (var j = i; j < oldlist.length; j++)
			{
				newlist = [...newlist, oldlist[j]]
			}
			break;
		}
		else if(tache.date === oldlist[i].date)
		{
			if(tache.time >= oldlist[i].time){
				newlist = [...newlist, tache]
				for (var k = i; k < oldlist.length; k++)
				{
					newlist = [...newlist, oldlist[k]]
				}
				break;
			}
			else{
				newlist = [...newlist, oldlist[i]]
				if((i+1) === oldlist.length)
				{
					newlist = [...newlist, tache]
				}
				else if(oldlist[i + 1].date !== tache.date )
				{
					newlist = [...newlist, tache]
					for (var l = i + 1; l < oldlist.length; l++)
					{
						newlist = [...newlist, oldlist[l]]
					}
					break;
				}
			}
		}
		else
		{
			newlist = [...newlist, oldlist[i]]
			if(i === oldlist.length -1)
			{
				newlist = [...newlist, tache]
			}
		}
	} 
	return newlist
}
export  const GetTimeStamps = (date, time) => {
	let dates = date.split('-')
	let times = time.split(':')
	let t = new Date(parseInt(dates[0]), parseInt(dates[1]), parseInt(dates[2]), parseInt(times[0]), parseInt(times[1]));  
	return t.getTime()
}

const doNotify = (tache) => {
	let title = "Hey ! Il est temps d'executer la tache : " + tache.libelle;
	let t = GetTimeStamps(tache.date, tache.time)
	let options = {
		body: "By Mytodos",
		lang: 'en-CA',
		icon: Logo ,
		tag: tache.id,
		timestamp: t,
		vibrate: [100, 200, 100]
	}
	let n = new Notification(title, options);
	n.addEventListener('close', function(ev){
		$('.toast').toast('show')
	});
	setTimeout( n.close.bind(n), 6000); //close notification after 3 seconds
}

export const SetNotifcation = (item) => {
	if( 'Notification' in window){
            
		if (Notification.permission === 'granted') {
			// If it's okay let's create a notification
			doNotify(item);
		}else{
			//notification == denied
			Notification.requestPermission()
				.then(function(result) {
					if( Notification.permission === 'granted'){ 
						doNotify(item);
					}
					else
					{
						$('.mr-auto').text('Attention !')
						$('.toast-body').text("La notification des taches est desactivee.")
						$('.toast').toast('show')
					}
				})
				.catch( (err) => {
					console.log(err);
				});
		}
	
	}
	
}

export const VerifyStorage = (type) => {
		try {
			var storage = window[type],
				x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		}
		catch(e) {
			return e instanceof DOMException && (
				// everything except Firefox
				e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === 'QuotaExceededError' ||
				// Firefox
				e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
				// acknowledge QuotaExceededError only if there's something already stored
				storage.length !== 0;
		}
}

export const NowStorageState = () => {
    var data = '';

    console.log('Current local storage: ');

    for(var key in window.localStorage){

        if(window.localStorage.hasOwnProperty(key)){
            data += window.localStorage[key];
            console.log( key + " = " + ((window.localStorage[key].length * 16)/(8 * 1024)).toFixed(2) + ' KB' );
        }

    }

    console.log(data ? '\n' + 'Total space used: ' + ((data.length * 16)/(8 * 1024)).toFixed(2) + ' KB' : 'Empty (0 KB)');
    console.log(data ? 'Approx. space remaining: ' + (5120 - ((data.length * 16)/(8 * 1024)).toFixed(2)) + ' KB' : '5 MB');
}

export const StorageState = () => {
	var data = '';

    for(var key in window.localStorage){

        if(window.localStorage.hasOwnProperty(key)){
            data += window.localStorage[key];
        }

	}
	let res = (5120 - ((data.length * 16)/(8 * 1024)).toFixed(2)) 
	return res
}
	

// Dechets
// const Tachefai = props => {

// 	const line = props.Data.map((val, id) => {
// 		return (
// 			<div key = {id} className = 'item'>
// 				<div className = 'fline'>
// 					<h5>{val.libelle}</h5>
// 					<span className="material-icons orange600 md-18">close</span>
// 				</div>
// 				<div className = 'sline'>
// 					<p  className = 'sline-date'>Fait le : {val.date}</p>
// 					<p className = 'sline-time'>A : {val.time}</p>
// 				</div>
// 				<div className = 'tline'>
// 					<p>{val.descripion}</p>
// 				</div>
// 			</div>
// 		)
// 	})
// 	return (
// 		<div>{line}</div>
// 	)
// }
// const Tachefaire = props => {

// 	const line = props.Data.map((val, id) => {
// 		return (
// 			<div key = {id} className = 'item'>
// 				<div className = 'fline'>
// 					<h5>{val.libelle}</h5>
// 					<span className="material-icons orange600 md-18">close</span>
// 				</div>
// 				<div className = 'sline'>
// 					<p  className = 'sline-date'>A faire le : {val.date}</p>
// 					<p className = 'sline-time'>A : {val.time}</p>
// 				</div>
// 				<div className = 'tline'>
// 					<p className = "block-with-text">{val.descripion}</p>
// 				</div>
// 			</div>
// 		)
// 	})
// 	return (
// 		<div>{line}</div>
// 	)
// }

// export {arrayRemove, AffCons, ValInput};

// export const ForCollapseDesc = () =>{

      // let liste = document.querySelectorAll('.item')
      // for (var j=0; j< liste.length; j++)
      // {
      //    liste[j].addEventListener('click', CollapseDesc)
      // }

//}

// const CollapseDesc = (e) => {
//    // e.preventDefault()
//    let item = e.currentTarget
//    let parent = item.parentNode
//    if ($(item).find('.tline').find('.item-option').css('display') === 'none')
//    {
//       if($(item).find('.tline').find('.item-option').text() !== "")
//       {
//          DisplayAzero(parent)
//          $(item).find('.tline').find('.item-option').css('display', 'block')
//          let more = $(item).find('.fline').find('div').find('.expand_more')
//          let less = $(item).find('.fline').find('div').find('.expand_less')
//          less.css("display", "block")
//          more.css("display", "none")

//       }
//    }
//    else
//    {
//       $(item).find('.tline').find('.item-option').css('display', 'none')
//          let more = $(item).find('.fline').find('div').find('.expand_more')
//          let less = $(item).find('.fline').find('div').find('.expand_less')
//          less.css("display", "none")
//          more.css("display", "block")
//    }
// }

// export const ForCollapseDesc = () =>{

// 	let more = document.querySelectorAll('.expand_more')
// 	for (var j=0; j< more.length; j++)
// 	{
// 	   more[j].addEventListener('click', CollapseDesc)
// 	}
// 	let less = document.querySelectorAll('.expand_less')
// 	for (var j=0; j< less.length; j++)
// 	{
// 	   less[j].addEventListener('click', CollapseDesc)
// 	}
 
//  }