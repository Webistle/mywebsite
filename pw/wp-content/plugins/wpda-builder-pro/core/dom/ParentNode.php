<?php

namespace WPDaddy\Dom;

use DOMDocument;
use DOMNode;
use DOMXPath;

/**
 * Contains methods that are particular to Node objects that can have children.
 *
 * This trait can only be used in a class that is a trait of LiveProperty.
 *
 * This trait is used by the following classes:
 *  - Element
 *  - Document and its subclasses XMLDocument and HTMLDocument
 *  - DocumentFragment
 *
 * @property-read HTMLCollection    $children          A live HTMLCollection containing all
 *  objects of type Element that are children of this ParentNode.
 * @property-read Node|Element|null $firstChild
 * @property-read Element|null      $firstElementChild The Element that is the first
 *  child of this ParentNode.
 * @property-read Node|Element|null $lastChild
 * @property-read Element|null      $lastElementChild  The Element that is the last
 *  child of this ParentNode.
 * @property-read int               $childElementCount The amount of children that the
 *  ParentNode has.
 *
 * @method Element getElementById(string $id)
 * @method Node|Element importNode(DOMNode $importedNode, bool $deep = false)
 * @method Node|Element insertBefore(DOMNode $newNode, DOMNode $refNode = false)
 * @method Node|Element removeChild(DOMNode $oldNode)
 * @method Node|Element replaceChild(DOMNode $newNode, DOMNode $oldNode)
 */
trait ParentNode {
	public function querySelector($selector){
		$htmlCollection = $this->css($selector);

		return $htmlCollection->item(0);
	}

	public function querySelectorAll($selector){
		return $this->css($selector);
	}

	protected function prop_get_children(){
		return new HTMLCollection($this->childNodes);
	}

	protected function prop_get_firstElementChild(){
		return $this->children->item(0);
	}

	protected function prop_get_lastElementChild(){
		return $this->children->item($this->children->length-1);
	}

	protected function prop_get_childElementCount(){
		return $this->children->length;
	}

	public function css(
		$selectors,
		$prefix = ".//"
	){
		$translator = new Translator($selectors, $prefix);

		return $this->xPath($translator);
	}

	public function xPath($selector){
		$x = new DOMXPath($this->getRootDocument());

		return new HTMLCollection($x->query($selector, $this));
	}

	public function getElementsByTagName($name){
		$nodeList = parent::getElementsByTagName($name);
		if($nodeList instanceof NodeList) {
			return $nodeList;
		}

		return new HTMLCollection($nodeList);
	}

	public function removeAttributeFromNamedElementAndChildren(
		Element $form,
		$name,
		$attribute
	){
		$selector = "[name='$name'], [name='$name'] *";
		foreach($form->querySelectorAll($selector) as $element) {
			$element->removeAttribute($attribute);
		}
	}

	/**
	 * Normalises access to the parent dom document, which may be located in various places
	 * depending on what type of object is using the trait
	 *
	 * @return DOMDocument
	 */
	protected abstract function getRootDocument();
}
