<?php

namespace WPDaddy\Builder\Elementor\Widgets;

use Elementor\Widget_Base;
use WPDaddy\Builder\Elementor\Basic;
use WPDaddy\Builder\Elementor\Widgets\Delimiter\Trait_Controls;
use WPDaddy\Builder\Elementor\Widgets\Delimiter\Trait_Render;

if(!defined('ABSPATH')) {
	exit;
}

class Delimiter extends Basic {
	use Trait_Controls;
	use Trait_Render;


	public function get_name(){
		return 'wpda-builder-delimiter';
	}

	public function get_title(){
		return esc_html__('Delimiter', 'wpda-builder');
	}

	public function get_icon(){
		return 'eicon-h-align-center';
	}

}

