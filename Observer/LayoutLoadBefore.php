<?php
namespace Dfe\NightCall\Observer;
use Magento\Checkout\Model\Session as S;
use Magento\Framework\App\ObjectManager as OM;
use Magento\Framework\Event\Observer as O;
use Magento\Framework\Event\ObserverInterface as IO;
// 2018-04-27
class LayoutLoadBefore implements IO {
	/**
	 * 2018-04-27
	 * @override
	 * @see IO::execute()
	 * @used-by \Magento\Framework\Event\Invoker\InvokerDefault::_callObserverMethod()
	 * @see \Magento\Framework\App\Action\Action::dispatch()
	 * https://github.com/magento/magento2/blob/dd47569249206b217e0a9f9a9371e73fd7622724/lib/internal/Magento/Framework/App/Action/Action.php#L91-L92
	 *	$eventParameters = ['controller_action' => $this, 'request' => $request];
	 *	$this->_eventManager->dispatch('controller_action_predispatch', $eventParameters)
	 * @param O $o
	 */
	function execute(O $o) {
		$s = OM::getInstance()->get(S::class); /** @var S $s */
		$q = $s->getQuote();
		if (!$q->getId()) {
			$q->save();
			$s->setQuoteId($q->getId());
		}
		$s->getQuoteId();
	}
}