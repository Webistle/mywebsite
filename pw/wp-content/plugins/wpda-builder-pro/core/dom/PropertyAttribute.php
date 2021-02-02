<?php

namespace WPDaddy\Dom;

class PropertyAttribute {
	const PROPERTY_ATTRIBUTE_MAP = [
		"accept"          => "accept",
		"acceptCharset"   => "accept-charset",
		"accessKey"       => "accesskey",
		"action"          => "action",
		"async"           => true,
		"autofocus"       => true,
		"autoplay"        => true,
		"alt"             => "alt",
		"autocapitalize"  => "autocapitalize",
		"autocomplete"    => "autocomplete",
		"charset"         => "charset",
//		"checked" => true, // Disabled due to special implementation.
		"cite"            => "cite",
		"cols"            => "cols",
		"contentEditable" => "contenteditable",
		"controls"        => "controls",
		"data"            => "data",
		"dateTime"        => "datetime",
		"defer"           => "defer",
		"disabled"        => "disabled",
		"dir"             => "dir",
		"draggable"       => "draggable",
		"download"        => "download",
		"encoding"        => "enctype", // This is meant to be the same as "enctype" value below (for forms)
		"enctype"         => "enctype",
		"form"            => "form",
		"height"          => "height",
		"high"            => "high",
		"htmlFor"         => "for",
		"href"            => "href",
		"kind"            => "kind",
		"label"           => "label",
		"lang"            => "lang",
		"loop"            => true,
		"low"             => "low",
		"min"             => "min",
		"max"             => "max",
		"maxLength"       => "maxlength",
		"mediaGroup"      => "mediagroup",
		"multiple"        => true,
		"muted"           => true,
		"name"            => "name",
		"optimum"         => "optimum",
		"pattern"         => "pattern",
		"placeholder"     => "placeholder",
		"poster"          => "poster",
		"preload"         => "preload",
		"readOnly"        => true, // note that the attribute is made lowercase
		"rel"             => "rel",
		"reversed"        => true,
		"required"        => true,
		"rows"            => "rows",
		"start"           => "start",
		"step"            => "step",
		"style"           => "style",
//		"selected" => true, // Disabled due to special implementation
		"size"            => "size",
		"span"            => "span",
		"src"             => "src",
		"srcset"          => "srcset",
		"tabindex"        => "tabindex",
		"target"          => "target",
		"title"           => "title",
		"type"            => "type",
		"width"           => "width",
		"wrap"            => "wrap",
	];
}
