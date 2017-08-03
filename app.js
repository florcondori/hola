'use strict';
const header = ()=>{
	const nav = $("<nav class='nav-extended'></nav>");
	const navWrapper = $("<div class='nav-wrapper'></div>");
	const aLogo = $("<a href='#' class='brand-logo'>Everis</a>");
	const aMenu = $("<a href='#' data-activates='mobile-demo' class='button-collapse'></a>");
	const iconMenu = $("<i class='material-icons'>menu</i>");
	const navMobile = $("<ul id='nav-mobile' class='right hide-on-med-and-down'></ul>");
	const liPerfil = $("<li><a href='#'>Perfil</a></li>");
	const sideNav = $("<ul class='side-nav' id='mobile-demo'></ul>");

	aMenu.append(iconMenu);
	sideNav.append(liPerfil);
	navMobile.append(liPerfil);
	navWrapper.append(aLogo);
	navWrapper.append(aMenu);
	navWrapper.append(navMobile);
	navWrapper.append(sideNav);
	nav.append(navWrapper);

	return nav;
}
$("body").append(header());

	$(".button-collapse").sideNav();	

