<script type="text/template" id="tmpl-elementor-kit-panel">
	<main id="elementor-kit__panel-content__wrapper" class="elementor-panel-content-wrapper"></main>
</script>

<script type="text/template" id="tmpl-elementor-kit-panel-content">
	<div id="elementor-kit-panel-content-controls"></div>
	<#
	const tabConfig = $e.components.get( 'panel/global' ).getActiveTabConfig();
	if ( tabConfig.helpUrl ) { #>
	<div id="elementor-panel__editor__help">
		<a id="elementor-panel__editor__help__link" href="./{{ tabConfig.helpUrl }}" target="_blank">
			<br />
<b>Fatal error</b>:  Uncaught Error: Call to undefined function __() in /opt/lampp/htdocs/mywebsite/Resweb/wp-content/plugins/elementor/core/kits/views/panel.php:12
Stack trace:
#0 {main}
  thrown in <b>/opt/lampp/htdocs/mywebsite/Resweb/wp-content/plugins/elementor/core/kits/views/panel.php</b> on line <b>12</b><br />