// contactwidget3.js is the ORIGINAL SCRIPT


document.write('<style><!--\n');
document.write('.widget_tc { color: #000; }\n');
document.write('.widget_bg { background-color: #FFF; border: solid 1px #000; border-radius: 10px; -moz-border-radius: 10px; }\n');
document.write('.txt_pkg_input { width: 100%}\n');
document.write('.main_txtpkg_form {max-width: 100%}\n');



document.write('\n--></style>');



/*
var viewPortTag=document.createElement('meta');
viewPortTag.id="viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);

*/

document.write('<form action="https://secure.txtpkg.com/members/contactwidget3.php" method="post">');
document.write('	<input type="hidden" name="txtpkg_key" value="NzWgT4N44zHfJpmV09yoyC+QbVX8kuWcKx6iggK9AUzogpHzkZ4wvo82u5bX52ptTP1kiE5/7FuTiCOGkXJfZWQMqrktO70MoOmQtT/xZMbriB9feVmvMm2CGjp2AoWp">');
document.write('	<table class="widget_bg main_txtpkg_form">');
document.write('		<tr>');
document.write('			<td class="widget_tc">Full Name</td>');
document.write('		</tr>');
document.write('		<tr>');
document.write('			<td class="widget_tc" nowrap><input type="text" size="20" name="txtpkg_name" class="txt_pkg_input" value=""></td>');
document.write('		</tr>');
document.write('		<tr>');
document.write('			<td class="widget_tc">Cell Number (US Only)</td>');
document.write('		</tr>');
document.write('		<tr>');
document.write('			<td class="widget_tc" nowrap><input type="tel" size="20" maxlength="15" name="txtpkg_phnumber" class="txt_pkg_input" value=""></td>');
document.write('		</tr>');



	document.write('		<tr>');
	document.write('			<td class="widget_tc">Group</td>');
	document.write('		</tr>');

	document.write('		<tr><td class="widget_tc" nowrap>');




			document.write('		<input type="checkbox" name="txtpkg_group[]" class="" value="4213"> tracy<br>');
			document.write('		<input type="checkbox" name="txtpkg_group[]" class="" value="4214"> livermore<br>');
			document.write('		<input type="checkbox" name="txtpkg_group[]" class="" value="4215"> dublin<br>');
		document.write('		&nbsp;</td>');
	document.write('		</tr>');



document.write('		<tr>');
document.write('			<td class="widget_tc"><input type="checkbox" name="txtpkg_agree" value="1" id="txtpkg_agree" > <label for="txtpkg_agree">I agree to <a href="http://txtpkg.com/90407/citycoupons-support" target="_blank">Terms and Conditions</a></label></td>');
document.write('		</tr>');
document.write('		<tr>');
document.write('			<td class="widget_tc"><input type="submit" value="Submit"></td>');
document.write('		</tr>');
document.write('		<tr>');
document.write('			<td class="widget_tc"><sup>Msg/Data rates may apply. Reply STOP to Cancel.<br> Up to 4 msgs/mo.</sup></td>');
document.write('		</tr>');
document.write('	</table>');
document.write('</form>');
