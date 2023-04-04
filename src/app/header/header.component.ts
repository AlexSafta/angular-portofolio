import { Component } from '@angular/core';
import gsap from 'gsap';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
}

$(document).ready(() => {
  const menu = $('.Menu');
  $('#menulogo').click(() => {
  if (menu.hasClass('hover')) {
  menu.removeClass('hover');
  $('.rect1').css('opacity', '1');
  $('.rect2').css('transform', 'rotate(0deg) translate(0px, 0px)');
  $('.rect3').css('transform', 'rotate(0deg) translate(0px, 0px)');
  $('#menulogo').css('margin-top', '25px');
  $('.ul').css('margin-top', '-100px');
  } else {
  menu.addClass('hover');
  $('.rect1').css('opacity', '0');
  $('.rect2').css('transform', 'rotate(45deg) translate(6px, -15px)');
  $('.rect3').css('transform', 'rotate(-45deg) translate(-20px, 0px)');
  $('.ul').css('margin-top', '0px');
  $('#menulogo').css('margin-top', '35px');
  }
  });
  });
