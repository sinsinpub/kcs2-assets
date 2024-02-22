const { equal } = require('assert')

const main = require('../dist/main.patched')

const r = new main.ShipUpgradeModelHolder()

equal(r._getRequiredDevkitNum(129, 1, 2000), 0)
equal(r._getRequiredDevkitNum(503, 1, 4700), 10)
equal(r._getRequiredDevkitNum(508, 0, 4500), 10)
equal(r._getRequiredDevkitNum(610), 84)
equal(r._getRequiredBuildKitNum(129), 0)
equal(r._getRequiredBuildKitNum(503), 20)
equal(r._getRequiredBuildKitNum(508), 20)
equal(r._getRequiredBuildKitNum(610), 84)
equal(main.PlaneConst.getEnemyPlaneGraphicsType(1610), 18)
equal(main.ITEMUP_REPLACE[1610], 1610)
equal(main.SuffixUtil.create(156, 'ship_card'), '6982')

console.info(main.PORT_API_SEED)

const cjkCharPattern = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2ebef}\u{30000}-\u{323af}\ufa0e\ufa0f\ufa11\ufa13\ufa14\ufa1f\ufa21\ufa23\ufa24\ufa27\ufa28\ufa29\u3006\u3007][\ufe00-\ufe0f\u{e0100}-\u{e01ef}]?/gmu

const ids = [502, 507]
ids.forEach(id => {
  console.info('reqTorchDevmat', id, r._getRequiredBuildKitNum(id), r._getRequiredDevkitNum(id))
  console.info('isSpKaizo', id, main.RemodelUtil.isSpKaizo(id))
})

const mstId = 502
const mm = new main.ModelManager()
mm.ship.setMstData([{api_id: mstId, api_slot_num: 4}])
mm.ship.setData([{api_id: 1, api_ship_id: mstId}])
mm.slot.setMstData([{api_id: 1}])
mm.equip.__initData__([{api_id: 1}])
main.default.model = mm
console.info(main.default.model.ship.getMst(mstId))

/*
const ship = main.default.model.ship.get(1)
console.info(ship.mstID)
const slot = ship.getSlotitems()
console.info(main.SlotItemEffectUtil.getSlotitemEffect(ship, slot))
*/
