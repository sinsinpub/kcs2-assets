function(_nam, _nan, _nao) {
    'use strict';
    defineModule(_nan);
    Object.defineProperty(_nan, '__esModule', {
        'value': !0
    });
    var _nap = _nao(3),
        _naq = _nao(947),
        _nar = (_nas.prototype.start = function() {
            var _nat = this._ship.getSlotitems();
            _nat.push(this._ship.getSlotitemEx());
            var _nau = _naq.SlotItemEffectUtil.getSlotitemEffect(this._ship, _nat),
                _nav = _naq.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                _naw = _naq.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
            return {
                'fromSlotItemEffect': this._subEffectModels(_nau, _nav),
                'toSlotItemEffect': this._subEffectModels(_naw, _nav)
            };
        }, _nas.prototype._subEffectModels = function(_nax, _nay) {
            var _naz = new _nap.SlotItemEffectModel();
            return _naz.houg = _nax.houg - _nay.houg, _naz.raig = _nax.raig - _nay.raig, _naz.tyku = _nax.tyku - _nay.tyku, _naz.souk = _nax.souk - _nay.souk, _naz.kaih = _nax.kaih - _nay.kaih, _naz.tais = _nax.tais - _nay.tais, _naz.saku = _nax.saku - _nay.saku, _naz.baku = _nax.baku - _nay.baku, _naz.houm = _nax.houm - _nay.houm, _naz.leng = _nax.leng - _nay.leng, _naz;
        }, _nas);

    function _nas(_nb0, _nb1, _nb2) {
        this._removeSlots = [], this._toSlots = [];
        var _nb3 = (this._ship = _nb0).getSlotitems();
        _nb3.push(_nb0.getSlotitemEx());
        var _nb4 = _nb3.map(function(_nb5) {
                return null == _nb5 || null != _nb1 && _nb5.memID == _nb1.memID ? null : _nb5;
            }),
            _nb6 = (this._removeSlots = _nb4).map(function(_nb7) {
                return _nb7;
            });
        _nb6.push(_nb2), this._toSlots = _nb6;
    }
    _nan.TaskGetSlotItemEffectParams = _nar;
},
function(_nb8, _nb9, _nba) {
    'use strict';
    var _nbb = this && this.__importStar || function(_nbc) {
        if (_nbc && _nbc.__esModule) return _nbc;
        var _nbd = {};
        if (null != _nbc)
            for (var _nbe in _nbc) Object.hasOwnProperty.call(_nbc, _nbe) && (_nbd[_nbe] = _nbc[_nbe]);
        return _nbd.default = _nbc, _nbd;
    };
    defineModule(_nb9);
    Object.defineProperty(_nb9, '__esModule', {
        'value': !0
    });
    var _nbf = _nba(948),
        _nbg = _nbb(_nba(949)),
        _nbh = _nba(3);
    (_nb9.SlotItemEffectUtil || (_nb9.SlotItemEffectUtil = {})).getSlotitemEffect = function(_nbi, _nbj) {
        if (null == _nbi || null == _nbj) return null;
        for (var _nbk = new _nbf.SlotItemEffectParamModel(_nbi, _nbj), _nbl = [{
                'isExecute': Boolean(_nbk.get_type3_nums(9)),
                'execFunc': _nbg.getSlotType9PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_type3_nums(10)),
                'execFunc': _nbg.getSlotType10PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_type3_nums(11)),
                'execFunc': _nbg.getSlotType11PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_type3_nums(12)) || Boolean(_nbk.get_type3_nums(13)),
                'execFunc': _nbg.getRaderPrivateEffect
            }, {
                'isExecute': Boolean(_nbk.get_type3_nums(25)),
                'execFunc': _nbg.getSlotType25PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_type3_nums(29)),
                'execFunc': _nbg.getSearchLightEffect
            }, {
                'isExecute': Boolean(_nbk.get_type3_nums(42)),
                'execFunc': _nbg.getSearchLightLargeEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(3)) || Boolean(_nbk.get_slotnums(122)),
                'execFunc': _nbg.getSlot3_122PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(5)),
                'execFunc': _nbg.getSlot5PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(12)),
                'execFunc': _nbg.getSlot12PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(15)),
                'execFunc': _nbg.getSlot15PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(18)) || Boolean(_nbk.get_slotnums(52)),
                'execFunc': _nbg.getSlot18_52_PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(19)),
                'execFunc': _nbg.getSlot19PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(24)) || Boolean(_nbk.get_slotnums(57)) || Boolean(_nbk.get_slotnums(111)),
                'execFunc': _nbg.getSlotOtherSuiseiPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(26)) || Boolean(_nbk.get_slotnums(62)) || Boolean(_nbk.get_slotnums(79)) || Boolean(_nbk.get_slotnums(80)) || Boolean(_nbk.get_slotnums(81)) || Boolean(_nbk.get_slotnums(207)) || Boolean(_nbk.get_slotnums(208)),
                'execFunc': _nbg.getZuiunSeriesEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(35)),
                'execFunc': _nbg.getSlot35PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(39)) || Boolean(_nbk.get_slotnums(40)) || Boolean(_nbk.get_slotnums(49)) || Boolean(_nbk.get_slotnums(131)),
                'execFunc': _nbg.get25mmMachinegunEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(30)) || Boolean(_nbk.get_slotnums(410)),
                'execFunc': _nbg.getSlot30_410PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(44)) || Boolean(_nbk.get_slotnums(45)) || Boolean(_nbk.get_slotnums(287)) || Boolean(_nbk.get_slotnums(288)),
                'execFunc': _nbg.getSlotDomesticAntiSubmarineToushakiPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(46)) || Boolean(_nbk.get_slotnums(47)) || Boolean(_nbk.get_slotnums(149)) || Boolean(_nbk.get_slotnums(132)) || Boolean(_nbk.get_slotnums(438)),
                'execFunc': _nbg.getSlotDomesticSonarPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(47)) || Boolean(_nbk.get_slotnums(438)),
                'execFunc': _nbg.getSlot47PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(50)),
                'execFunc': _nbg.getSlot50PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(58)),
                'execFunc': _nbg.getSlot58PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(59)),
                'execFunc': _nbg.getSlot59PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(60)) || Boolean(_nbk.get_slotnums(154)) || Boolean(_nbk.get_slotnums(219)),
                'execFunc': _nbg.getSlot60_154_219PersonalEffec
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(61)),
                'execFunc': _nbg.getSlot61PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(61)),
                'execFunc': _nbg.getSlot61PersonalEffect2
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(63)),
                'execFunc': _nbg.getSlot63PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(66)) || Boolean(_nbk.get_slotnums(220)),
                'execFunc': _nbg.get8cmAntiAircraftGunPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(67)),
                'execFunc': _nbg.getSlot67PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(69)),
                'execFunc': _nbg.getSlot69PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(70)),
                'execFunc': _nbg.getSlot70PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(78)),
                'execFunc': _nbg.getSlot78PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(79)) || Boolean(_nbk.get_slotnums(81)),
                'execFunc': _nbg.getSlot79And81PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(82)),
                'execFunc': _nbg.getSlot82PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(84)),
                'execFunc': _nbg.getSlot84PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(85)),
                'execFunc': _nbg.getSlot85PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(87)),
                'execFunc': _nbg.getSlot87PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(90)),
                'execFunc': _nbg.getSlot90PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(93)),
                'execFunc': _nbg.getSlot93PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(94)),
                'execFunc': _nbg.getSlot94PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(99)),
                'execFunc': _nbg.getSlot99PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(100)),
                'execFunc': _nbg.getSlot100PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(104)),
                'execFunc': _nbg.getSlot104PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(106)) || Boolean(_nbk.get_slotnums(450)),
                'execFunc': _nbg.getSlot106PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(115)),
                'execFunc': _nbg.getSlot115PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(118)),
                'execFunc': _nbg.getSlot118PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(119)),
                'execFunc': _nbg.getSlot119PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(121)),
                'execFunc': _nbg.getSlot121PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(122)),
                'execFunc': _nbg.getSlot122PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(128)) || Boolean(_nbk.get_slotnums(281)),
                'execFunc': _nbg.getSlot51cmSeriesGunPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(129)),
                'execFunc': _nbg.getSlot129PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(132)),
                'execFunc': _nbg.getSlot132PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(136)),
                'execFunc': _nbg.getSlot136PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(139)),
                'execFunc': _nbg.getSlot139PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(143)),
                'execFunc': _nbg.getSlot143PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(144)),
                'execFunc': _nbg.getSlot144PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(147)) || Boolean(_nbk.get_slotnums(393)) || Boolean(_nbk.get_slotnums(394)),
                'execFunc': _nbg.getSlot120mm50GroupPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(149)),
                'execFunc': _nbg.getSlot149PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(165)) || Boolean(_nbk.get_slotnums(216)),
                'execFunc': _nbg.getSlot165_216PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(171)),
                'execFunc': _nbg.getSlot171PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(174)),
                'execFunc': _nbg.getSlot174PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(179)),
                'execFunc': _nbg.getSlot179PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(184)),
                'execFunc': _nbg.getSlot184PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(188)),
                'execFunc': _nbg.getSlot188PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(189)),
                'execFunc': _nbg.getSlot189PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(194)),
                'execFunc': _nbg.getSlot194PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(195)),
                'execFunc': _nbg.getSlot195PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(204)),
                'execFunc': _nbg.getSlot204PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(217)),
                'execFunc': _nbg.getSlot217PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(220)),
                'execFunc': _nbg.getSlot220PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(227)),
                'execFunc': _nbg.getSlot227PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(228)),
                'execFunc': _nbg.getSlot228PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(229)),
                'execFunc': _nbg.getSlot229PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(234)),
                'execFunc': _nbg.getSlot234PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(235)),
                'execFunc': _nbg.getSlot235PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(237)) || Boolean(_nbk.get_slotnums(322)) || Boolean(_nbk.get_slotnums(323)) || Boolean(_nbk.get_slotnums(490)),
                'execFunc': _nbg.getHighZuiunSeriesEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(237)),
                'execFunc': _nbg.getSlot237PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(238)) || Boolean(_nbk.get_slotnums(239)),
                'execFunc': _nbg.getSlot238_239PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(242)),
                'execFunc': _nbg.getSlot242PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(243)),
                'execFunc': _nbg.getSlot243PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(244)),
                'execFunc': _nbg.getSlot244PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(245)) || Boolean(_nbk.get_slotnums(246)) || Boolean(_nbk.get_slotnums(468)),
                'execFunc': _nbg.getSlot38cmFourBarrelGunPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(247)),
                'execFunc': _nbg.getSlot247PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(266)),
                'execFunc': _nbg.getSlot266PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(266)),
                'execFunc': _nbg.getSlot266PersonalEffect2
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(267)) || Boolean(_nbk.get_slotnums(366)),
                'execFunc': _nbg.getSlot267PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(267)) || Boolean(_nbk.get_slotnums(366)),
                'execFunc': _nbg.getSlot267PersonalEffect2
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(268)),
                'execFunc': _nbg.getCamouflageSlotPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(271)),
                'execFunc': _nbg.getSlot271PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(275)),
                'execFunc': _nbg.getSlot275PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(277)),
                'execFunc': _nbg.getSlot277PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(278)),
                'execFunc': _nbg.getSlot278PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(279)),
                'execFunc': _nbg.getSlot279PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(282)),
                'execFunc': _nbg.getSlot282PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(283)),
                'execFunc': _nbg.getSlot283PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(285)),
                'execFunc': _nbg.getSlot285PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(286)),
                'execFunc': _nbg.getSlot286PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(286)),
                'execFunc': _nbg.getSlot286PersonalEffect2
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(286)),
                'execFunc': _nbg.getSlot286PersonalEffect3
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(287)),
                'execFunc': _nbg.getSlot287PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(288)),
                'execFunc': _nbg.getSlot288PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(289)),
                'execFunc': _nbg.getSlot289PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(290)),
                'execFunc': _nbg.getSlot290PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(291)),
                'execFunc': _nbg.getSlot291PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(292)),
                'execFunc': _nbg.getSlot292PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(293)),
                'execFunc': _nbg.getSlot293PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(294)),
                'execFunc': _nbg.getSlot294PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(295)),
                'execFunc': _nbg.getSlot295PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(296)),
                'execFunc': _nbg.getSlot296PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(297)),
                'execFunc': _nbg.getSlot297PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(298)) || Boolean(_nbk.get_slotnums(299)) || Boolean(_nbk.get_slotnums(300)),
                'execFunc': _nbg.getSlot16M1PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(301)),
                'execFunc': _nbg.getSlot301PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(302)),
                'execFunc': _nbg.getSlot302PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(303)),
                'execFunc': _nbg.getSlot303PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(304)),
                'execFunc': _nbg.getSlot304PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(305)) || Boolean(_nbk.get_slotnums(306)),
                'execFunc': _nbg.getSlot305_And_306_PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(307)),
                'execFunc': _nbg.getSlot307PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(308)),
                'execFunc': _nbg.getSlot308PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(310)) || Boolean(_nbk.get_slotnums(518)),
                'execFunc': _nbg.getSlot310PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(313)),
                'execFunc': _nbg.getSlot313PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(314)),
                'execFunc': _nbg.getSlot314PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(315)),
                'execFunc': _nbg.getSlot315PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(316)),
                'execFunc': _nbg.getSlot316PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(317)),
                'execFunc': _nbg.getSlot317PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(318)),
                'execFunc': _nbg.getSlot318PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(319)),
                'execFunc': _nbg.getSlot319PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(320)),
                'execFunc': _nbg.getSlot320PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(322)),
                'execFunc': _nbg.getSlot322PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(323)),
                'execFunc': _nbg.getSlot323PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(324)) || Boolean(_nbk.get_slotnums(325)),
                'execFunc': _nbg.getSlot324And325PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(326)),
                'execFunc': _nbg.getSlot326PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(327)),
                'execFunc': _nbg.getSlot327PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(328)),
                'execFunc': _nbg.getSlot328PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(329)),
                'execFunc': _nbg.getSlot329PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(330)) || Boolean(_nbk.get_slotnums(331)) || Boolean(_nbk.get_slotnums(332)),
                'execFunc': _nbg.getSlot_16InchMkXRensouhou_PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(335)),
                'execFunc': _nbg.getSlot335PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(336)),
                'execFunc': _nbg.getSlot336PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(337)),
                'execFunc': _nbg.getSlot337PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(338)),
                'execFunc': _nbg.getSlot338PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(339)),
                'execFunc': _nbg.getSlot339PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(340)),
                'execFunc': _nbg.getSlot340PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(341)),
                'execFunc': _nbg.getSlot341PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(342)),
                'execFunc': _nbg.getSlot342PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(343)),
                'execFunc': _nbg.getSlot343PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(344)),
                'execFunc': _nbg.getSlot344PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(345)),
                'execFunc': _nbg.getSlot345PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(346)),
                'execFunc': _nbg.getSlot346PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(347)),
                'execFunc': _nbg.getSlot347PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(356)) || Boolean(_nbk.get_slotnums(357)),
                'execFunc': _nbg.getSlot356_357PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(358)),
                'execFunc': _nbg.getSlot358PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(359)),
                'execFunc': _nbg.getSlot359PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(360)) || Boolean(_nbk.get_slotnums(361)),
                'execFunc': _nbg.getSlot360_361PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(362)) || Boolean(_nbk.get_slotnums(363)),
                'execFunc': _nbg.getSlot362_363PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(364)),
                'execFunc': _nbg.getSlot364PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(365)),
                'execFunc': _nbg.getSlot365PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(367)),
                'execFunc': _nbg.getSlot367PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(368)),
                'execFunc': _nbg.getSlot368PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(369)),
                'execFunc': _nbg.getSlot369PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(370)),
                'execFunc': _nbg.getSlot370PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(371)),
                'execFunc': _nbg.getSlot371PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(372)),
                'execFunc': _nbg.getSlot372PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(373)),
                'execFunc': _nbg.getSlot373PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(374)),
                'execFunc': _nbg.getSlot374PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(375)),
                'execFunc': _nbg.getSlot375PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(376)),
                'execFunc': _nbg.getSlot376PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(377)),
                'execFunc': _nbg.getSlot377PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(378)),
                'execFunc': _nbg.getSlot378PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(379)),
                'execFunc': _nbg.getSlot379PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(380)),
                'execFunc': _nbg.getSlot380PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(381)),
                'execFunc': _nbg.getSlot381PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(382)) || Boolean(_nbk.get_slotnums(509)),
                'execFunc': _nbg.getSlot382PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(383)),
                'execFunc': _nbg.getSlot383PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(384)),
                'execFunc': _nbg.getSlot384PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(385)),
                'execFunc': _nbg.getSlot385PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(386)),
                'execFunc': _nbg.getSlot386PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(387)),
                'execFunc': _nbg.getSlot387PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(389)),
                'execFunc': _nbg.getSlot389PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(390)),
                'execFunc': _nbg.getSlot390PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(391)),
                'execFunc': _nbg.getSlot391PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(392)),
                'execFunc': _nbg.getSlot392PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(397)),
                'execFunc': _nbg.getSlot397PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(398)),
                'execFunc': _nbg.getSlot398PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(399)),
                'execFunc': _nbg.getSlot399PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(400)),
                'execFunc': _nbg.getSlot400PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(407)),
                'execFunc': _nbg.getSlot407PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(408)),
                'execFunc': _nbg.getSlot408PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(409)),
                'execFunc': _nbg.getSlot409PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(411)),
                'execFunc': _nbg.getSlot411PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(412)),
                'execFunc': _nbg.getSlot412PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(413)),
                'execFunc': _nbg.getSlot413PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(414)),
                'execFunc': _nbg.getSlot414PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(415)),
                'execFunc': _nbg.getSlot415PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(419)),
                'execFunc': _nbg.getSlot419PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(420)),
                'execFunc': _nbg.getSlot420PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(421)),
                'execFunc': _nbg.getSlot421PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(422)),
                'execFunc': _nbg.getSlot422PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(423)),
                'execFunc': _nbg.getSlot423PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(424)),
                'execFunc': _nbg.getSlot424PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(425)),
                'execFunc': _nbg.getSlot425PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(426)) || Boolean(_nbk.get_slotnums(427)) || Boolean(_nbk.get_slotnums(428)) || Boolean(_nbk.get_slotnums(429)),
                'execFunc': _nbg.getSlot305More320mmGunPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(430)),
                'execFunc': _nbg.getSlot430PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(434)) || Boolean(_nbk.get_slotnums(435)),
                'execFunc': _nbg.getSlotCorsairMkIIPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(437)),
                'execFunc': _nbg.getSlot437PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(438)),
                'execFunc': _nbg.getSlot438PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(439)),
                'execFunc': _nbg.getSlot439PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(440)) || Boolean(_nbk.get_slotnums(441)),
                'execFunc': _nbg.getSlot440_441PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(442)) || Boolean(_nbk.get_slotnums(443)),
                'execFunc': _nbg.getSlot442_443PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(447)),
                'execFunc': _nbg.getSlot447PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(450)),
                'execFunc': _nbg.getSlot450PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(451)),
                'execFunc': _nbg.getSlot451PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(455)),
                'execFunc': _nbg.getSlot455PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(456)),
                'execFunc': _nbg.getSlot456PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(457)) || Boolean(_nbk.get_slotnums(461)),
                'execFunc': _nbg.getSlot457PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(458)),
                'execFunc': _nbg.getSlot458PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(463)),
                'execFunc': _nbg.getSlot463PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(464)),
                'execFunc': _nbg.getSlot464PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(465)),
                'execFunc': _nbg.getSlot465PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(466)),
                'execFunc': _nbg.getSlot466PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(467)),
                'execFunc': _nbg.getSlot467PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(470)),
                'execFunc': _nbg.getSlot470PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(471)),
                'execFunc': _nbg.getSlot471PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(472)),
                'execFunc': _nbg.getSlot472PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(473)),
                'execFunc': _nbg.getSlot473PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(474)),
                'execFunc': _nbg.getSlot474PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(478)),
                'execFunc': _nbg.getSlot478PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(483)),
                'execFunc': _nbg.getSlot483PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(485)),
                'execFunc': _nbg.getSlot485PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(486)),
                'execFunc': _nbg.getSlot486PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(487)),
                'execFunc': _nbg.getSlot487PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(488)),
                'execFunc': _nbg.getSlot488PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(489)) || Boolean(_nbk.get_slotnums(491)),
                'execFunc': _nbg.getSlot489PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(500)) || Boolean(_nbk.get_slotnums(501)),
                'execFunc': _nbg.getSlotSmokePersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(502)),
                'execFunc': _nbg.getSlot502PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(503)),
                'execFunc': _nbg.getSlot503PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(505)),
                'execFunc': _nbg.getSlot505PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(506)),
                'execFunc': _nbg.getSlot506PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(507)) || Boolean(_nbk.get_slotnums(508)),
                'execFunc': _nbg.getSlot14inch45CaliberGunPersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(510)),
                'execFunc': _nbg.getSlot510PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(511)) || Boolean(_nbk.get_slotnums(512)),
                'execFunc': _nbg.getSlot511PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(517)),
                'execFunc': _nbg.getSlot517PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(518)),
                'execFunc': _nbg.getSlot518PersonalEffect
            }, {
                'isExecute': Boolean(_nbk.get_slotnums(519)),
                'execFunc': _nbg.getSlot519PersonalEffect
            }], _nbm = new _nbh.SlotItemEffectModel(), _nbn = 0, _nbo = _nbl; _nbn < _nbo.length; _nbn++) {
            var _nbp, _nbq = _nbo[_nbn];
            _nbq.isExecute && (_nbp = _nbq.execFunc(_nbk), _nbm.add(_nbp));
        }
        return _nbm;
    };
},
function(_nbr, _nbs, _nbt) {
    'use strict';
    var _nbu = this && this.__importDefault || function(_nbv) {
        return _nbv && _nbv.__esModule ? _nbv : {
            'default': _nbv
        };
    };
    defineModule(_nbs);
    Object.defineProperty(_nbs, '__esModule', {
        'value': !0
    });
    var _nbw = _nbu(_nbt(0)),
        _nbx = (Object.defineProperty(_nby.prototype, 'have_slots_dict', {
            'get': function() {
                return this._have_slots_dict;
            },
            'enumerable': !0,
            'configurable': !0
        }), Object.defineProperty(_nby.prototype, 'ship_id', {
            'get': function() {
                return this._ship_id;
            },
            'enumerable': !0,
            'configurable': !0
        }), Object.defineProperty(_nby.prototype, 'yomi', {
            'get': function() {
                return this._yomi;
            },
            'enumerable': !0,
            'configurable': !0
        }), Object.defineProperty(_nby.prototype, 'stype', {
            'get': function() {
                return this._stype;
            },
            'enumerable': !0,
            'configurable': !0
        }), Object.defineProperty(_nby.prototype, 'ctype', {
            'get': function() {
                return this._ctype;
            },
            'enumerable': !0,
            'configurable': !0
        }), _nby.prototype.get_slotnums = function(_nbz) {
            return null == this._have_slotnums_dict[_nbz] ? 0 : this._have_slotnums_dict[_nbz];
        }, _nby.prototype.get_type3_nums = function(_nc0) {
            return null == this._have_type3nums_dict[_nc0] ? 0 : this._have_type3nums_dict[_nc0];
        }, _nby.prototype.have_slot_ids = function() {
            return Object.keys(this._have_slots_dict);
        }, _nby.prototype.get_each_level_nums = function(_nc1) {
            var _nc2 = this._have_slots_dict[_nc1],
                _nc3 = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                    return 0;
                });
            if (null != _nc2)
                for (var _nc4 = 0, _nc5 = _nc2; _nc4 < _nc5.length; _nc4++) _nc3[_nc5[_nc4].level]++;
            return _nc3;
        }, _nby.prototype.get_each_level_over_nums = function(_nc6) {
            for (var _nc7 = this, _nc8 = [], _nc9 = this, _nca = 0, _ncb = _nc6; _nca < _ncb.length; _nca++) ! function(_ncc) {
                _nc8[_ncc] = Array.apply(null, new Array(_nc9.SLOT_LEVEL_MAX + 1)).map(function() {
                    return 0;
                }), null != _nc9.have_slots_dict[_ncc] && _nc9.get_each_level_nums(_ncc).forEach(function(_ncd, _nce) {
                    for (var _ncf = 1; _ncf <= _nc7.SLOT_LEVEL_MAX; _ncf++) _ncf <= _nce && (_nc8[_ncc][_ncf] += _ncd);
                });
            }(_ncb[_nca]);
            return _nc8;
        }, _nby.prototype.get_have_rader_nums = function() {
            for (var _ncg = 0, _nch = 0, _nci = 0, _ncj = this.have_slot_ids(); _nci < _ncj.length; _nci++) {
                var _nck = _ncj[_nci],
                    _ncl = _nbw.default.model.slot.getMst(_nck),
                    _ncm = _ncl.equipType;
                12 != _ncm && 13 != _ncm || (5 <= _ncl.sakuteki && (_ncg += this.get_slotnums(parseInt(_nck))), 2 <= _ncl.taiku && (_nch += this.get_slotnums(parseInt(_nck))));
            }
            return {
                'water_rader': _ncg,
                'air_rader': _nch
            };
        }, _nby.prototype.getUSSWaterRaderDict = function() {
            return {
                279: 1,
                307: 1,
                315: 1,
                456: 1
            };
        }, _nby.prototype.getUSSAirRaderDict = function() {
            return {
                278: 1,
                279: 1
            };
        }, _nby.prototype.getCountryName = function() {
            return null == _nby.SHIP_COUNTRY[this._ctype] ? '' : _nby.SHIP_COUNTRY[this._ctype];
        }, _nby.SHIP_COUNTRY = {
            1: '日本',
            2: '日本',
            3: '日本',
            4: '日本',
            5: '日本',
            6: '日本',
            7: '日本',
            8: '日本',
            9: '日本',
            10: '日本',
            11: '日本',
            12: '日本',
            13: '日本',
            14: '日本',
            15: '日本',
            16: '日本',
            17: '日本',
            18: '日本',
            19: '日本',
            20: '日本',
            21: '日本',
            22: '日本',
            23: '日本',
            24: '日本',
            25: '日本',
            26: '日本',
            27: '日本',
            28: '日本',
            29: '日本',
            30: '日本',
            31: '日本',
            32: '日本',
            33: '日本',
            34: '日本',
            35: '日本',
            36: '日本',
            37: '日本',
            38: '日本',
            39: '日本',
            40: '日本',
            41: '日本',
            42: '日本',
            43: '日本',
            44: '日本',
            45: '日本',
            46: '日本',
            49: '日本',
            50: '日本',
            51: '日本',
            52: '日本',
            53: '日本',
            54: '日本',
            56: '日本',
            59: '日本',
            60: '日本',
            62: '日本',
            66: '日本',
            71: '日本',
            72: '日本',
            74: '日本',
            75: '日本',
            76: '日本',
            77: '日本',
            85: '日本',
            86: '日本',
            90: '日本',
            94: '日本',
            97: '日本',
            100: '日本',
            101: '日本',
            103: '日本',
            104: '日本',
            109: '日本',
            111: '日本',
            115: '日本',
            117: '日本',
            119: '日本',
            120: '日本',
            123: '日本',
            65: 'アメリカ',
            69: 'アメリカ',
            83: 'アメリカ',
            84: 'アメリカ',
            87: 'アメリカ',
            91: 'アメリカ',
            93: 'アメリカ',
            95: 'アメリカ',
            99: 'アメリカ',
            102: 'アメリカ',
            105: 'アメリカ',
            106: 'アメリカ',
            107: 'アメリカ',
            110: 'アメリカ',
            114: 'アメリカ',
            116: 'アメリカ',
            118: 'アメリカ',
            121: 'アメリカ',
            122: 'アメリカ',
            125: 'アメリカ',
            67: 'イギリス',
            78: 'イギリス',
            82: 'イギリス',
            88: 'イギリス',
            108: 'イギリス',
            112: 'イギリス',
            58: 'イタリア',
            61: 'イタリア',
            64: 'イタリア',
            68: 'イタリア',
            80: 'イタリア',
            92: 'イタリア',
            113: 'イタリア',
            124: 'イタリア',
            98: 'オランダ',
            96: 'オーストラリア',
            89: 'スウェーデン',
            47: 'ドイツ',
            48: 'ドイツ',
            55: 'ドイツ',
            57: 'ドイツ',
            63: 'ドイツ',
            70: 'フランス',
            79: 'フランス',
            73: 'ロシア',
            81: 'ロシア'
        }, _nby);

    function _nby(_ncn, _nco) {
        this.SLOT_LEVEL_MAX = 10;
        for (var _ncp = {}, _ncq = {}, _ncr = {}, _ncs = 0, _nct = _nco; _ncs < _nct.length; _ncs++) {
            var _ncu = _nct[_ncs];
            null != _ncu && (null == _ncp[_ncu.mstID] && (_ncp[_ncu.mstID] = new Array()), _ncp[_ncu.mstID].push(_ncu), null == _ncq[_ncu.mstID] ? _ncq[_ncu.mstID] = 1 : _ncq[_ncu.mstID] += 1, null == _ncr[_ncu.equipType] ? _ncr[_ncu.equipType] = 1 : _ncr[_ncu.equipType] += 1);
        }
        this._have_slots_dict = _ncp, this._have_slotnums_dict = _ncq, this._have_type3nums_dict = _ncr, this._ship_id = _ncn.mstID, this._yomi = _ncn.yomi, this._stype = _ncn.shipTypeID, this._ctype = _ncn.getClassType();
    }
    _nbs.SlotItemEffectParamModel = _nbx;
},
function(_ncv, _ncw, _ncx) {
    'use strict';

    function _ncy(_ncz) {
        for (var _nd0 in _ncz) _ncw.hasOwnProperty(_nd0) || (_ncw[_nd0] = _ncz[_nd0]);
    }
    defineModule(_ncw);
    Object.defineProperty(_ncw, '__esModule', {
        'value': !0
    }), _ncy(_ncx(950)), _ncy(_ncx(951)), _ncy(_ncx(952)), _ncy(_ncx(953)), _ncy(_ncx(954)), _ncy(_ncx(955)), _ncy(_ncx(956)), _ncy(_ncx(957)), _ncy(_ncx(958)), _ncy(_ncx(959)), _ncy(_ncx(960)), _ncy(_ncx(961)), _ncy(_ncx(962)), _ncy(_ncx(963)), _ncy(_ncx(964)), _ncy(_ncx(965)), _ncy(_ncx(966)), _ncy(_ncx(967)), _ncy(_ncx(968)), _ncy(_ncx(969)), _ncy(_ncx(970)), _ncy(_ncx(971)), _ncy(_ncx(972)), _ncy(_ncx(973)), _ncy(_ncx(974)), _ncy(_ncx(975)), _ncy(_ncx(976)), _ncy(_ncx(977)), _ncy(_ncx(978)), _ncy(_ncx(979)), _ncy(_ncx(980)), _ncy(_ncx(981)), _ncy(_ncx(982)), _ncy(_ncx(983)), _ncy(_ncx(984)), _ncy(_ncx(985)), _ncy(_ncx(986)), _ncy(_ncx(987)), _ncy(_ncx(988)), _ncy(_ncx(989)), _ncy(_ncx(990)), _ncy(_ncx(991)), _ncy(_ncx(992)), _ncy(_ncx(993)), _ncy(_ncx(994)), _ncy(_ncx(995)), _ncy(_ncx(996)), _ncy(_ncx(997)), _ncy(_ncx(998)), _ncy(_ncx(999)), _ncy(_ncx(1000)), _ncy(_ncx(1001)), _ncy(_ncx(1002)), _ncy(_ncx(1003)), _ncy(_ncx(1004)), _ncy(_ncx(1005)), _ncy(_ncx(1006)), _ncy(_ncx(1007)), _ncy(_ncx(1008)), _ncy(_ncx(1009)), _ncy(_ncx(1010)), _ncy(_ncx(1011)), _ncy(_ncx(1012)), _ncy(_ncx(1013)), _ncy(_ncx(1014)), _ncy(_ncx(1015)), _ncy(_ncx(1016)), _ncy(_ncx(1017)), _ncy(_ncx(1018)), _ncy(_ncx(1019)), _ncy(_ncx(1020)), _ncy(_ncx(1021)), _ncy(_ncx(1022)), _ncy(_ncx(1023)), _ncy(_ncx(1024)), _ncy(_ncx(1025)), _ncy(_ncx(1026)), _ncy(_ncx(1027)), _ncy(_ncx(1028)), _ncy(_ncx(1029)), _ncy(_ncx(1030)), _ncy(_ncx(1031)), _ncy(_ncx(1032)), _ncy(_ncx(1033)), _ncy(_ncx(1034)), _ncy(_ncx(1035)), _ncy(_ncx(1036)), _ncy(_ncx(1037)), _ncy(_ncx(1038)), _ncy(_ncx(1039)), _ncy(_ncx(1040)), _ncy(_ncx(1041)), _ncy(_ncx(1042)), _ncy(_ncx(1043)), _ncy(_ncx(1044)), _ncy(_ncx(1045)), _ncy(_ncx(1046)), _ncy(_ncx(1047)), _ncy(_ncx(1048)), _ncy(_ncx(1049)), _ncy(_ncx(1050)), _ncy(_ncx(1051)), _ncy(_ncx(1052)), _ncy(_ncx(1053)), _ncy(_ncx(1054)), _ncy(_ncx(1055)), _ncy(_ncx(1056)), _ncy(_ncx(1057)), _ncy(_ncx(1058)), _ncy(_ncx(1059)), _ncy(_ncx(1060)), _ncy(_ncx(1061)), _ncy(_ncx(1062)), _ncy(_ncx(1063)), _ncy(_ncx(1064)), _ncy(_ncx(1065)), _ncy(_ncx(1066)), _ncy(_ncx(1067)), _ncy(_ncx(1068)), _ncy(_ncx(1069)), _ncy(_ncx(1070)), _ncy(_ncx(1071)), _ncy(_ncx(1072)), _ncy(_ncx(1073)), _ncy(_ncx(1074)), _ncy(_ncx(1075)), _ncy(_ncx(1076)), _ncy(_ncx(1077)), _ncy(_ncx(1078)), _ncy(_ncx(1079)), _ncy(_ncx(1080)), _ncy(_ncx(1081)), _ncy(_ncx(1082)), _ncy(_ncx(1083)), _ncy(_ncx(1084)), _ncy(_ncx(1085)), _ncy(_ncx(1086)), _ncy(_ncx(1087)), _ncy(_ncx(1088)), _ncy(_ncx(1089)), _ncy(_ncx(1090)), _ncy(_ncx(1091)), _ncy(_ncx(1092)), _ncy(_ncx(1093)), _ncy(_ncx(1094)), _ncy(_ncx(1095)), _ncy(_ncx(1096)), _ncy(_ncx(1097)), _ncy(_ncx(1098)), _ncy(_ncx(1099)), _ncy(_ncx(1100)), _ncy(_ncx(1101)), _ncy(_ncx(1102)), _ncy(_ncx(1103)), _ncy(_ncx(1104)), _ncy(_ncx(1105)), _ncy(_ncx(1106)), _ncy(_ncx(1107)), _ncy(_ncx(1108)), _ncy(_ncx(1109)), _ncy(_ncx(1110)), _ncy(_ncx(1111)), _ncy(_ncx(1112)), _ncy(_ncx(1113)), _ncy(_ncx(1114)), _ncy(_ncx(1115)), _ncy(_ncx(1116)), _ncy(_ncx(1117)), _ncy(_ncx(1118)), _ncy(_ncx(1119)), _ncy(_ncx(1120)), _ncy(_ncx(1121)), _ncy(_ncx(1122)), _ncy(_ncx(1123)), _ncy(_ncx(1124)), _ncy(_ncx(1125)), _ncy(_ncx(1126)), _ncy(_ncx(1127)), _ncy(_ncx(1128)), _ncy(_ncx(1129)), _ncy(_ncx(1130)), _ncy(_ncx(1131)), _ncy(_ncx(1132)), _ncy(_ncx(1133)), _ncy(_ncx(1134)), _ncy(_ncx(1135)), _ncy(_ncx(1136)), _ncy(_ncx(1137)), _ncy(_ncx(1138)), _ncy(_ncx(1139)), _ncy(_ncx(1140)), _ncy(_ncx(1141)), _ncy(_ncx(1142)), _ncy(_ncx(1143)), _ncy(_ncx(1144)), _ncy(_ncx(1145)), _ncy(_ncx(1146)), _ncy(_ncx(1147)), _ncy(_ncx(1148)), _ncy(_ncx(1149)), _ncy(_ncx(1150)), _ncy(_ncx(1151)), _ncy(_ncx(1152)), _ncy(_ncx(1153)), _ncy(_ncx(1154)), _ncy(_ncx(1155)), _ncy(_ncx(1156)), _ncy(_ncx(1157)), _ncy(_ncx(1158)), _ncy(_ncx(1159)), _ncy(_ncx(1160)), _ncy(_ncx(1161)), _ncy(_ncx(1162)), _ncy(_ncx(1163)), _ncy(_ncx(1164)), _ncy(_ncx(1165)), _ncy(_ncx(1166)), _ncy(_ncx(1167)), _ncy(_ncx(1168)), _ncy(_ncx(1169)), _ncy(_ncx(1170)), _ncy(_ncx(1171)), _ncy(_ncx(1172)), _ncy(_ncx(1173)), _ncy(_ncx(1174)), _ncy(_ncx(1175)), _ncy(_ncx(1176)), _ncy(_ncx(1177)), _ncy(_ncx(1178)), _ncy(_ncx(1179)), _ncy(_ncx(1180)), _ncy(_ncx(1181)), _ncy(_ncx(1182)), _ncy(_ncx(1183)), _ncy(_ncx(1184)), _ncy(_ncx(1185)), _ncy(_ncx(1186)), _ncy(_ncx(1187));
},
function(_nd1, _nd2, _nd3) {
    'use strict';
    defineModule(_nd2);
    Object.defineProperty(_nd2, '__esModule', {
        'value': !0
    });
    var _nd4 = _nd3(3);
    _nd2.getCamouflageSlotPersonalEffect = function(_nd5) {
        var _nd6 = new _nd4.SlotItemEffectModel();
        return 'きそ' != _nd5.yomi && 'たま' != _nd5.yomi || (_nd6.kaih = 7, _nd6.souk = 2), _nd6;
    };
},
function(_nd7, _nd8, _nd9) {
    'use strict';
    var _nda = this && this.__importDefault || function(_ndb) {
        return _ndb && _ndb.__esModule ? _ndb : {
            'default': _ndb
        };
    };
    defineModule(_nd8);
    Object.defineProperty(_nd8, '__esModule', {
        'value': !0
    });
    var _ndc = _nd9(3),
        _ndd = _nda(_nd9(0));
    _nd8.getRaderPrivateEffect = function(_nde) {
        var _ndf = new _ndc.SlotItemEffectModel(),
            _ndg = 0,
            _ndh = 0;
        if (569 == _nde.ship_id || 648 == _nde.ship_id || 961 == _nde.ship_id || 951 == _nde.ship_id) _ndg = 1;
        else {
            if (955 != _nde.ship_id && 960 != _nde.ship_id) return _ndf;
            _ndg = 2, _ndh = 1;
        }
        for (var _ndi = 0, _ndj = 0, _ndk = _nde.have_slot_ids(); _ndj < _ndk.length; _ndj++) {
            var _ndl = _ndk[_ndj],
                _ndm = _ndd.default.model.slot.getMst(_ndl),
                _ndn = _ndm.equipType;
            12 != _ndn && 13 != _ndn || (5 <= _ndm.sakuteki && _nde.get_slotnums(parseInt(_ndl)), 2 <= _ndm.taiku && (_ndi += _nde.get_slotnums(parseInt(_ndl))));
        }
        if (0 < _ndi && (1 == _ndg ? (_ndf.houg += 1, _ndf.kaih += 3, _ndf.tyku += 2) : 2 == _ndg && (_ndf.tyku += 2, _ndf.kaih += 1)), 0 == _ndh) return _ndf;
        for (var _ndo = [], _ndp = 0, _ndq = [450]; _ndp < _ndq.length; _ndp++) {
            ! function(_ndr) {
                if (null == _nde.have_slots_dict[_ndr]) return;
                var _nds = _nde.get_each_level_nums(_ndr);
                null == _ndo[_ndr] && (_ndo[_ndr] = []), _nds.forEach(function(_ndt, _ndu) {
                    for (var _ndv = 1; _ndv <= _nde.SLOT_LEVEL_MAX; _ndv++) null == _ndo[_ndr][_ndv] && (_ndo[_ndr][_ndv] = 0), _ndv <= _ndu && (_ndo[_ndr][_ndv] += _ndt);
                });
            }(_ndq[_ndp]);
        }
        var _ndw = null != _ndo[450] ? _ndo[450][4] : 0;
        return 1 == _ndh && 0 < _ndw && (_ndf.houg += 1, _ndf.houm += 1, _ndf.tyku += 1, _ndf.kaih += 2), _ndf;
    };
},
function(_ndx, _ndy, _ndz) {
    'use strict';
    defineModule(_ndy);
    Object.defineProperty(_ndy, '__esModule', {
        'value': !0
    });
    var _ne0 = _ndz(3);
    _ndy.getSearchLightEffect = function(_ne1) {
        var _ne2 = new _ne0.SlotItemEffectModel(),
            _ne3 = _ne1.get_type3_nums(29);
        return 'ひえい' == _ne1.yomi || 'きりしま' == _ne1.yomi || 'ちょうかい' == _ne1.yomi || 'じんつう' == _ne1.yomi || 'あかつき' == _ne1.yomi ? (_ne2.houg += 4, --_ne2.kaih) : 'あきぐも' == _ne1.yomi ? _ne2.houg = _ne2.houg + 2 * _ne3 : 'ゆきかぜ' == _ne1.yomi && (_ne2.houg = _ne2.houg + _ne3, _ne2.tyku = _ne2.tyku + _ne3), 662 != _ne1.ship_id && 663 != _ne1.ship_id && 668 != _ne1.ship_id || (_ne2.raig += 2, _ne2.houg += 4), 'じんつう' == _ne1.yomi && (_ne2.raig += 8, _ne2.houg += 4), _ne2;
    };
},
function(_ne4, _ne5, _ne6) {
    'use strict';
    defineModule(_ne5);
    Object.defineProperty(_ne5, '__esModule', {
        'value': !0
    });
    var _ne7 = _ne6(3);
    _ne5.getSearchLightLargeEffect = function(_ne8) {
        var _ne9 = new _ne7.SlotItemEffectModel();
        'ひえい' == _ne8.yomi || 'きりしま' == _ne8.yomi ? (_ne9.houg += 6, _ne9.kaih -= 2) : 'やまと' != _ne8.yomi && 'むさし' != _ne8.yomi || (_ne9.houg += 4, --_ne9.kaih);
        var _nea = _ne8.get_slotnums(174);
        return 592 == _ne8.ship_id && (_ne9.houg += 3, _ne9.raig += 3, 0 < _nea && (_ne9.raig += 5)), _ne9;
    };
},
function(_neb, _nec, _ned) {
    'use strict';
    defineModule(_nec);
    Object.defineProperty(_nec, '__esModule', {
        'value': !0
    });
    var _nee = _ned(3);
    _nec.getSlot_16InchMkXRensouhou_PersonalEffect = function(_nef) {
        var _neg = new _nee.SlotItemEffectModel();
        if (93 == _nef.ctype) {
            var _neh = _nef.get_slotnums(330);
            0 < _neh && (_neg.houg = _neg.houg + +_neh);
            var _nei = _nef.get_slotnums(331);
            0 < _nei && (_neg.houg = _neg.houg + +_nei, 1496 != _nef.ship_id && 918 != _nef.ship_id || (_neg.houg = _neg.houg + +_nei, _neg.kaih = _neg.kaih + +_nei));
            var _nej = _nef.get_slotnums(332);
            return 0 < _nej && (_neg.houg = _neg.houg + +_nej, 1496 != _nef.ship_id && 918 != _nef.ship_id || (_neg.houg = _neg.houg + +_nej, _neg.kaih = _neg.kaih + +_nej, _neg.tyku = _neg.tyku + +_nej)), _neg;
        }
        var _nek = new _nee.SlotItemEffectModel();
        if (19 == _nef.ctype ? (_nek.houg = 1, 541 != _nef.ship_id && 573 != _nef.ship_id || (_nek.houg += 1)) : 88 == _nef.ctype && (_nek.houg = 1, 576 == _nef.ship_id && (_nek.houg += 1)), !_nek.exists()) return _neg;
        var _nel = _nef.get_slotnums(330) + _nef.get_slotnums(331) + _nef.get_slotnums(332);
        return _neg = _nek.multiply(_nel);
    };
},
function(_nem, _nen, _neo) {
    'use strict';
    defineModule(_nen);
    Object.defineProperty(_nen, '__esModule', {
        'value': !0
    });
    var _nep = _neo(3);
    _nen.getSlot15PersonalEffect = function(_neq) {
        var _ner = new _nep.SlotItemEffectModel(),
            _nes = !1;
        if ((566 == _neq.ship_id || 567 == _neq.ship_id || 568 == _neq.ship_id || 648 == _neq.ship_id || 651 == _neq.ship_id || 656 == _neq.ship_id || 670 == _neq.ship_id || 915 == _neq.ship_id || 951 == _neq.ship_id || 'たけ' == _neq.yomi) && (_nes = !0), 0 == _nes) return _ner;
        var _net = _neq.get_slotnums(15);
        return 30 == _neq.ctype && (1 == _net ? _ner.raig = 2 : 2 <= _net && (_ner.raig = 4)), 'たけ' == _neq.yomi && (_ner.raig += 5, _ner.kaih += 1), _ner;
    };
},
function(_neu, _nev, _new) {
    'use strict';
    defineModule(_nev);
    Object.defineProperty(_nev, '__esModule', {
        'value': !0
    });
    var _nex = _new(3);
    _nev.getSlot16M1PersonalEffect = function(_ney) {
        var _nez = new _nex.SlotItemEffectModel(),
            _nf0 = new _nex.SlotItemEffectModel();
        67 == _ney.ctype || 78 == _ney.ctype || 82 == _ney.ctype || 88 == _ney.ctype || 108 == _ney.ctype || 112 == _ney.ctype ? (_nf0.houg += 2, _nf0.souk += 1, 67 == _ney.ctype && (_nf0.kaih -= 2)) : 149 == _ney.ship_id || 150 == _ney.ship_id || 151 == _ney.ship_id || 152 == _ney.ship_id ? (_nf0.houg += 1, _nf0.souk += 1, _nf0.kaih -= 3) : 591 == _ney.ship_id || 592 == _ney.ship_id ? (_nf0.houg += 2, _nf0.souk += 1, _nf0.kaih -= 2) : 593 != _ney.ship_id && 954 != _ney.ship_id || (_nf0.houg += 1, _nf0.souk += 1, --_nf0.kaih);
        var _nf1 = !0;
        if (_nf0.exists() || (_nf1 = !1), 0 == _nf1) return _nez;
        var _nf2 = _ney.get_slotnums(298) + _ney.get_slotnums(299) + _ney.get_slotnums(300);
        return _nez = _nf0.multiply(_nf2);
    };
},
function(_nf3, _nf4, _nf5) {
    'use strict';
    defineModule(_nf4);
    Object.defineProperty(_nf4, '__esModule', {
        'value': !0
    });
    var _nf6 = _nf5(3);
    _nf4.getSlot18_52_PersonalEffect = function(_nf7) {
        var _nf8 = new _nf6.SlotItemEffectModel(),
            _nf9 = new _nf6.SlotItemEffectModel();
        if (277 == _nf7.ship_id || 278 == _nf7.ship_id || 156 == _nf7.ship_id ? _nf9.houg = 1 : 594 == _nf7.ship_id || 698 == _nf7.ship_id || 646 == _nf7.ship_id ? (_nf9.houg = 1, _nf9.kaih = 1) : 599 != _nf7.ship_id && 610 != _nf7.ship_id || (_nf9.houg = 2, _nf9.kaih = 1), !_nf9.exists()) return _nf8;
        var _nfa = _nf7.get_slotnums(18) + _nf7.get_slotnums(52);
        return _nf8 = _nf9.multiply(_nfa);
    };
},
function(_nfb, _nfc, _nfd) {
    'use strict';
    defineModule(_nfc);
    Object.defineProperty(_nfc, '__esModule', {
        'value': !0
    });
    var _nfe = _nfd(3);
    _nfc.getSlot19PersonalEffect = function(_nff) {
        var _nfg = new _nfe.SlotItemEffectModel(),
            _nfh = new _nfe.SlotItemEffectModel();
        if ('ほうしょう' == _nff.yomi && (_nfh.houg = 2, _nfh.kaih = 2, _nfh.tais = 2, _nfh.tyku = 2), 75 != _nff.ctype && 76 != _nff.ctype || (_nfh.houg = 2, _nfh.tais = 3), 7 == _nff.stype && (_nfh.tyku += 1, _nfh.kaih += 1), 894 != _nff.ship_id && 899 != _nff.ship_id || (_nfh.houg += 1, _nfh.kaih += 1, _nfh.tais += 1, _nfh.tyku += 1), !_nfh.exists()) return _nfg;
        var _nfi = _nff.get_slotnums(19);
        return _nfg = _nfh.multiply(_nfi);
    };
},
function(_nfj, _nfk, _nfl) {
    'use strict';
    defineModule(_nfk);
    Object.defineProperty(_nfk, '__esModule', {
        'value': !0
    });
    var _nfm = _nfl(3);
    _nfk.getSlot35PersonalEffect = function(_nfn) {
        var _nfo = new _nfm.SlotItemEffectModel(),
            _nfp = new _nfm.SlotItemEffectModel();
        return 149 == _nfn.ship_id || 591 == _nfn.ship_id || 592 == _nfn.ship_id ? (_nfp.houg += 1, _nfp.tyku += 1) : 150 == _nfn.ship_id ? _nfp.tyku += 1 : 151 == _nfn.ship_id || 593 == _nfn.ship_id || 954 == _nfn.ship_id ? (_nfp.tyku += 1, _nfp.kaih += 1) : 152 == _nfn.ship_id && (_nfp.houg += 1), _nfp.exists() ? _nfo = _nfp.multiply(1) : _nfo;
    };
},
function(_nfq, _nfr, _nfs) {
    'use strict';
    defineModule(_nfr);
    Object.defineProperty(_nfr, '__esModule', {
        'value': !0
    });
    var _nft = _nfs(3);
    _nfr.getSlot47PersonalEffect = function(_nfu) {
        var _nfv = new _nft.SlotItemEffectModel(),
            _nfw = new _nft.SlotItemEffectModel();
        if (0 <= ['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_nfu.yomi) ? (_nfw.tais += 3, _nfw.kaih += 2, _nfw.houg += 1) : 0 <= ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_nfu.yomi) && (_nfw.tais += 2, _nfw.kaih += 2), !_nfw.exists()) return _nfv;
        var _nfx = _nfu.get_slotnums(47) + _nfu.get_slotnums(438);
        return _nfv = _nfw.multiply(_nfx);
    };
},
function(_nfy, _nfz, _ng0) {
    'use strict';
    var _ng1 = this && this.__importDefault || function(_ng2) {
        return _ng2 && _ng2.__esModule ? _ng2 : {
            'default': _ng2
        };
    };
    defineModule(_nfz);
    Object.defineProperty(_nfz, '__esModule', {
        'value': !0
    });
    var _ng3 = _ng0(3),
        _ng4 = _ng1(_ng0(0));
    _nfz.getSlot50PersonalEffect = function(_ng5) {
        var _ng6 = new _ng3.SlotItemEffectModel(),
            _ng7 = !1,
            _ng8 = new _ng3.SlotItemEffectModel();
        7 != _ng5.ctype && 13 != _ng5.ctype && 8 != _ng5.ctype && 29 != _ng5.ctype && 9 != _ng5.ctype && 31 != _ng5.ctype || (_ng8.houg += 1, _ng7 = !0), 8 != _ng5.ctype && 29 != _ng5.ctype && 9 != _ng5.ctype && 31 != _ng5.ctype || (_ng8.houg += 1, _ng8.kaih += 1, _ng7 = !0);
        var _ng9 = _ng5.get_slotnums(50);
        9 != _ng5.ctype && 31 != _ng5.ctype || 2 <= _ng9 && (_ng8.houg += 1, _ng7 = !0);
        var _nga = 0;
        if (501 != _ng5.ship_id && 506 != _ng5.ship_id || (_ng8.houg += 1, _ng7 = !0, _nga = 1), 0 == _ng7) return _ng6;
        _ng6 = _ng8.multiply(_ng9);
        for (var _ngb = 0, _ngc = 0, _ngd = _ng5.have_slot_ids(); _ngc < _ngd.length; _ngc++) {
            var _nge = _ngd[_ngc],
                _ngf = _ng4.default.model.slot.getMst(_nge),
                _ngg = _ngf.equipType;
            12 != _ngg && 13 != _ngg || 5 <= _ngf.sakuteki && (_ngb += _ng5.get_slotnums(parseInt(_nge)));
        }
        0 < _ngb && (7 == _ng5.ctype || 13 == _ng5.ctype ? 0 == _ng5.get_slotnums(90) && (_ng6.houg += 1, _ng6.kaih += 1, _ng6.raig += 1) : 8 != _ng5.ctype && 29 != _ng5.ctype && 9 != _ng5.ctype && 31 != _ng5.ctype || (_ng6.houg += 3, _ng6.kaih += 2, _ng6.raig += 2), 501 != _ng5.ship_id && 506 != _ng5.ship_id || (_ng6.houg += 1, _ng6.kaih += 1));
        var _ngh = _ng5.get_slotnums(30),
            _ngi = _ng5.get_slotnums(410);
        return 1 == _nga && (0 < _ngh + _ngi && (_ng6.houg += 1, _ng6.tyku += 3, _ng6.kaih += 2), 0 < _ngi && (_ng6.houg += 2)), _ng6;
    };
},
function(_ngj, _ngk, _ngl) {
    'use strict';
    defineModule(_ngk);
    Object.defineProperty(_ngk, '__esModule', {
        'value': !0
    });
    var _ngm = _ngl(3);
    _ngk.getSlot58PersonalEffect = function(_ngn) {
        var _ngo = new _ngm.SlotItemEffectModel(),
            _ngp = new _ngm.SlotItemEffectModel();
        if ('しまかぜ' != _ngn.yomi && 4 != _ngn.stype && 54 != _ngn.ctype || (_ngp.raig = 1), !_ngp.exists()) return _ngo;
        var _ngq = _ngn.get_slotnums(58);
        return _ngo = _ngp.multiply(_ngq);
    };
},
function(_ngr, _ngs, _ngt) {
    'use strict';
    defineModule(_ngs);
    Object.defineProperty(_ngs, '__esModule', {
        'value': !0
    });
    var _ngu = _ngt(3);
    _ngs.getSlot61PersonalEffect = function(_ngv) {
        var _ngw = new _ngu.SlotItemEffectModel();
        if (553 == _ngv.ship_id) _ngw.houg = 3, _ngw.kaih = 2, _ngw.souk = 1, _ngw.houm = 5, _ngw.leng = 1;
        else if (554 == _ngv.ship_id) _ngw.houg = 3, _ngw.kaih = 3, _ngw.souk = 3, _ngw.houm = 5, _ngw.leng = 1;
        else if (196 == _ngv.ship_id) _ngw.houm = 5, _ngw.leng = 1;
        else {
            if (197 != _ngv.ship_id) return _ngw;
            _ngw.houm = 5, _ngw.leng = 1;
        }
        return _ngw;
    }, _ngs.getSlot61PersonalEffect2 = function(_ngx) {
        var _ngy = new _ngu.SlotItemEffectModel();
        if (null == _ngx.have_slots_dict[61]) return _ngy;
        for (var _ngz = 0, _nh0 = 0, _nh1 = _ngx.have_slots_dict[61]; _nh0 < _nh1.length; _nh0++) {
            var _nh2 = _nh1[_nh0].level;
            _ngz < _nh2 && (_ngz = _nh2);
        }
        return 0 == _ngz || ('そうりゅう' == _ngx.yomi ? (_ngy.houg += 3, _ngy.saku += 3) : 'ひりゅう' == _ngx.yomi && (_ngy.houg += 2, _ngy.saku += 2), 508 != _ngx.ship_id && 509 != _ngx.ship_id && 560 != _ngx.ship_id || (_ngy.houg += 1, _ngy.saku += 1), 8 <= _ngz && 197 == _ngx.ship_id && (_ngy.houg += 1, _ngy.saku += 1)), _ngy;
    };
},
function(_nh3, _nh4, _nh5) {
    'use strict';
    defineModule(_nh4);
    Object.defineProperty(_nh4, '__esModule', {
        'value': !0
    });
    var _nh6 = _nh5(3);
    _nh4.getSlot63PersonalEffect = function(_nh7) {
        var _nh8 = new _nh6.SlotItemEffectModel(),
            _nh9 = new _nh6.SlotItemEffectModel();
        1 != _nh7.ctype && 5 != _nh7.ctype && 10 != _nh7.ctype || (_nh9.tyku += 1), 'ゆうだち' == _nh7.yomi && (_nh9.houg += 1, _nh9.tyku += 1, _nh9.kaih += 2), 145 == _nh7.ship_id || 961 == _nh7.ship_id ? _nh9.houg += 1 : 144 == _nh7.ship_id ? _nh9.raig += 1 : 469 == _nh7.ship_id ? _nh9.kaih += 2 : 242 == _nh7.ship_id || 497 == _nh7.ship_id || 244 == _nh7.ship_id || 498 == _nh7.ship_id ? _nh9.kaih += 1 : 627 == _nh7.ship_id ? _nh9.houg += 1 : 903 != _nh7.ship_id && 908 != _nh7.ship_id || (_nh9.houg += 2);
        var _nha = !0;
        if (_nh9.exists() || (_nha = !1), 0 == _nha) return _nh8;
        var _nhb = _nh7.get_slotnums(63);
        return _nh8 = _nh9.multiply(_nhb);
    };
},
function(_nhc, _nhd, _nhe) {
    'use strict';
    defineModule(_nhd);
    Object.defineProperty(_nhd, '__esModule', {
        'value': !0
    });
    var _nhf = _nhe(3);
    _nhd.getSlot67PersonalEffect = function(_nhg) {
        var _nhh = new _nhf.SlotItemEffectModel(),
            _nhi = new _nhf.SlotItemEffectModel();
        if (13 != _nhg.stype && 14 != _nhg.stype && (_nhi.raig = -5), !_nhi.exists()) return _nhh;
        var _nhj = _nhg.get_slotnums(67);
        return _nhh = _nhi.multiply(_nhj);
    };
},
function(_nhk, _nhl, _nhm) {
    'use strict';
    defineModule(_nhl);
    Object.defineProperty(_nhl, '__esModule', {
        'value': !0
    });
    var _nhn = _nhm(3);
    _nhl.getSlot69PersonalEffect = function(_nho) {
        var _nhp = new _nhn.SlotItemEffectModel(),
            _nhq = !1,
            _nhr = new _nhn.SlotItemEffectModel();
        if (554 == _nho.ship_id || 646 == _nho.ship_id ? (_nhr.houg += 1, _nhr.tais += 2, _nhq = !0) : 553 == _nho.ship_id && (_nhr.houg += 1, _nhr.tais += 1, _nhq = !0), 0 == _nhq) return _nhp;
        var _nhs = _nho.get_slotnums(69);
        return _nhp.add(_nhr.multiply(_nhs)), _nhp;
    };
},
function(_nht, _nhu, _nhv) {
    'use strict';
    var _nhw = this && this.__importDefault || function(_nhx) {
        return _nhx && _nhx.__esModule ? _nhx : {
            'default': _nhx
        };
    };
    defineModule(_nhu);
    Object.defineProperty(_nhu, '__esModule', {
        'value': !0
    });
    var _nhy = _nhv(3),
        _nhz = _nhw(_nhv(0));
    _nhu.getSlot78PersonalEffect = function(_ni0) {
        var _ni1 = new _nhy.SlotItemEffectModel(),
            _ni2 = !1,
            _ni3 = new _nhy.SlotItemEffectModel(),
            _ni4 = 0,
            _ni5 = 0,
            _ni6 = !1;
        if (48 == _ni0.ctype && (_ni3.houg += 1, _ni3.kaih += 1, _ni5 = _ni4 = 1, _ni2 = _ni6 = !0), 0 == _ni2) return _ni1;
        var _ni7 = _ni0.get_slotnums(78);
        _ni1.add(_ni3.multiply(_ni7));
        var _ni8, _ni9 = 0,
            _nia = _ni0.get_each_level_nums(78),
            _nib = 0;
        if (_ni6) {
            _nia.map(function(_nic, _nid) {
                7 <= _nid && (_nib += _nic);
            });
            for (var _nie = 0, _nif = _ni0.have_slot_ids(); _nie < _nif.length; _nie++) {
                var _nig = _nif[_nie],
                    _nih = _nhz.default.model.slot.getMst(_nig),
                    _nii = _nih.equipType;
                12 != _nii && 13 != _nii || 5 <= _nih.sakuteki && (_ni9 += _ni0.get_slotnums(parseInt(_nig)));
            }
        }
        return 1 == _ni4 && 0 < _ni9 && (_ni1.houg += 2, _ni1.kaih += 2, _ni1.raig += 2), 1 == _ni5 && (_ni1.houg += +_nib, _ni8 = _nia[10], _ni1.souk += +_ni8), _ni1;
    };
},
function(_nij, _nik, _nil) {
    'use strict';
    defineModule(_nik);
    Object.defineProperty(_nik, '__esModule', {
        'value': !0
    });
    var _nim = _nil(3);
    _nik.getSlot79And81PersonalEffect = function(_nin) {
        var _nio = new _nim.SlotItemEffectModel(),
            _nip = new _nim.SlotItemEffectModel();
        if (553 == _nin.ship_id) _nip.houg = 3;
        else if (82 == _nin.ship_id) _nip.houg = 2;
        else if (88 == _nin.ship_id) _nip.houg = 2;
        else if (554 == _nin.ship_id) _nip.houg = 3;
        else if (411 == _nin.ship_id) _nip.houg = 2;
        else {
            if (412 != _nin.ship_id) return _nio;
            _nip.houg = 2;
        }
        var _niq = _nin.get_slotnums(79) + _nin.get_slotnums(81);
        return _nio = _nip.multiply(_niq);
    };
},
function(_nir, _nis, _nit) {
    'use strict';
    defineModule(_nis);
    Object.defineProperty(_nis, '__esModule', {
        'value': !0
    });
    var _niu = _nit(3);
    _nis.getSlot82PersonalEffect = function(_niv) {
        var _niw = new _niu.SlotItemEffectModel(),
            _nix = new _niu.SlotItemEffectModel();
        if (76 == _niv.ctype && (_nix.tais = 1, _nix.kaih = 1), !_nix.exists()) return _niw;
        var _niy = _niv.get_slotnums(82);
        return _niw = _nix.multiply(_niy);
    };
},
function(_niz, _nj0, _nj1) {
    'use strict';
    defineModule(_nj0);
    Object.defineProperty(_nj0, '__esModule', {
        'value': !0
    });
    var _nj2 = _nj1(3);
    _nj0.getSlot87PersonalEffect = function(_nj3) {
        var _nj4, _nj5 = new _nj2.SlotItemEffectModel(),
            _nj6 = !1,
            _nj7 = new _nj2.SlotItemEffectModel(),
            _nj8 = 0;
        if (951 == _nj3.ship_id ? (_nj7.houg += 1, _nj7.kaih += 1, _nj7.raig += 1, _nj7.houm += 1, _nj6 = !0, _nj8 = 1) : 181 == _nj3.ship_id || 316 == _nj3.ship_id || 50 == _nj3.ship_id || 229 == _nj3.ship_id || 961 == _nj3.ship_id ? _nj8 = 2 : 591 != _nj3.ship_id && 592 != _nj3.ship_id && 593 != _nj3.ship_id && 954 != _nj3.ship_id || (_nj5.kaih += 2, _nj5.raig += 1, _nj8 = 3), 38 != _nj3.ctype && 54 != _nj3.ctype && 101 != _nj3.ctype || (_nj8 = 4), _nj6 && (_nj4 = _nj3.get_slotnums(87), _nj5.add(_nj7.multiply(_nj4))), 0 == _nj8) return _nj5;
        var _nj9 = _nj3.get_each_level_nums(87),
            _nja = [];
        return 0 < _nj8 && _nj9.forEach(function(_njb, _njc) {
            for (var _njd = 1; _njd <= _nj3.SLOT_LEVEL_MAX; _njd++) null == _nja[_njd] && (_nja[_njd] = 0), _njd <= _njc && (_nja[_njd] += _njb);
        }), 1 == _nj8 ? (1 <= _nja[6] && (_nj5.tyku += +_nja[6]), 1 <= _nja[7] && (_nj5.kaih += +_nja[7]), 1 <= _nja[8] && (_nj5.raig += +_nja[8]), 1 <= _nja[9] && (_nj5.houg += +_nja[9]), 1 <= _nja[10] && (_nj5.houm += +_nja[10])) : 2 == _nj8 ? (1 <= _nja[6] && (_nj5.kaih += +_nja[6]), 1 <= _nja[7] && (_nj5.raig += +_nja[7]), 1 <= _nja[8] && (_nj5.houg += +_nja[8]), 1 <= _nja[9] && (_nj5.houm += +_nja[9]), 1 <= _nja[10] && (_nj5.kaih += +_nja[10])) : 3 == _nj8 ? (0 < _nja[6] && (_nj5.kaih += 1), 0 < _nja[8] && (_nj5.raig += 1), 0 < _nja[10] && (_nj5.houg += 1)) : 4 == _nj8 && (1 <= _nja[7] && (_nj5.kaih += +_nja[7]), 1 <= _nja[8] && (_nj5.raig += +_nja[8]), 1 <= _nja[10] && (_nj5.houm += +_nja[10])), _nj5;
    };
},
function(_nje, _njf, _njg) {
    'use strict';
    var _njh = this && this.__importDefault || function(_nji) {
        return _nji && _nji.__esModule ? _nji : {
            'default': _nji
        };
    };
    defineModule(_njf);
    Object.defineProperty(_njf, '__esModule', {
        'value': !0
    });
    var _njj = _njg(3),
        _njk = _njh(_njg(0));
    _njf.getSlot90PersonalEffect = function(_njl) {
        var _njm, _njn = new _njj.SlotItemEffectModel(),
            _njo = new _njj.SlotItemEffectModel();
        142 == _njl.ship_id ? (_njo.houg += 2, _njo.kaih += 1) : 295 == _njl.ship_id || 416 == _njl.ship_id || 417 == _njl.ship_id ? _njo.houg += 1 : 264 == _njl.ship_id ? (_njo.houg += 1, _njo.tyku += 1) : 501 != _njl.ship_id && 506 != _njl.ship_id || (_njo.houg += 1), 7 != _njl.ctype && 13 != _njl.ctype && 8 != _njl.ctype && 29 != _njl.ctype && 9 != _njl.ctype && 31 != _njl.ctype || (_njo.houg += 1), _njo.exists() && (_njm = _njl.get_slotnums(90), _njn = _njo.multiply(_njm));
        var _njp = [];
        if ('あおば' == _njl.yomi && (_njp[1] = 1), 13 != _njl.ctype && 7 != _njl.ctype || (_njp[2] = 1), 0 == _njp.length) return _njn;
        for (var _njq = 0, _njr = 0, _njs = 0, _njt = _njl.have_slot_ids(); _njs < _njt.length; _njs++) {
            var _nju = _njt[_njs],
                _njv = _njk.default.model.slot.getMst(_nju),
                _njw = _njv.equipType;
            12 != _njw && 13 != _njw || (5 <= _njv.sakuteki && (_njq += _njl.get_slotnums(parseInt(_nju))), 2 <= _njv.taiku && (_njr += _njl.get_slotnums(parseInt(_nju))));
        }
        return 0 < _njr && null != _njp[1] && (_njn.tyku += 5, _njn.kaih += 2), 0 < _njq && null != _njp[2] && (_njn.houg += 3, _njn.kaih += 2, _njn.raig += 2), _njn;
    };
},
function(_njx, _njy, _njz) {
    'use strict';
    defineModule(_njy);
    Object.defineProperty(_njy, '__esModule', {
        'value': !0
    });
    var _nk0 = _njz(3);
    _njy.getSlot93PersonalEffect = function(_nk1) {
        var _nk2 = new _nk0.SlotItemEffectModel();
        return 'そうりゅう' == _nk1.yomi ? _nk2.houg = 1 : 'ひりゅう' == _nk1.yomi && (_nk2.houg = 3), _nk2;
    };
},
function(_nk3, _nk4, _nk5) {
    'use strict';
    defineModule(_nk4);
    Object.defineProperty(_nk4, '__esModule', {
        'value': !0
    });
    var _nk6 = _nk5(3);
    _nk4.getSlot94PersonalEffect = function(_nk7) {
        var _nk8 = new _nk6.SlotItemEffectModel();
        if (196 == _nk7.ship_id) _nk8.houg = 7;
        else {
            if (197 != _nk7.ship_id) return _nk8;
            _nk8.houg = 3;
        }
        return _nk8;
    };
},
function(_nk9, _nka, _nkb) {
    'use strict';
    defineModule(_nka);
    Object.defineProperty(_nka, '__esModule', {
        'value': !0
    });
    var _nkc = _nkb(3);
    _nka.getSlot99PersonalEffect = function(_nkd) {
        var _nke = new _nkc.SlotItemEffectModel();
        return 'そうりゅう' == _nkd.yomi ? _nke.houg = 4 : 'ひりゅう' == _nkd.yomi && (_nke.houg = 1), _nke;
    };
},
function(_nkf, _nkg, _nkh) {
    'use strict';
    defineModule(_nkg);
    Object.defineProperty(_nkg, '__esModule', {
        'value': !0
    });
    var _nki = _nkh(3);
    _nkg.getSlot100PersonalEffect = function(_nkj) {
        var _nkk = new _nki.SlotItemEffectModel(),
            _nkl = new _nki.SlotItemEffectModel();
        if (553 == _nkj.ship_id) _nkl.houg = 4;
        else {
            if (554 != _nkj.ship_id) return 196 == _nkj.ship_id ? _nkk.houg = 3 : 197 == _nkj.ship_id && (_nkk.houg = 6), _nkk;
            _nkl.houg = 4;
        }
        var _nkm = _nkj.get_slotnums(100);
        return _nkk = _nkl.multiply(_nkm);
    };
},
function(_nkn, _nko, _nkp) {
    'use strict';
    defineModule(_nko);
    Object.defineProperty(_nko, '__esModule', {
        'value': !0
    });
    var _nkq = _nkp(3);
    _nko.getSlot104PersonalEffect = function(_nkr) {
        var _nks = new _nkq.SlotItemEffectModel(),
            _nkt = new _nkq.SlotItemEffectModel();
        if (149 == _nkr.ship_id || 591 == _nkr.ship_id) _nkt.houg = 2;
        else if (150 == _nkr.ship_id || 592 == _nkr.ship_id) _nkt.houg = 1;
        else if (152 == _nkr.ship_id) _nkt.houg = 1;
        else {
            if (151 != _nkr.ship_id && 593 != _nkr.ship_id && 954 != _nkr.ship_id) return _nks;
            _nkt.houg = 2, _nkt.tyku = 1, _nkt.kaih = 2;
        }
        var _nku = _nkr.get_slotnums(104);
        return _nks = _nkt.multiply(_nku);
    };
},
function(_nkv, _nkw, _nkx) {
    'use strict';
    defineModule(_nkw);
    Object.defineProperty(_nkw, '__esModule', {
        'value': !0
    });
    var _nky = _nkx(3);
    _nkw.getSlot106PersonalEffect = function(_nkz) {
        var _nl0 = new _nky.SlotItemEffectModel(),
            _nl1 = new _nky.SlotItemEffectModel();
        if (0 <= [407, 419, 145, 151, 541, 911, 916, 593, 954, 961].indexOf(_nkz.ship_id) ? (_nl1.houg += 1, _nl1.tyku += 2, _nl1.souk += 1, _nl1.kaih += 3) : 0 <= ['おおよど', 'ひびき', 'かしま'].indexOf(_nkz.yomi) ? (_nl1.tyku += 1, _nl1.souk += 1, _nl1.kaih += 3) : 0 <= ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_nkz.yomi) && (_nl1.tyku += 2, _nl1.souk += 1, _nl1.kaih += 2, 663 != _nkz.ship_id && 668 != _nkz.ship_id || (_nl0.houg += 1, _nl0.tyku += 1, _nl0.souk += 1, _nl0.kaih += 1), 668 == _nkz.ship_id && (_nl0.tyku += 1, _nl0.kaih += 1)), !_nl1.exists()) return _nl0;
        var _nl2 = _nkz.get_slotnums(106) + _nkz.get_slotnums(450);
        return _nl0.add(_nl1.multiply(_nl2)), _nl0;
    };
},
function(_nl3, _nl4, _nl5) {
    'use strict';
    defineModule(_nl4);
    Object.defineProperty(_nl4, '__esModule', {
        'value': !0
    });
    var _nl6 = _nl5(3);
    _nl4.getSlot119PersonalEffect = function(_nl7) {
        var _nl8 = new _nl6.SlotItemEffectModel(),
            _nl9 = new _nl6.SlotItemEffectModel();
        34 == _nl7.ctype || 56 == _nl7.ctype ? _nl9.houg += 1 : 90 == _nl7.ctype && (_nl9.houg += 2, _nl9.raig += 1);
        var _nla = !0;
        if (_nl9.exists() || (_nla = !1), 0 == _nla) return _nl8;
        var _nlb = _nl7.get_slotnums(119);
        return _nl8 = _nl9.multiply(_nlb);
    };
},
function(_nlc, _nld, _nle) {
    'use strict';
    defineModule(_nld);
    Object.defineProperty(_nld, '__esModule', {
        'value': !0
    });
    var _nlf = _nle(3);
    _nld.getSlot120mm50GroupPersonalEffect = function(_nlg) {
        var _nlh = new _nlf.SlotItemEffectModel(),
            _nli = !1,
            _nlj = new _nlf.SlotItemEffectModel(),
            _nlk = _nlg.get_slotnums(147),
            _nll = _nlg.get_slotnums(393),
            _nlm = _nlg.get_slotnums(394),
            _nln = new _nlf.SlotItemEffectModel(),
            _nlo = new _nlf.SlotItemEffectModel();
        if (61 == _nlg.ctype && (_nlj.houg += 1, _nlj.kaih += 1, _nli = !0, 1 <= _nll && (_nln.houg += 1, _nln.tyku += 1), 1 <= _nlm && (_nlo.houg += 1, _nlo.tyku += 1, _nlo.kaih += 1, 'グレカーレ' == _nlg.yomi && (_nlo.kaih += 1))), 0 == _nli) return _nlh;
        var _nlp = _nlk + _nll + _nlm;
        return _nlh.add(_nlj.multiply(_nlp)).add(_nln.multiply(_nll)).add(_nlo.multiply(_nlm)), _nlh;
    };
},
function(_nlq, _nlr, _nls) {
    'use strict';
    var _nlt = this && this.__importDefault || function(_nlu) {
        return _nlu && _nlu.__esModule ? _nlu : {
            'default': _nlu
        };
    };
    defineModule(_nlr);
    Object.defineProperty(_nlr, '__esModule', {
        'value': !0
    });
    var _nlv = _nls(3),
        _nlw = _nlt(_nls(0));
    _nlr.getSlot122PersonalEffect = function(_nlx) {
        var _nly = new _nlv.SlotItemEffectModel(),
            _nlz = 0,
            _nm0 = 0,
            _nm1 = !1;
        656 == _nlx.ship_id && (_nm1 = !0, _nm0 = _nlz = 1);
        var _nm2 = 0,
            _nm3 = 0,
            _nm4 = _nlx.get_each_level_nums(122),
            _nm5 = 0;
        if (_nm1) {
            _nm4.forEach(function(_nm6, _nm7) {
                4 <= _nm7 && (_nm5 += _nm6);
            });
            for (var _nm8 = 0, _nm9 = _nlx.have_slot_ids(); _nm8 < _nm9.length; _nm8++) {
                var _nma = _nm9[_nm8],
                    _nmb = _nlw.default.model.slot.getMst(_nma),
                    _nmc = _nmb.equipType;
                12 != _nmc && 13 != _nmc || (5 <= _nmb.sakuteki && (_nm2 += _nlx.get_slotnums(parseInt(_nma))), 2 <= _nmb.taiku && (_nm3 += _nlx.get_slotnums(parseInt(_nma))));
            }
        }
        return 0 < _nm5 && (1 == _nm0 && (0 < _nm2 && (_nly.houg += 4, _nly.kaih += 3), 0 < _nm3 && (_nly.tyku += 4, _nly.kaih += 3)), 1 == _nlz && (_nly.houg += 5 * _nm5, _nly.tyku += 3 * _nm5, _nly.kaih += 2 * _nm5)), _nly;
    };
},
function(_nmd, _nme, _nmf) {
    'use strict';
    defineModule(_nme);
    Object.defineProperty(_nme, '__esModule', {
        'value': !0
    });
    var _nmg = _nmf(3);
    _nme.getSlot129PersonalEffect = function(_nmh) {
        var _nmi = new _nmg.SlotItemEffectModel(),
            _nmj = !1,
            _nmk = new _nmg.SlotItemEffectModel();
        if (0 <= [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_nmh.ctype) ? (_nmk.houg = 1, _nmk.raig = 2, _nmk.kaih = 2, _nmk.tais = 2, _nmk.saku = 1, _nmj = !0) : 0 <= [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_nmh.ctype) ? (_nmk.houg = 1, _nmk.raig = 2, _nmk.kaih = 2, _nmk.saku = 3, _nmj = !0) : 0 <= [7, 13, 29, 8, 9, 31].indexOf(_nmh.ctype) && (_nmk.houg = 1, _nmk.kaih = 2, _nmk.saku = 3, _nmj = !0), 0 == _nmj) return _nmi;
        var _nml = _nmh.get_slotnums(129);
        return _nmi = _nmk.multiply(_nml);
    };
},
function(_nmm, _nmn, _nmo) {
    'use strict';
    defineModule(_nmn);
    Object.defineProperty(_nmn, '__esModule', {
        'value': !0
    });
    var _nmp = _nmo(3);
    _nmn.getSlot143PersonalEffect = function(_nmq) {
        var _nmr = new _nmp.SlotItemEffectModel();
        return 'あかぎ' == _nmq.yomi ? _nmr.houg = 3 : 'かが' == _nmq.yomi || 'しょうかく' == _nmq.yomi ? _nmr.houg = 2 : 'ずいかく' != _nmq.yomi && 'りゅうじょう' != _nmq.yomi || (_nmr.houg = 1), _nmr;
    };
},
function(_nms, _nmt, _nmu) {
    'use strict';
    defineModule(_nmt);
    Object.defineProperty(_nmt, '__esModule', {
        'value': !0
    });
    var _nmv = _nmu(3);
    _nmt.getSlot144PersonalEffect = function(_nmw) {
        var _nmx = new _nmv.SlotItemEffectModel();
        return 'あかぎ' == _nmw.yomi ? _nmx.houg = 3 : 'かが' == _nmw.yomi ? _nmx.houg = 2 : 'しょうかく' == _nmw.yomi ? (_nmx.houg = 2, 461 != _nmw.ship_id && 466 != _nmw.ship_id || (_nmx.houg += 2)) : 'ずいかく' == _nmw.yomi ? (_nmx.houg = 1, 462 != _nmw.ship_id && 467 != _nmw.ship_id || (_nmx.houg += 1)) : 'りゅうじょう' == _nmw.yomi && (_nmx.houg = 1), _nmx;
    };
},
function(_nmy, _nmz, _nn0) {
    'use strict';
    defineModule(_nmz);
    Object.defineProperty(_nmz, '__esModule', {
        'value': !0
    });
    var _nn1 = _nn0(3);
    _nmz.getSlot149PersonalEffect = function(_nn2) {
        var _nn3 = new _nn1.SlotItemEffectModel(),
            _nn4 = new _nn1.SlotItemEffectModel(),
            _nn5 = !1;
        return 488 == _nn2.ship_id || 141 == _nn2.ship_id || 160 == _nn2.ship_id || 622 == _nn2.ship_id || 623 == _nn2.ship_id || 656 == _nn2.ship_id || 961 == _nn2.ship_id ? (_nn4.tais = 1, _nn4.kaih = 3, _nn5 = !0) : 624 == _nn2.ship_id ? (_nn4.tais = 3, _nn4.kaih = 5, _nn5 = !0) : 662 == _nn2.ship_id && (_nn4.tais = 2, _nn4.kaih = 4, _nn5 = !0), 54 == _nn2.ctype && (_nn4.tais = 1, _nn4.kaih = 2, _nn5 = !0), 0 == _nn5 ? _nn3 : _nn3 = _nn4.multiply(1);
    };
},
function(_nn6, _nn7, _nn8) {
    'use strict';
    defineModule(_nn7);
    Object.defineProperty(_nn7, '__esModule', {
        'value': !0
    });
    var _nn9 = _nn8(3);
    _nn7.getSlot171PersonalEffect = function(_nna) {
        var _nnb = new _nn9.SlotItemEffectModel(),
            _nnc = 0;
        'アメリカ' == _nna.getCountryName() && (_nnc = 1), 65 != _nna.ctype && 93 != _nna.ctype && 102 != _nna.ctype && 107 != _nna.ctype && 125 != _nna.ctype || (_nnb.houg += 1, _nnb.saku += 1, _nnc = 2);
        var _nnd = _nna.get_each_level_nums(171),
            _nne = 0,
            _nnf = 0,
            _nng = 0;
        return 0 < _nnc && (_nnd.map(function(_nnh, _nni) {
            5 <= _nni && (_nne += _nnh), 3 <= _nni && (_nnf += _nnh), 8 <= _nni && (_nng += _nnh);
        }), 1 != _nnc && 2 != _nnc || (0 < _nnd[10] && (_nnb.houg += 1), 0 < _nne && (_nnb.kaih += 1)), 2 == _nnc && (0 < _nnf && (_nnb.saku += 1), 0 < _nng && (_nnb.saku += 1))), _nnb;
    };
},
function(_nnj, _nnk, _nnl) {
    'use strict';
    defineModule(_nnk);
    Object.defineProperty(_nnk, '__esModule', {
        'value': !0
    });
    var _nnm = _nnl(3);
    _nnk.getSlot174PersonalEffect = function(_nnn) {
        var _nno = new _nnm.SlotItemEffectModel(),
            _nnp = new _nnm.SlotItemEffectModel();
        if (66 == _nnn.ctype && (_nnp.raig = 1, _nnp.kaih = 2), 591 == _nnn.ship_id || 592 == _nnn.ship_id || 954 == _nnn.ship_id ? (_nnp.raig += 6, _nnp.kaih += 3) : 593 == _nnn.ship_id ? (_nnp.raig += 5, _nnp.kaih += 2) : 488 != _nnn.ship_id && 622 != _nnn.ship_id && 623 != _nnn.ship_id && 624 != _nnn.ship_id || (_nnp.houg += 2, _nnp.raig += 4, _nnp.kaih += 4), !_nnp.exists()) return _nno;
        var _nnq = _nnn.get_slotnums(174);
        return _nno = _nnp.multiply(_nnq);
    };
},
function(_nnr, _nns, _nnt) {
    'use strict';
    defineModule(_nns);
    Object.defineProperty(_nns, '__esModule', {
        'value': !0
    });
    var _nnu = _nnt(3);
    _nns.getSlot179PersonalEffect = function(_nnv) {
        var _nnw = new _nnu.SlotItemEffectModel(),
            _nnx = new _nnu.SlotItemEffectModel();
        if (54 == _nnv.ctype && (_nnx.raig = 1), !_nnx.exists()) return _nnw;
        var _nny = _nnv.get_slotnums(179);
        return _nnw = _nnx.multiply(_nny);
    };
},
function(_nnz, _no0, _no1) {
    'use strict';
    defineModule(_no0);
    Object.defineProperty(_no0, '__esModule', {
        'value': !0
    });
    var _no2 = _no1(3);
    _no0.getSlot184PersonalEffect = function(_no3) {
        var _no4 = new _no2.SlotItemEffectModel(),
            _no5 = new _no2.SlotItemEffectModel();
        if (68 == _no3.ctype && (_no5.houg += 1, _no5.tyku += 2, _no5.kaih += 3), !_no5.exists()) return _no4;
        var _no6 = _no3.get_slotnums(184);
        return _no4 = _no5.multiply(_no6);
    };
},
function(_no7, _no8, _no9) {
    'use strict';
    defineModule(_no8);
    Object.defineProperty(_no8, '__esModule', {
        'value': !0
    });
    var _noa = _no9(3);
    _no8.getSlot188PersonalEffect = function(_nob) {
        var _noc = new _noa.SlotItemEffectModel(),
            _nod = new _noa.SlotItemEffectModel();
        if (68 == _nob.ctype && (_nod.houg += 3, _nod.tyku += 1, _nod.kaih += 1), !_nod.exists()) return _noc;
        var _noe = _nob.get_slotnums(188);
        return _noc = _nod.multiply(_noe);
    };
},
function(_nof, _nog, _noh) {
    'use strict';
    defineModule(_nog);
    Object.defineProperty(_nog, '__esModule', {
        'value': !0
    });
    var _noi = _noh(3);
    _nog.getSlot189PersonalEffect = function(_noj) {
        var _nok = new _noi.SlotItemEffectModel(),
            _nol = new _noi.SlotItemEffectModel();
        if (68 != _noj.ctype && 63 != _noj.ctype || (_nol.tyku += 1, _nol.kaih += 2), !_nol.exists()) return _nok;
        var _nom = _noj.get_slotnums(189);
        return _nok = _nol.multiply(_nom);
    };
},
function(_non, _noo, _nop) {
    'use strict';
    defineModule(_noo);
    Object.defineProperty(_noo, '__esModule', {
        'value': !0
    });
    var _noq = _nop(3);
    _noo.getSlot194PersonalEffect = function(_nor) {
        var _nos = new _noq.SlotItemEffectModel(),
            _not = new _noq.SlotItemEffectModel();
        if (70 == _nor.ctype ? (_not.houg += 3, _not.kaih += 2, _not.saku += 2) : 72 != _nor.ctype && 62 != _nor.ctype || (_not.kaih += 1, _not.saku += 2), 392 == _nor.ship_id && (_not.houg += 1, _not.kaih += 2, _not.saku += 2), !_not.exists()) return _nos;
        var _nou = _nor.get_slotnums(194);
        return _nos = _not.multiply(_nou);
    };
},
function(_nov, _now, _nox) {
    'use strict';
    defineModule(_now);
    Object.defineProperty(_now, '__esModule', {
        'value': !0
    });
    var _noy = _nox(3);
    _now.getSlot204PersonalEffect = function(_noz) {
        var _np0 = new _noy.SlotItemEffectModel();
        if (591 != _noz.ship_id && 592 != _noz.ship_id && 593 != _noz.ship_id && 954 != _noz.ship_id) return _np0;
        _np0.souk = _np0.souk + 1, _np0.raig = _np0.raig + 1;
        for (var _np1 = _noz.get_each_level_nums(204), _np2 = 0, _np3 = 0; _np3 <= 10; _np3++) 7 <= _np3 && (_np2 += _np1[_np3]);
        return 0 < _np2 && (_np0.souk = _np0.souk + 1), 0 < _np1[10] && (_np0.raig = _np0.raig + 1), _np0;
    };
},
function(_np4, _np5, _np6) {
    'use strict';
    defineModule(_np5);
    Object.defineProperty(_np5, '__esModule', {
        'value': !0
    });
    var _np7 = _np6(3);
    _np5.getSlot228PersonalEffect = function(_np8) {
        var _np9 = new _np7.SlotItemEffectModel(),
            _npa = new _np7.SlotItemEffectModel();
        if ('ほうしょう' == _np8.yomi && (_npa.houg = 3, _npa.kaih = 4, _npa.tais = 4, _npa.tyku = 3), 75 != _np8.ctype && 76 != _np8.ctype || (_npa.houg = 2, _npa.tais = 5, _npa.tyku = 1, _npa.kaih = 1), 7 == _np8.stype && (_npa.tais += 2, _npa.tyku += 1, _npa.kaih += 1), 894 != _np8.ship_id && 899 != _np8.ship_id || (_npa.houg += 1, _npa.kaih += 2, _npa.tais += 2, _npa.tyku += 1), !_npa.exists()) return _np9;
        var _npb = _np8.get_slotnums(228);
        return _np9 = _npa.multiply(_npb);
    };
},
function(_npc, _npd, _npe) {
    'use strict';
    var _npf = this && this.__importDefault || function(_npg) {
        return _npg && _npg.__esModule ? _npg : {
            'default': _npg
        };
    };
    defineModule(_npd);
    Object.defineProperty(_npd, '__esModule', {
        'value': !0
    });
    var _nph = _npe(3),
        _npi = _npf(_npe(0));
    _npd.getSlot229PersonalEffect = function(_npj) {
        for (var _npk = new _nph.SlotItemEffectModel(), _npl = 0, _npm = 0, _npn = _npj.have_slots_dict[229]; _npm < _npn.length; _npm++) {
            7 <= _npn[_npm].level && _npl++;
        }
        var _npo = _npl,
            _npp = 0,
            _npq = 0,
            _npr = 0,
            _nps = _npj.get_slotnums(229);
        if (622 == _npj.ship_id || 623 == _npj.ship_id || 624 == _npj.ship_id) _npk.houg += +_nps, _npk.tyku += +_nps, _npp = 2;
        else if (656 == _npj.ship_id) _npk.houg += 2 * _nps, _npk.tyku += 3 * _nps, _npk.tais += 2 * _nps, _npp = 3;
        else if (0 == _npl) return _npk;
        if (488 == _npj.ship_id ? (_npk.tyku += 3 * _npo, _npp = 1) : 220 == _npj.ship_id ? _npk.tyku += 2 * _npo : 23 == _npj.ship_id ? _npk.tyku += +_npo : 160 == _npj.ship_id ? (_npk.tyku += 2 * _npo, _npp = 1) : 224 == _npj.ship_id ? _npk.tyku += +_npo : 487 == _npj.ship_id ? (_npk.tyku += 2 * _npo, _npp = 1) : 289 == _npj.ship_id && (_npk.tyku += +_npo), 66 != _npj.ctype && 28 != _npj.ctype || (_npk.houg += +_npo, _npk.tyku += +_npo, _npq = 1), 1 == _npj.stype && (_npk.houg += +_npo, _npk.tyku += +_npo, _npr = 1), 'ゆら' != _npj.yomi && 'なか' != _npj.yomi && 'きぬ' != _npj.yomi || (_npk.houg += 2 * _npo), 0 == _npp + _npq + _npr) return _npk;
        for (var _npt = 0, _npu = 0, _npv = 0, _npw = _npj.have_slot_ids(); _npv < _npw.length; _npv++) {
            var _npx = _npw[_npv],
                _npy = _npi.default.model.slot.getMst(_npx),
                _npz = _npy.equipType;
            12 != _npz && 13 != _npz || (5 <= _npy.sakuteki && (_npt += _npj.get_slotnums(parseInt(_npx))), 2 <= _npy.taiku && (_npu += _npj.get_slotnums(parseInt(_npx))));
        }
        return 1 == _npp ? 0 < _npt && (_npk.houg += 3, _npk.kaih += 2) : 2 == _npp ? (0 < _npt && (_npk.houg += 1, _npk.kaih += 1), 0 < _npu && (_npk.tyku += 2, _npk.kaih += 2)) : 3 == _npp && (0 < _npt && (_npk.houg += 2, _npk.kaih += 2), 0 < _npu && (_npk.tyku += 3, _npk.kaih += 2)), 1 == _npq && 0 < _npt && (_npk.houg += 2, _npk.kaih += 3), 1 == _npr && 0 < _npt && (_npk.houg += 1, _npk.kaih += 4), _npk;
    };
},
function(_nq0, _nq1, _nq2) {
    'use strict';
    defineModule(_nq1);
    Object.defineProperty(_nq1, '__esModule', {
        'value': !0
    });
    var _nq3 = _nq2(3);
    _nq1.getSlot237PersonalEffect = function(_nq4) {
        var _nq5 = new _nq3.SlotItemEffectModel(),
            _nq6 = new _nq3.SlotItemEffectModel();
        if (553 == _nq4.ship_id) _nq6.houg = 4, _nq6.kaih = 2;
        else if (82 == _nq4.ship_id) _nq6.houg = 3, _nq6.kaih = 1;
        else if (88 == _nq4.ship_id) _nq6.houg = 3, _nq6.kaih = 1;
        else if (554 == _nq4.ship_id) _nq6.houg = 4, _nq6.kaih = 2;
        else if (411 == _nq4.ship_id) _nq6.houg = 2;
        else {
            if (412 != _nq4.ship_id) return _nq5;
            _nq6.houg = 2;
        }
        var _nq7 = _nq4.get_slotnums(237);
        return _nq5 = _nq6.multiply(_nq7);
    };
},
function(_nq8, _nq9, _nqa) {
    'use strict';
    var _nqb = this && this.__importDefault || function(_nqc) {
        return _nqc && _nqc.__esModule ? _nqc : {
            'default': _nqc
        };
    };
    defineModule(_nq9);
    Object.defineProperty(_nq9, '__esModule', {
        'value': !0
    });
    var _nqd = _nqa(3),
        _nqe = _nqb(_nqa(0));
    _nq9.getSlot266PersonalEffect = function(_nqf) {
        var _nqg = new _nqd.SlotItemEffectModel(),
            _nqh = !1;
        if (566 != _nqf.ship_id && 567 != _nqf.ship_id && 568 != _nqf.ship_id && 656 != _nqf.ship_id && 670 != _nqf.ship_id && 915 != _nqf.ship_id && 951 != _nqf.ship_id || (_nqh = !0), 0 == _nqh) return _nqg;
        var _nqi = _nqf.get_slotnums(266);
        return 30 == _nqf.ctype && (1 == _nqi ? _nqg.houg = 1 : 2 <= _nqi && (_nqg.houg = 3)), _nqg;
    }, _nq9.getSlot266PersonalEffect2 = function(_nqj) {
        var _nqk = new _nqd.SlotItemEffectModel(),
            _nql = 0,
            _nqm = new _nqd.SlotItemEffectModel();
        if (23 == _nqj.ctype || 18 == _nqj.ctype ? _nql = _nqm.houg = 1 : 30 == _nqj.ctype && (_nqm.houg = 1, _nql = 2), 'しぐれ' != _nqj.yomi && 'ゆきかぜ' != _nqj.yomi && 'いそかぜ' != _nqj.yomi || (_nqm.kaih = 1), 961 == _nqj.ship_id && (_nqm.houg += 1, _nqm.houm += 1, _nqm.kaih += 1), !_nqm.exists()) return _nqk;
        var _nqn = _nqj.get_slotnums(266),
            _nqk = _nqm.multiply(_nqn);
        if (0 == _nql) return _nqk;
        for (var _nqo = 0, _nqp = 0, _nqq = _nqj.have_slot_ids(); _nqp < _nqq.length; _nqp++) {
            var _nqr = _nqq[_nqp],
                _nqs = _nqe.default.model.slot.getMst(_nqr),
                _nqt = _nqs.equipType;
            (12 == _nqt || 13 == _nqt) && 5 <= _nqs.sakuteki && (_nqo += _nqj.get_slotnums(parseInt(_nqr)));
        }
        return 0 < _nqo && (1 == _nql ? (_nqk.houg += 1, _nqk.kaih += 1, _nqk.raig += 3) : 2 == _nql && (_nqk.houg += 2, _nqk.kaih += 1, _nqk.raig += 3)), _nqk;
    };
},
function(_nqu, _nqv, _nqw) {
    'use strict';
    var _nqx = this && this.__importDefault || function(_nqy) {
        return _nqy && _nqy.__esModule ? _nqy : {
            'default': _nqy
        };
    };
    defineModule(_nqv);
    Object.defineProperty(_nqv, '__esModule', {
        'value': !0
    });
    var _nqz = _nqw(3),
        _nr0 = _nqx(_nqw(0));
    _nqv.getSlot267PersonalEffect = function(_nr1) {
        var _nr2 = new _nqz.SlotItemEffectModel(),
            _nr3 = 0,
            _nr4 = 0;
        if (38 == _nr1.ctype || 22 == _nr1.ctype) _nr3 = 2, _nr4 = 1;
        else {
            if (30 != _nr1.ctype) return _nr2;
            _nr4 = _nr3 = 1;
        }
        var _nr5 = _nr1.get_slotnums(267) + _nr1.get_slotnums(366);
        return _nr2.houg = _nr3 * _nr5, _nr2.kaih = _nr4 * _nr5, _nr2;
    }, _nqv.getSlot267PersonalEffect2 = function(_nr6) {
        var _nr7 = new _nqz.SlotItemEffectModel(),
            _nr8 = _nr6.get_slotnums(267),
            _nr9 = _nr6.get_slotnums(366),
            _nra = _nr8 + _nr9;
        if (566 != _nr6.ship_id && 567 != _nr6.ship_id && 568 != _nr6.ship_id && 656 != _nr6.ship_id && 670 != _nr6.ship_id && 915 != _nr6.ship_id && 951 != _nr6.ship_id || (0 < _nr8 && (_nr7.houg += 1), 1 == _nr9 ? (_nr7.houg += 1, _nr7.tyku += 2) : 2 <= _nr9 && (_nr7.houg += 2, _nr7.tyku += 4)), 38 != _nr6.ctype && 229 != _nr6.ship_id && [648, 961].indexOf(_nr6.ship_id) < 0) return _nr7;
        var _nrb = !1,
            _nrc = !1,
            _nrd = !1,
            _nre = !1,
            _nrf = !1,
            _nrg = !1,
            _nrh = !1,
            _nri = !1,
            _nrj = !1,
            _nrk = !1,
            _nrl = !1,
            _nrm = 0,
            _nrn = 0,
            _nro = 0;
        543 == _nr6.ship_id ? (_nr7.houg = +_nra, _nrc = !0) : 229 == _nr6.ship_id ? _nrd = !0 : 542 == _nr6.ship_id ? (_nr7.houg = +_nra, _nre = !0) : 563 == _nr6.ship_id ? (_nr7.houg = +_nra, _nrf = !0) : 564 == _nr6.ship_id ? (_nr7.houg = +_nra, _nrg = !0) : 578 == _nr6.ship_id ? (_nr7.houg = +_nra, _nrh = !0) : 569 == _nr6.ship_id ? (_nr7.houg = +_nra, _nri = !0) : 649 == _nr6.ship_id ? (_nr7.houg = 2 * _nra, _nrk = !0) : 955 == _nr6.ship_id || 960 == _nr6.ship_id ? (_nr7.houg = 2 * _nra, _nrl = !0) : 648 == _nr6.ship_id ? (_nr7.houg = 2 * _nra, _nrj = !0, _nro = _nrn = _nrm = 1) : 961 == _nr6.ship_id && (_nr7.houg = 2 * _nra, _nrb = !0, _nro = _nrn = _nrm = 1);
        for (var _nrp, _nrq, _nrr, _nrs, _nrt = 0, _nru = 0, _nrv = 0, _nrw = _nr6.have_slot_ids(); _nrv < _nrw.length; _nrv++) {
            var _nrx = _nrw[_nrv],
                _nry = _nr0.default.model.slot.getMst(_nrx),
                _nrz = _nry.equipType;
            12 != _nrz && 13 != _nrz || (5 <= _nry.sakuteki && (_nrt += _nr6.get_slotnums(parseInt(_nrx))), 2 <= _nry.taiku && (_nru += _nr6.get_slotnums(parseInt(_nrx))));
        }
        0 < _nrt && 0 < _nr8 && (38 != _nr6.ctype && !_nrj || (_nr7.houg += 2, _nr7.raig += 3, _nr7.kaih += 1, 955 == _nr6.ship_id ? --_nr7.raig : 960 == _nr6.ship_id && (_nr7.raig -= 2)), (_nre || _nrc || _nrd || _nrf || _nrg || _nrh || _nri || _nrj || _nrk || _nrl) && (_nr7.houg += 1, _nr7.raig += 3, _nr7.kaih += 2)), 0 < _nr9 && (_nre || _nrc || _nrf || _nrg || _nrh || _nrd || _nri || _nrj || _nrk || _nrb || _nrl) && (1 == _nr9 ? (_nr7.tyku += 3, _nr7.houg += 1, _nr7.houm += 1) : 2 <= _nr9 && (_nr7.tyku += 5, _nr7.houg += 3, _nr7.houm += 1, 955 == _nr6.ship_id && (_nr7.houg += 1)), (_nri || _nrj) && (_nr7.houg += 1, _nr7.tyku += 2), 0 < _nrt && (_nr7.houg += 2, _nr7.kaih += 2, _nr7.raig += 4, _nr7.houm += 2, 960 == _nr6.ship_id && (--_nr7.raig, _nr7.houg += 1)), 0 < _nru && (_nr7.houg += 1, _nr7.kaih += 3, _nr7.tyku += 5, _nr7.houm += 1), _nrp = _nr6.get_each_level_nums(366), _nrr = _nrq = 0, _nrp.forEach(function(_ns0, _ns1) {
            5 <= _ns1 && (_nrq += _ns0), 8 <= _ns1 && (_nrr += _ns0);
        }), 1 <= _nrq && (_nr7.houm += +_nrq), 1 <= _nrr && (_nr7.houg += +_nrr), 1 <= (_nrs = _nrp[10]) && (_nr7.houm += +_nrs));
        var _ns2 = _nr6.get_slotnums(129),
            _ns3 = _nr6.get_slotnums(74),
            _ns4 = _nr6.get_slotnums(412);
        return 0 < _nrm && 0 < _ns2 && 1 == _nrm && (_nr7.houg += 2, _nr7.kaih += 3, _nr7.tyku += 2), 0 < _nro && 0 < _ns4 && 1 == _nro && (_nr7.houg += 2, _nr7.kaih += 3, _nr7.tyku += 2), 0 < _nrn && 0 < _ns3 && 1 == _nrn && (_nr7.houg += 3, _nr7.kaih -= 3), _nr7;
    };
},
function(_ns5, _ns6, _ns7) {
    'use strict';
    defineModule(_ns6);
    Object.defineProperty(_ns6, '__esModule', {
        'value': !0
    });
    var _ns8 = _ns7(3);
    _ns6.getSlot278PersonalEffect = function(_ns9) {
        var _nsa = new _ns8.SlotItemEffectModel();
        return 'アメリカ' == _ns9.getCountryName() ? (_nsa.tyku += 1, _nsa.kaih += 3, _nsa.saku += 1) : 67 == _ns9.ctype || 78 == _ns9.ctype || 82 == _ns9.ctype || 88 == _ns9.ctype || 108 == _ns9.ctype || 112 == _ns9.ctype ? (_nsa.tyku += 1, _nsa.kaih += 2) : 96 == _ns9.ctype && (_nsa.tyku += 1, _nsa.kaih += 1), _nsa;
    };
},
function(_nsb, _nsc, _nsd) {
    'use strict';
    defineModule(_nsc);
    Object.defineProperty(_nsc, '__esModule', {
        'value': !0
    });
    var _nse = _nsd(3);
    _nsc.getSlot279PersonalEffect = function(_nsf) {
        var _nsg = new _nse.SlotItemEffectModel();
        return 'アメリカ' == _nsf.getCountryName() ? (_nsg.houg += 2, _nsg.tyku += 2, _nsg.kaih += 3, _nsg.saku += 2) : 67 == _nsf.ctype || 78 == _nsf.ctype || 82 == _nsf.ctype || 88 == _nsf.ctype || 108 == _nsf.ctype || 112 == _nsf.ctype ? (_nsg.houg += 1, _nsg.tyku += 1, _nsg.kaih += 2, _nsg.saku += 1) : 96 == _nsf.ctype && (_nsg.houg += 1, _nsg.tyku += 1, _nsg.kaih += 1), _nsg;
    };
},
function(_nsh, _nsi, _nsj) {
    'use strict';
    defineModule(_nsi);
    Object.defineProperty(_nsi, '__esModule', {
        'value': !0
    });
    var _nsk = _nsj(3);
    _nsi.getSlot282PersonalEffect = function(_nsl) {
        var _nsm = new _nsk.SlotItemEffectModel(),
            _nsn = !1,
            _nso = !1;
        147 != _nsl.ship_id && 73 != _nsl.ctype && 81 != _nsl.ctype || (_nsn = !0), 'ゆうばり' == _nsl.yomi && (_nso = !0);
        var _nsp = new _nsk.SlotItemEffectModel();
        if ((_nsn || _nso) && (_nsp.houg += 2, _nsp.souk += 1), !_nsp.exists()) return _nsm;
        var _nsq = _nsl.get_slotnums(282);
        return _nsm = _nsp.multiply(_nsq);
    };
},
function(_nsr, _nss, _nst) {
    'use strict';
    defineModule(_nss);
    Object.defineProperty(_nss, '__esModule', {
        'value': !0
    });
    var _nsu = _nst(3);
    _nss.getSlot283PersonalEffect = function(_nsv) {
        var _nsw = new _nsu.SlotItemEffectModel(),
            _nsx = !1;
        147 != _nsv.ship_id && 73 != _nsv.ctype && 81 != _nsv.ctype || (_nsx = !0);
        var _nsy = new _nsu.SlotItemEffectModel();
        if (_nsx && (_nsy.raig += 3, _nsy.houg += 1, _nsy.souk += 1), !_nsy.exists()) return _nsw;
        var _nsz = _nsv.get_slotnums(283);
        return _nsw = _nsy.multiply(_nsz);
    };
},
function(_nt0, _nt1, _nt2) {
    'use strict';
    defineModule(_nt1);
    Object.defineProperty(_nt1, '__esModule', {
        'value': !0
    });
    var _nt3 = _nt2(3);
    _nt1.getSlot285PersonalEffect = function(_nt4) {
        var _nt5 = new _nt3.SlotItemEffectModel(),
            _nt6 = !1;
        if (0 <= [195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_nt4.ship_id) && (_nt6 = !0), 0 == _nt6) return _nt5;
        var _nt7 = _nt4.get_each_level_nums(285),
            _nt8 = _nt4.get_slotnums(285);
        2 < _nt8 && (_nt8 = 2), _nt5.raig = 2 * _nt8, _nt5.kaih = +_nt8;
        var _nt9 = _nt7[10];
        1 == _nt9 && (_nt5.houg += 1, _nt5.raig += 1), 2 <= _nt9 && (_nt5.houg += 2, _nt5.raig += 1), 3 <= _nt9 && (_nt5.raig += 3);
        var _nta = _nt4.get_slotnums(285);
        return 903 == _nt4.ship_id ? (2 <= _nta && (_nt5.raig += 2), 3 <= _nta && (_nt5.raig += 2)) : 908 != _nt4.ship_id && 959 != _nt4.ship_id || (2 <= _nta && (_nt5.raig += 1), 3 <= _nta && (_nt5.raig += 1)), _nt5;
    };
},
function(_ntb, _ntc, _ntd) {
    'use strict';
    var _nte = this && this.__importDefault || function(_ntf) {
        return _ntf && _ntf.__esModule ? _ntf : {
            'default': _ntf
        };
    };
    defineModule(_ntc);
    Object.defineProperty(_ntc, '__esModule', {
        'value': !0
    });
    var _ntg = _ntd(3),
        _nth = _nte(_ntd(0));
    _ntc.getSlot286PersonalEffect = function(_nti) {
        var _ntj = new _ntg.SlotItemEffectModel(),
            _ntk = !1;
        if (0 <= [566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960].indexOf(_nti.ship_id) && (_ntk = !0), 0 == _ntk) return _ntj;
        var _ntl = _nti.get_each_level_nums(286),
            _ntm = _nti.get_slotnums(286);
        2 < _ntm && (_ntm = 2), _ntj.raig = 2 * _ntm, _ntj.kaih = +_ntm;
        var _ntn, _nto = _ntl[10];
        return 1 == _nto ? _ntj.houg = _ntj.houg + 1 : 2 <= _nto && (_ntj.houg = _ntj.houg + 2), 30 != _nti.ctype && 961 != _nti.ship_id || (1 == (_ntn = _ntl[5] + _ntl[6] + _ntl[7] + _ntl[8] + _ntl[9] + _ntl[10]) ? _ntj.raig = _ntj.raig + 1 : 2 <= _ntn && (_ntj.raig = _ntj.raig + 2)), _ntj;
    }, _ntc.getSlot286PersonalEffect2 = function(_ntp) {
        var _ntq = new _ntg.SlotItemEffectModel(),
            _ntr = !1,
            _nts = 0;
        if ('たけ' == _ntp.yomi && (_ntr = !0, _nts = 1), 0 == _ntr) return _ntq;
        var _ntt = _ntp.get_each_level_nums(286),
            _ntu = 0;
        return 0 < _nts && _ntt.forEach(function(_ntv, _ntw) {
            7 <= _ntw && (_ntu += _ntv);
        }), 'たけ' == _ntp.yomi && (_ntq.raig += 7, _ntq.kaih += 2, 1 <= _ntu && (_ntq.raig += 2), 1 <= _ntt[10] && (_ntq.raig += 2)), _ntq;
    }, _ntc.getSlot286PersonalEffect3 = function(_ntx) {
        var _nty = new _ntg.SlotItemEffectModel(),
            _ntz = !1,
            _nu0 = new _ntg.SlotItemEffectModel(),
            _nu1 = 0;
        if (662 != _ntx.ship_id && 663 != _ntx.ship_id && 668 != _ntx.ship_id || (_nu0.raig += 2, _ntz = !0, _nu1 = 1), 0 == _ntz) return _nty;
        var _nu2 = _ntx.get_slotnums(286);
        _nty.add(_nu0.multiply(_nu2));
        for (var _nu3 = 0, _nu4 = 0, _nu5 = _ntx.have_slot_ids(); _nu4 < _nu5.length; _nu4++) {
            var _nu6 = _nu5[_nu4],
                _nu7 = _nth.default.model.slot.getMst(_nu6),
                _nu8 = _nu7.equipType;
            12 != _nu8 && 13 != _nu8 || (5 <= _nu7.sakuteki && (_nu3 += _ntx.get_slotnums(parseInt(_nu6))), 2 <= _nu7.taiku && _ntx.get_slotnums(parseInt(_nu6)));
        }
        return 1 <= _nu3 && 1 == _nu1 && (_nty.raig += 3, _nty.kaih += 2), _nty;
    };
},
function(_nu9, _nua, _nub) {
    'use strict';
    defineModule(_nua);
    Object.defineProperty(_nua, '__esModule', {
        'value': !0
    });
    var _nuc = _nub(3);
    _nua.getSlot287PersonalEffect = function(_nud) {
        var _nue = new _nuc.SlotItemEffectModel(),
            _nuf = new _nuc.SlotItemEffectModel(),
            _nug = !1;
        if (488 == _nud.ship_id || 141 == _nud.ship_id || 160 == _nud.ship_id || 624 == _nud.ship_id || 656 == _nud.ship_id ? (_nuf.tais = 1, _nuf.kaih = 1, _nug = !0) : 662 != _nud.ship_id && 961 != _nud.ship_id || (_nuf.tais = 3, _nug = !0), 0 == _nug) return _nue;
        var _nuh = _nud.get_slotnums(287);
        return _nue = _nuf.multiply(_nuh);
    };
},
function(_nui, _nuj, _nuk) {
    'use strict';
    defineModule(_nuj);
    Object.defineProperty(_nuj, '__esModule', {
        'value': !0
    });
    var _nul = _nuk(3);
    _nuj.getSlot288PersonalEffect = function(_num) {
        var _nun = new _nul.SlotItemEffectModel(),
            _nuo = new _nul.SlotItemEffectModel(),
            _nup = !1;
        if (488 == _num.ship_id || 141 == _num.ship_id || 160 == _num.ship_id || 656 == _num.ship_id ? (_nuo.tais = 2, _nuo.kaih = 1, _nup = !0) : 624 == _num.ship_id ? (_nuo.houg = 1, _nuo.tais = 3, _nuo.kaih = 2, _nup = !0) : 662 != _num.ship_id && 961 != _num.ship_id || (_nuo.tais = 4, _nuo.kaih = 1, _nup = !0), 0 == _nup) return _nun;
        var _nuq = _num.get_slotnums(288);
        return _nun = _nuo.multiply(_nuq);
    };
},
function(_nur, _nus, _nut) {
    'use strict';
    var _nuu = this && this.__importDefault || function(_nuv) {
        return _nuv && _nuv.__esModule ? _nuv : {
            'default': _nuv
        };
    };
    defineModule(_nus);
    Object.defineProperty(_nus, '__esModule', {
        'value': !0
    });
    var _nuw = _nut(3),
        _nux = _nuu(_nut(0));
    _nus.getSlot289PersonalEffect = function(_nuy) {
        var _nuz = new _nuw.SlotItemEffectModel(),
            _nv0 = {
                151: 1,
                593: 1,
                954: 1,
                591: 2,
                149: 3,
                150: 3,
                592: 3,
                152: 3
            },
            _nv1 = 0,
            _nv2 = new _nuw.SlotItemEffectModel();
        if (149 == _nuy.ship_id || 591 == _nuy.ship_id) _nv2.houg = 2, _nv1 = _nv2.tyku = 1;
        else if (150 == _nuy.ship_id || 592 == _nuy.ship_id) _nv2.houg = 1;
        else if (152 == _nuy.ship_id) _nv2.houg = 1;
        else {
            if (151 != _nuy.ship_id && 593 != _nuy.ship_id && 954 != _nuy.ship_id) return _nuz;
            _nv2.houg = 2, _nv2.tyku = 2, _nv2.kaih = 2, _nv1 = 1;
        }
        var _nv3, _nv4, _nv5, _nv6 = _nuy.get_slotnums(289),
            _nuz = _nv2.multiply(_nv6);
        if (_nv0[_nuy.ship_id] && (_nv3 = _nuy.get_each_level_nums(289), _nv4 = new Array(), _nv3.forEach(function(_nv7, _nv8) {
                for (var _nv9 = 1; _nv9 <= _nuy.SLOT_LEVEL_MAX; _nv9++) _nv9 <= _nv8 && (null == _nv4[_nv9] && (_nv4[_nv9] = 0), _nv4[_nv9] += _nv7);
            }), 1 == (_nv5 = _nv0[_nuy.ship_id]) ? (1 <= _nv4[1] && (_nuz.kaih += +_nv4[1]), 1 <= _nv4[3] && (_nuz.tyku = _nuz.tyku + +_nv4[3]), 1 <= _nv4[5] && (_nuz.houg = _nuz.houg + +_nv4[5]), 1 <= _nv4[7] && (_nuz.kaih += +_nv4[7]), 1 <= _nv4[8] && (_nuz.tyku += +_nv4[8]), 1 <= _nv4[9] && (_nuz.houg += +_nv4[9]), 1 <= _nv4[10] && (_nuz.kaih += +_nv4[10])) : 2 == _nv5 ? (1 <= _nv4[4] && (_nuz.tyku += +_nv4[4]), 1 <= _nv4[6] && (_nuz.kaih += +_nv4[6]), 1 <= _nv4[8] && (_nuz.houg += +_nv4[8]), 1 <= _nv4[10] && (_nuz.kaih += +_nv4[10])) : 3 == _nv5 && (1 <= _nv4[7] && (_nuz.tyku += +_nv4[7]), 1 <= _nv4[9] && (_nuz.houg += +_nv4[9]), 1 <= _nv4[10] && (_nuz.kaih += +_nv4[10]))), 0 == _nv1) return _nuz;
        for (var _nva = 0, _nvb = 0, _nvc = _nuy.have_slot_ids(); _nvb < _nvc.length; _nvb++) {
            var _nvd = _nvc[_nvb],
                _nve = _nux.default.model.slot.getMst(_nvd),
                _nvf = _nve.equipType;
            (12 == _nvf || 13 == _nvf) && 5 <= _nve.sakuteki && (_nva += _nuy.get_slotnums(parseInt(_nvd)));
        }
        return 0 < _nva && (_nuz.houg += 2, _nuz.kaih += 2), _nuz;
    };
},
function(_nvg, _nvh, _nvi) {
    'use strict';
    var _nvj = this && this.__importDefault || function(_nvk) {
        return _nvk && _nvk.__esModule ? _nvk : {
            'default': _nvk
        };
    };
    defineModule(_nvh);
    Object.defineProperty(_nvh, '__esModule', {
        'value': !0
    });
    var _nvl = _nvi(3),
        _nvm = _nvj(_nvi(0));
    _nvh.getSlot290PersonalEffect = function(_nvn) {
        var _nvo = new _nvl.SlotItemEffectModel(),
            _nvp = 0,
            _nvq = new _nvl.SlotItemEffectModel();
        if (411 == _nvn.ship_id) _nvq.houg = 1;
        else if (412 == _nvn.ship_id) _nvq.houg = 1;
        else if (82 == _nvn.ship_id) _nvq.houg = 2, _nvq.tyku = 2, _nvp = _nvq.kaih = 1;
        else if (553 == _nvn.ship_id) _nvq.houg = 3, _nvq.tyku = 2, _nvq.kaih = 1, _nvq.houm = 3, _nvp = 1;
        else if (88 == _nvn.ship_id) _nvq.houg = 2, _nvq.tyku = 2, _nvp = _nvq.kaih = 1;
        else {
            if (554 != _nvn.ship_id) return _nvo;
            _nvq.houg = 3, _nvq.tyku = 2, _nvq.kaih = 2, _nvq.houm = 3, _nvp = 1;
        }
        var _nvr = _nvn.get_slotnums(290),
            _nvo = _nvq.multiply(_nvr);
        if (0 == _nvp) return _nvo;
        for (var _nvs = 0, _nvt = 0, _nvu = _nvn.have_slot_ids(); _nvt < _nvu.length; _nvt++) {
            var _nvv = _nvu[_nvt],
                _nvw = _nvm.default.model.slot.getMst(_nvv),
                _nvx = _nvw.equipType;
            (12 == _nvx || 13 == _nvx) && 2 <= _nvw.taiku && (_nvs += _nvn.get_slotnums(parseInt(_nvv)));
        }
        return 0 < _nvs && (_nvo.tyku += 2, _nvo.kaih += 3), _nvo;
    };
},
function(_nvy, _nvz, _nw0) {
    'use strict';
    defineModule(_nvz);
    Object.defineProperty(_nvz, '__esModule', {
        'value': !0
    });
    var _nw1 = _nw0(3);
    _nvz.getSlot291PersonalEffect = function(_nw2) {
        var _nw3 = new _nw1.SlotItemEffectModel(),
            _nw4 = new _nw1.SlotItemEffectModel();
        if (553 == _nw2.ship_id) _nw4.houg = 6, _nw4.kaih = 1;
        else {
            if (554 != _nw2.ship_id) return _nw3;
            _nw4.houg = 6, _nw4.kaih = 1;
        }
        var _nw5 = _nw2.get_slotnums(291);
        return _nw3 = _nw4.multiply(_nw5);
    };
},
function(_nw6, _nw7, _nw8) {
    'use strict';
    defineModule(_nw7);
    Object.defineProperty(_nw7, '__esModule', {
        'value': !0
    });
    var _nw9 = _nw8(3);
    _nw7.getSlot292PersonalEffect = function(_nwa) {
        var _nwb = new _nw9.SlotItemEffectModel(),
            _nwc = new _nw9.SlotItemEffectModel();
        if (553 == _nwa.ship_id) _nwc.houg = 8, _nwc.kaih = 2, _nwc.tyku = 1;
        else {
            if (554 != _nwa.ship_id) return _nwb;
            _nwc.houg = 8, _nwc.kaih = 2, _nwc.tyku = 1;
        }
        var _nwd = _nwa.get_slotnums(292);
        return _nwb = _nwc.multiply(_nwd);
    };
},
function(_nwe, _nwf, _nwg) {
    'use strict';
    var _nwh = this && this.__importDefault || function(_nwi) {
        return _nwi && _nwi.__esModule ? _nwi : {
            'default': _nwi
        };
    };
    defineModule(_nwf);
    Object.defineProperty(_nwf, '__esModule', {
        'value': !0
    });
    var _nwj = _nwg(3),
        _nwk = _nwh(_nwg(0));
    _nwf.getSlot293PersonalEffect = function(_nwl) {
        var _nwm = new _nwj.SlotItemEffectModel(),
            _nwn = new _nwj.SlotItemEffectModel(),
            _nwo = 0;
        if (66 == _nwl.ctype || 28 == _nwl.ctype) _nwn.houg = 2, _nwn.tyku = 1, _nwn.kaih = 3, _nwo = 1;
        else {
            if (74 != _nwl.ctype && 77 != _nwl.ctype) return _nwm;
            _nwn.houg = 1, _nwn.tyku = 1, _nwo = _nwn.kaih = 2;
        }
        for (var _nwp = _nwl.get_slotnums(293), _nwm = _nwn.multiply(_nwp), _nwq = 0, _nwr = 0, _nws = _nwl.have_slot_ids(); _nwr < _nws.length; _nwr++) {
            var _nwt = _nws[_nwr],
                _nwu = _nwk.default.model.slot.getMst(_nwt),
                _nwv = _nwu.equipType;
            (12 == _nwv || 13 == _nwv) && 5 <= _nwu.sakuteki && (_nwq += _nwl.get_slotnums(parseInt(_nwt)));
        }
        var _nww = _nwl.get_slotnums(174);
        return 1 == _nwo ? (0 < _nwq && (_nwm.houg += 2, _nwm.kaih += 3, _nwm.raig += 1), 1 == _nww ? (_nwm.houg += 2, _nwm.raig += 4) : 2 <= _nww && (_nwm.houg += 3, _nwm.raig += 7)) : 2 == _nwo && 0 < _nwq && (_nwm.houg += 2, _nwm.kaih += 3, _nwm.tais += 1), _nwm;
    };
},
function(_nwx, _nwy, _nwz) {
    'use strict';
    var _nx0 = this && this.__importDefault || function(_nx1) {
        return _nx1 && _nx1.__esModule ? _nx1 : {
            'default': _nx1
        };
    };
    defineModule(_nwy);
    Object.defineProperty(_nwy, '__esModule', {
        'value': !0
    });
    var _nx2 = _nwz(3),
        _nx3 = _nx0(_nwz(0));
    _nwy.getSlot294PersonalEffect = function(_nx4) {
        var _nx5 = new _nx2.SlotItemEffectModel(),
            _nx6 = new _nx2.SlotItemEffectModel(),
            _nx7 = 0,
            _nx8 = _nx4.get_slotnums(294);
        if (12 != _nx4.ctype && 1 != _nx4.ctype && 5 != _nx4.ctype) return _nx5;
        _nx6.houg = 1, 959 == _nx4.ship_id && (_nx6.houg += 1, 2 <= _nx8 && (_nx5.houg += 2), 3 <= _nx8 && (_nx5.houg += 3), _nx7 = 1), _nx5.add(_nx6.multiply(_nx8));
        for (var _nx9 = 0, _nxa = 0, _nxb = _nx4.have_slot_ids(); _nxa < _nxb.length; _nxa++) {
            var _nxc = _nxb[_nxa],
                _nxd = _nx3.default.model.slot.getMst(_nxc),
                _nxe = _nxd.equipType;
            (12 == _nxe || 13 == _nxe) && 5 <= _nxd.sakuteki && (_nx9 += _nx4.get_slotnums(parseInt(_nxc)));
        }
        var _nxf = _nx4.get_slotnums(13),
            _nxg = _nx4.get_slotnums(125),
            _nxh = _nx4.get_slotnums(285),
            _nxi = _nxf + _nxg + _nxh;
        if (0 < _nx9 && (_nx5.houg += 3, _nx5.kaih += 2, _nx5.raig += 1), 1 == _nxi ? (_nx5.houg += 1, _nx5.raig += 3) : 2 <= _nxi && (_nx5.houg += 2, _nx5.raig += 5), 1 <= _nxh && (_nx5.raig += 1), 0 == _nx7) return _nx5;
        var _nxj = _nx4.get_each_level_nums(294),
            _nxk = [];
        return 0 < _nx7 && _nxj.forEach(function(_nxl, _nxm) {
            for (var _nxn = 1; _nxn <= _nx4.SLOT_LEVEL_MAX; _nxn++) null == _nxk[_nxn] && (_nxk[_nxn] = 0), _nxn <= _nxm && (_nxk[_nxn] += _nxl);
        }), 1 == _nx7 && (1 <= _nxk[6] && (_nx5.houm += 4 * _nxk[6]), 1 <= _nxk[7] && (_nx5.houg = _nx5.houg + 6 * _nxk[7]), 1 <= _nxk[8] && (_nx5.houg = _nx5.houg + +_nxk[8]), 1 <= _nxk[9] && (_nx5.houg = _nx5.houg + +_nxk[9]), 1 <= _nxk[10] && (_nx5.houg += +_nxk[10])), _nx5;
    };
},
function(_nxo, _nxp, _nxq) {
    'use strict';
    var _nxr = this && this.__importDefault || function(_nxs) {
        return _nxs && _nxs.__esModule ? _nxs : {
            'default': _nxs
        };
    };
    defineModule(_nxp);
    Object.defineProperty(_nxp, '__esModule', {
        'value': !0
    });
    var _nxt = _nxq(3),
        _nxu = _nxr(_nxq(0));
    _nxp.getSlot295PersonalEffect = function(_nxv) {
        var _nxw = new _nxt.SlotItemEffectModel(),
            _nxx = new _nxt.SlotItemEffectModel(),
            _nxy = _nxv.get_slotnums(295);
        if (12 != _nxv.ctype && 1 != _nxv.ctype && 5 != _nxv.ctype) return _nxw;
        _nxx.houg = 2, _nxx.tyku = 2, 666 == _nxv.ship_id ? (_nxx.houg += 1, _nxx.tyku += 1, _nxx.tais += 1) : 959 == _nxv.ship_id && (_nxx.houg += 2, 2 <= _nxy && (_nxw.houg += 2), 3 <= _nxy && (_nxw.houg += 3)), _nxw.add(_nxx.multiply(_nxy));
        for (var _nxz = 0, _ny0 = 0, _ny1 = 0, _ny2 = _nxv.have_slot_ids(); _ny1 < _ny2.length; _ny1++) {
            var _ny3 = _ny2[_ny1],
                _ny4 = _nxu.default.model.slot.getMst(_ny3),
                _ny5 = _ny4.equipType;
            12 != _ny5 && 13 != _ny5 || (5 <= _ny4.sakuteki && (_nxz += _nxv.get_slotnums(parseInt(_ny3))), 2 <= _ny4.taiku && (_ny0 += _nxv.get_slotnums(parseInt(_ny3))));
        }
        var _ny6 = _nxv.get_slotnums(13),
            _ny7 = _nxv.get_slotnums(125),
            _ny8 = _nxv.get_slotnums(285),
            _ny9 = _ny6 + _ny7 + _ny8;
        return 0 < _nxz && (_nxw.houg += 3, _nxw.kaih += 2, _nxw.raig += 1), 1 == _ny9 ? (_nxw.houg += 1, _nxw.raig += 3) : 2 <= _ny9 && (_nxw.houg += 2, _nxw.raig += 5), 1 <= _ny8 && (_nxw.raig += 1), 0 < _ny0 && (_nxw.tyku += 6), _nxw;
    };
},
function(_nya, _nyb, _nyc) {
    'use strict';
    var _nyd = this && this.__importDefault || function(_nye) {
        return _nye && _nye.__esModule ? _nye : {
            'default': _nye
        };
    };
    defineModule(_nyb);
    Object.defineProperty(_nyb, '__esModule', {
        'value': !0
    });
    var _nyf = _nyc(3),
        _nyg = _nyd(_nyc(0));
    _nyb.getSlot296PersonalEffect = function(_nyh) {
        var _nyi = new _nyf.SlotItemEffectModel(),
            _nyj = new _nyf.SlotItemEffectModel();
        1 != _nyh.ctype && 5 != _nyh.ctype && 10 != _nyh.ctype && 23 != _nyh.ctype || (_nyj.houg += 1), 10 != _nyh.ctype && 23 != _nyh.ctype || (_nyj.kaih += 1), 145 == _nyh.ship_id || 961 == _nyh.ship_id ? (_nyj.houg += 1, _nyj.tyku += 1) : 144 == _nyh.ship_id ? (_nyj.houg += 1, _nyj.raig += 1) : 469 == _nyh.ship_id || 588 == _nyh.ship_id || 667 == _nyh.ship_id || 587 == _nyh.ship_id || 242 == _nyh.ship_id ? _nyj.kaih += 1 : 497 == _nyh.ship_id ? (_nyj.houg += 1, _nyj.kaih += 1) : 244 == _nyh.ship_id ? _nyj.kaih += 1 : 498 == _nyh.ship_id ? (_nyj.tyku += 1, _nyj.kaih += 1) : 627 == _nyh.ship_id ? (_nyj.houg += 2, _nyj.raig += 1) : 903 != _nyh.ship_id && 908 != _nyh.ship_id || (_nyj.houg += 3);
        var _nyk = !0;
        if (_nyj.exists() || (_nyk = !1), 0 == _nyk) return _nyi;
        var _nyl = _nyh.get_slotnums(296),
            _nyi = _nyj.multiply(_nyl),
            _nym = 0;
        if (1 != _nyh.ctype && 5 != _nyh.ctype && 10 != _nyh.ctype || (_nym = 1), 23 == _nyh.ctype && (_nym = 2), 0 == _nym) return _nyi;
        for (var _nyn = 0, _nyo = 0, _nyp = 0, _nyq = _nyh.have_slot_ids(); _nyp < _nyq.length; _nyp++) {
            var _nyr = _nyq[_nyp],
                _nys = _nyg.default.model.slot.getMst(_nyr),
                _nyt = _nys.equipType;
            12 != _nyt && 13 != _nyt || (5 <= _nys.sakuteki && (_nyn += _nyh.get_slotnums(parseInt(_nyr))), 2 <= _nys.taiku && (_nyo += _nyh.get_slotnums(parseInt(_nyr))));
        }
        return 0 < _nyn && (1 == _nym ? (_nyi.houg += 1, _nyi.kaih += 2, _nyi.raig += 2) : 2 == _nym && (_nyi.houg += 1, _nyi.kaih += 2, _nyi.raig += 3)), 1 <= _nyh.get_slotnums(285) + _nyh.get_slotnums(125) && 1 == _nym && (_nyi.houg += 1, _nyi.raig += 3), 1 <= _nyh.get_slotnums(15) + _nyh.get_slotnums(286) && 2 == _nym && (_nyi.houg += 1, _nyi.raig += 3), 0 < _nyo && (1 == _nym ? _nyi.tyku += 5 : 2 == _nym && (_nyi.tyku += 6)), _nyi;
    };
},
function(_nyu, _nyv, _nyw) {
    'use strict';
    defineModule(_nyv);
    Object.defineProperty(_nyv, '__esModule', {
        'value': !0
    });
    var _nyx = _nyw(3);
    _nyv.getSlot297PersonalEffect = function(_nyy) {
        var _nyz = new _nyx.SlotItemEffectModel(),
            _nz0 = new _nyx.SlotItemEffectModel();
        if (12 == _nyy.ctype) _nz0.kaih = 2;
        else {
            if (1 != _nyy.ctype && 5 != _nyy.ctype) return _nyz;
            _nz0.kaih = 1;
        }
        var _nz1 = _nyy.get_slotnums(297);
        return _nyz = _nz0.multiply(_nz1);
    };
},
function(_nz2, _nz3, _nz4) {
    'use strict';
    defineModule(_nz3);
    Object.defineProperty(_nz3, '__esModule', {
        'value': !0
    });
    var _nz5 = _nz4(3);
    _nz3.getSlot301PersonalEffect = function(_nz6) {
        var _nz7 = new _nz5.SlotItemEffectModel(),
            _nz8 = new _nz5.SlotItemEffectModel();
        67 != _nz6.ctype && 78 != _nz6.ctype && 82 != _nz6.ctype && 88 != _nz6.ctype && 108 != _nz6.ctype && 112 != _nz6.ctype || (_nz8.tyku += 2, _nz8.kaih += 1, _nz8.souk += 1);
        var _nz9 = !0;
        if (_nz8.exists() || (_nz9 = !1), 0 == _nz9) return _nz7;
        var _nza = _nz6.get_slotnums(301);
        return _nz7 = _nz8.multiply(_nza);
    };
},
function(_nzb, _nzc, _nzd) {
    'use strict';
    defineModule(_nzc);
    Object.defineProperty(_nzc, '__esModule', {
        'value': !0
    });
    var _nze = _nzd(3);
    _nzc.getSlot302PersonalEffect = function(_nzf) {
        var _nzg = new _nze.SlotItemEffectModel(),
            _nzh = new _nze.SlotItemEffectModel();
        if (76 == _nzf.ctype && (_nzh.tais = 1, _nzh.kaih = 1), !_nzh.exists()) return _nzg;
        var _nzi = _nzf.get_slotnums(302);
        return _nzg = _nzh.multiply(_nzi);
    };
},
function(_nzj, _nzk, _nzl) {
    'use strict';
    defineModule(_nzk);
    Object.defineProperty(_nzk, '__esModule', {
        'value': !0
    });
    var _nzm = _nzl(3);
    _nzk.getSlot303PersonalEffect = function(_nzn) {
        var _nzo = new _nzm.SlotItemEffectModel(),
            _nzp = new _nzm.SlotItemEffectModel();
        if (16 == _nzn.ctype || 4 == _nzn.ctype || 20 == _nzn.ctype || 41 == _nzn.ctype ? (_nzp.houg = 1, _nzp.tyku = 1) : 89 == _nzn.ctype && (_nzp.houg = 1, _nzp.tyku = 2, _nzp.kaih = 1), !_nzp.exists()) return _nzo;
        var _nzq = _nzn.get_slotnums(303);
        return _nzo = _nzp.multiply(_nzq);
    };
},
function(_nzr, _nzs, _nzt) {
    'use strict';
    defineModule(_nzs);
    Object.defineProperty(_nzs, '__esModule', {
        'value': !0
    });
    var _nzu = _nzt(3);
    _nzs.getSlot304PersonalEffect = function(_nzv) {
        var _nzw = new _nzu.SlotItemEffectModel(),
            _nzx = new _nzu.SlotItemEffectModel();
        if (16 == _nzv.ctype || 4 == _nzv.ctype || 20 == _nzv.ctype || 41 == _nzv.ctype ? (_nzx.houg = 1, _nzx.tais = 1, _nzx.kaih = 1) : 89 == _nzv.ctype && (_nzx.houg = 1, _nzx.tais = 2, _nzx.kaih = 2), !_nzx.exists()) return _nzw;
        var _nzy = _nzv.get_slotnums(304);
        return _nzw = _nzx.multiply(_nzy);
    };
},
function(_nzz, _o00, _o01) {
    'use strict';
    defineModule(_o00);
    Object.defineProperty(_o00, '__esModule', {
        'value': !0
    });
    var _o02 = _o01(3);
    _o00.getSlot305_And_306_PersonalEffect = function(_o03) {
        var _o04 = new _o02.SlotItemEffectModel(),
            _o05 = new _o02.SlotItemEffectModel();
        if (76 == _o03.ctype && (_o05.tais = 1, _o05.kaih = 1), 'しんよう' == _o03.yomi ? (_o05.tais += 2, _o05.kaih += 1) : 'グラーフ・ツェッペリン' != _o03.yomi && 'アクィラ' != _o03.yomi || (_o05.houg = 1, _o05.kaih = 1), !_o05.exists()) return _o04;
        var _o06 = _o03.get_slotnums(305) + _o03.get_slotnums(306);
        return _o04 = _o05.multiply(_o06);
    };
},
function(_o07, _o08, _o09) {
    'use strict';
    defineModule(_o08);
    Object.defineProperty(_o08, '__esModule', {
        'value': !0
    });
    var _o0a = _o09(3);
    _o08.getSlot307PersonalEffect = function(_o0b) {
        var _o0c = new _o0a.SlotItemEffectModel(),
            _o0d = new _o0a.SlotItemEffectModel();
        if ('アメリカ' == _o0b.getCountryName() && (_o0d.houg = 1, _o0d.tyku = 1, _o0d.kaih = 1), !_o0d.exists()) return _o0c;
        var _o0e = _o0b.get_slotnums(307);
        return _o0c = _o0d.multiply(_o0e);
    };
},
function(_o0f, _o0g, _o0h) {
    'use strict';
    defineModule(_o0g);
    Object.defineProperty(_o0g, '__esModule', {
        'value': !0
    });
    var _o0i = _o0h(3);
    _o0g.getSlot308PersonalEffect = function(_o0j) {
        var _o0k = new _o0i.SlotItemEffectModel(),
            _o0l = new _o0i.SlotItemEffectModel();
        if ('アメリカ' == _o0j.getCountryName() && (_o0l.houg = 1, _o0l.tyku = 1, _o0l.kaih = 1), 2 == _o0j.stype ? _o0l.houg += 1 : 1 == _o0j.stype && (_o0l.tyku += 1, _o0l.kaih += 1), 651 != _o0j.ship_id && 656 != _o0j.ship_id || (_o0l.houg += 1, _o0l.tyku += 1, _o0l.kaih += 1), !_o0l.exists()) return _o0k;
        var _o0m = _o0j.get_slotnums(308);
        return _o0k = _o0l.multiply(_o0m);
    };
},
function(_o0n, _o0o, _o0p) {
    'use strict';
    var _o0q = this && this.__importDefault || function(_o0r) {
        return _o0r && _o0r.__esModule ? _o0r : {
            'default': _o0r
        };
    };
    defineModule(_o0o);
    Object.defineProperty(_o0o, '__esModule', {
        'value': !0
    });
    var _o0s = _o0p(3),
        _o0t = _o0q(_o0p(0));
    _o0o.getSlot310PersonalEffect = function(_o0u) {
        var _o0v = new _o0s.SlotItemEffectModel(),
            _o0w = new _o0s.SlotItemEffectModel(),
            _o0x = new _o0s.SlotItemEffectModel();
        34 == _o0u.ctype ? (_o0w.houg += 2, _o0w.tyku += 1, _o0w.kaih += 1, _o0x.houg += 2) : 56 == _o0u.ctype ? (_o0w.houg += 2, _o0w.kaih += 1, _o0x.houg += 2, _o0x.kaih += 2) : 90 == _o0u.ctype && (_o0w.houg += 3, _o0w.raig += 2, _o0w.tyku += 1, _o0w.kaih += 1, _o0x.houg += 1, _o0x.raig += 1);
        var _o0y = new _o0s.SlotItemEffectModel(),
            _o0z = new _o0s.SlotItemEffectModel();
        622 != _o0u.ship_id && 623 != _o0u.ship_id && 624 != _o0u.ship_id || (_o0w.houg += 2, _o0w.kaih += 1, _o0w.tais += 1, _o0y.houg = 1, _o0y.raig = 1, _o0z.houg = 3, _o0z.kaih = 2, _o0z.raig = 2);
        var _o10 = !0;
        if (_o0w.exists() || (_o10 = !1), 0 == _o10) return _o0v;
        for (var _o11 = _o0u.get_slotnums(310) + _o0u.get_slotnums(518), _o0v = _o0w.multiply(_o11), _o12 = 0, _o13 = 0, _o14 = 0, _o15 = [310, 518]; _o14 < _o15.length; _o14++) {
            var _o16 = _o15[_o14],
                _o17 = _o0u.have_slots_dict[_o16];
            if (null != _o17)
                for (var _o18 = 0, _o19 = _o17; _o18 < _o19.length; _o18++) {
                    var _o1a = _o19[_o18];
                    null != _o1a && (7 <= _o1a.level && _o12++, 10 <= _o1a.level && _o13++);
                }
        }
        if (_o0y.exists() && 0 < _o12 && _o0v.add(_o0y.multiply(_o12)), _o0x.exists() && 0 < _o13 && _o0v.add(_o0x.multiply(_o13)), _o0z.exists()) {
            for (var _o1b = 0, _o1c = 0, _o1d = _o0u.have_slot_ids(); _o1c < _o1d.length; _o1c++) {
                var _o1e = _o1d[_o1c],
                    _o1f = _o0t.default.model.slot.getMst(_o1e),
                    _o1g = _o1f.equipType;
                (12 == _o1g || 13 == _o1g) && 5 <= _o1f.sakuteki && (_o1b += _o0u.get_slotnums(parseInt(_o1e)));
            }
            0 < _o1b && _o0v.add(_o0z);
        }
        return _o0v;
    };
},
function(_o1h, _o1i, _o1j) {
    'use strict';
    defineModule(_o1i);
    Object.defineProperty(_o1i, '__esModule', {
        'value': !0
    });
    var _o1k = _o1j(3);
    _o1i.getSlot313PersonalEffect = function(_o1l) {
        var _o1m = new _o1k.SlotItemEffectModel(),
            _o1n = new _o1k.SlotItemEffectModel();
        87 != _o1l.ctype && 91 != _o1l.ctype || (_o1n.houg += 2, _o1n.tyku += 2, _o1n.kaih += 1, _o1n.souk += 1), 651 != _o1l.ship_id && 656 != _o1l.ship_id || (_o1n.houg += 2, _o1n.tyku += 2, _o1n.kaih += 1, _o1n.souk += 1);
        var _o1o = !0;
        if (_o1n.exists() || (_o1o = !1), 0 == _o1o) return _o1m;
        var _o1p = _o1l.get_slotnums(313);
        return _o1m = _o1n.multiply(_o1p);
    };
},
function(_o1q, _o1r, _o1s) {
    'use strict';
    defineModule(_o1r);
    Object.defineProperty(_o1r, '__esModule', {
        'value': !0
    });
    var _o1t = _o1s(3);
    _o1r.getSlot314PersonalEffect = function(_o1u) {
        var _o1v = new _o1t.SlotItemEffectModel(),
            _o1w = new _o1t.SlotItemEffectModel();
        87 != _o1u.ctype && 91 != _o1u.ctype || (_o1w.houg += 1, _o1w.raig += 3);
        var _o1x = !0;
        if (_o1w.exists() || (_o1x = !1), 0 == _o1x) return _o1v;
        var _o1y = _o1u.get_slotnums(314);
        return _o1v = _o1w.multiply(_o1y);
    };
},
function(_o1z, _o20, _o21) {
    'use strict';
    defineModule(_o20);
    Object.defineProperty(_o20, '__esModule', {
        'value': !0
    });
    var _o22 = _o21(3);
    _o20.getSlot315PersonalEffect = function(_o23) {
        var _o24 = new _o22.SlotItemEffectModel(),
            _o25 = new _o22.SlotItemEffectModel();
        'アメリカ' == _o23.getCountryName() && (_o25.houg += 2, _o25.kaih += 3, _o25.saku += 4), 87 != _o23.ctype && 91 != _o23.ctype || (_o25.houg += 1, _o24.leng += 1), 651 != _o23.ship_id && 656 != _o23.ship_id || (_o24.houg += 2, _o24.kaih += 2, _o24.saku += 3, _o24.leng += 1);
        var _o26 = !0;
        if (_o25.exists() || (_o26 = !1), 0 == _o26) return _o24;
        var _o27 = _o23.get_slotnums(315);
        return _o24.add(_o25.multiply(_o27)), _o24;
    };
},
function(_o28, _o29, _o2a) {
    'use strict';
    defineModule(_o29);
    Object.defineProperty(_o29, '__esModule', {
        'value': !0
    });
    var _o2b = _o2a(3);
    _o29.getSlot316PersonalEffect = function(_o2c) {
        var _o2d = new _o2b.SlotItemEffectModel(),
            _o2e = new _o2b.SlotItemEffectModel();
        if (68 == _o2c.ctype) {
            if (_o2e.houg += 4, _o2e.tyku += 1, _o2e.kaih += 1, !_o2e.exists()) return _o2d;
            var _o2f = _o2c.get_slotnums(316),
                _o2d = _o2e.multiply(_o2f);
        }
        return _o2d;
    };
},
function(_o2g, _o2h, _o2i) {
    'use strict';
    defineModule(_o2h);
    Object.defineProperty(_o2h, '__esModule', {
        'value': !0
    });
    var _o2j = _o2i(3);
    _o2h.getSlot317PersonalEffect = function(_o2k) {
        var _o2l = new _o2j.SlotItemEffectModel(),
            _o2m = new _o2j.SlotItemEffectModel(),
            _o2n = 0,
            _o2o = !1;
        if (6 == _o2k.ctype ? (_o2m.houg += 2, _o2m.tyku += 1, _o2n = 1, _o2o = !0) : 2 == _o2k.ctype && (_o2m.houg += 1, _o2m.tyku += 1, _o2m.kaih += 1, _o2n = 2, _o2o = !0), 149 == _o2k.ship_id || 591 == _o2k.ship_id || 592 == _o2k.ship_id ? (_o2m.houg += 2, _o2m.tyku += 2, _o2o = !0) : 150 == _o2k.ship_id ? (_o2m.houg += 1, _o2m.tyku += 1, _o2o = !0) : 151 == _o2k.ship_id ? (_o2m.houg += 1, _o2m.tyku += 1, _o2m.kaih += 1, _o2o = !0) : 593 == _o2k.ship_id ? (_o2m.houg += 1, _o2m.tyku += 3, _o2m.kaih += 2, _o2o = !0) : 954 == _o2k.ship_id ? (_o2m.houg += 2, _o2m.tyku += 2, _o2m.kaih += 1, _o2o = !0) : 152 == _o2k.ship_id ? (_o2m.houg += 2, _o2m.tyku += 1, _o2o = !0) : 541 == _o2k.ship_id ? (_o2m.houg += 1, _o2m.tyku += 2, _o2o = !0) : 573 == _o2k.ship_id && (_o2m.houg += 2, _o2m.tyku += 2, _o2m.kaih += 1, _o2o = !0), 0 == _o2o) return _o2l;
        if (_o2l.add(_o2m), 0 == _o2n) return _o2l;
        var _o2p = _o2k.get_each_level_nums(317),
            _o2q = [];
        return 0 < _o2n && _o2p.forEach(function(_o2r, _o2s) {
            for (var _o2t = 1; _o2t <= _o2k.SLOT_LEVEL_MAX; _o2t++) null == _o2q[_o2t] && (_o2q[_o2t] = 0), _o2t <= _o2s && (_o2q[_o2t] += _o2r);
        }), 1 == _o2n ? 1 <= _o2q[8] && (_o2l.houm += 1) : 2 == _o2n && 1 <= _o2p[10] && (_o2l.houm += 1), _o2l;
    };
},
function(_o2u, _o2v, _o2w) {
    'use strict';
    var _o2x = this && this.__importDefault || function(_o2y) {
        return _o2y && _o2y.__esModule ? _o2y : {
            'default': _o2y
        };
    };
    defineModule(_o2v);
    Object.defineProperty(_o2v, '__esModule', {
        'value': !0
    });
    var _o2z = _o2w(3),
        _o30 = _o2x(_o2w(0));
    _o2v.getSlot318PersonalEffect = function(_o31) {
        var _o32 = new _o2z.SlotItemEffectModel(),
            _o33 = new _o2z.SlotItemEffectModel(),
            _o34 = new _o2z.SlotItemEffectModel(),
            _o35 = new _o2z.SlotItemEffectModel();
        if (411 == _o31.ship_id || 412 == _o31.ship_id ? _o33.houg += 1 : 82 == _o31.ship_id ? (_o33.houg += 2, _o33.tyku += 2, _o33.kaih += 2, _o35.tyku = 2, _o35.kaih = 3, _o35.houm = 1) : 553 == _o31.ship_id ? (_o33.houg += 2, _o33.tyku += 2, _o33.kaih += 2, _o33.houm += 3, _o35.tyku = 2, _o35.kaih = 3, _o35.houm = 1, _o34.kaih = 2, _o34.souk = 1) : 88 == _o31.ship_id ? (_o33.houg += 2, _o33.tyku += 2, _o33.kaih += 2, _o35.tyku = 2, _o35.kaih = 3, _o35.houm = 1) : 541 == _o31.ship_id || 573 == _o31.ship_id ? (_o33.houg += 3, _o33.tyku += 2, _o33.kaih += 1, _o33.houm += 2, _o34.houg = 2, _o34.kaih = 2, _o34.souk = 1, _o34.houm = 1) : 554 == _o31.ship_id && (_o33.houg += 3, _o33.tyku += 2, _o33.kaih += 2, _o33.houm += 3, _o35.tyku = 2, _o35.kaih = 3, _o35.houm = 1, _o34.houg = 1, _o34.kaih = 2, _o34.souk = 1, _o34.houm = 1), !_o33.exists()) return _o32;
        var _o36 = _o31.get_slotnums(318),
            _o32 = _o33.multiply(_o36);
        if (!_o34.exists() && !_o35.exists()) return _o32;
        for (var _o37 = 0, _o38 = 0, _o39 = _o31.have_slot_ids(); _o38 < _o39.length; _o38++) {
            var _o3a = _o39[_o38],
                _o3b = _o30.default.model.slot.getMst(_o3a),
                _o3c = _o3b.equipType;
            (12 == _o3c || 13 == _o3c) && 2 <= _o3b.taiku && (_o37 += _o31.get_slotnums(parseInt(_o3a)));
        }
        var _o3d = _o31.get_slotnums(290);
        return _o35.exists() && 0 < _o37 && 0 == _o3d && _o32.add(_o35), _o34.exists() && 1 <= _o3d && _o32.add(_o34), _o32;
    };
},
function(_o3e, _o3f, _o3g) {
    'use strict';
    defineModule(_o3f);
    Object.defineProperty(_o3f, '__esModule', {
        'value': !0
    });
    var _o3h = _o3g(3);
    _o3f.getSlot319PersonalEffect = function(_o3i) {
        var _o3j = new _o3h.SlotItemEffectModel(),
            _o3k = new _o3h.SlotItemEffectModel();
        if (554 != _o3i.ship_id && 553 != _o3i.ship_id || (_o3k.houg = 7, _o3k.tyku = 3, _o3k.kaih = 2), !_o3k.exists()) return _o3j;
        var _o3l = _o3i.get_slotnums(319);
        return _o3j = _o3k.multiply(_o3l);
    };
},
function(_o3m, _o3n, _o3o) {
    'use strict';
    defineModule(_o3n);
    Object.defineProperty(_o3n, '__esModule', {
        'value': !0
    });
    var _o3p = _o3o(3);
    _o3n.getSlot320PersonalEffect = function(_o3q) {
        var _o3r = new _o3p.SlotItemEffectModel(),
            _o3s = new _o3p.SlotItemEffectModel();
        if (553 == _o3q.ship_id) _o3s.houg = 2;
        else if (554 == _o3q.ship_id) _o3s.houg = 4;
        else if (196 == _o3q.ship_id) _o3s.houg = 3;
        else if (197 == _o3q.ship_id) _o3s.houg = 3;
        else if (508 == _o3q.ship_id) _o3s.houg = 4;
        else {
            if (509 != _o3q.ship_id) return _o3r;
            _o3s.houg = 4;
        }
        var _o3t = _o3q.get_slotnums(320);
        return _o3r = _o3s.multiply(_o3t);
    };
},
function(_o3u, _o3v, _o3w) {
    'use strict';
    defineModule(_o3v);
    Object.defineProperty(_o3v, '__esModule', {
        'value': !0
    });
    var _o3x = _o3w(3);
    _o3v.getSlot322PersonalEffect = function(_o3y) {
        var _o3z = new _o3x.SlotItemEffectModel(),
            _o40 = new _o3x.SlotItemEffectModel();
        if (554 != _o3y.ship_id && 553 != _o3y.ship_id || (_o40.houg = 5, _o40.tyku = 2, _o40.kaih = 2, _o40.tais = 1), !_o40.exists()) return _o3z;
        var _o41 = _o3y.get_slotnums(322);
        return _o3z = _o40.multiply(_o41);
    };
},
function(_o42, _o43, _o44) {
    'use strict';
    defineModule(_o43);
    Object.defineProperty(_o43, '__esModule', {
        'value': !0
    });
    var _o45 = _o44(3);
    _o43.getSlot323PersonalEffect = function(_o46) {
        var _o47 = new _o45.SlotItemEffectModel(),
            _o48 = new _o45.SlotItemEffectModel();
        if (554 != _o46.ship_id && 553 != _o46.ship_id || (_o48.houg = 6, _o48.tyku = 3, _o48.kaih = 3, _o48.tais = 2), !_o48.exists()) return _o47;
        var _o49 = _o46.get_slotnums(323);
        return _o47 = _o48.multiply(_o49);
    };
},
function(_o4a, _o4b, _o4c) {
    'use strict';
    defineModule(_o4b);
    Object.defineProperty(_o4b, '__esModule', {
        'value': !0
    });
    var _o4d = _o4c(3);
    _o4b.getSlot324And325PersonalEffect = function(_o4e) {
        var _o4f = new _o4d.SlotItemEffectModel(),
            _o4g = new _o4d.SlotItemEffectModel();
        if (554 == _o4e.ship_id || 646 == _o4e.ship_id ? (_o4g.houg = 2, _o4g.tais = 3, _o4g.kaih = 1) : 553 == _o4e.ship_id && (_o4g.houg = 1, _o4g.tais = 2, _o4g.kaih = 1), !_o4g.exists()) return _o4f;
        var _o4h = _o4e.get_slotnums(324) + _o4e.get_slotnums(325);
        return _o4f = _o4g.multiply(_o4h);
    };
},
function(_o4i, _o4j, _o4k) {
    'use strict';
    defineModule(_o4j);
    Object.defineProperty(_o4j, '__esModule', {
        'value': !0
    });
    var _o4l = _o4k(3);
    _o4j.getSlot326PersonalEffect = function(_o4m) {
        var _o4n = new _o4l.SlotItemEffectModel(),
            _o4o = new _o4l.SlotItemEffectModel();
        if (646 == _o4m.ship_id ? (_o4o.houg = 3, _o4o.tais = 5, _o4o.kaih = 3) : 554 == _o4m.ship_id ? (_o4o.houg = 3, _o4o.tais = 4, _o4o.kaih = 2) : 553 == _o4m.ship_id && (_o4o.houg = 1, _o4o.tais = 3, _o4o.kaih = 1), !_o4o.exists()) return _o4n;
        var _o4p = _o4m.get_slotnums(326);
        return _o4n = _o4o.multiply(_o4p);
    };
},
function(_o4q, _o4r, _o4s) {
    'use strict';
    defineModule(_o4r);
    Object.defineProperty(_o4r, '__esModule', {
        'value': !0
    });
    var _o4t = _o4s(3);
    _o4r.getSlot327PersonalEffect = function(_o4u) {
        var _o4v = new _o4t.SlotItemEffectModel(),
            _o4w = new _o4t.SlotItemEffectModel();
        if (646 == _o4u.ship_id ? (_o4w.houg = 5, _o4w.tais = 6, _o4w.kaih = 4) : 554 == _o4u.ship_id ? (_o4w.houg = 4, _o4w.tais = 5, _o4w.kaih = 2) : 553 == _o4u.ship_id && (_o4w.houg = 2, _o4w.tais = 4, _o4w.kaih = 1), !_o4w.exists()) return _o4v;
        var _o4x = _o4u.get_slotnums(327);
        return _o4v = _o4w.multiply(_o4x);
    };
},
function(_o4y, _o4z, _o50) {
    'use strict';
    defineModule(_o4z);
    Object.defineProperty(_o4z, '__esModule', {
        'value': !0
    });
    var _o51 = _o50(3);
    _o4z.getSlot328PersonalEffect = function(_o52) {
        var _o53 = new _o51.SlotItemEffectModel(),
            _o54 = new _o51.SlotItemEffectModel();
        if ('こんごう' == _o52.yomi ? (_o54.houg = 1, _o54.kaih = 1, 209 == _o52.ship_id || 149 == _o52.ship_id ? _o54.houg += 1 : 591 == _o52.ship_id && (_o54.houg += 2, _o54.raig += 1)) : 'ひえい' == _o52.yomi ? (_o54.houg = 1, _o54.kaih = 1, 210 == _o52.ship_id || 150 == _o52.ship_id ? _o54.houg += 1 : 592 == _o52.ship_id && (_o54.houg += 2, _o54.tyku += 1)) : 'はるな' == _o52.yomi ? (_o54.houg = 1, _o54.kaih = 1, 211 == _o52.ship_id || 151 == _o52.ship_id ? _o54.houg += 1 : 593 == _o52.ship_id ? (_o54.houg += 1, _o54.tyku += 2) : 954 == _o52.ship_id && (_o54.houg += 2, _o54.tyku += 1)) : 'きりしま' == _o52.yomi ? (_o54.houg = 1, _o54.kaih = 1, 212 != _o52.ship_id && 152 != _o52.ship_id || (_o54.houg += 1)) : 'ふそう' != _o52.yomi && 'やましろ' != _o52.yomi && 'いせ' != _o52.yomi && 'ひゅうが' != _o52.yomi || (_o54.houg = 1), !_o54.exists()) return _o53;
        var _o55 = _o52.get_slotnums(328);
        return _o53 = _o54.multiply(_o55);
    };
},
function(_o56, _o57, _o58) {
    'use strict';
    defineModule(_o57);
    Object.defineProperty(_o57, '__esModule', {
        'value': !0
    });
    var _o59 = _o58(3);
    _o57.getSlot329PersonalEffect = function(_o5a) {
        var _o5b = new _o59.SlotItemEffectModel(),
            _o5c = new _o59.SlotItemEffectModel();
        if ('こんごう' == _o5a.yomi ? (_o5c.houg = 1, _o5c.kaih = 1, 209 == _o5a.ship_id ? _o5c.houg += 1 : 149 == _o5a.ship_id ? (_o5c.houg += 2, _o5c.tyku += 1) : 591 == _o5a.ship_id && (_o5c.houg += 3, _o5c.tyku += 1, _o5c.raig += 2)) : 'ひえい' == _o5a.yomi ? (_o5c.houg = 1, _o5c.kaih = 1, 210 == _o5a.ship_id ? _o5c.houg += 1 : 150 == _o5a.ship_id ? (_o5c.houg += 2, _o5c.tyku += 1) : 592 == _o5a.ship_id && (_o5c.houg += 3, _o5c.tyku += 1, _o5c.raig += 2)) : 'はるな' == _o5a.yomi ? (_o5c.houg = 1, _o5c.kaih = 1, 211 == _o5a.ship_id ? _o5c.houg += 1 : 151 == _o5a.ship_id ? (_o5c.houg += 2, _o5c.tyku += 1) : 593 == _o5a.ship_id ? (_o5c.houg += 2, _o5c.tyku += 3, _o5c.raig += 1) : 954 == _o5a.ship_id && (_o5c.houg += 3, _o5c.tyku += 1, _o5c.raig += 2)) : 'きりしま' == _o5a.yomi ? (_o5c.houg = 1, _o5c.kaih = 1, 212 == _o5a.ship_id ? _o5c.houg += 1 : 152 == _o5a.ship_id && (_o5c.houg += 2, _o5c.tyku += 1)) : 'ふそう' != _o5a.yomi && 'やましろ' != _o5a.yomi && 'いせ' != _o5a.yomi && 'ひゅうが' != _o5a.yomi || (_o5c.houg = 1), !_o5c.exists()) return _o5b;
        var _o5d = _o5a.get_slotnums(329);
        return _o5b = _o5c.multiply(_o5d);
    };
},
function(_o5e, _o5f, _o5g) {
    'use strict';
    defineModule(_o5f);
    Object.defineProperty(_o5f, '__esModule', {
        'value': !0
    });
    var _o5h = _o5g(3);
    _o5f.getSlot335PersonalEffect = function(_o5i) {
        var _o5j = new _o5h.SlotItemEffectModel(),
            _o5k = new _o5h.SlotItemEffectModel();
        if (277 == _o5i.ship_id || 278 == _o5i.ship_id ? (_o5k.tyku = 1, _o5k.kaih = 1) : 594 != _o5i.ship_id && 599 != _o5i.ship_id && 610 != _o5i.ship_id && 646 != _o5i.ship_id && 698 != _o5i.ship_id || (_o5k.tyku = 2, _o5k.kaih = 1), !_o5k.exists()) return _o5j;
        var _o5l = _o5i.get_slotnums(335);
        return _o5j = _o5k.multiply(_o5l);
    };
},
function(_o5m, _o5n, _o5o) {
    'use strict';
    defineModule(_o5n);
    Object.defineProperty(_o5n, '__esModule', {
        'value': !0
    });
    var _o5p = _o5o(3);
    _o5n.getSlot336PersonalEffect = function(_o5q) {
        var _o5r = new _o5p.SlotItemEffectModel(),
            _o5s = new _o5p.SlotItemEffectModel();
        if (277 == _o5q.ship_id || 278 == _o5q.ship_id ? (_o5s.houg = 1, _o5s.tyku = 1, _o5s.kaih = 1) : 594 != _o5q.ship_id && 599 != _o5q.ship_id && 610 != _o5q.ship_id && 646 != _o5q.ship_id && 698 != _o5q.ship_id || (_o5s.houg = 1, _o5s.tyku = 2, _o5s.kaih = 1), !_o5s.exists()) return _o5r;
        var _o5t = _o5q.get_slotnums(336);
        return _o5r = _o5s.multiply(_o5t);
    };
},
function(_o5u, _o5v, _o5w) {
    'use strict';
    defineModule(_o5v);
    Object.defineProperty(_o5v, '__esModule', {
        'value': !0
    });
    var _o5x = _o5w(3);
    _o5v.getSlot337PersonalEffect = function(_o5y) {
        var _o5z = new _o5x.SlotItemEffectModel(),
            _o60 = new _o5x.SlotItemEffectModel();
        if (277 == _o5y.ship_id || 278 == _o5y.ship_id ? (_o60.houg = 1, _o60.tyku = 1, _o60.kaih = 1) : 594 != _o5y.ship_id && 599 != _o5y.ship_id && 610 != _o5y.ship_id && 646 != _o5y.ship_id && 698 != _o5y.ship_id || (_o60.houg = 2, _o60.tyku = 2, _o60.kaih = 1), !_o60.exists()) return _o5z;
        var _o61 = _o5y.get_slotnums(337);
        return _o5z = _o60.multiply(_o61);
    };
},
function(_o62, _o63, _o64) {
    'use strict';
    defineModule(_o63);
    Object.defineProperty(_o63, '__esModule', {
        'value': !0
    });
    var _o65 = _o64(3);
    _o63.getSlot338PersonalEffect = function(_o66) {
        var _o67 = new _o65.SlotItemEffectModel(),
            _o68 = new _o65.SlotItemEffectModel();
        if (277 == _o66.ship_id || 278 == _o66.ship_id ? (_o68.houg = 1, _o68.tyku = 1, _o68.kaih = 2) : 594 == _o66.ship_id || 646 == _o66.ship_id || 698 == _o66.ship_id ? (_o68.houg = 1, _o68.tyku = 2, _o68.kaih = 3) : 599 != _o66.ship_id && 610 != _o66.ship_id || (_o68.houg = 4, _o68.tyku = 3, _o68.kaih = 4), !_o68.exists()) return _o67;
        var _o69 = _o66.get_slotnums(338);
        return _o67 = _o68.multiply(_o69);
    };
},
function(_o6a, _o6b, _o6c) {
    'use strict';
    defineModule(_o6b);
    Object.defineProperty(_o6b, '__esModule', {
        'value': !0
    });
    var _o6d = _o6c(3);
    _o6b.getSlot339PersonalEffect = function(_o6e) {
        var _o6f = new _o6d.SlotItemEffectModel(),
            _o6g = new _o6d.SlotItemEffectModel();
        if (277 == _o6e.ship_id || 278 == _o6e.ship_id ? (_o6g.houg = 1, _o6g.tyku = 2, _o6g.kaih = 2) : 594 == _o6e.ship_id || 646 == _o6e.ship_id || 698 == _o6e.ship_id ? (_o6g.houg = 1, _o6g.tyku = 3, _o6g.kaih = 4) : 599 != _o6e.ship_id && 610 != _o6e.ship_id || (_o6g.houg = 6, _o6g.tyku = 4, _o6g.kaih = 5), !_o6g.exists()) return _o6f;
        var _o6h = _o6e.get_slotnums(339);
        return _o6f = _o6g.multiply(_o6h);
    };
},
function(_o6i, _o6j, _o6k) {
    'use strict';
    defineModule(_o6j);
    Object.defineProperty(_o6j, '__esModule', {
        'value': !0
    });
    var _o6l = _o6k(3);
    _o6j.getSlot340PersonalEffect = function(_o6m) {
        var _o6n = new _o6l.SlotItemEffectModel(),
            _o6o = new _o6l.SlotItemEffectModel();
        if ('ガリバルディ' != _o6m.yomi && 'アブルッツィ' != _o6m.yomi || (_o6o.houg = 1, _o6o.tyku = 1, _o6o.kaih = 1), !_o6o.exists()) return _o6n;
        var _o6p = _o6m.get_slotnums(340);
        return _o6n = _o6o.multiply(_o6p);
    };
},
function(_o6q, _o6r, _o6s) {
    'use strict';
    defineModule(_o6r);
    Object.defineProperty(_o6r, '__esModule', {
        'value': !0
    });
    var _o6t = _o6s(3);
    _o6r.getSlot341PersonalEffect = function(_o6u) {
        var _o6v = new _o6t.SlotItemEffectModel(),
            _o6w = new _o6t.SlotItemEffectModel();
        if ('ガリバルディ' == _o6u.yomi || 'アブルッツィ' == _o6u.yomi ? (_o6w.houg = 2, _o6w.tyku = 1, _o6w.kaih = 1) : 'ゴトランド' == _o6u.yomi && (_o6w.houg = 1, _o6w.tyku = 1, _o6w.kaih = 1), !_o6w.exists()) return _o6v;
        var _o6x = _o6u.get_slotnums(341);
        return _o6v = _o6w.multiply(_o6x);
    };
},
function(_o6y, _o6z, _o70) {
    'use strict';
    defineModule(_o6z);
    Object.defineProperty(_o6z, '__esModule', {
        'value': !0
    });
    var _o71 = _o70(3);
    _o6z.getSlot342PersonalEffect = function(_o72) {
        var _o73 = new _o71.SlotItemEffectModel(),
            _o74 = new _o71.SlotItemEffectModel();
        if (277 == _o72.ship_id || 278 == _o72.ship_id || 461 == _o72.ship_id || 466 == _o72.ship_id || 462 == _o72.ship_id || 467 == _o72.ship_id ? _o74.houg = 1 : 594 == _o72.ship_id || 646 == _o72.ship_id || 698 == _o72.ship_id ? (_o74.houg = 2, _o74.tyku = 1, _o74.kaih = 1) : 599 != _o72.ship_id && 610 != _o72.ship_id || (_o74.houg = 3, _o74.tyku = 2, _o74.kaih = 2), !_o74.exists()) return _o73;
        var _o75 = _o72.get_slotnums(342);
        return _o73 = _o74.multiply(_o75);
    };
},
function(_o76, _o77, _o78) {
    'use strict';
    defineModule(_o77);
    Object.defineProperty(_o77, '__esModule', {
        'value': !0
    });
    var _o79 = _o78(3);
    _o77.getSlot343PersonalEffect = function(_o7a) {
        var _o7b = new _o79.SlotItemEffectModel(),
            _o7c = new _o79.SlotItemEffectModel();
        if (277 == _o7a.ship_id || 278 == _o7a.ship_id ? _o7c.houg = 2 : 461 == _o7a.ship_id || 466 == _o7a.ship_id || 462 == _o7a.ship_id || 467 == _o7a.ship_id ? _o7c.houg = 1 : 594 == _o7a.ship_id || 646 == _o7a.ship_id || 698 == _o7a.ship_id ? (_o7c.houg = 3, _o7c.tyku = 2, _o7c.kaih = 1) : 599 != _o7a.ship_id && 610 != _o7a.ship_id || (_o7c.houg = 5, _o7c.tyku = 3, _o7c.kaih = 3), !_o7c.exists()) return _o7b;
        var _o7d = _o7a.get_slotnums(343);
        return _o7b = _o7c.multiply(_o7d);
    };
},
function(_o7e, _o7f, _o7g) {
    'use strict';
    defineModule(_o7f);
    Object.defineProperty(_o7f, '__esModule', {
        'value': !0
    });
    var _o7h = _o7g(3);
    _o7f.getSlot344PersonalEffect = function(_o7i) {
        var _o7j = new _o7h.SlotItemEffectModel(),
            _o7k = new _o7h.SlotItemEffectModel();
        if (599 == _o7i.ship_id || 610 == _o7i.ship_id ? _o7k.houg = 3 : 555 == _o7i.ship_id || 560 == _o7i.ship_id ? (_o7k.houg = 2, _o7k.tais = 2) : 318 == _o7i.ship_id ? (_o7k.houg = 4, _o7k.tais = 1) : 282 == _o7i.ship_id ? (_o7k.houg = 2, _o7k.tais = 1) : 888 == _o7i.ship_id ? (_o7k.houg = 4, _o7k.tais = 2) : 883 == _o7i.ship_id && (_o7k.houg = 5, _o7k.tais = 2), !_o7k.exists()) return _o7j;
        var _o7l = _o7i.get_slotnums(344);
        return _o7j = _o7k.multiply(_o7l);
    };
},
function(_o7m, _o7n, _o7o) {
    'use strict';
    defineModule(_o7n);
    Object.defineProperty(_o7n, '__esModule', {
        'value': !0
    });
    var _o7p = _o7o(3);
    _o7n.getSlot345PersonalEffect = function(_o7q) {
        var _o7r = new _o7p.SlotItemEffectModel(),
            _o7s = new _o7p.SlotItemEffectModel();
        if (599 == _o7q.ship_id || 610 == _o7q.ship_id ? (_o7s.houg = 3, _o7s.kaih = 1) : 555 == _o7q.ship_id || 560 == _o7q.ship_id ? (_o7s.houg = 3, _o7s.tais = 2, _o7s.kaih = 2) : 318 == _o7q.ship_id ? (_o7s.houg = 5, _o7s.tais = 1, _o7s.kaih = 2) : 282 == _o7q.ship_id ? (_o7s.houg = 3, _o7s.tais = 1, _o7s.kaih = 1) : 888 == _o7q.ship_id ? (_o7s.houg = 4, _o7s.tais = 2, _o7s.kaih = 2) : 883 == _o7q.ship_id && (_o7s.houg = 5, _o7s.tais = 2, _o7s.kaih = 3), !_o7s.exists()) return _o7r;
        var _o7t = _o7q.get_slotnums(345);
        return _o7r = _o7s.multiply(_o7t);
    };
},
function(_o7u, _o7v, _o7w) {
    'use strict';
    defineModule(_o7v);
    Object.defineProperty(_o7v, '__esModule', {
        'value': !0
    });
    var _o7x = _o7w(3);
    _o7v.getSlot356_357PersonalEffect = function(_o7y) {
        var _o7z = new _o7x.SlotItemEffectModel(),
            _o80 = new _o7x.SlotItemEffectModel();
        if (95 == _o7y.ctype ? _o80.houg = 2 : 9 == _o7y.ctype && (_o80.houg = 1), !_o80.exists()) return _o7z;
        var _o81 = _o7y.get_slotnums(356) + _o7y.get_slotnums(357);
        return _o7z = _o80.multiply(_o81);
    };
},
function(_o82, _o83, _o84) {
    'use strict';
    defineModule(_o83);
    Object.defineProperty(_o83, '__esModule', {
        'value': !0
    });
    var _o85 = _o84(3);
    _o83.getSlot358PersonalEffect = function(_o86) {
        var _o87 = new _o85.SlotItemEffectModel(),
            _o88 = new _o85.SlotItemEffectModel();
        if ('アメリカ' != _o86.getCountryName() && 67 != _o86.ctype && 78 != _o86.ctype && 82 != _o86.ctype && 88 != _o86.ctype && 108 != _o86.ctype && 112 != _o86.ctype) return _o87;
        _o88.houg += 1, _o88.kaih += 1, _o88.tyku += 1, 95 == _o86.ctype && (_o88.houg += 1, _o88.kaih += 2, _o88.tyku += 2);
        var _o89 = _o86.get_slotnums(358);
        return _o87 = _o88.multiply(_o89);
    };
},
function(_o8a, _o8b, _o8c) {
    'use strict';
    defineModule(_o8b);
    Object.defineProperty(_o8b, '__esModule', {
        'value': !0
    });
    var _o8d = _o8c(3);
    _o8b.getSlot359PersonalEffect = function(_o8e) {
        var _o8f = new _o8d.SlotItemEffectModel(),
            _o8g = new _o8d.SlotItemEffectModel();
        if ('パース' == _o8e.yomi ? (_o8g.houg = 2, _o8g.tyku = 2, _o8g.kaih = 1) : 'ゆうばり' == _o8e.yomi && (_o8g.houg = 1, _o8g.tyku = 1, _o8g.kaih = 1), 622 != _o8e.ship_id && 623 != _o8e.ship_id && 624 != _o8e.ship_id || (_o8g.houg += 1, _o8g.tyku += 1), !_o8g.exists()) return _o8f;
        var _o8h = _o8e.get_slotnums(359);
        return _o8f = _o8g.multiply(_o8h);
    };
},
function(_o8i, _o8j, _o8k) {
    'use strict';
    defineModule(_o8j);
    Object.defineProperty(_o8j, '__esModule', {
        'value': !0
    });
    var _o8l = _o8k(3);
    _o8j.getSlot360_361PersonalEffect = function(_o8m) {
        var _o8n = new _o8l.SlotItemEffectModel(),
            _o8o = new _o8l.SlotItemEffectModel();
        if ('デ・ロイテル' == _o8m.yomi ? (_o8o.houg = 2, _o8o.tyku = 2, _o8o.kaih = 1) : 'ゴトランド' == _o8m.yomi && (_o8o.houg = 2, _o8o.tyku = 1, _o8o.kaih = 1), 41 == _o8m.ctype && (_o8o.houg = 1, _o8o.tyku = 1), !_o8o.exists()) return _o8n;
        var _o8p = _o8m.get_slotnums(360) + _o8m.get_slotnums(361);
        return _o8n = _o8o.multiply(_o8p);
    };
},
function(_o8q, _o8r, _o8s) {
    'use strict';
    defineModule(_o8r);
    Object.defineProperty(_o8r, '__esModule', {
        'value': !0
    });
    var _o8t = _o8s(3);
    _o8r.getSlot362_363PersonalEffect = function(_o8u) {
        var _o8v = new _o8t.SlotItemEffectModel(),
            _o8w = new _o8t.SlotItemEffectModel(),
            _o8x = !1;
        if (99 == _o8u.ctype ? (_o8w.houg = 1, _o8w.tyku = 2, _o8w.kaih = 1, _o8x = !0) : 34 == _o8u.ctype || 21 == _o8u.ctype ? (_o8w.houg = -3, _o8w.tyku = -3, _o8w.kaih = -8, _o8x = !0) : 4 == _o8u.ctype || 20 == _o8u.ctype || 16 == _o8u.ctype ? (_o8w.houg = -3, _o8w.tyku = -2, _o8w.kaih = -6, _o8x = !0) : 89 == _o8u.ctype || 56 == _o8u.ctype ? (_o8w.houg = -2, _o8w.tyku = -1, _o8w.kaih = -4, _o8x = !0) : 52 != _o8u.ctype && 41 != _o8u.ctype && 98 != _o8u.ctype || (_o8w.tyku = -1, _o8w.kaih = -2, _o8x = !0), 'アメリカ' == _o8u.getCountryName() && (_o8w.tyku += 1, _o8w.kaih += 1, _o8x = !0), 0 == _o8x) return _o8v;
        var _o8y = _o8u.get_slotnums(362) + _o8u.get_slotnums(363);
        return _o8v = _o8w.multiply(_o8y);
    };
},
function(_o8z, _o90, _o91) {
    'use strict';
    defineModule(_o90);
    Object.defineProperty(_o90, '__esModule', {
        'value': !0
    });
    var _o92 = _o91(3);
    _o90.getSlot364PersonalEffect = function(_o93) {
        new _o92.SlotItemEffectModel();
        var _o94 = new _o92.SlotItemEffectModel();
        623 == _o93.ship_id || 586 == _o93.ship_id || 119 == _o93.ship_id || 118 == _o93.ship_id || 657 == _o93.ship_id || 506 == _o93.ship_id || 668 == _o93.ship_id ? (_o94.raig = 1, _o94.kaih = -2, 119 == _o93.ship_id ? _o94.raig += 1 : 623 == _o93.ship_id && (_o94.houg += 1, _o94.raig += 3)) : (_o94.houg = -1, _o94.kaih = -7);
        var _o95 = _o93.get_slotnums(364);
        return _o94.multiply(_o95);
    };
},
function(_o96, _o97, _o98) {
    'use strict';
    defineModule(_o97);
    Object.defineProperty(_o97, '__esModule', {
        'value': !0
    });
    var _o99 = _o98(3);
    _o97.getSlot365PersonalEffect = function(_o9a) {
        var _o9b = new _o99.SlotItemEffectModel(),
            _o9c = new _o99.SlotItemEffectModel(),
            _o9d = !1;
        return 37 != _o9a.ctype && 19 != _o9a.ctype && 2 != _o9a.ctype && 26 != _o9a.ctype && 6 != _o9a.ctype || (_o9c.houg += 1, _o9d = !0), 136 != _o9a.ship_id && 148 != _o9a.ship_id && 546 != _o9a.ship_id && 541 != _o9a.ship_id && 573 != _o9a.ship_id && 911 != _o9a.ship_id && 916 != _o9a.ship_id && 593 != _o9a.ship_id || (_o9c.houg += 1, _o9d = !0), 591 != _o9a.ship_id && 592 != _o9a.ship_id && 954 != _o9a.ship_id || (_o9c.houg += 2, _o9d = !0), 0 == _o9d ? _o9b : _o9b = _o9c.multiply(1);
    };
},
function(_o9e, _o9f, _o9g) {
    'use strict';
    defineModule(_o9f);
    Object.defineProperty(_o9f, '__esModule', {
        'value': !0
    });
    var _o9h = _o9g(3);
    _o9f.getSlot367PersonalEffect = function(_o9i) {
        var _o9j = new _o9h.SlotItemEffectModel(),
            _o9k = new _o9h.SlotItemEffectModel(),
            _o9l = !1;
        if ('ゴトランド' == _o9i.yomi && (_o9k.houg += 2, _o9k.tais += 1, _o9k.kaih += 1, _o9k.saku += 1, _o9l = !0), 70 == _o9i.ctype ? (_o9k.houg += 1, _o9k.tais += 1, _o9k.kaih += 1, _o9k.saku += 1, _o9l = !0) : 72 == _o9i.ctype || 62 == _o9i.ctype ? (_o9k.houg += 1, _o9k.kaih += 1, _o9k.saku += 1, _o9l = !0) : 67 != _o9i.ctype && 78 != _o9i.ctype && 82 != _o9i.ctype && 88 != _o9i.ctype && 108 != _o9i.ctype && 112 != _o9i.ctype || (_o9k.houg += 2, _o9k.kaih += 2, _o9k.saku += 2, _o9l = !0), 0 == _o9l) return _o9j;
        var _o9m = _o9i.get_slotnums(367);
        return _o9j = _o9k.multiply(_o9m);
    };
},
function(_o9n, _o9o, _o9p) {
    'use strict';
    defineModule(_o9o);
    Object.defineProperty(_o9o, '__esModule', {
        'value': !0
    });
    var _o9q = _o9p(3);
    _o9o.getSlot368PersonalEffect = function(_o9r) {
        var _o9s = new _o9q.SlotItemEffectModel(),
            _o9t = new _o9q.SlotItemEffectModel(),
            _o9u = !1;
        if ('ゴトランド' == _o9r.yomi && (_o9t.houg = 4, _o9t.tais = 3, _o9t.kaih = 2, _o9t.saku = 3, _o9u = !0, 630 == _o9r.ship_id && (_o9s.houg += 2, _o9s.raig += 2, _o9s.kaih += 1, _o9s.saku += 1)), 70 == _o9r.ctype ? (_o9t.houg = 2, _o9t.tais = 3, _o9t.kaih = 1, _o9t.saku = 2, _o9u = !0) : 72 == _o9r.ctype || 62 == _o9r.ctype ? (_o9t.houg += 1, _o9t.tais += 2, _o9t.kaih += 1, _o9t.saku += 2, _o9u = !0) : 67 != _o9r.ctype && 78 != _o9r.ctype && 82 != _o9r.ctype && 88 != _o9r.ctype && 108 != _o9r.ctype && 112 != _o9r.ctype || (_o9t.houg += 2, _o9t.tais += 2, _o9t.kaih += 2, _o9t.saku += 2, _o9u = !0), 0 == _o9u) return _o9s;
        var _o9v = _o9r.get_slotnums(368);
        return _o9s.add(_o9t.multiply(_o9v)), _o9s;
    };
},
function(_o9w, _o9x, _o9y) {
    'use strict';
    defineModule(_o9x);
    Object.defineProperty(_o9x, '__esModule', {
        'value': !0
    });
    var _o9z = _o9y(3);
    _o9x.getSlot369PersonalEffect = function(_oa0) {
        var _oa1 = new _o9z.SlotItemEffectModel(),
            _oa2 = new _o9z.SlotItemEffectModel(),
            _oa3 = !1;
        if ('ゴトランド' == _oa0.yomi && (_oa2.houg = 5, _oa2.tais = 4, _oa2.kaih = 4, _oa2.saku = 3, _oa3 = !0, 630 == _oa0.ship_id && (_oa1.houg += 3, _oa1.raig += 3, _oa1.kaih += 2, _oa1.saku += 2)), 70 == _oa0.ctype ? (_oa2.houg += 3, _oa2.tais += 3, _oa2.kaih += 2, _oa2.saku += 3, _oa3 = !0) : 72 == _oa0.ctype || 62 == _oa0.ctype ? (_oa2.houg += 2, _oa2.tais += 2, _oa2.kaih += 1, _oa2.saku += 2, _oa3 = !0) : 67 != _oa0.ctype && 78 != _oa0.ctype && 82 != _oa0.ctype && 88 != _oa0.ctype && 108 != _oa0.ctype && 112 != _oa0.ctype || (_oa2.houg += 2, _oa2.tais += 2, _oa2.kaih += 2, _oa2.saku += 2, _oa3 = !0), 0 == _oa3) return _oa1;
        var _oa4 = _oa0.get_slotnums(369);
        return _oa1.add(_oa2.multiply(_oa4)), _oa1;
    };
},
function(_oa5, _oa6, _oa7) {
    'use strict';
    defineModule(_oa6);
    Object.defineProperty(_oa6, '__esModule', {
        'value': !0
    });
    var _oa8 = _oa7(3);
    _oa6.getSlot370PersonalEffect = function(_oa9) {
        var _oaa = new _oa8.SlotItemEffectModel(),
            _oab = new _oa8.SlotItemEffectModel(),
            _oac = !1;
        if ('ゴトランド' == _oa9.yomi && (_oab.houg = 1, _oab.tais = 3, _oab.kaih = 1, _oab.saku = 2, _oac = !0), 70 == _oa9.ctype ? (_oab.houg += 1, _oab.tais += 3, _oab.kaih += 1, _oab.saku += 1, _oac = !0) : 72 == _oa9.ctype || 62 == _oa9.ctype ? (_oab.houg += 1, _oab.tais += 2, _oab.kaih += 1, _oab.saku += 1, _oac = !0) : 67 != _oa9.ctype && 78 != _oa9.ctype && 82 != _oa9.ctype && 88 != _oa9.ctype && 108 != _oa9.ctype && 112 != _oa9.ctype || (_oab.houg += 2, _oab.tais += 3, _oab.kaih += 2, _oab.saku += 2, _oac = !0, 'ウォースパイト' == _oa9.yomi && (_oaa.houg += 4, _oaa.kaih += 1, _oaa.saku += 1)), 0 == _oac) return _oaa;
        var _oad = _oa9.get_slotnums(370);
        return _oaa.add(_oab.multiply(_oad)), _oaa;
    };
},
function(_oae, _oaf, _oag) {
    'use strict';
    defineModule(_oaf);
    Object.defineProperty(_oaf, '__esModule', {
        'value': !0
    });
    var _oah = _oag(3);
    _oaf.getSlot371PersonalEffect = function(_oai) {
        var _oaj = new _oah.SlotItemEffectModel(),
            _oak = new _oah.SlotItemEffectModel(),
            _oal = !1;
        if ('ゴトランド' == _oai.yomi && (_oak.houg = 4, _oak.tais = 2, _oak.kaih = 3, _oak.saku = 6, _oal = !0, 630 == _oai.ship_id && (_oaj.houg += 2, _oaj.kaih += 2, _oaj.saku += 3)), 70 == _oai.ctype ? (_oak.houg += 2, _oak.tais += 1, _oak.kaih += 2, _oak.saku += 4, _oal = !0) : 79 == _oai.ctype ? (_oak.houg += 2, _oak.kaih += 1, _oak.saku += 3, _oal = !0) : 67 != _oai.ctype && 78 != _oai.ctype && 82 != _oai.ctype && 88 != _oai.ctype && 108 != _oai.ctype && 112 != _oai.ctype || (_oak.houg += 3, _oak.tais += 1, _oak.kaih += 2, _oak.saku += 3, _oal = !0, 88 == _oai.ctype && (_oaj.houg += 3, _oaj.kaih += 2, _oaj.saku += 2)), 0 == _oal) return _oaj;
        var _oam = _oai.get_slotnums(371);
        return _oaj.add(_oak.multiply(_oam)), _oaj;
    };
},
function(_oan, _oao, _oap) {
    'use strict';
    defineModule(_oao);
    Object.defineProperty(_oao, '__esModule', {
        'value': !0
    });
    var _oaq = _oap(3);
    _oao.getSlot372PersonalEffect = function(_oar) {
        var _oas = new _oaq.SlotItemEffectModel(),
            _oat = !1,
            _oau = new _oaq.SlotItemEffectModel();
        if ('しょうかく' == _oar.yomi || 'ずいかく' == _oar.yomi || 'たいほう' == _oar.yomi ? (_oau.houg += 1, _oat = !0, _oas.raig += 1) : 'じゅんよう' != _oar.yomi && 'ひよう' != _oar.yomi || (_oau.houg += 1, _oat = !0), 108 == _oar.ship_id || 109 == _oar.ship_id || 291 == _oar.ship_id || 292 == _oar.ship_id || 296 == _oar.ship_id || 297 == _oar.ship_id ? (_oau.houg += 1, _oat = !0) : 116 == _oar.ship_id || 74 == _oar.ship_id || 117 == _oar.ship_id || 282 == _oar.ship_id || 185 == _oar.ship_id ? (_oau.tais += 1, _oat = !0) : 560 == _oar.ship_id || 555 == _oar.ship_id || 318 == _oar.ship_id ? (_oau.tais += 1, _oat = !0, _oas.raig += 1) : 508 == _oar.ship_id || 509 == _oar.ship_id ? (_oau.houg += 1, _oat = !0) : 883 != _oar.ship_id && 888 != _oar.ship_id || (_oau.houg += 2, _oau.tais += 1, _oat = !0, _oas.raig += 2), 0 == _oat) return _oas;
        var _oav = _oar.get_slotnums(372);
        return _oas.add(_oau.multiply(_oav)), _oas;
    };
},
function(_oaw, _oax, _oay) {
    'use strict';
    defineModule(_oax);
    Object.defineProperty(_oax, '__esModule', {
        'value': !0
    });
    var _oaz = _oay(3);
    _oax.getSlot373PersonalEffect = function(_ob0) {
        var _ob1 = new _oaz.SlotItemEffectModel(),
            _ob2 = new _oaz.SlotItemEffectModel(),
            _ob3 = !1;
        if ('しょうかく' == _ob0.yomi ? (_ob2.houg += 2, _ob3 = !0, _ob1.raig += 2, _ob1.kaih += 2) : 'ずいかく' == _ob0.yomi ? (_ob2.houg += 1, _ob3 = !0, _ob1.raig += 2, _ob1.kaih += 3) : 'たいほう' == _ob0.yomi ? (_ob2.houg += 1, _ob3 = !0, _ob1.raig += 2, _ob1.kaih += 2) : 'じゅんよう' != _ob0.yomi && 'ひよう' != _ob0.yomi || (_ob2.houg += 1, _ob3 = !0, _ob1.raig += 1, _ob1.kaih += 1), 108 == _ob0.ship_id || 109 == _ob0.ship_id ? (_ob2.houg += 1, _ob3 = !0) : 291 == _ob0.ship_id || 292 == _ob0.ship_id ? (_ob2.houg += 1, _ob3 = !0, _ob1.raig += 1) : 296 == _ob0.ship_id || 297 == _ob0.ship_id ? (_ob2.houg += 1, _ob3 = !0, _ob1.raig += 1, _ob1.kaih += 1) : 116 == _ob0.ship_id || 74 == _ob0.ship_id ? (_ob2.tais += 1, _ob3 = !0) : 117 == _ob0.ship_id || 282 == _ob0.ship_id || 185 == _ob0.ship_id ? (_ob2.houg += 1, _ob2.tais += 1, _ob3 = !0, _ob1.raig += 1) : 560 == _ob0.ship_id || 555 == _ob0.ship_id || 318 == _ob0.ship_id ? (_ob2.houg += 1, _ob2.tais += 2, _ob3 = !0, _ob1.raig += 1, _ob1.kaih += 1) : 508 == _ob0.ship_id || 509 == _ob0.ship_id ? (_ob2.houg += 1, _ob3 = !0, _ob1.raig += 2, _ob1.kaih += 2) : 888 == _ob0.ship_id ? (_ob2.houg += 2, _ob2.tais += 2, _ob3 = !0, _ob1.raig += 2, _ob1.kaih += 2) : 883 == _ob0.ship_id && (_ob2.houg += 1, _ob2.tais += 2, _ob3 = !0, _ob1.raig += 3, _ob1.kaih += 4), 0 == _ob3) return _ob1;
        var _ob4 = _ob0.get_slotnums(373);
        return _ob1.add(_ob2.multiply(_ob4)), _ob1;
    };
},
function(_ob5, _ob6, _ob7) {
    'use strict';
    defineModule(_ob6);
    Object.defineProperty(_ob6, '__esModule', {
        'value': !0
    });
    var _ob8 = _ob7(3);
    _ob6.getSlot374PersonalEffect = function(_ob9) {
        var _oba = new _ob8.SlotItemEffectModel(),
            _obb = new _ob8.SlotItemEffectModel(),
            _obc = !1;
        if ('しょうかく' == _ob9.yomi ? (_obb.houg += 3, _obc = !0, _oba.raig += 3, _oba.kaih += 3) : 'ずいかく' == _ob9.yomi ? (_obb.houg += 2, _obc = !0, _oba.raig += 3, _oba.kaih += 4) : 'たいほう' == _ob9.yomi ? (_obb.houg += 2, _obc = !0, _oba.raig += 3, _oba.kaih += 2) : 'じゅんよう' != _ob9.yomi && 'ひよう' != _ob9.yomi || (_obb.houg += 1, _obc = !0, _oba.raig += 2, _oba.kaih += 2), 108 == _ob9.ship_id || 109 == _ob9.ship_id ? (_obb.houg += 1, _obc = !0, _oba.raig += 1) : 291 == _ob9.ship_id || 292 == _ob9.ship_id ? (_obb.houg += 1, _obb.tais += 1, _obc = !0, _oba.raig += 1) : 296 == _ob9.ship_id || 297 == _ob9.ship_id ? (_obb.houg += 1, _obb.tais += 1, _obc = !0, _oba.raig += 1, _oba.kaih += 1) : 116 == _ob9.ship_id || 74 == _ob9.ship_id ? (_obb.houg += 1, _obb.tais += 1, _obc = !0) : 117 == _ob9.ship_id || 282 == _ob9.ship_id || 185 == _ob9.ship_id ? (_obb.houg += 1, _obb.tais += 2, _obc = !0, _oba.raig += 1, _oba.kaih += 1) : 560 == _ob9.ship_id || 555 == _ob9.ship_id || 318 == _ob9.ship_id ? (_obb.houg += 1, _obb.tais += 3, _obc = !0, _oba.raig += 1, _oba.kaih += 2) : 508 == _ob9.ship_id || 509 == _ob9.ship_id ? (_obb.houg += 1, _obb.tais += 2, _obc = !0, _oba.raig += 2, _oba.kaih += 3) : 888 == _ob9.ship_id ? (_obb.houg += 3, _obb.tais += 3, _obc = !0, _oba.raig += 2, _oba.kaih += 3) : 883 == _ob9.ship_id && (_obb.houg += 2, _obb.tais += 3, _obc = !0, _oba.raig += 3, _oba.kaih += 5), 0 == _obc) return _oba;
        var _obd = _ob9.get_slotnums(374);
        return _oba.add(_obb.multiply(_obd)), _oba;
    };
},
function(_obe, _obf, _obg) {
    'use strict';
    defineModule(_obf);
    Object.defineProperty(_obf, '__esModule', {
        'value': !0
    });
    var _obh = _obg(3);
    _obf.getSlot375PersonalEffect = function(_obi) {
        var _obj = new _obh.SlotItemEffectModel(),
            _obk = new _obh.SlotItemEffectModel(),
            _obl = !1;
        if (69 != _obi.ctype && 83 != _obi.ctype && 84 != _obi.ctype && 105 != _obi.ctype && 116 != _obi.ctype && 118 != _obi.ctype || (_obk.tyku += 3, _obk.houg += 3, _obk.kaih += 3, _obk.tais += 3, _obl = !0), 'かが' == _obi.yomi && (_obk.tyku += 1, _obk.houg += 1, _obk.kaih += 1, _obk.tais += 1, _obl = !0), 0 == _obl) return _obj;
        var _obm = _obi.get_slotnums(375);
        return _obj.add(_obk.multiply(_obm)), _obj;
    };
},
function(_obn, _obo, _obp) {
    'use strict';
    defineModule(_obo);
    Object.defineProperty(_obo, '__esModule', {
        'value': !0
    });
    var _obq = _obp(3);
    _obo.getSlot376PersonalEffect = function(_obr) {
        var _obs = new _obq.SlotItemEffectModel(),
            _obt = new _obq.SlotItemEffectModel(),
            _obu = !1;
        if ('アメリカ' == _obr.getCountryName() ? (_obt.houg += 2, _obt.raig += 4, _obu = !0) : 67 == _obr.ctype || 78 == _obr.ctype || 82 == _obr.ctype || 88 == _obr.ctype || 108 == _obr.ctype || 112 == _obr.ctype ? (_obt.houg += 1, _obt.raig += 2, _obu = !0) : 96 == _obr.ctype && (_obt.houg += 1, _obt.raig += 1, _obu = !0), 0 == _obu) return _obs;
        var _obv = _obr.get_slotnums(376);
        return _obs.add(_obt.multiply(_obv)), _obs;
    };
},
function(_obw, _obx, _oby) {
    'use strict';
    defineModule(_obx);
    Object.defineProperty(_obx, '__esModule', {
        'value': !0
    });
    var _obz = _oby(3);
    _obx.getSlot377PersonalEffect = function(_oc0) {
        var _oc1 = new _obz.SlotItemEffectModel();
        return 'アメリカ' == _oc0.getCountryName() ? (_oc1.tais += 2, _oc1.kaih += 1, 629 == _oc0.ship_id && (_oc1.tais += 1, _oc1.kaih += 2)) : 67 != _oc0.ctype && 78 != _oc0.ctype && 82 != _oc0.ctype && 88 != _oc0.ctype && 108 != _oc0.ctype && 112 != _oc0.ctype && 96 != _oc0.ctype || (_oc1.tais += 1, _oc1.kaih += 1), 651 != _oc0.ship_id && 656 != _oc0.ship_id || (_oc1.tais += 1, _oc1.kaih += 2), _oc1;
    };
},
function(_oc2, _oc3, _oc4) {
    'use strict';
    defineModule(_oc3);
    Object.defineProperty(_oc3, '__esModule', {
        'value': !0
    });
    var _oc5 = _oc4(3);
    _oc3.getSlot378PersonalEffect = function(_oc6) {
        var _oc7 = new _oc5.SlotItemEffectModel();
        return 'アメリカ' == _oc6.getCountryName() ? (_oc7.tais += 3, _oc7.kaih += 1, 629 == _oc6.ship_id && (_oc7.tais += 1, _oc7.kaih += 1)) : 67 == _oc6.ctype || 78 == _oc6.ctype || 82 == _oc6.ctype || 88 == _oc6.ctype || 108 == _oc6.ctype || 112 == _oc6.ctype ? (_oc7.tais += 2, _oc7.kaih += 1) : 96 == _oc6.ctype && (_oc7.tais += 1, _oc7.kaih += 1), 651 != _oc6.ship_id && 656 != _oc6.ship_id || (_oc7.tais += 1, _oc7.kaih += 1), _oc7;
    };
},
function(_oc8, _oc9, _oca) {
    'use strict';
    var _ocb = this && this.__importDefault || function(_occ) {
        return _occ && _occ.__esModule ? _occ : {
            'default': _occ
        };
    };
    defineModule(_oc9);
    Object.defineProperty(_oc9, '__esModule', {
        'value': !0
    });
    var _ocd = _oca(3),
        _oce = _ocb(_oca(0));
    _oc9.getSlot379PersonalEffect = function(_ocf) {
        var _ocg, _och = new _ocd.SlotItemEffectModel(),
            _oci = !1,
            _ocj = new _ocd.SlotItemEffectModel();
        1 == _ocf.stype ? (_ocj.tyku += 2, _ocj.houg += 1, _oci = !0) : 21 != _ocf.stype && 16 != _ocf.stype || (_ocj.tyku += 1, _ocj.houg += 1, _oci = !0), 66 == _ocf.ctype || 28 == _ocf.ctype ? (_ocj.houg += 1, _ocj.tyku += 2, _oci = !0) : 101 == _ocf.ctype && (_ocj.tyku += 2, _ocj.houg += 1, _och.tyku += 2, _och.houg += 2, _oci = !0), 'ゆら' == _ocf.yomi || 'なか' == _ocf.yomi || 'きぬ' == _ocf.yomi || 'いすず' == _ocf.yomi ? (_ocj.houg += 2, _oci = !0) : 'おおい' != _ocf.yomi && 'きたかみ' != _ocf.yomi || (_ocj.tyku += 2, _ocj.houg += 2, _oci = !0), 'ゆら' != _ocf.yomi && 'なか' != _ocf.yomi && 'きぬ' != _ocf.yomi && 'いすず' != _ocf.yomi && 'ゆうばり' != _ocf.yomi || (_ocj.tais += 1, _oci = !0), 'てんりゅう' != _ocf.yomi && 'たつた' != _ocf.yomi && 'ゆうばり' != _ocf.yomi || (_ocj.houg += 1, _oci = !0), 488 == _ocf.ship_id ? (_ocj.tyku += 4, _oci = !0) : 220 == _ocf.ship_id ? (_ocj.tyku += 3, _oci = !0) : 23 == _ocf.ship_id ? (_ocj.tyku += 2, _oci = !0) : 160 == _ocf.ship_id || 487 == _ocf.ship_id || 141 == _ocf.ship_id ? (_ocj.tyku += 3, _oci = !0) : 224 == _ocf.ship_id || 289 == _ocf.ship_id || 219 == _ocf.ship_id || 56 == _ocf.ship_id || 113 == _ocf.ship_id || 22 == _ocf.ship_id ? (_ocj.tyku += 2, _oci = !0) : 651 != _ocf.ship_id && 656 != _ocf.ship_id || (_ocj.tyku += 3, _ocj.houg += 3, 656 == _ocf.ship_id && (_ocj.kaih += 3, _ocj.tais += 2), _oci = !0), 488 != _ocf.ship_id && 160 != _ocf.ship_id && 487 != _ocf.ship_id && 141 != _ocf.ship_id || (_ocj.tais += 1, _oci = !0), 477 != _ocf.ship_id && 478 != _ocf.ship_id && 624 != _ocf.ship_id || (_ocj.tais += 2, _oci = !0), 477 != _ocf.ship_id && 478 != _ocf.ship_id && 624 != _ocf.ship_id && 622 != _ocf.ship_id || (_ocj.tyku += 2, _oci = !0), 652 != _ocf.ship_id && 657 != _ocf.ship_id && 547 != _ocf.ship_id && 146 != _ocf.ship_id || (_och.houg += 2), 652 != _ocf.ship_id && 657 != _ocf.ship_id && 547 != _ocf.ship_id && 146 != _ocf.ship_id || (_och.tyku += 2), _oci && (_ocg = _ocf.get_slotnums(379), _och.add(_ocj.multiply(_ocg)));
        var _ock = new _ocd.SlotItemEffectModel(),
            _ocl = !1;
        16 == _ocf.stype || 3 == _ocf.stype || 4 == _ocf.stype || 21 == _ocf.stype ? (_ock.houg += 1, _ock.kaih += 2, _ocl = !0) : 1 == _ocf.stype && (_ock.houg += 1, _ock.kaih += 4, _ocl = !0), 66 == _ocf.ctype || 28 == _ocf.ctype || 21 == _ocf.ctype || 34 == _ocf.ctype ? (_ock.houg += 2, _ock.kaih += 3, _ocl = !0) : 101 == _ocf.ctype && (_ock.houg += 4, _ock.kaih += 3, _ocl = !0), 488 == _ocf.ship_id || 651 == _ocf.ship_id || 656 == _ocf.ship_id ? (_ock.houg += 2, _ock.kaih += 2, _ocl = !0) : 487 != _ocf.ship_id && 160 != _ocf.ship_id && 141 != _ocf.ship_id && 118 != _ocf.ship_id && 119 != _ocf.ship_id && 652 != _ocf.ship_id && 657 != _ocf.ship_id && 547 != _ocf.ship_id && 146 != _ocf.ship_id || (_ock.houg += 1, _ock.kaih += 1, _ocl = !0);
        var _ocm = new _ocd.SlotItemEffectModel(),
            _ocn = !1;
        if (656 == _ocf.ship_id && (_ocm.tyku += 3, _ocm.kaih += 2, _ocn = !0), _ocl || _ocn) {
            for (var _oco = 0, _ocp = 0, _ocq = 0, _ocr = _ocf.have_slot_ids(); _ocq < _ocr.length; _ocq++) {
                var _ocs = _ocr[_ocq],
                    _oct = _oce.default.model.slot.getMst(_ocs),
                    _ocu = _oct.equipType;
                12 != _ocu && 13 != _ocu || (5 <= _oct.sakuteki && (_oco += _ocf.get_slotnums(parseInt(_ocs))), 2 <= _oct.taiku && (_ocp += _ocf.get_slotnums(parseInt(_ocs))));
            }
            _ocl && 0 < _oco && _och.add(_ock), _ocn && 0 < _ocp && _och.add(_ocm);
        }
        return _och;
    };
},
function(_ocv, _ocw, _ocx) {
    'use strict';
    var _ocy = this && this.__importDefault || function(_ocz) {
        return _ocz && _ocz.__esModule ? _ocz : {
            'default': _ocz
        };
    };
    defineModule(_ocw);
    Object.defineProperty(_ocw, '__esModule', {
        'value': !0
    });
    var _od0 = _ocx(3),
        _od1 = _ocy(_ocx(0));
    _ocw.getSlot380PersonalEffect = function(_od2) {
        var _od3, _od4 = new _od0.SlotItemEffectModel(),
            _od5 = !1,
            _od6 = new _od0.SlotItemEffectModel();
        21 != _od2.stype && 16 != _od2.stype || (_od6.tyku += 2, _od6.houg += 1, _od5 = !0), 101 == _od2.ctype && (_od6.tyku += 2, _od6.houg += 1, _od5 = !0, _od4.tyku += 2, _od4.houg += 2), 'ゆら' == _od2.yomi || 'なか' == _od2.yomi || 'きぬ' == _od2.yomi || 'いすず' == _od2.yomi ? (_od6.houg += 2, _od5 = !0) : 'おおい' != _od2.yomi && 'きたかみ' != _od2.yomi || (_od6.tyku += 2, _od6.houg += 3, _od5 = !0), 'ゆら' != _od2.yomi && 'なか' != _od2.yomi && 'きぬ' != _od2.yomi && 'いすず' != _od2.yomi && 'ゆうばり' != _od2.yomi || (_od6.tais += 1, _od5 = !0), 'てんりゅう' != _od2.yomi && 'たつた' != _od2.yomi && 'ゆうばり' != _od2.yomi || (_od6.houg += 1, _od5 = !0), 488 == _od2.ship_id ? (_od6.tyku += 4, _od5 = !0) : 220 == _od2.ship_id ? (_od6.tyku += 3, _od5 = !0) : 23 == _od2.ship_id ? (_od6.tyku += 2, _od5 = !0) : 160 == _od2.ship_id || 487 == _od2.ship_id || 141 == _od2.ship_id ? (_od6.tyku += 3, _od5 = !0) : 224 == _od2.ship_id || 289 == _od2.ship_id || 219 == _od2.ship_id || 56 == _od2.ship_id || 113 == _od2.ship_id || 22 == _od2.ship_id ? (_od6.tyku += 2, _od5 = !0) : 651 == _od2.ship_id || 656 == _od2.ship_id ? (_od6.tyku += 3, _od6.houg += 3, _od5 = !0) : 407 != _od2.ship_id && 665 != _od2.ship_id || (_od6.houg += 2, _od6.tyku += 2, _od5 = !0, _od4.houg += 1, _od4.tyku += 1, _od4.kaih += 2), 488 != _od2.ship_id && 160 != _od2.ship_id && 487 != _od2.ship_id && 141 != _od2.ship_id || (_od6.tais += 1, _od5 = !0), 477 != _od2.ship_id && 478 != _od2.ship_id && 624 != _od2.ship_id || (_od6.tais += 2, _od5 = !0), 477 != _od2.ship_id && 478 != _od2.ship_id && 624 != _od2.ship_id && 622 != _od2.ship_id || (_od6.tyku += 2, _od5 = !0), 652 != _od2.ship_id && 657 != _od2.ship_id || (_od6.houg += 3, _od5 = !0), 547 != _od2.ship_id && 146 != _od2.ship_id || (_od4.houg += 2), 652 != _od2.ship_id && 657 != _od2.ship_id && 547 != _od2.ship_id && 146 != _od2.ship_id || (_od4.tyku += 2), _od5 && (_od3 = _od2.get_slotnums(380), _od4.add(_od6.multiply(_od3)));
        var _od7 = new _od0.SlotItemEffectModel(),
            _od8 = !1,
            _od9 = new _od0.SlotItemEffectModel(),
            _oda = !1,
            _odb = !1;
        if (16 != _od2.stype && 3 != _od2.stype && 4 != _od2.stype && 21 != _od2.stype || (_od7.houg += 2, _od7.kaih += 1, _od8 = !0), 101 == _od2.ctype && (_od7.houg += 4, _od7.kaih += 3, _od8 = !0), 488 != _od2.ship_id && 487 != _od2.ship_id && 160 != _od2.ship_id && 141 != _od2.ship_id && 118 != _od2.ship_id && 119 != _od2.ship_id && 651 != _od2.ship_id && 656 != _od2.ship_id || (_od7.houg += 1, _od7.kaih += 2, _od8 = !0), 652 == _od2.ship_id || 657 == _od2.ship_id || 547 == _od2.ship_id || 146 == _od2.ship_id ? (_od7.houg += 1, _od7.kaih += 3, _od8 = !0) : 407 != _od2.ship_id && 665 != _od2.ship_id || (_od8 = _odb = !0, _od7.houg += 2, _od7.kaih += 1, _oda = !0, _od9.houg += 1, _od9.tyku += 2, _od9.kaih += 1), _od8 || _odb) {
            for (var _odc = 0, _odd = 0, _ode = 0, _odf = _od2.have_slot_ids(); _ode < _odf.length; _ode++) {
                var _odg = _odf[_ode],
                    _odh = _od1.default.model.slot.getMst(_odg),
                    _odi = _odh.equipType;
                12 == _odi || 13 == _odi ? 5 <= _odh.sakuteki && (_odc += _od2.get_slotnums(parseInt(_odg))) : 21 == _odi && (_odd += _od2.get_slotnums(parseInt(_odg)));
            }
            _od8 && 0 < _odc && _od4.add(_od7), _oda && 0 < _odd && _od4.add(_od9);
        }
        return _od4;
    };
},
function(_odj, _odk, _odl) {
    'use strict';
    defineModule(_odk);
    Object.defineProperty(_odk, '__esModule', {
        'value': !0
    });
    var _odm = _odl(3);
    _odk.getSlot381PersonalEffect = function(_odn) {
        var _odo = new _odm.SlotItemEffectModel(),
            _odp = !1,
            _odq = new _odm.SlotItemEffectModel(),
            _odr = 0;
        if ('アメリカ' == _odn.getCountryName() && (_odq.houg += 1, 102 == _odn.ctype && (_odq.houg += 1), _odp = !0, _odr = 1), 0 == _odp) return _odo;
        var _ods = _odn.get_slotnums(381);
        if (_odo.add(_odq.multiply(_ods)), 0 == _odr) return _odo;
        var _odt = _odn.get_each_level_nums(381),
            _odu = 0;
        return _odt.map(function(_odv, _odw) {
            6 <= _odw && (_odu += _odv);
        }), 1 == _odr && (_odo.houg += +_odu), _odo;
    };
},
function(_odx, _ody, _odz) {
    'use strict';
    var _oe0 = this && this.__importDefault || function(_oe1) {
        return _oe1 && _oe1.__esModule ? _oe1 : {
            'default': _oe1
        };
    };
    defineModule(_ody);
    Object.defineProperty(_ody, '__esModule', {
        'value': !0
    });
    var _oe2 = _odz(3),
        _oe3 = _oe0(_odz(0));
    _ody.getSlot382PersonalEffect = function(_oe4) {
        var _oe5 = new _oe2.SlotItemEffectModel(),
            _oe6 = !1,
            _oe7 = new _oe2.SlotItemEffectModel(),
            _oe8 = !1,
            _oe9 = new _oe2.SlotItemEffectModel(),
            _oea = new _oe2.SlotItemEffectModel(),
            _oeb = 2;
        1 == _oe4.stype && (_oe7.tyku += 2, _oe7.kaih += 2, _oe7.tais += 1, _oe6 = !0, _oe9.houg += 2, _oe9.kaih += 3, _oea.tyku += 2, _oea.kaih += 3, _oe8 = !0, _oeb = 1), 66 != _oe4.ctype && 28 != _oe4.ctype && 101 != _oe4.ctype || (_oe7.tyku += 2, _oe7.kaih += 1, _oe6 = !0, _oe9.houg += 1, _oe9.kaih += 2, _oea.tyku += 2, _oea.kaih += 2, _oe8 = !0, _oeb = 1), 'ゆら' != _oe4.yomi && 'なか' != _oe4.yomi && 'きぬ' != _oe4.yomi || (_oe7.tyku += 1, _oe6 = !0), 488 == _oe4.ship_id || 220 == _oe4.ship_id ? (_oe7.kaih += 1, _oe6 = !0, 488 == _oe4.ship_id && (_oe9.houg += 1, _oe9.kaih += 1, _oea.tyku += 2, _oea.kaih += 2, _oe8 = !0, _oeb = 1)) : 160 == _oe4.ship_id || 224 == _oe4.ship_id ? (_oe7.kaih += 1, _oe6 = !0, 160 == _oe4.ship_id && (_oe9.houg += 1, _oe9.kaih += 1, _oea.tyku += 2, _oea.kaih += 2, _oe8 = !0)) : 487 == _oe4.ship_id || 289 == _oe4.ship_id ? (_oe7.kaih += 1, _oe6 = !0, 487 == _oe4.ship_id && (_oe9.houg += 1, _oe9.kaih += 1, _oea.tyku += 2, _oea.kaih += 2, _oe8 = !0)) : 656 == _oe4.ship_id ? (_oe7.tyku += 3, _oe7.kaih += 2, _oe6 = !0, _oe9.houg += 2, _oe9.kaih += 2, _oea.tyku += 3, _oea.kaih += 2, _oe8 = !0, _oeb = 1) : 145 != _oe4.ship_id && 961 != _oe4.ship_id || (_oeb = 1);
        for (var _oec = 0, _oed = 0, _oee = 0, _oef = _oe4.have_slot_ids(); _oee < _oef.length; _oee++) {
            var _oeg = _oef[_oee],
                _oeh = _oe3.default.model.slot.getMst(_oeg),
                _oei = _oeh.equipType;
            12 != _oei && 13 != _oei || (5 <= _oeh.sakuteki && (_oec += _oe4.get_slotnums(parseInt(_oeg))), 2 <= _oeh.taiku && (_oed += _oe4.get_slotnums(parseInt(_oeg))));
        }
        for (var _oej = [], _oek = 0, _oel = [509]; _oek < _oel.length; _oek++) {
            ! function(_oem) {
                if (null == _oe4.have_slots_dict[_oem]) return;
                var _oen = _oe4.get_each_level_nums(_oem);
                null == _oej[_oem] && (_oej[_oem] = []), _oen.forEach(function(_oeo, _oep) {
                    for (var _oeq = 1; _oeq <= _oe4.SLOT_LEVEL_MAX; _oeq++) null == _oej[_oem][_oeq] && (_oej[_oem][_oeq] = 0), _oeq <= _oep && (_oej[_oem][_oeq] += _oeo);
                });
            }(_oel[_oek]);
        }
        var _oer = 0,
            _oes = 0,
            _oet = 0,
            _oeu = 0,
            _oev = 0,
            _oew = 0;
        null != _oej[509] && (_oer = _oej[509][1], _oes = _oej[509][2], _oet = _oej[509][4], _oeu = _oej[509][6], _oev = _oej[509][8], _oew = _oej[509][10], 1 == _oeb ? (1 <= _oer && (_oe5.tyku += +_oer), 1 <= _oes && (_oe5.kaih += 2 * _oes), 1 <= _oet && (_oe5.houg += +_oet), 1 <= _oeu && (_oe5.tyku += +_oeu), 1 <= _oev && (_oe5.houm += +_oev), 1 <= _oew && (_oe5.tyku += +_oew)) : 2 == _oeb && (1 <= _oes && (_oe5.tyku += +_oes), 1 <= _oet && (_oe5.kaih += 2 * _oet), 1 <= _oeu && (_oe5.houg += +_oeu), 1 <= _oev && (_oe5.tyku += +_oev), 1 <= _oew && (_oe5.houm += +_oew)));
        var _oex = _oe4.get_slotnums(509),
            _oey = _oex + _oe4.get_slotnums(382);
        return _oe6 && _oe5.add(_oe7.multiply(_oey)), 3 != _oe4.stype && 21 != _oe4.stype && 4 != _oe4.stype || 1 <= _oes && (0 < _oec && (_oe5.houg += 1, _oe5.kaih += 1), 0 < _oed && (_oe5.tyku += 2, _oe5.kaih += 1)), 145 == _oe4.ship_id ? 1 <= _oes && (0 < _oec && (_oe5.houg += 1, _oe5.tyku += 1, _oe5.kaih += 2), 0 < _oed && (_oe5.tyku += 4, _oe5.kaih += 2)) : 961 == _oe4.ship_id && 0 < _oex && (0 < _oec && (_oe5.houg += 2, _oe5.tyku += 2, _oe5.kaih += 3), 0 < _oed && (_oe5.houg += 1, _oe5.tyku += 5, _oe5.kaih += 3)), _oe8 && 0 < _oec && _oe5.add(_oe9), _oe8 && 0 < _oed && _oe5.add(_oea), _oe5;
    };
},
function(_oez, _of0, _of1) {
    'use strict';
    defineModule(_of0);
    Object.defineProperty(_of0, '__esModule', {
        'value': !0
    });
    var _of2 = _of1(3);
    _of0.getSlot383PersonalEffect = function(_of3) {
        var _of4 = new _of2.SlotItemEffectModel(),
            _of5 = !1,
            _of6 = new _of2.SlotItemEffectModel(),
            _of7 = _of3.get_each_level_over_nums([383])[383];
        if (44 == _of3.ctype && (_of6.raig += 2, _of5 = !0, 0 < _of7[4] && (_of4.raig += 1), 0 < _of7[6] && (_of4.houm += 1)), 'い58' == _of3.yomi && (_of6.raig += 1, _of5 = !0), 636 == _of3.ship_id ? (_of6.raig += 3, _of5 = !0) : 607 == _of3.ship_id && (_of6.raig += 4, _of5 = !0), 0 < _of7[8] && (_of4.raig += 1), 0 < _of7[10] && (_of4.houm += 1), 'い58' != _of3.yomi && 'い47' != _of3.yomi || 0 < _of7[5] && (_of4.houm += 1), 0 == _of5) return _of4;
        var _of8 = _of3.get_slotnums(383);
        return _of4.add(_of6.multiply(_of8)), _of4;
    };
},
function(_of9, _ofa, _ofb) {
    'use strict';
    defineModule(_ofa);
    Object.defineProperty(_ofa, '__esModule', {
        'value': !0
    });
    var _ofc = _ofb(3);
    _ofa.getSlot384PersonalEffect = function(_ofd) {
        var _ofe = new _ofc.SlotItemEffectModel(),
            _off = !1,
            _ofg = new _ofc.SlotItemEffectModel();
        44 == _ofd.ctype && (_ofg.kaih += 3, _off = !0), 'い58' == _ofd.yomi && (_ofg.kaih += 2, _off = !0), 636 == _ofd.ship_id ? (_ofg.kaih += 3, _off = !0) : 607 == _ofd.ship_id && (_ofg.kaih += 4, _off = !0);
        var _ofh = _ofd.get_slotnums(384);
        _off && _ofe.add(_ofg.multiply(_ofh));
        var _ofi = _ofh,
            _ofj = _ofd.get_slotnums(213),
            _ofk = _ofd.get_slotnums(214),
            _ofl = _ofd.get_slotnums(383);
        return 0 < _ofi && 0 < _ofj + _ofk + _ofl && (_ofe.raig += 3, _ofe.kaih += 2), _ofe;
    };
},
function(_ofm, _ofn, _ofo) {
    'use strict';
    defineModule(_ofn);
    Object.defineProperty(_ofn, '__esModule', {
        'value': !0
    });
    var _ofp = _ofo(3);
    _ofn.getSlot385PersonalEffect = function(_ofq) {
        var _ofr = new _ofp.SlotItemEffectModel(),
            _ofs = !1,
            _oft = new _ofp.SlotItemEffectModel(),
            _ofu = 0;
        if ('アメリカ' == _ofq.getCountryName() && (_oft.houg += 1, 102 == _ofq.ctype || 107 == _ofq.ctype ? (_oft.houg += 1, _oft.souk += 1) : 93 == _ofq.ctype && (_oft.houg += 1), _ofs = !0, _ofu = 1), 8 == _ofq.stype && (_oft.houg += 1, _ofs = !0), 0 == _ofs) return _ofr;
        var _ofv = _ofq.get_slotnums(385);
        if (_ofr.add(_oft.multiply(_ofv)), 0 == _ofu) return _ofr;
        var _ofw = _ofq.get_each_level_nums(385),
            _ofx = 0;
        return _ofw.forEach(function(_ofy, _ofz) {
            6 <= _ofz && (_ofx += _ofy);
        }), 1 == _ofu && (_ofr.houg += +_ofx, _ofr.souk += +_ofw[10]), _ofr;
    };
},
function(_og0, _og1, _og2) {
    'use strict';
    defineModule(_og1);
    Object.defineProperty(_og1, '__esModule', {
        'value': !0
    });
    var _og3 = _og2(3);
    _og1.getSlot386PersonalEffect = function(_og4) {
        var _og5 = new _og3.SlotItemEffectModel(),
            _og6 = !1,
            _og7 = new _og3.SlotItemEffectModel(),
            _og8 = 0;
        if ('アメリカ' == _og4.getCountryName() && (_og7.houg += 1, _og6 = !0, _og8 = 1), 0 == _og6) return _og5;
        var _og9 = _og4.get_slotnums(386);
        if (_og5.add(_og7.multiply(_og9)), 0 == _og8) return _og5;
        var _oga = _og4.get_each_level_nums(386),
            _ogb = 0,
            _ogc = 0;
        return _oga.forEach(function(_ogd, _oge) {
            2 <= _oge && (_ogb += _ogd), 7 <= _oge && (_ogc += _ogd);
        }), 1 == _og8 && (_og5.houg += +_ogb, _og5.houg += +_ogc), _og5;
    };
},
function(_ogf, _ogg, _ogh) {
    'use strict';
    defineModule(_ogg);
    Object.defineProperty(_ogg, '__esModule', {
        'value': !0
    });
    var _ogi = _ogh(3);
    _ogg.getSlot387PersonalEffect = function(_ogj) {
        var _ogk = new _ogi.SlotItemEffectModel(),
            _ogl = !1,
            _ogm = new _ogi.SlotItemEffectModel(),
            _ogn = 0;
        if ('アメリカ' == _ogj.getCountryName() && (_ogm.houg += 1, _ogl = !0, _ogn = 1), 0 == _ogl) return _ogk;
        var _ogo = _ogj.get_slotnums(387);
        if (_ogk.add(_ogm.multiply(_ogo)), 0 == _ogn) return _ogk;
        var _ogp = _ogj.get_each_level_nums(387),
            _ogq = 0,
            _ogr = 0;
        return _ogp.forEach(function(_ogs, _ogt) {
            2 <= _ogt && (_ogq += _ogs), 7 <= _ogt && (_ogr += _ogs);
        }), 1 == _ogn && (_ogk.houg += +_ogq, _ogk.houg += +_ogr), _ogk;
    };
},
function(_ogu, _ogv, _ogw) {
    'use strict';
    defineModule(_ogv);
    Object.defineProperty(_ogv, '__esModule', {
        'value': !0
    });
    var _ogx = _ogw(3);
    _ogv.getSlot389PersonalEffect = function(_ogy) {
        var _ogz = new _ogx.SlotItemEffectModel(),
            _oh0 = !1,
            _oh1 = new _ogx.SlotItemEffectModel();
        if (594 == _ogy.ship_id || 599 == _ogy.ship_id ? (_oh1.houg += 2, _oh1.kaih += 2, _oh0 = !0) : 698 == _ogy.ship_id || 610 == _ogy.ship_id ? (_oh1.houg += 3, _oh1.kaih += 2, _oh0 = !0) : 646 == _ogy.ship_id && (_oh1.houg += 4, _oh1.tais += 4, _oh1.kaih += 3, _oh0 = !0, 0 < _ogy.get_type3_nums(25) && (_ogz.houg += 3, _ogz.tais += 6), 0 < _ogy.get_slotnums(326) + _ogy.get_slotnums(327) && (_ogz.houg += 5, _ogz.tais += 4)), 'アメリカ' == _ogy.getCountryName() && (_oh1.houg += 2, _oh1.tais += 3, _oh1.kaih += 1, _oh0 = !0), 0 == _oh0) return _ogz;
        var _oh2 = _ogy.get_slotnums(389);
        return _ogz.add(_oh1.multiply(_oh2)), _ogz;
    };
},
function(_oh3, _oh4, _oh5) {
    'use strict';
    defineModule(_oh4);
    Object.defineProperty(_oh4, '__esModule', {
        'value': !0
    });
    var _oh6 = _oh5(3);
    _oh4.getSlot390PersonalEffect = function(_oh7) {
        var _oh8 = new _oh6.SlotItemEffectModel(),
            _oh9 = !1,
            _oha = new _oh6.SlotItemEffectModel(),
            _ohb = 0;
        if ('アメリカ' == _oh7.getCountryName() && (_oha.houg += 1, _oh9 = !0, _ohb = 1), 102 == _oh7.ctype || 107 == _oh7.ctype ? (_oha.houg += 1, _oha.souk += 1, _oh9 = !0) : 93 == _oh7.ctype && (_oha.houg += 1, _oh9 = !0), 8 == _oh7.stype && (_oha.houg += 1, _oh9 = !0), 0 == _oh9) return _oh8;
        var _ohc = _oh7.get_slotnums(390);
        if (_oh8.add(_oha.multiply(_ohc)), 0 == _ohb) return _oh8;
        var _ohd = _oh7.get_each_level_nums(390),
            _ohe = 0,
            _ohf = 0;
        return _ohd.forEach(function(_ohg, _ohh) {
            3 <= _ohh && (_ohe += _ohg), 6 <= _ohh && (_ohf += _ohg);
        }), 1 == _ohb && (_oh8.houg += +_ohe, _oh8.kaih += +_ohf, _oh8.souk += +_ohd[10]), _oh8;
    };
},
function(_ohi, _ohj, _ohk) {
    'use strict';
    defineModule(_ohj);
    Object.defineProperty(_ohj, '__esModule', {
        'value': !0
    });
    var _ohl = _ohk(3);
    _ohj.getSlot391PersonalEffect = function(_ohm) {
        var _ohn = new _ohl.SlotItemEffectModel(),
            _oho = !1,
            _ohp = new _ohl.SlotItemEffectModel();
        if ('しょうかく' != _ohm.yomi && 'ずいかく' != _ohm.yomi && 'じゅんよう' != _ohm.yomi && 'ひよう' != _ohm.yomi || (_ohp.houg += 1, _oho = !0), 116 == _ohm.ship_id || 185 == _ohm.ship_id || 282 == _ohm.ship_id ? (_ohp.houg += 1, _oho = !0) : 117 == _ohm.ship_id || 318 == _ohm.ship_id || 883 == _ohm.ship_id || 888 == _ohm.ship_id ? (_ohp.houg += 1, _ohn.kaih += 1, _oho = !0) : 560 != _ohm.ship_id && 555 != _ohm.ship_id || (_ohp.houg += 1, _ohp.kaih += 1, _oho = !0), 0 == _oho) return _ohn;
        var _ohq = _ohm.get_slotnums(391);
        return _ohn.add(_ohp.multiply(_ohq)), _ohn;
    };
},
function(_ohr, _ohs, _oht) {
    'use strict';
    defineModule(_ohs);
    Object.defineProperty(_ohs, '__esModule', {
        'value': !0
    });
    var _ohu = _oht(3);
    _ohs.getSlot392PersonalEffect = function(_ohv) {
        var _ohw = new _ohu.SlotItemEffectModel(),
            _ohx = !1,
            _ohy = new _ohu.SlotItemEffectModel();
        if ('しょうかく' == _ohv.yomi || 'ずいかく' == _ohv.yomi ? (_ohy.houg += 2, _ohy.kaih += 1, _ohx = !0) : 'じゅんよう' != _ohv.yomi && 'ひよう' != _ohv.yomi || (_ohy.houg += 1, _ohy.kaih += 1, _ohx = !0), 116 == _ohv.ship_id || 185 == _ohv.ship_id || 282 == _ohv.ship_id ? (_ohy.houg += 2, _ohy.kaih += 1, _ohx = !0) : 117 == _ohv.ship_id || 318 == _ohv.ship_id || 883 == _ohv.ship_id || 888 == _ohv.ship_id ? (_ohy.houg += 2, _ohy.kaih += 2, _ohx = !0) : 560 != _ohv.ship_id && 555 != _ohv.ship_id || (_ohy.houg += 3, _ohy.kaih += 2, _ohx = !0), 0 == _ohx) return _ohw;
        var _ohz = _ohv.get_slotnums(392);
        return _ohw.add(_ohy.multiply(_ohz)), _ohw;
    };
},
function(_oi0, _oi1, _oi2) {
    'use strict';
    var _oi3 = this && this.__importDefault || function(_oi4) {
        return _oi4 && _oi4.__esModule ? _oi4 : {
            'default': _oi4
        };
    };
    defineModule(_oi1);
    Object.defineProperty(_oi1, '__esModule', {
        'value': !0
    });
    var _oi5 = _oi2(3),
        _oi6 = _oi3(_oi2(0));
    _oi1.getSlot397PersonalEffect = function(_oi7) {
        var _oi8 = new _oi5.SlotItemEffectModel(),
            _oi9 = !1,
            _oia = new _oi5.SlotItemEffectModel(),
            _oib = 0,
            _oic = 0,
            _oid = !1;
        if (651 == _oi7.ship_id ? (_oia.houg += 5, _oia.tyku += 2, _oia.kaih += 1, _oid = _oi9 = !0, _oic = _oib = 1) : 656 == _oi7.ship_id && (_oia.houg += 3, _oia.tyku += 1, _oia.kaih += 1, _oid = _oi9 = !0, _oib = 1), 0 == _oi9) return _oi8;
        var _oie = _oi7.get_slotnums(397);
        _oi8.add(_oia.multiply(_oie));
        var _oif = 0,
            _oig = _oi7.get_each_level_nums(397),
            _oih = 0;
        if (_oid) {
            _oig.forEach(function(_oii, _oij) {
                4 <= _oij && (_oih += _oii);
            });
            for (var _oik = 0, _oil = _oi7.have_slot_ids(); _oik < _oil.length; _oik++) {
                var _oim = _oil[_oik],
                    _oin = _oi6.default.model.slot.getMst(_oim),
                    _oio = _oin.equipType;
                12 != _oio && 13 != _oio || (5 <= _oin.sakuteki && (_oif += _oi7.get_slotnums(parseInt(_oim))), 2 <= _oin.taiku && _oi7.get_slotnums(parseInt(_oim)));
            }
        }
        return 1 == _oib && 0 < _oif && (_oi8.houg += 3, _oi8.kaih += 3), 1 == _oic && (_oi8.houg += 4 * _oih, _oi8.kaih += +_oih), _oi8;
    };
},
function(_oip, _oiq, _oir) {
    'use strict';
    var _ois = this && this.__importDefault || function(_oit) {
        return _oit && _oit.__esModule ? _oit : {
            'default': _oit
        };
    };
    defineModule(_oiq);
    Object.defineProperty(_oiq, '__esModule', {
        'value': !0
    });
    var _oiu = _oir(3),
        _oiv = _ois(_oir(0));
    _oiq.getSlot398PersonalEffect = function(_oiw) {
        var _oix = new _oiu.SlotItemEffectModel(),
            _oiy = !1,
            _oiz = new _oiu.SlotItemEffectModel(),
            _oj0 = 0,
            _oj1 = 0,
            _oj2 = !1;
        if (651 == _oiw.ship_id ? (_oiz.houg += 4, _oiz.tyku += 4, _oiz.kaih += 2, _oj2 = _oiy = !0, _oj1 = _oj0 = 1) : 656 == _oiw.ship_id && (_oiz.houg += 3, _oiz.tyku += 2, _oiz.kaih += 2, _oj2 = _oiy = !0, _oj0 = 1, _oj1 = 2), 0 == _oiy) return _oix;
        var _oj3 = _oiw.get_slotnums(398);
        _oix.add(_oiz.multiply(_oj3));
        var _oj4 = 0,
            _oj5 = 0,
            _oj6 = _oiw.get_each_level_nums(398),
            _oj7 = 0;
        if (_oj2) {
            _oj6.forEach(function(_oj8, _oj9) {
                4 <= _oj9 && (_oj7 += _oj8);
            });
            for (var _oja = 0, _ojb = _oiw.have_slot_ids(); _oja < _ojb.length; _oja++) {
                var _ojc = _ojb[_oja],
                    _ojd = _oiv.default.model.slot.getMst(_ojc),
                    _oje = _ojd.equipType;
                12 != _oje && 13 != _oje || (5 <= _ojd.sakuteki && (_oj4 += _oiw.get_slotnums(parseInt(_ojc))), 2 <= _ojd.taiku && (_oj5 += _oiw.get_slotnums(parseInt(_ojc))));
            }
        }
        return 1 == _oj0 && (0 < _oj4 && (_oix.houg += 3, _oix.kaih += 3), 0 < _oj5 && (_oix.tyku += 3, _oix.kaih += 3)), 1 == _oj1 ? (_oix.houg += 3 * _oj7, _oix.kaih += 2 * _oj7) : 2 == _oj1 && (_oix.houg += 2 * _oj7, _oix.kaih += +_oj7), _oix;
    };
},
function(_ojf, _ojg, _ojh) {
    'use strict';
    defineModule(_ojg);
    Object.defineProperty(_ojg, '__esModule', {
        'value': !0
    });
    var _oji = _ojh(3);
    _ojg.getSlot399PersonalEffect = function(_ojj) {
        var _ojk = new _oji.SlotItemEffectModel(),
            _ojl = !1,
            _ojm = new _oji.SlotItemEffectModel(),
            _ojn = 0;
        if (108 == _ojj.ctype && (_ojm.houg += 1, _ojm.kaih += 2, _ojn = 1, _ojl = !0), 0 == _ojl) return _ojk;
        var _ojo = _ojj.get_slotnums(399);
        if (_ojk.add(_ojm.multiply(_ojo)), 0 == _ojn) return _ojk;
        var _ojp = _ojj.get_each_level_nums(399),
            _ojq = 0,
            _ojr = 0;
        return _ojp.map(function(_ojs, _ojt) {
            3 <= _ojt && (_ojq += _ojs), 5 <= _ojt && (_ojr += _ojs);
        }), 1 == _ojn && (_ojk.houg += +_ojq, _ojk.houg += +_ojr), _ojk;
    };
},
function(_oju, _ojv, _ojw) {
    'use strict';
    defineModule(_ojv);
    Object.defineProperty(_ojv, '__esModule', {
        'value': !0
    });
    var _ojx = _ojw(3);
    _ojv.getSlot400PersonalEffect = function(_ojy) {
        var _ojz = new _ojx.SlotItemEffectModel(),
            _ok0 = !1,
            _ok1 = new _ojx.SlotItemEffectModel(),
            _ok2 = 0,
            _ok3 = !1;
        if (147 != _ojy.ship_id && 73 != _ojy.ctype && 81 != _ojy.ctype || (_ok3 = !0), _ok3 && (_ok1.kaih += 2, _ok1.raig += 5, _ok1.houg += 1, _ok1.souk += 1, _ok0 = !0, _ok2 = 1), 0 == _ok0) return _ojz;
        var _ok4 = _ojy.get_slotnums(400);
        return _ojz.add(_ok1.multiply(_ok4)), 0 < _ojy.get_slotnums(282) && 1 == _ok2 && (_ojz.houg += 2), _ojz;
    };
},
function(_ok5, _ok6, _ok7) {
    'use strict';
    defineModule(_ok6);
    Object.defineProperty(_ok6, '__esModule', {
        'value': !0
    });
    var _ok8 = _ok7(3);
    _ok6.getSlotOtherSuiseiPersonalEffect = function(_ok9) {
        var _oka = new _ok8.SlotItemEffectModel(),
            _okb = new _ok8.SlotItemEffectModel();
        if (553 == _ok9.ship_id) _okb.houg = 2;
        else {
            if (554 != _ok9.ship_id) return _oka;
            _okb.houg = 2;
        }
        var _okc = _ok9.get_slotnums(24) + _ok9.get_slotnums(57) + _ok9.get_slotnums(111);
        return _oka = _okb.multiply(_okc);
    };
},
function(_okd, _oke, _okf) {
    'use strict';
    var _okg = this && this.__importDefault || function(_okh) {
        return _okh && _okh.__esModule ? _okh : {
            'default': _okh
        };
    };
    defineModule(_oke);
    Object.defineProperty(_oke, '__esModule', {
        'value': !0
    });
    var _oki = _okf(3),
        _okj = _okg(_okf(0));
    _oke.getSlotType9PersonalEffect = function(_okk) {
        var _okl = new _oki.SlotItemEffectModel();
        if (null == {
                11: 1,
                18: 1,
                7: 1,
                10: 1
            }[_okk.stype]) return _okl;
        for (var _okm = 0, _okn = 0, _oko = _okk.have_slot_ids(); _okn < _oko.length; _okn++) {
            var _okp = _oko[_okn];
            if (9 == _okj.default.model.slot.getMst(_okp).equipType)
                for (var _okq = 0, _okr = _okk.have_slots_dict[parseInt(_okp)]; _okq < _okr.length; _okq++) {
                    var _oks = _okr[_okq].level;
                    _okm < _oks && (_okm = _oks);
                }
        }
        return 2 <= _okm && (_okl.saku += 1), 4 <= _okm && (_okl.houg += 1), 6 <= _okm && (_okl.saku += 1), 10 <= _okm && (_okl.houg += 1, _okl.saku += 1), _okl;
    };
},
function(_okt, _oku, _okv) {
    'use strict';
    var _okw = this && this.__importDefault || function(_okx) {
        return _okx && _okx.__esModule ? _okx : {
            'default': _okx
        };
    };
    defineModule(_oku);
    Object.defineProperty(_oku, '__esModule', {
        'value': !0
    });
    var _oky = _okv(3),
        _okz = _okw(_okv(0));
    _oku.get25mmMachinegunEffect = function(_ol0) {
        var _ol1 = new _oky.SlotItemEffectModel(),
            _ol2 = !1,
            _ol3 = new _oky.SlotItemEffectModel(),
            _ol4 = 0;
        if (662 == _ol0.ship_id || 663 == _ol0.ship_id ? (_ol3.tyku += 2, _ol3.kaih += 1, _ol2 = !0) : 668 == _ol0.ship_id && (_ol3.tyku += 3, _ol3.kaih += 2, _ol2 = !0), 56 == _ol0.ctype && (_ol3.houg += 1, _ol3.tyku += 2, _ol3.kaih += 2, _ol2 = !0, _ol4 = 1), 0 == _ol2) return _ol1;
        var _ol5 = _ol0.get_slotnums(39) + _ol0.get_slotnums(40) + _ol0.get_slotnums(49) + _ol0.get_slotnums(131);
        if (_ol1.add(_ol3.multiply(_ol5)), 0 == _ol4) return _ol1;
        for (var _ol6 = 0, _ol7 = 0, _ol8 = _ol0.have_slot_ids(); _ol7 < _ol8.length; _ol7++) {
            var _ol9 = _ol8[_ol7],
                _ola = _okz.default.model.slot.getMst(_ol9),
                _olb = _ola.equipType;
            12 != _olb && 13 != _olb || (5 <= _ola.sakuteki && _ol0.get_slotnums(parseInt(_ol9)), 2 <= _ola.taiku && (_ol6 += _ol0.get_slotnums(parseInt(_ol9))));
        }
        return 1 <= _ol6 && 1 == _ol4 && (_ol1.tyku += 2, _ol1.kaih += 2), _ol1;
    };
},
function(_olc, _old, _ole) {
    'use strict';
    defineModule(_old);
    Object.defineProperty(_old, '__esModule', {
        'value': !0
    });
    var _olf = _ole(3);
    _old.getHighZuiunSeriesEffect = function(_olg) {
        var _olh = new _olf.SlotItemEffectModel(),
            _oli = !1,
            _olj = new _olf.SlotItemEffectModel();
        if (662 == _olg.ship_id ? (_olh.houg += 3, _olh.kaih += 1) : 663 != _olg.ship_id && 668 != _olg.ship_id && 501 != _olg.ship_id && 506 != _olg.ship_id && 553 != _olg.ship_id && 554 != _olg.ship_id || (_olj.houg += 3, _olj.kaih += 2, _olj.tyku += 1, _oli = !0), 0 == _oli) return _olh;
        var _olk = 0;
        return [237, 322, 323, 490].forEach(function(_oll) {
            _olk += _olg.get_slotnums(_oll);
        }), _olh.add(_olj.multiply(_olk)), _olh;
    };
},
function(_olm, _oln, _olo) {
    'use strict';
    defineModule(_oln);
    Object.defineProperty(_oln, '__esModule', {
        'value': !0
    });
    var _olp = _olo(3);
    _oln.getZuiunSeriesEffect = function(_olq) {
        var _olr = new _olp.SlotItemEffectModel(),
            _ols = !1,
            _olt = new _olp.SlotItemEffectModel();
        if (662 == _olq.ship_id ? (_olr.houg += 2, _olr.kaih += 1) : 663 != _olq.ship_id && 668 != _olq.ship_id && 501 != _olq.ship_id && 506 != _olq.ship_id || (_olr.houg += 2, _olt.kaih += 1, _olt.tyku += 1, _ols = !0), 0 == _ols) return _olr;
        var _olu = 0;
        return [26, 62, 79, 80, 81, 207, 208].forEach(function(_olv) {
            _olu += _olq.get_slotnums(_olv);
        }), _olr.add(_olt.multiply(_olu)), _olr;
    };
},
function(_olw, _olx, _oly) {
    'use strict';
    defineModule(_olx);
    Object.defineProperty(_olx, '__esModule', {
        'value': !0
    });
    var _olz = _oly(3);
    _olx.getSlot139PersonalEffect = function(_om0) {
        var _om1 = new _olz.SlotItemEffectModel(),
            _om2 = !1,
            _om3 = new _olz.SlotItemEffectModel();
        if (662 != _om0.ship_id && 663 != _om0.ship_id && 668 != _om0.ship_id || (_om3.houg += 2, _om3.tyku += 1, _om2 = !0), 0 == _om2) return _om1;
        var _om4 = _om0.get_slotnums(139);
        return _om1.add(_om3.multiply(_om4)), _om1;
    };
},
function(_om5, _om6, _om7) {
    'use strict';
    var _om8 = this && this.__importDefault || function(_om9) {
        return _om9 && _om9.__esModule ? _om9 : {
            'default': _om9
        };
    };
    defineModule(_om6);
    Object.defineProperty(_om6, '__esModule', {
        'value': !0
    });
    var _oma = _om7(3),
        _omb = _om8(_om7(0));
    _om6.getSlot220PersonalEffect = function(_omc) {
        var _omd = new _oma.SlotItemEffectModel(),
            _ome = !1,
            _omf = new _oma.SlotItemEffectModel(),
            _omg = 0,
            _omh = 0;
        if (662 == _omc.ship_id || 663 == _omc.ship_id || 668 == _omc.ship_id || 501 == _omc.ship_id || 506 == _omc.ship_id ? (_omf.houg += 1, _omf.tyku += 3, _omf.kaih += 2, _ome = !0, _omg = 1) : 894 != _omc.ship_id && 899 != _omc.ship_id || (_omf.tyku += 2, _omf.kaih += 2, _ome = !0, _omh = _omg = 1), 0 == _ome) return _omd;
        var _omi = _omc.get_slotnums(220);
        _omd.add(_omf.multiply(_omi));
        for (var _omj = 0, _omk = 0, _oml = _omc.have_slot_ids(); _omk < _oml.length; _omk++) {
            var _omm = _oml[_omk],
                _omn = _omb.default.model.slot.getMst(_omm),
                _omo = _omn.equipType;
            12 != _omo && 13 != _omo || (5 <= _omn.sakuteki && _omc.get_slotnums(parseInt(_omm)), 2 <= _omn.taiku && (_omj += _omc.get_slotnums(parseInt(_omm))));
        }
        if (1 <= _omj && 1 == _omg && (_omd.tyku += 3, _omd.kaih += 3), 0 == _omh) return _omd;
        var _omp = _omc.get_each_level_nums(220)[10];
        return 1 == _omh && 0 < _omp && (_omd.houg += +_omp, _omd.tyku += +_omp, _omd.kaih += +_omp), _omd;
    };
},
function(_omq, _omr, _oms) {
    'use strict';
    defineModule(_omr);
    Object.defineProperty(_omr, '__esModule', {
        'value': !0
    });
    var _omt = _oms(3);
    _omr.getSlot242PersonalEffect = function(_omu) {
        var _omv = new _omt.SlotItemEffectModel(),
            _omw = !1,
            _omx = new _omt.SlotItemEffectModel();
        if (78 == _omu.ctype && (_omx.houg += 2, _omx.kaih += 1, _omw = !0), 'ほうしょう' == _omu.yomi && (_omx.houg += 1, _omw = !0), 0 == _omw) return _omv;
        var _omy = _omu.get_slotnums(242);
        return _omv.add(_omx.multiply(_omy)), _omv;
    };
},
function(_omz, _on0, _on1) {
    'use strict';
    defineModule(_on0);
    Object.defineProperty(_on0, '__esModule', {
        'value': !0
    });
    var _on2 = _on1(3);
    _on0.getSlot243PersonalEffect = function(_on3) {
        var _on4 = new _on2.SlotItemEffectModel(),
            _on5 = !1,
            _on6 = new _on2.SlotItemEffectModel();
        if (78 == _on3.ctype && (_on6.houg += 3, _on6.kaih += 1, _on5 = !0), 'ほうしょう' == _on3.yomi && (_on6.houg += 2, _on5 = !0), 0 == _on5) return _on4;
        var _on7 = _on3.get_slotnums(243);
        return _on4.add(_on6.multiply(_on7)), _on4;
    };
},
function(_on8, _on9, _ona) {
    'use strict';
    defineModule(_on9);
    Object.defineProperty(_on9, '__esModule', {
        'value': !0
    });
    var _onb = _ona(3);
    _on9.getSlot244PersonalEffect = function(_onc) {
        var _ond = new _onb.SlotItemEffectModel(),
            _one = !1,
            _onf = new _onb.SlotItemEffectModel();
        if (78 == _onc.ctype && (_onf.houg += 4, _onf.kaih += 2, _one = !0), 'ほうしょう' == _onc.yomi && (_onf.houg += 3, _one = !0), 0 == _one) return _ond;
        var _ong = _onc.get_slotnums(244);
        return _ond.add(_onf.multiply(_ong)), _ond;
    };
},
function(_onh, _oni, _onj) {
    'use strict';
    var _onk = this && this.__importDefault || function(_onl) {
        return _onl && _onl.__esModule ? _onl : {
            'default': _onl
        };
    };
    defineModule(_oni);
    Object.defineProperty(_oni, '__esModule', {
        'value': !0
    });
    var _onm = _onj(3),
        _onn = _onk(_onj(0));
    _oni.getSlot407PersonalEffect = function(_ono) {
        var _onp = new _onm.SlotItemEffectModel(),
            _onq = !1,
            _onr = new _onm.SlotItemEffectModel(),
            _ons = 0;
        if (662 != _ono.ship_id && 663 != _ono.ship_id && 668 != _ono.ship_id || (_onr.houg += 4, _onr.tyku += 2, _onr.kaih += 1, _onq = !0, _ons = 1), 0 == _onq) return _onp;
        var _ont = _ono.get_slotnums(407);
        _onp.add(_onr.multiply(_ont));
        for (var _onu = 0, _onv = 0, _onw = 0, _onx = _ono.have_slot_ids(); _onw < _onx.length; _onw++) {
            var _ony = _onx[_onw],
                _onz = _onn.default.model.slot.getMst(_ony),
                _oo0 = _onz.equipType;
            12 != _oo0 && 13 != _oo0 || (5 <= _onz.sakuteki && (_onu += _ono.get_slotnums(parseInt(_ony))), 2 <= _onz.taiku && (_onv += _ono.get_slotnums(parseInt(_ony))));
        }
        return 1 <= _onu && 1 == _ons && (_onp.houg += 2, _onp.kaih += 2, _onp.raig += 2), 1 <= _onv && 1 == _ons && (_onp.tyku += 2, _onp.kaih += 3), _onp;
    };
},
function(_oo1, _oo2, _oo3) {
    'use strict';
    defineModule(_oo2);
    Object.defineProperty(_oo2, '__esModule', {
        'value': !0
    });
    var _oo4 = _oo3(3);
    _oo2.getSlotType10PersonalEffect = function(_oo5) {
        var _oo6 = new _oo4.SlotItemEffectModel();
        return 662 == _oo5.ship_id || 663 == _oo5.ship_id || 668 == _oo5.ship_id ? (_oo6.houg += 2, _oo6.kaih += 1, _oo6.tais += 3) : 501 != _oo5.ship_id && 506 != _oo5.ship_id || (_oo6.houg += 2), _oo6;
    };
},
function(_oo7, _oo8, _oo9) {
    'use strict';
    defineModule(_oo8);
    Object.defineProperty(_oo8, '__esModule', {
        'value': !0
    });
    var _ooa = _oo9(3);
    _oo8.getSlotType11PersonalEffect = function(_oob) {
        var _ooc = new _ooa.SlotItemEffectModel();
        return 662 == _oob.ship_id || 663 == _oob.ship_id || 668 == _oob.ship_id ? (_ooc.houg += 1, _ooc.kaih += 1, _ooc.tais += 1) : 501 != _oob.ship_id && 506 != _oob.ship_id || (_ooc.houg += 1, _ooc.kaih += 1), _ooc;
    };
},
function(_ood, _ooe, _oof) {
    'use strict';
    defineModule(_ooe);
    Object.defineProperty(_ooe, '__esModule', {
        'value': !0
    });
    var _oog = _oof(3);
    _ooe.getSlotType25PersonalEffect = function(_ooh) {
        var _ooi = new _oog.SlotItemEffectModel();
        return 662 == _ooh.ship_id ? (_ooi.tais += 4, _ooi.kaih += 1) : 663 != _ooh.ship_id && 668 != _ooh.ship_id || (_ooi.tais += 3, _ooi.kaih += 1), _ooi;
    };
},
function(_ooj, _ook, _ool) {
    'use strict';
    defineModule(_ook);
    Object.defineProperty(_ook, '__esModule', {
        'value': !0
    });
    var _oom = _ool(3);
    _ook.getSlot5PersonalEffect = function(_oon) {
        var _ooo = new _oom.SlotItemEffectModel(),
            _oop = !1,
            _ooq = new _oom.SlotItemEffectModel();
        if (52 != _oon.ctype && 9 != _oon.ctype || (_ooq.houg += 1, 52 == _oon.ctype && (_ooq.houg = _ooq.houg + 1), _oop = !0), 0 == _oop) return _ooo;
        var _oor = _oon.get_slotnums(5);
        return _ooo.add(_ooq.multiply(_oor)), _ooo;
    };
},
function(_oos, _oot, _oou) {
    'use strict';
    var _oov = this && this.__importDefault || function(_oow) {
        return _oow && _oow.__esModule ? _oow : {
            'default': _oow
        };
    };
    defineModule(_oot);
    Object.defineProperty(_oot, '__esModule', {
        'value': !0
    });
    var _oox = _oou(3),
        _ooy = _oov(_oou(0));
    _oot.getSlot235PersonalEffect = function(_ooz) {
        var _op0 = new _oox.SlotItemEffectModel(),
            _op1 = !1,
            _op2 = new _oox.SlotItemEffectModel(),
            _op3 = 0;
        if (52 != _ooz.ctype && 9 != _ooz.ctype || (_op2.houg += 2, _op2.tyku += 1, _op1 = !0), 321 == _ooz.ship_id && (_op2.houg += 1, _op2.kaih += 1, _op3 = 1), 0 == _op1) return _op0;
        var _op4 = _ooz.get_slotnums(235);
        if (_op0.add(_op2.multiply(_op4)), 0 == _op3) return _op0;
        for (var _op5 = 0, _op6 = 0, _op7 = 0, _op8 = _ooz.have_slot_ids(); _op7 < _op8.length; _op7++) {
            var _op9 = _op8[_op7],
                _opa = _ooy.default.model.slot.getMst(_op9),
                _opb = _opa.equipType;
            12 != _opb && 13 != _opb || (5 <= _opa.sakuteki && (_op5 += _ooz.get_slotnums(parseInt(_op9))), 2 <= _opa.taiku && (_op6 += _ooz.get_slotnums(parseInt(_op9))));
        }
        return 1 <= _op5 && 1 == _op3 && (_op0.houg += 3, _op0.kaih += 2), 1 <= _op6 && 1 == _op3 && (_op0.tyku += 3, _op0.kaih += 3), _op0;
    };
},
function(_opc, _opd, _ope) {
    'use strict';
    defineModule(_opd);
    Object.defineProperty(_opd, '__esModule', {
        'value': !0
    });
    var _opf = _ope(3);
    _opd.getSlot408PersonalEffect = function(_opg) {
        var _oph = new _opf.SlotItemEffectModel(),
            _opi = !1,
            _opj = new _opf.SlotItemEffectModel();
        if ('しんしゅうまる' == _opg.yomi ? (_opj.houg += 2, _opj.saku += 2, _opj.kaih += 2, _opi = !0) : 'あきつまる' == _opg.yomi && (_opj.houg += 1, _opj.saku += 1, _opj.kaih += 1, _opj.tais += 1, _opi = !0), 2 == _opg.stype && (_opj.houg += 1, _opj.saku += 1, _opj.kaih -= 5, _opi = !0), 0 == _opi) return _oph;
        var _opk = _opg.get_slotnums(408);
        return _oph.add(_opj.multiply(_opk)), _oph;
    };
},
function(_opl, _opm, _opn) {
    'use strict';
    defineModule(_opm);
    Object.defineProperty(_opm, '__esModule', {
        'value': !0
    });
    var _opo = _opn(3);
    _opm.getSlot409PersonalEffect = function(_opp) {
        var _opq = new _opo.SlotItemEffectModel(),
            _opr = !1,
            _ops = new _opo.SlotItemEffectModel();
        if ('しんしゅうまる' == _opp.yomi ? (_ops.houg += 1, _ops.tyku += 2, _ops.kaih += 3, _opr = !0) : 'あきつまる' == _opp.yomi && (_ops.houg += 1, _ops.tyku += 1, _ops.kaih += 2, _ops.tais += 1, _opr = !0), 0 == _opr) return _opq;
        var _opt = _opp.get_slotnums(409);
        return _opq.add(_ops.multiply(_opt)), _opq;
    };
},
function(_opu, _opv, _opw) {
    'use strict';
    defineModule(_opv);
    Object.defineProperty(_opv, '__esModule', {
        'value': !0
    });
    var _opx = _opw(3);
    _opv.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_opy) {
        var _opz = new _opx.SlotItemEffectModel(),
            _oq0 = !1,
            _oq1 = new _opx.SlotItemEffectModel();
        if (56 == _opy.ctype && (_oq1.tais += 3, _oq1.kaih += 2, _oq0 = !0), 0 == _oq0) return _opz;
        var _oq2 = _opy.get_slotnums(44) + _opy.get_slotnums(45) + _opy.get_slotnums(287) + _opy.get_slotnums(288);
        return _opz.add(_oq1.multiply(_oq2)), _opz;
    };
},
function(_oq3, _oq4, _oq5) {
    'use strict';
    defineModule(_oq4);
    Object.defineProperty(_oq4, '__esModule', {
        'value': !0
    });
    var _oq6 = _oq5(3);
    _oq4.getSlotDomesticSonarPersonalEffect = function(_oq7) {
        var _oq8 = new _oq6.SlotItemEffectModel();
        return 56 == _oq7.ctype && (_oq8.tais += 2, _oq8.kaih += 3), _oq8;
    };
},
function(_oq9, _oqa, _oqb) {
    'use strict';
    defineModule(_oqa);
    Object.defineProperty(_oqa, '__esModule', {
        'value': !0
    });
    var _oqc = _oqb(3);
    _oqa.getSlot115PersonalEffect = function(_oqd) {
        var _oqe = new _oqc.SlotItemEffectModel(),
            _oqf = !1,
            _oqg = new _oqc.SlotItemEffectModel(),
            _oqh = 0;
        if (55 != _oqd.ctype && 47 != _oqd.ctype || (_oqg.houg += 2, _oqg.saku += 2, _oqg.kaih += 1, _oqf = !0, _oqh = 1), 0 == _oqf) return _oqe;
        var _oqi = _oqd.get_slotnums(115);
        if (_oqe.add(_oqg.multiply(_oqi)), 0 == _oqh) return _oqe;
        var _oqj = _oqd.get_each_level_nums(115)[10];
        return 1 == _oqh && (_oqe.houg += +_oqj, _oqe.kaih += +_oqj), _oqe;
    };
},
function(_oqk, _oql, _oqm) {
    'use strict';
    defineModule(_oql);
    Object.defineProperty(_oql, '__esModule', {
        'value': !0
    });
    var _oqn = _oqm(3);
    _oql.getSlot118PersonalEffect = function(_oqo) {
        var _oqp = new _oqn.SlotItemEffectModel(),
            _oqq = !1,
            _oqr = new _oqn.SlotItemEffectModel(),
            _oqs = 0;
        if (52 == _oqo.ctype && (_oqr.houg += 1, _oqr.saku += 2, _oqr.kaih += 2, _oqs = 1, _oqq = !0), 0 == _oqq) return _oqp;
        var _oqt = _oqo.get_slotnums(118);
        if (_oqp.add(_oqr.multiply(_oqt)), 0 == _oqs) return _oqp;
        var _oqu = _oqo.get_each_level_nums(118)[10];
        return 1 == _oqs && (_oqp.houg += 2 * _oqu, _oqp.saku += +_oqu), _oqp;
    };
},
function(_oqv, _oqw, _oqx) {
    'use strict';
    var _oqy = this && this.__importDefault || function(_oqz) {
        return _oqz && _oqz.__esModule ? _oqz : {
            'default': _oqz
        };
    };
    defineModule(_oqw);
    Object.defineProperty(_oqw, '__esModule', {
        'value': !0
    });
    var _or0 = _oqx(3),
        _or1 = _oqy(_oqx(0));
    _oqw.getSlot121PersonalEffect = function(_or2) {
        var _or3 = new _or0.SlotItemEffectModel(),
            _or4 = 0;
        if (54 == _or2.ctype && (_or3.tyku += 4, _or3.kaih += 2, _or4 = 1), 0 == _or4) return _or3;
        for (var _or5 = 0, _or6 = 0, _or7 = _or2.have_slot_ids(); _or6 < _or7.length; _or6++) {
            var _or8 = _or7[_or6],
                _or9 = _or1.default.model.slot.getMst(_or8),
                _ora = _or9.equipType;
            12 != _ora && 13 != _ora || (5 <= _or9.sakuteki && _or2.get_slotnums(parseInt(_or8)), 2 <= _or9.taiku && (_or5 += _or2.get_slotnums(parseInt(_or8))));
        }
        return 1 <= _or5 && (_or3.tyku += 2, _or3.kaih += 2), _or3;
    };
},
function(_orb, _orc, _ord) {
    'use strict';
    defineModule(_orc);
    Object.defineProperty(_orc, '__esModule', {
        'value': !0
    });
    var _ore = _ord(3);
    _orc.getSlot165_216PersonalEffect = function(_orf) {
        var _org = new _ore.SlotItemEffectModel();
        return 501 != _orf.ship_id && 506 != _orf.ship_id || (_org.tyku += 2, _org.kaih += 2), _org;
    };
},
function(_orh, _ori, _orj) {
    'use strict';
    defineModule(_ori);
    Object.defineProperty(_ori, '__esModule', {
        'value': !0
    });
    var _ork = _orj(3);
    _ori.getSlot217PersonalEffect = function(_orl) {
        var _orm = new _ork.SlotItemEffectModel(),
            _orn = !1,
            _oro = new _ork.SlotItemEffectModel();
        if (501 != _orl.ship_id && 506 != _orl.ship_id || (_oro.houg += 1, _oro.kaih += 3, _oro.tyku += 5, _orn = !0), 0 == _orn) return _orm;
        var _orp = _orl.get_slotnums(217);
        return _orm.add(_oro.multiply(_orp)), _orm;
    };
},
function(_orq, _orr, _ors) {
    'use strict';
    defineModule(_orr);
    Object.defineProperty(_orr, '__esModule', {
        'value': !0
    });
    var _ort = _ors(3);
    _orr.getSlot238_239PersonalEffect = function(_oru) {
        var _orv = new _ort.SlotItemEffectModel();
        return 501 != _oru.ship_id && 506 != _oru.ship_id || (_orv.kaih += 1, _orv.raig += 1), _orv;
    };
},
function(_orw, _orx, _ory) {
    'use strict';
    defineModule(_orx);
    Object.defineProperty(_orx, '__esModule', {
        'value': !0
    });
    var _orz = _ory(3);
    _orx.getSlot3_122PersonalEffect = function(_os0) {
        var _os1 = new _orz.SlotItemEffectModel(),
            _os2 = !1,
            _os3 = new _orz.SlotItemEffectModel();
        if (54 == _os0.ctype && (_os3.houg += 1, _os3.tyku += 2, _os3.kaih += 1, _os2 = !0), 0 == _os2) return _os1;
        var _os4 = _os0.get_slotnums(3) + _os0.get_slotnums(122);
        return _os1.add(_os3.multiply(_os4)), _os1;
    };
},
function(_os5, _os6, _os7) {
    'use strict';
    defineModule(_os6);
    Object.defineProperty(_os6, '__esModule', {
        'value': !0
    });
    var _os8 = _os7(3);
    _os6.getSlot30_410PersonalEffect = function(_os9) {
        var _osa = new _os8.SlotItemEffectModel();
        return 73 != _os9.ship_id && 501 != _os9.ship_id && 506 != _os9.ship_id || (_osa.tyku += 3, _osa.kaih += 2, _osa.saku += 2, 1 <= _os9.get_slotnums(410) && (_osa.tyku += 2, _osa.kaih += 2, _osa.houg += 1, _osa.souk += 1)), 54 == _os9.ctype && (_osa.tyku += 3, _osa.kaih += 2, _osa.saku += 2, 1 <= _os9.get_slotnums(410) && (_osa.tyku += 2, _osa.kaih += 2, _osa.houg += 1, _osa.souk += 1)), _osa;
    };
},
function(_osb, _osc, _osd) {
    'use strict';
    defineModule(_osc);
    Object.defineProperty(_osc, '__esModule', {
        'value': !0
    });
    var _ose = _osd(3);
    _osc.getSlot59PersonalEffect = function(_osf) {
        var _osg = new _ose.SlotItemEffectModel();
        return 501 != _osf.ship_id && 506 != _osf.ship_id || (_osg.tyku += 1, _osg.kaih += 1), _osg;
    };
},
function(_osh, _osi, _osj) {
    'use strict';
    var _osk = this && this.__importDefault || function(_osl) {
        return _osl && _osl.__esModule ? _osl : {
            'default': _osl
        };
    };
    defineModule(_osi);
    Object.defineProperty(_osi, '__esModule', {
        'value': !0
    });
    var _osm = _osj(3),
        _osn = _osk(_osj(0));
    _osi.get8cmAntiAircraftGunPersonalEffect = function(_oso) {
        var _osp = new _osm.SlotItemEffectModel(),
            _osq = !1,
            _osr = new _osm.SlotItemEffectModel(),
            _oss = 0;
        if (662 != _oso.ship_id && 663 != _oso.ship_id && 668 != _oso.ship_id || (_osr.tyku += 2, _osr.kaih += 1, _osq = !0, _oss = 1), 501 != _oso.ship_id && 506 != _oso.ship_id || (_osr.houg += 1, _osr.tyku += 2, _osr.kaih += 2, _osq = !0, _oss = 1), 0 == _osq) return _osp;
        var _ost = _oso.get_slotnums(66) + _oso.get_slotnums(220);
        _osp.add(_osr.multiply(_ost));
        for (var _osu = 0, _osv = 0, _osw = _oso.have_slot_ids(); _osv < _osw.length; _osv++) {
            var _osx = _osw[_osv],
                _osy = _osn.default.model.slot.getMst(_osx),
                _osz = _osy.equipType;
            12 != _osz && 13 != _osz || (5 <= _osy.sakuteki && _oso.get_slotnums(parseInt(_osx)), 2 <= _osy.taiku && (_osu += _oso.get_slotnums(parseInt(_osx))));
        }
        return 0 == _oss || 1 <= _osu && (_osp.tyku += 1, _osp.kaih += 2), _osp;
    };
},
function(_ot0, _ot1, _ot2) {
    'use strict';
    defineModule(_ot1);
    Object.defineProperty(_ot1, '__esModule', {
        'value': !0
    });
    var _ot3 = _ot2(3);
    _ot1.getSlot411PersonalEffect = function(_ot4) {
        var _ot5, _ot6 = new _ot3.SlotItemEffectModel(),
            _ot7 = new _ot3.SlotItemEffectModel(),
            _ot8 = !1,
            _ot9 = 0;
        if (2 == _ot4.stype && (_ot7.kaih -= 9, _ot8 = !0), 3 != _ot4.stype && 4 != _ot4.stype || (_ot7.kaih -= 7, _ot8 = !0), 21 == _ot4.stype && (_ot7.kaih -= 6, _ot8 = !0), 5 != _ot4.stype && 6 != _ot4.stype || (_ot7.kaih -= 5, _ot8 = !0), 593 == _ot4.ship_id && (_ot6.houg += 1, _ot6.tyku += 2, _ot6.kaih += 3), 151 == _ot4.ship_id || 411 == _ot4.ship_id || 412 == _ot4.ship_id || 593 == _ot4.ship_id || 954 == _ot4.ship_id ? (_ot6.houg += 3, _ot6.tyku += 4, _ot9 = 1) : 541 != _ot4.ship_id && 573 != _ot4.ship_id && 553 != _ot4.ship_id && 554 != _ot4.ship_id || (_ot6.houg += 2, _ot6.tyku += 2, _ot9 = 1), _ot8 && (_ot5 = _ot4.get_slotnums(411), _ot6.add(_ot7.multiply(_ot5))), 0 == _ot9) return _ot6;
        var _ota = _ot4.get_each_level_nums(411),
            _otb = 0;
        return 0 < _ot9 && _ota.forEach(function(_otc, _otd) {
            4 <= _otd && (_otb += _otc);
        }), 1 == _ot9 && (1 <= _otb && (_ot6.houg += 1, _ot6.tyku += 1), 1 <= _ota[10] && (_ot6.houg += 1, _ot6.tyku += 1)), _ot6;
    };
},
function(_ote, _otf, _otg) {
    'use strict';
    defineModule(_otf);
    Object.defineProperty(_otf, '__esModule', {
        'value': !0
    });
    var _oth = _otg(3);
    _otf.getSlot60_154_219PersonalEffec = function(_oti) {
        var _otj = new _oth.SlotItemEffectModel(),
            _otk = !1,
            _otl = new _oth.SlotItemEffectModel();
        if ('じゅんよう' != _oti.yomi && 'ひよう' != _oti.yomi && 'ずいほう' != _oti.yomi && 'ちとせ' != _oti.yomi && 'ちよだ' != _oti.yomi || (_otl.houg += 1, _otl.tyku += 1, _otl.kaih += 1, _otk = !0), 185 != _oti.ship_id && 318 != _oti.ship_id && 282 != _oti.ship_id || (_otl.houg += 1, _otl.tyku += 1, _otl.kaih += 1, _otk = !0), 888 != _oti.ship_id && 883 != _oti.ship_id || (_otl.houg += 2, _otl.tyku += 1, _otl.kaih += 2, _otk = !0), 0 == _otk) return _otj;
        var _otm = _oti.get_slotnums(60) + _oti.get_slotnums(154) + _oti.get_slotnums(219);
        return _otj.add(_otl.multiply(_otm)), _otj;
    };
},
function(_otn, _oto, _otp) {
    'use strict';
    defineModule(_oto);
    Object.defineProperty(_oto, '__esModule', {
        'value': !0
    });
    var _otq = _otp(3);
    _oto.getSlot412PersonalEffect = function(_otr) {
        var _ots = new _otq.SlotItemEffectModel(),
            _ott = !1,
            _otu = 0,
            _otv = new _otq.SlotItemEffectModel();
        if (0 <= [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_otr.ctype) ? (_ots.houg += 2, _ots.raig += 4, _ots.tais += 2, _otv.kaih += 3, _otv.saku += 1, _ott = !0, _otu = 1) : 0 <= [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_otr.ctype) ? (_ots.houg += 3, _ots.raig += 3, _otv.kaih += 2, _otv.saku += 3, _ott = !0, _otu = 1) : 0 <= [7, 13, 29, 8, 9, 31].indexOf(_otr.ctype) && (_ots.houg += 1, _otv.kaih += 1, _otv.saku += 1, _ott = !0), 0 == _ott) return _ots;
        var _otw = _otr.get_slotnums(412);
        if (_ots.add(_otv.multiply(_otw)), 0 == _otu) return _ots;
        var _otx = _otr.get_each_level_nums(412),
            _oty = 0,
            _otz = 0;
        return 0 < _otu && _otx.forEach(function(_ou0, _ou1) {
            4 <= _ou1 && (_oty += _ou0), 8 <= _ou1 && (_otz += _ou0);
        }), 1 == _otu && (0 < _oty && (_ots.houg += 1), 0 < _otz && (_ots.raig += 1)), _ots;
    };
},
function(_ou2, _ou3, _ou4) {
    'use strict';
    defineModule(_ou3);
    Object.defineProperty(_ou3, '__esModule', {
        'value': !0
    });
    var _ou5 = _ou4(3);
    _ou3.getSlot414PersonalEffect = function(_ou6) {
        var _ou7 = new _ou5.SlotItemEffectModel(),
            _ou8 = 0;
        if ('アメリカ' == _ou6.getCountryName() && (_ou7.saku += 1, _ou8 = 1), 95 != _ou6.ctype && 99 != _ou6.ctype && 106 != _ou6.ctype && 110 != _ou6.ctype && 121 != _ou6.ctype || (_ou7.houg += 1, _ou7.saku += 1, _ou8 = 2), 0 == _ou8) return _ou7;
        var _ou9 = _ou6.get_each_level_nums(414),
            _oua = 0,
            _oub = 0,
            _ouc = 0;
        return 0 < _ou8 && _ou9.forEach(function(_oud, _oue) {
            5 <= _oue && (_oua += _oud), 3 <= _oue && (_oub += _oud), 8 <= _oue && (_ouc += _oud);
        }), 0 < _ou8 && 1 <= _oua && (_ou7.kaih += 1), 2 == _ou8 && (1 <= _oub && (_ou7.saku += 1), 1 <= _ouc && (_ou7.kaih += 1), 1 <= _ou9[10] && (_ou7.houg += 1)), _ou7;
    };
},
function(_ouf, _oug, _ouh) {
    'use strict';
    defineModule(_oug);
    Object.defineProperty(_oug, '__esModule', {
        'value': !0
    });
    var _oui = _ouh(3);
    _oug.getSlot413PersonalEffect = function(_ouj) {
        var _ouk = new _oui.SlotItemEffectModel();
        return 0 <= [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_ouj.ctype) ? (_ouk.houg += 2, _ouk.raig += 2, _ouk.kaih += 4) : 0 <= [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_ouj.ctype) && (_ouk.houg += 4, _ouk.raig += 2, _ouk.kaih += 2), 38 == _ouj.ctype || 54 == _ouj.ctype ? (_ouk.houg += 2, _ouk.raig += 3, _ouk.kaih += 3) : 4 == _ouj.ctype || 20 == _ouj.ctype || 16 == _ouj.ctype || 41 == _ouj.ctype || 52 == _ouj.ctype ? (_ouk.houg += 1, _ouk.raig += 2, _ouk.kaih += 2) : 21 != _ouj.ctype && 34 != _ouj.ctype || (_ouk.tyku += 2, _ouk.raig += 1, _ouk.kaih += 1), 'なか' == _ouj.yomi || 'ゆら' == _ouj.yomi || 'やはぎ' == _ouj.yomi || 'のしろ' == _ouj.yomi || 'はまなみ' == _ouj.yomi || 'しまかぜ' == _ouj.yomi || 'きよしも' == _ouj.yomi || 'はつしも' == _ouj.yomi ? (_ouk.tyku += 1, _ouk.kaih += 1) : 'じんつう' != _ouj.yomi && 'せんだい' != _ouj.yomi && 'ながなみ' != _ouj.yomi && 'はつしも' != _ouj.yomi && 'てるづき' != _ouj.yomi || (_ouk.houg += 1, _ouk.raig += 1), 543 == _ouj.ship_id ? (_ouk.houg += 1, _ouk.kaih += 1) : 159 == _ouj.ship_id && (_ouk.houg += 2), _ouk;
    };
},
function(_oul, _oum, _oun) {
    'use strict';
    defineModule(_oum);
    Object.defineProperty(_oum, '__esModule', {
        'value': !0
    });
    var _ouo = _oun(3);
    _oum.getSlot415PersonalEffect = function(_oup) {
        var _ouq = new _ouo.SlotItemEffectModel(),
            _our = [];
        if ('アメリカ' == _oup.getCountryName() && (_ouq.saku += 1, _ouq.tais += 1, _our.push(1)), 95 != _oup.ctype && 99 != _oup.ctype && 106 != _oup.ctype && 110 != _oup.ctype && 121 != _oup.ctype || (_ouq.houg += 1, _our.push(2)), 0 == _our.length) return _ouq;
        var _ous = _oup.get_each_level_nums(415),
            _out = 0,
            _ouu = 0,
            _ouv = 0;
        return 0 < _our.length && (_ous.forEach(function(_ouw, _oux) {
            5 <= _oux && (_out += _ouw), 3 <= _oux && (_ouu += _ouw), 8 <= _oux && (_ouv += _ouw);
        }), _our.forEach(function(_ouy) {
            1 == _ouy ? 1 <= _out && (_ouq.kaih += 1) : 2 == _ouy && (1 <= _ouu && (_ouq.kaih += 1), 1 <= _ouv && (_ouq.houg += 1));
        })), _ouq;
    };
},
function(_ouz, _ov0, _ov1) {
    'use strict';
    defineModule(_ov0);
    Object.defineProperty(_ov0, '__esModule', {
        'value': !0
    });
    var _ov2 = _ov1(3);
    _ov0.getSlot195PersonalEffect = function(_ov3) {
        var _ov4 = new _ov2.SlotItemEffectModel(),
            _ov5 = !1,
            _ov6 = new _ov2.SlotItemEffectModel();
        if ('アメリカ' == _ov3.getCountryName() && (_ov6.houg += 1, _ov5 = !0), 0 == _ov5) return _ov4;
        var _ov7 = _ov3.get_slotnums(195);
        return _ov4.add(_ov6.multiply(_ov7));
    };
},
function(_ov8, _ov9, _ova) {
    'use strict';
    defineModule(_ov9);
    Object.defineProperty(_ov9, '__esModule', {
        'value': !0
    });
    var _ovb = _ova(3);
    _ov9.getSlot419PersonalEffect = function(_ovc) {
        var _ovd = new _ovb.SlotItemEffectModel(),
            _ove = !1,
            _ovf = new _ovb.SlotItemEffectModel(),
            _ovg = 0;
        if ('アメリカ' == _ovc.getCountryName() && (_ovf.houg += 2, _ove = !0, _ovg = 1), 0 == _ove) return _ovd;
        var _ovh = _ovc.get_slotnums(419);
        if (_ovd.add(_ovf.multiply(_ovh)), 0 == _ovg) return _ovd;
        var _ovi = _ovc.get_each_level_nums(419),
            _ovj = 0,
            _ovk = 0;
        return 0 < _ovg && _ovi.forEach(function(_ovl, _ovm) {
            2 <= _ovm && (_ovj += _ovl), 7 <= _ovm && (_ovk += _ovl);
        }), 1 == _ovg && (1 <= _ovj && (_ovd.houg += +_ovj), 1 <= _ovk && (_ovd.houg += +_ovk)), _ovd;
    };
},
function(_ovn, _ovo, _ovp) {
    'use strict';
    defineModule(_ovo);
    Object.defineProperty(_ovo, '__esModule', {
        'value': !0
    });
    var _ovq = _ovp(3);
    _ovo.getSlot420PersonalEffect = function(_ovr) {
        var _ovs = new _ovq.SlotItemEffectModel(),
            _ovt = !1,
            _ovu = new _ovq.SlotItemEffectModel(),
            _ovv = 0;
        if ('アメリカ' != _ovr.getCountryName() && 67 != _ovr.ctype && 78 != _ovr.ctype && 82 != _ovr.ctype && 88 != _ovr.ctype && 108 != _ovr.ctype && 112 != _ovr.ctype || (_ovu.houg += 1, _ovv = 1, _ovt = !0), 84 == _ovr.ctype ? (_ovu.houg += 1, _ovt = !0) : 78 == _ovr.ctype && (--_ovu.houg, _ovt = !0), 7 == _ovr.stype && (_ovu.houg -= 2, --_ovu.kaih, _ovu.souk -= 2, _ovt = !0), 0 == _ovt) return _ovs;
        var _ovw = _ovr.get_slotnums(420);
        if (_ovs.add(_ovu.multiply(_ovw)), 0 == _ovv) return _ovs;
        var _ovx = _ovr.get_each_level_nums(420),
            _ovy = 0;
        return 0 < _ovv && _ovx.forEach(function(_ovz, _ow0) {
            3 <= _ow0 && (_ovy += _ovz);
        }), 1 == _ovv && 1 <= _ovy && (_ovs.houg += +_ovy), _ovs;
    };
},
function(_ow1, _ow2, _ow3) {
    'use strict';
    defineModule(_ow2);
    Object.defineProperty(_ow2, '__esModule', {
        'value': !0
    });
    var _ow4 = _ow3(3);
    _ow2.getSlot421PersonalEffect = function(_ow5) {
        var _ow6 = new _ow4.SlotItemEffectModel(),
            _ow7 = !1,
            _ow8 = new _ow4.SlotItemEffectModel(),
            _ow9 = 0;
        if ('アメリカ' != _ow5.getCountryName() && 67 != _ow5.ctype && 78 != _ow5.ctype && 82 != _ow5.ctype && 88 != _ow5.ctype && 108 != _ow5.ctype && 112 != _ow5.ctype || (_ow8.houg += 2, _ow7 = !0, _ow9 = 1), 84 == _ow5.ctype ? (_ow8.houg += 1, _ow7 = !0) : 78 == _ow5.ctype && (--_ow8.houg, _ow7 = !0), 7 == _ow5.stype && (_ow8.houg -= 2, --_ow8.kaih, _ow8.souk -= 2, _ow7 = !0), 0 == _ow7) return _ow6;
        var _owa = _ow5.get_slotnums(421);
        if (_ow6.add(_ow8.multiply(_owa)), 0 == _ow9) return _ow6;
        var _owb = _ow5.get_each_level_nums(421),
            _owc = 0;
        return 0 < _ow9 && _owb.forEach(function(_owd, _owe) {
            5 <= _owe && (_owc += _owd);
        }), 1 == _ow9 && 1 <= _owc && (_ow6.houg += +_owc), _ow6;
    };
},
function(_owf, _owg, _owh) {
    'use strict';
    defineModule(_owg);
    Object.defineProperty(_owg, '__esModule', {
        'value': !0
    });
    var _owi = _owh(3);
    _owg.getSlot277PersonalEffect = function(_owj) {
        var _owk = new _owi.SlotItemEffectModel(),
            _owl = !1,
            _owm = new _owi.SlotItemEffectModel();
        if ('アメリカ' != _owj.getCountryName() && 67 != _owj.ctype && 78 != _owj.ctype && 82 != _owj.ctype && 88 != _owj.ctype && 108 != _owj.ctype && 112 != _owj.ctype || (_owm.houg += 1, _owm.kaih += 1, _owl = !0), 83 == _owj.ctype && (_owm.houg += 1, _owm.kaih += 1, _owm.tyku += 1, _owl = !0), 0 == _owl) return _owk;
        var _own = _owj.get_slotnums(277);
        return _owk.add(_owm.multiply(_own)), _owk;
    };
},
function(_owo, _owp, _owq) {
    'use strict';
    defineModule(_owp);
    Object.defineProperty(_owp, '__esModule', {
        'value': !0
    });
    var _owr = _owq(3);
    _owp.getSlot422PersonalEffect = function(_ows) {
        var _owt = new _owr.SlotItemEffectModel(),
            _owu = !1,
            _owv = new _owr.SlotItemEffectModel();
        if ('アメリカ' != _ows.getCountryName() && 67 != _ows.ctype && 78 != _ows.ctype && 82 != _ows.ctype && 88 != _ows.ctype && 108 != _ows.ctype && 112 != _ows.ctype || (_owv.houg += 1, _owv.kaih += 1, _owu = !0), 84 == _ows.ctype && (_owv.houg += 1, _owv.tyku += 1, _owu = !0), 707 == _ows.ship_id && (_owv.houg += 2, _owv.kaih += 2, _owv.tyku += 2, _owu = !0), 0 == _owu) return _owt;
        var _oww = _ows.get_slotnums(422);
        return _owt.add(_owv.multiply(_oww)), _owt;
    };
},
function(_owx, _owy, _owz) {
    'use strict';
    defineModule(_owy);
    Object.defineProperty(_owy, '__esModule', {
        'value': !0
    });
    var _ox0 = _owz(3);
    _owy.getSlot423PersonalEffect = function(_ox1) {
        var _ox2 = new _ox0.SlotItemEffectModel(),
            _ox3 = !1,
            _ox4 = new _ox0.SlotItemEffectModel();
        78 != _ox1.ctype && 112 != _ox1.ctype || (_ox4.houg += 2, _ox4.tyku += 2, _ox4.kaih += 2, _ox4.saku += 2, _ox3 = !0);
        var _ox5 = _ox1.getCountryName();
        if (67 == _ox1.ctype || 78 == _ox1.ctype || 82 == _ox1.ctype || 88 == _ox1.ctype || 108 == _ox1.ctype || 112 == _ox1.ctype ? (_ox4.houg += 2, _ox4.tyku += 2, _ox4.kaih += 2, _ox4.saku += 2, _ox3 = !0) : 'アメリカ' == _ox5 && (_ox4.houg += 1, _ox4.tyku += 1, _ox4.kaih += 1, _ox4.saku += 1, _ox3 = !0), 0 == _ox3) return _ox2;
        var _ox6 = _ox1.get_slotnums(423);
        return _ox2.add(_ox4.multiply(_ox6)), _ox2;
    };
},
function(_ox7, _ox8, _ox9) {
    'use strict';
    defineModule(_ox8);
    Object.defineProperty(_ox8, '__esModule', {
        'value': !0
    });
    var _oxa = _ox9(3);
    _ox8.getSlot424PersonalEffect = function(_oxb) {
        var _oxc = new _oxa.SlotItemEffectModel(),
            _oxd = !1,
            _oxe = new _oxa.SlotItemEffectModel(),
            _oxf = 0;
        67 != _oxb.ctype && 78 != _oxb.ctype && 82 != _oxb.ctype && 88 != _oxb.ctype && 108 != _oxb.ctype && 112 != _oxb.ctype || (_oxe.houg += 2, _oxe.raig += 3, _oxd = !0, _oxf = 1);
        var _oxg = _oxb.get_slotnums(424);
        _oxd && _oxc.add(_oxe.multiply(_oxg));
        var _oxh = _oxb.get_each_level_nums(424),
            _oxi = 0,
            _oxj = 0,
            _oxk = 0;
        _oxh.forEach(function(_oxl, _oxm) {
            2 <= _oxm && (_oxi += _oxl), 6 <= _oxm && (_oxj += _oxl), 8 <= _oxm && (_oxk += _oxl);
        });
        var _oxn = _oxh[10];
        return 1 == _oxf && (1 <= _oxi && (_oxc.houg += +_oxi), 1 <= _oxj && (_oxc.houg += +_oxj), 1 <= _oxk && (_oxc.houm += +_oxk)), 0 < _oxn && (_oxc.houm += +_oxn), _oxc;
    };
},
function(_oxo, _oxp, _oxq) {
    'use strict';
    defineModule(_oxp);
    Object.defineProperty(_oxp, '__esModule', {
        'value': !0
    });
    var _oxr = _oxq(3);
    _oxp.getSlot425PersonalEffect = function(_oxs) {
        var _oxt = new _oxr.SlotItemEffectModel(),
            _oxu = !1,
            _oxv = new _oxr.SlotItemEffectModel(),
            _oxw = 0;
        67 != _oxs.ctype && 78 != _oxs.ctype && 82 != _oxs.ctype && 88 != _oxs.ctype && 108 != _oxs.ctype && 112 != _oxs.ctype || (_oxv.houg += 2, _oxv.tais += 2, _oxv.raig += 1, _oxv.saku += 1, _oxu = !0, _oxw = 1);
        var _oxx = _oxs.get_slotnums(425);
        _oxu && _oxt.add(_oxv.multiply(_oxx));
        var _oxy = _oxs.get_each_level_nums(425),
            _oxz = 0,
            _oy0 = 0,
            _oy1 = 0,
            _oy2 = 0,
            _oy3 = 0,
            _oy4 = 0;
        _oxy.forEach(function(_oy5, _oy6) {
            2 <= _oy6 && (_oxz += _oy5), 4 <= _oy6 && (_oy0 += _oy5), 6 <= _oy6 && (_oy1 += _oy5), 7 <= _oy6 && (_oy2 += _oy5), 8 <= _oy6 && (_oy3 += _oy5), 9 <= _oy6 && (_oy4 += _oy5);
        });
        var _oy7 = _oxy[10];
        return 1 == _oxw && (1 <= _oxz && (_oxt.tais += +_oxz), 1 <= _oy0 && (_oxt.houg += +_oy0), 1 <= _oy1 && (_oxt.tais += +_oy1), 1 <= _oy2 && (_oxt.houm += +_oy2), 1 <= _oy3 && (_oxt.raig += +_oy3), 1 <= _oy4 && (_oxt.houg += +_oy4), 1 <= _oy7 && (_oxt.tais += +_oy7)), 1 <= _oy2 && (_oxt.houg += +_oy2), 1 <= _oy3 && (_oxt.tais += +_oy3), 1 <= _oy4 && (_oxt.houm += +_oy4), 1 <= _oy7 && (_oxt.houm += +_oy7), _oxt;
    };
},
function(_oy8, _oy9, _oya) {
    'use strict';
    defineModule(_oy9);
    Object.defineProperty(_oy9, '__esModule', {
        'value': !0
    });
    var _oyb = _oya(3);
    _oy9.getSlot430PersonalEffect = function(_oyc) {
        var _oyd = new _oyb.SlotItemEffectModel(),
            _oye = !1,
            _oyf = new _oyb.SlotItemEffectModel(),
            _oyg = 0;
        if (113 == _oyc.ctype && (_oyf.tyku += 1, _oyf.kaih += 1, _oye = !0), 58 != _oyc.ctype && 61 != _oyc.ctype && 64 != _oyc.ctype && 68 != _oyc.ctype && 80 != _oyc.ctype && 92 != _oyc.ctype && 113 != _oyc.ctype && 124 != _oyc.ctype || (_oyf.tyku += 2, _oyf.kaih += 1, _oye = !0, _oyg = 1), 0 == _oye) return _oyd;
        var _oyh = _oyc.get_slotnums(430);
        if (_oyd.add(_oyf.multiply(_oyh)), 0 == _oyg) return _oyd;
        var _oyi, _oyj = _oyc.get_each_level_nums(430),
            _oyk = 0,
            _oyl = 0,
            _oym = 0;
        return 0 < _oyg && _oyj.forEach(function(_oyn, _oyo) {
            2 <= _oyo && (_oyk += _oyn), 4 <= _oyo && (_oyl += _oyn), 7 <= _oyo && (_oym += _oyn);
        }), 1 == _oyg && (1 <= _oyk && (_oyd.kaih += +_oyk), 1 <= _oyl && (_oyd.tyku += +_oyl), 1 <= _oym && (_oyd.kaih += +_oym), 1 <= (_oyi = _oyj[10]) && (_oyd.tyku += +_oyi)), _oyd;
    };
},
function(_oyp, _oyq, _oyr) {
    'use strict';
    defineModule(_oyq);
    Object.defineProperty(_oyq, '__esModule', {
        'value': !0
    });
    var _oys = _oyr(3);
    _oyq.getSlot305More320mmGunPersonalEffect = function(_oyt) {
        var _oyu = new _oys.SlotItemEffectModel(),
            _oyv = _oyt.get_slotnums(426),
            _oyw = _oyt.get_slotnums(427),
            _oyx = _oyt.get_slotnums(428),
            _oyy = _oyt.get_slotnums(429),
            _oyz = _oyv + _oyw + _oyx + _oyy;
        return 113 == _oyt.ctype ? (_oyu.houg = _oyu.houg + 2 * _oyz, 1 <= _oyv && (_oyu.houg = _oyu.houg + +_oyv, _oyu.kaih = _oyu.kaih + +_oyv, (2 <= _oyv || 1 <= _oyw) && (_oyu.houg = _oyu.houg + 1, _oyu.kaih = _oyu.kaih + 1)), 1 <= _oyx && (_oyu.houg = _oyu.houg + +_oyx, _oyu.kaih = _oyu.kaih + +_oyx, (2 <= _oyx || 1 <= _oyy) && (_oyu.houg = _oyu.houg + 2, _oyu.kaih = _oyu.kaih + 1))) : 73 == _oyt.ctype ? (_oyu.houg = _oyu.houg + +_oyz, 1 <= _oyv && (_oyu.houg = _oyu.houg + +_oyv, _oyu.kaih = _oyu.kaih + +_oyv, (2 <= _oyv || 1 <= _oyw) && (_oyu.houg = _oyu.houg + 1)), 1 <= _oyx && (_oyu.houg = _oyu.houg + +_oyx, _oyu.kaih = _oyu.kaih + +_oyx, (2 <= _oyx || 1 <= _oyy) && (_oyu.houg = _oyu.houg + 1))) : 58 == _oyt.ctype && 1 <= _oyx && (_oyu.houg = _oyu.houg + +_oyx, _oyu.kaih = _oyu.kaih + 2 * _oyx, (2 <= _oyx || 1 <= _oyy) && (_oyu.houg = _oyu.houg + 2, _oyu.kaih = _oyu.kaih + 1)), _oyu;
    };
},
function(_oz0, _oz1, _oz2) {
    'use strict';
    defineModule(_oz1);
    Object.defineProperty(_oz1, '__esModule', {
        'value': !0
    });
    var _oz3 = _oz2(3);
    _oz1.getSlotCorsairMkIIPersonalEffect = function(_oz4) {
        var _oz5 = new _oz3.SlotItemEffectModel(),
            _oz6 = !1,
            _oz7 = new _oz3.SlotItemEffectModel();
        112 == _oz4.ctype && (_oz7.houg += 1, _oz7.tyku += 1, _oz7.kaih += 2, _oz6 = !0);
        var _oz8 = _oz4.getCountryName();
        if (67 == _oz4.ctype || 78 == _oz4.ctype || 82 == _oz4.ctype || 88 == _oz4.ctype || 108 == _oz4.ctype || 112 == _oz4.ctype ? (_oz7.houg += 1, _oz7.tyku += 2, _oz7.kaih += 3, _oz6 = !0) : 'アメリカ' == _oz8 && (_oz7.houg += 1, _oz7.tyku += 1, _oz7.kaih += 2, _oz6 = !0), 0 == _oz6) return _oz5;
        var _oz9 = _oz4.get_slotnums(434) + _oz4.get_slotnums(435);
        return _oz5.add(_oz7.multiply(_oz9)), _oz5;
    };
},
function(_oza, _ozb, _ozc) {
    'use strict';
    defineModule(_ozb);
    Object.defineProperty(_ozb, '__esModule', {
        'value': !0
    });
    var _ozd = _ozc(3);
    _ozb.getSlot437PersonalEffect = function(_oze) {
        var _ozf = new _ozd.SlotItemEffectModel(),
            _ozg = !1,
            _ozh = new _ozd.SlotItemEffectModel();
        if (285 == _oze.ship_id ? (_ozh.houg += 3, _ozh.tyku += 3, _ozh.kaih += 4, _ozg = !0) : 894 == _oze.ship_id || 899 == _oze.ship_id ? (_ozh.houg += 4, _ozh.tyku += 4, _ozh.kaih += 4, _ozg = !0) : 196 == _oze.ship_id || 197 == _oze.ship_id ? (_ozh.houg += 2, _ozh.tyku += 2, _ozh.kaih += 3, _ozg = !0) : 508 == _oze.ship_id || 509 == _oze.ship_id || 646 == _oze.ship_id ? (_ozh.houg += 2, _ozh.tyku += 2, _ozh.kaih += 2, _ozg = !0) : 888 != _oze.ship_id && 883 != _oze.ship_id && 553 != _oze.ship_id && 554 != _oze.ship_id || (_ozh.houg += 1, _ozh.tyku += 2, _ozh.kaih += 2, _ozg = !0), 0 == _ozg) return _ozf;
        var _ozi = _oze.get_slotnums(437);
        return _ozf.add(_ozh.multiply(_ozi)), _ozf;
    };
},
function(_ozj, _ozk, _ozl) {
    'use strict';
    defineModule(_ozk);
    Object.defineProperty(_ozk, '__esModule', {
        'value': !0
    });
    var _ozm = _ozl(3);
    _ozk.getSlot271PersonalEffect = function(_ozn) {
        var _ozo = new _ozm.SlotItemEffectModel(),
            _ozp = 0;
        if (508 != _ozn.ship_id && 509 != _ozn.ship_id && 888 != _ozn.ship_id && 883 != _ozn.ship_id || (_ozp = 1), 0 == _ozp) return _ozo;
        var _ozq = _ozn.get_each_level_nums(271),
            _ozr = 0,
            _ozs = 0,
            _ozt = 0,
            _ozu = _ozq[10];
        return 0 < _ozp && _ozq.forEach(function(_ozv, _ozw) {
            4 <= _ozw && (_ozr += _ozv), 6 <= _ozw && (_ozs += _ozv), 8 <= _ozw && (_ozt += _ozv);
        }), 1 == _ozp && (1 <= _ozr && (_ozo.houg += +_ozr), 1 <= _ozs && (_ozo.tyku += 2 * _ozs), 1 <= _ozt && (_ozo.kaih += 2 * _ozt), 1 <= _ozu && (_ozo.houg += +_ozu)), _ozo;
    };
},
function(_ozx, _ozy, _ozz) {
    'use strict';
    defineModule(_ozy);
    Object.defineProperty(_ozy, '__esModule', {
        'value': !0
    });
    var _p00 = _ozz(3);
    _ozy.getSlot438PersonalEffect = function(_p01) {
        var _p02 = new _p00.SlotItemEffectModel(),
            _p03 = 0;
        if (-1 < [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_p01.ctype) && (_p02.tais += 1, _p02.kaih += 1), 160 == _p01.ship_id || 488 == _p01.ship_id || 141 == _p01.ship_id ? (_p02.tais += 1, _p02.kaih += 1) : 145 != _p01.ship_id && 588 != _p01.ship_id && 667 != _p01.ship_id && 578 != _p01.ship_id && 476 != _p01.ship_id && 363 != _p01.ship_id && 961 != _p01.ship_id || (_p03 = 1), 'うしお' == _p01.yomi || 'まいかぜ' == _p01.yomi || 'いそかぜ' == _p01.yomi || 'はまかぜ' == _p01.yomi || 'いかづち' == _p01.yomi || 'やまぐも' == _p01.yomi || 'うみかぜ' == _p01.yomi || 'かわかぜ' == _p01.yomi || 'すずかぜ' == _p01.yomi ? _p02.tais += 1 : 'しぐれ' != _p01.yomi && 'やまかぜ' != _p01.yomi && 'かみかぜ' != _p01.yomi && 'はるかぜ' != _p01.yomi && 'みくら' != _p01.yomi && 'いしがき' != _p01.yomi || (_p02.tais += 1, _p02.kaih += 1), 0 == _p03) return _p02;
        var _p04 = _p01.get_each_level_nums(438),
            _p05 = 0,
            _p06 = 0,
            _p07 = 0,
            _p08 = _p04[10];
        return 0 < _p03 && _p04.forEach(function(_p09, _p0a) {
            4 <= _p0a && (_p05 += _p09), 6 <= _p0a && (_p06 += _p09), 8 <= _p0a && (_p07 += _p09);
        }), 1 == _p03 && (1 <= _p05 && (_p02.tais += 1), 1 <= _p06 && (_p02.kaih += 1), 1 <= _p07 && (_p02.tais += 1), 1 <= _p08 && (_p02.kaih += 1)), _p02;
    };
},
function(_p0b, _p0c, _p0d) {
    'use strict';
    defineModule(_p0c);
    Object.defineProperty(_p0c, '__esModule', {
        'value': !0
    });
    var _p0e = _p0d(3);
    _p0c.getSlot136PersonalEffect = function(_p0f) {
        var _p0g = new _p0e.SlotItemEffectModel(),
            _p0h = 0;
        if (58 != _p0f.ctype && 61 != _p0f.ctype && 64 != _p0f.ctype && 68 != _p0f.ctype && 80 != _p0f.ctype && 92 != _p0f.ctype && 113 != _p0f.ctype && 124 != _p0f.ctype || (_p0g.souk += 2, _p0g.kaih += 1, _p0h = 1), 879 == _p0f.ship_id && (_p0g.souk += 1, _p0g.kaih += 1), 0 == _p0h) return _p0g;
        var _p0i = _p0f.get_each_level_nums(136),
            _p0j = 0,
            _p0k = 0,
            _p0l = _p0i[10];
        return 0 < _p0h && _p0i.forEach(function(_p0m, _p0n) {
            3 <= _p0n && (_p0j += _p0m), 6 <= _p0n && (_p0k += _p0m);
        }), 1 == _p0h && (1 <= _p0j && (_p0g.souk += +_p0j), 1 <= _p0k && (_p0g.souk += +_p0k), 1 <= _p0l && (_p0g.souk += +_p0l)), _p0g;
    };
},
function(_p0o, _p0p, _p0q) {
    'use strict';
    defineModule(_p0p);
    Object.defineProperty(_p0p, '__esModule', {
        'value': !0
    });
    var _p0r = _p0q(3);
    _p0p.getSlot439PersonalEffect = function(_p0s) {
        var _p0t = new _p0r.SlotItemEffectModel();
        1 != _p0s.stype && 2 != _p0s.stype && 3 != _p0s.stype && 21 != _p0s.stype || (_p0t.tais += 1, _p0t.kaih += 1), 101 != _p0s.ctype && 1 != _p0s.stype || (_p0t.tais += 1);
        var _p0u = _p0s.getCountryName();
        return 'アメリカ' != _p0u && 'イギリス' != _p0u || (_p0t.tais += 2), _p0t;
    };
},
function(_p0v, _p0w, _p0x) {
    'use strict';
    defineModule(_p0w);
    Object.defineProperty(_p0w, '__esModule', {
        'value': !0
    });
    var _p0y = _p0x(3);
    _p0w.getSlot440_441PersonalEffect = function(_p0z) {
        var _p10 = new _p0y.SlotItemEffectModel();
        return 114 == _p0z.ctype && (_p10.raig += 2), _p10;
    };
},
function(_p11, _p12, _p13) {
    'use strict';
    defineModule(_p12);
    Object.defineProperty(_p12, '__esModule', {
        'value': !0
    });
    var _p14 = _p13(3);
    _p12.getSlot442_443PersonalEffect = function(_p15) {
        var _p16 = new _p14.SlotItemEffectModel();
        return 122 == _p15.ctype ? (_p16.raig += 1, _p16.kaih += 2) : 114 == _p15.ctype && (_p16.raig += 2), _p16;
    };
},
function(_p17, _p18, _p19) {
    'use strict';
    defineModule(_p18);
    Object.defineProperty(_p18, '__esModule', {
        'value': !0
    });
    var _p1a = _p19(3);
    _p18.getSlot447PersonalEffect = function(_p1b) {
        var _p1c = new _p1a.SlotItemEffectModel(),
            _p1d = _p1b.get_each_level_nums(447),
            _p1e = 0,
            _p1f = 0,
            _p1g = 0,
            _p1h = 0;
        _p1d.forEach(function(_p1i, _p1j) {
            2 <= _p1j && (_p1e += _p1i), 4 <= _p1j && (_p1f += _p1i), 6 <= _p1j && (_p1g += _p1i), 8 <= _p1j && (_p1h += _p1i);
        }), 1 <= _p1e && (_p1c.houg += +_p1e), 1 <= _p1f && (_p1c.tyku += +_p1f), 1 <= _p1g && (_p1c.tais += +_p1g), 1 <= _p1h && (_p1c.kaih += +_p1h);
        var _p1k = _p1d[10];
        1 <= _p1k && (_p1c.tais += +_p1k);
        var _p1l = !1,
            _p1m = new _p1a.SlotItemEffectModel();
        if (76 == _p1b.ctype && (_p1m.houg += 1, _p1m.tais += 1, _p1m.kaih += 2, _p1l = !0), 'うんよう' == _p1b.yomi ? (_p1m.houg += 1, _p1m.tais += 1, _p1m.kaih += 1, _p1l = !0) : 'ほうしょう' != _p1b.yomi && 'たいげい・りゅうほう' != _p1b.yomi || (_p1m.houg += 1, _p1m.tais += 2, _p1m.kaih += 1, _p1l = !0), 0 == _p1l) return _p1c;
        894 != _p1b.ship_id && 899 != _p1b.ship_id || (_p1m.houg += 1, _p1m.kaih += 1, _p1m.tais += 1, _p1m.tyku += 1, _p1l = !0);
        var _p1n = _p1b.get_slotnums(447);
        return _p1c.add(_p1m.multiply(_p1n)), _p1c;
    };
},
function(_p1o, _p1p, _p1q) {
    'use strict';
    var _p1r = this && this.__importDefault || function(_p1s) {
        return _p1s && _p1s.__esModule ? _p1s : {
            'default': _p1s
        };
    };
    defineModule(_p1p);
    Object.defineProperty(_p1p, '__esModule', {
        'value': !0
    });
    var _p1t = _p1q(3),
        _p1u = _p1r(_p1q(0));
    _p1p.getSlot84PersonalEffect = function(_p1v) {
        var _p1w = new _p1t.SlotItemEffectModel(),
            _p1x = _p1v.get_each_level_nums(84),
            _p1y = 0,
            _p1z = 0;
        if (_p1x.forEach(function(_p20, _p21) {
                4 <= _p21 && (_p1y += _p20), 7 <= _p21 && (_p1z += _p20);
            }), 0 == _p1y) return _p1w;
        for (var _p22 = 0, _p23 = 0, _p24 = _p1v.have_slot_ids(); _p23 < _p24.length; _p23++) {
            var _p25 = _p24[_p23],
                _p26 = _p1u.default.model.slot.getMst(_p25),
                _p27 = _p26.equipType;
            12 != _p27 && 13 != _p27 || (5 <= _p26.sakuteki && _p1v.get_slotnums(parseInt(_p25)), 2 <= _p26.taiku && (_p22 += _p1v.get_slotnums(parseInt(_p25))));
        }
        var _p28 = _p1v.getCountryName();
        1 <= _p1y && (_p1w.tyku += +_p1y, _p1w.kaih += +_p1y, 'ドイツ' != _p28 && 'イタリア' != _p28 || (_p1w.tyku += +_p1y, _p1w.kaih += +_p1y), 1 <= _p22 && (_p1w.tyku += 1)), 1 <= _p1z && (_p1w.tyku += +_p1z, _p1w.houg += +_p1z);
        var _p29 = _p1x[10];
        return 1 <= _p29 && (_p1w.tyku += +_p29, _p1w.kaih += +_p29, 'ドイツ' != _p28 && 'イタリア' != _p28 || (_p1w.houg += 1)), _p1w;
    };
},
function(_p2a, _p2b, _p2c) {
    'use strict';
    defineModule(_p2b);
    Object.defineProperty(_p2b, '__esModule', {
        'value': !0
    });
    var _p2d = _p2c(3);
    _p2b.getSlot70PersonalEffect = function(_p2e) {
        var _p2f = new _p2d.SlotItemEffectModel(),
            _p2g = !1,
            _p2h = new _p2d.SlotItemEffectModel();
        if ('やましおまる' == _p2e.yomi && (_p2h.houg += 1, _p2h.tais += 1, _p2g = !0), 0 == _p2g) return _p2f;
        var _p2i = _p2e.get_slotnums(70);
        return _p2f.add(_p2h.multiply(_p2i)), _p2f;
    };
},
function(_p2j, _p2k, _p2l) {
    'use strict';
    defineModule(_p2k);
    Object.defineProperty(_p2k, '__esModule', {
        'value': !0
    });
    var _p2m = _p2l(3);
    _p2k.getSlot346PersonalEffect = function(_p2n) {
        var _p2o = new _p2m.SlotItemEffectModel();
        return 'やましおまる' == _p2n.yomi && (_p2o.kaih += 1, _p2o.tais += 1), _p2o;
    };
},
function(_p2p, _p2q, _p2r) {
    'use strict';
    defineModule(_p2q);
    Object.defineProperty(_p2q, '__esModule', {
        'value': !0
    });
    var _p2s = _p2r(3);
    _p2q.getSlot347PersonalEffect = function(_p2t) {
        var _p2u = new _p2s.SlotItemEffectModel();
        return 'やましおまる' == _p2t.yomi && (_p2u.kaih += 2, _p2u.tais += 2), _p2u;
    };
},
function(_p2v, _p2w, _p2x) {
    'use strict';
    defineModule(_p2w);
    Object.defineProperty(_p2w, '__esModule', {
        'value': !0
    });
    var _p2y = _p2x(3);
    _p2w.getSlot450PersonalEffect = function(_p2z) {
        var _p30 = new _p2y.SlotItemEffectModel(),
            _p31 = !1,
            _p32 = new _p2y.SlotItemEffectModel();
        if (101 == _p2z.ctype && (_p32.houg += 1, _p32.tyku += 2, _p32.souk += 1, _p32.kaih += 3, _p31 = !0), 1 == _p2z.stype && (_p32.tyku += 1, _p32.souk += 1, _p32.kaih += 2, _p31 = !0), 0 == _p31) return _p30;
        var _p33 = _p2z.get_slotnums(450);
        return _p30.add(_p32.multiply(_p33)), _p30;
    };
},
function(_p34, _p35, _p36) {
    'use strict';
    defineModule(_p35);
    Object.defineProperty(_p35, '__esModule', {
        'value': !0
    });
    var _p37 = _p36(3);
    _p35.getSlot451PersonalEffect = function(_p38) {
        var _p39 = new _p37.SlotItemEffectModel(),
            _p3a = !1,
            _p3b = new _p37.SlotItemEffectModel(),
            _p3c = 0;
        if ('あきつまる' == _p38.yomi ? (_p3b.houg += 1, _p3b.tais += 2, _p3a = !0, 166 == _p38.ship_id && (_p3c = 2)) : 'やましおまる' == _p38.yomi && (_p3b.houg += 1, _p3b.tais += 3, _p3a = !0, _p3c = 1), 0 == _p3a) return _p39;
        var _p3d = _p38.get_slotnums(451);
        if (_p39.add(_p3b.multiply(_p3d)), 0 == _p3c) return _p39;
        var _p3e = _p38.get_each_level_nums(451),
            _p3f = [];
        return 0 < _p3c && _p3e.forEach(function(_p3g, _p3h) {
            for (var _p3i = 1; _p3i <= _p38.SLOT_LEVEL_MAX; _p3i++) _p3i <= _p3h && (null == _p3f[_p3i] && (_p3f[_p3i] = 0), _p3f[_p3i] += _p3g);
        }), 1 == _p3c ? (1 <= _p3f[1] && (_p39.houg += 2 * _p3f[1]), 1 <= _p3f[2] && (_p39.houm += +_p3f[2]), 1 <= _p3f[3] && (_p39.tais += +_p3f[3]), 1 <= _p3f[4] && (_p39.houg += +_p3f[4]), 1 <= _p3f[6] && (_p39.houm += +_p3f[6]), 1 <= _p3f[8] && (_p39.tais += +_p3f[8]), 1 <= _p3f[10] && (_p39.houg += +_p3f[10])) : 2 == _p3c && (1 <= _p3f[1] && (_p39.houg += +_p3f[1]), 1 <= _p3f[3] && (_p39.tais += +_p3f[3]), 1 <= _p3f[5] && (_p39.houm += +_p3f[5]), 1 <= _p3f[7] && (_p39.tais += +_p3f[7]), 1 <= _p3f[10] && (_p39.houg += +_p3f[10])), _p39;
    };
},
function(_p3j, _p3k, _p3l) {
    'use strict';
    var _p3m = this && this.__importDefault || function(_p3n) {
        return _p3n && _p3n.__esModule ? _p3n : {
            'default': _p3n
        };
    };
    defineModule(_p3k);
    Object.defineProperty(_p3k, '__esModule', {
        'value': !0
    });
    var _p3o = _p3l(3),
        _p3p = _p3m(_p3l(0));
    _p3k.getSlot455PersonalEffect = function(_p3q) {
        var _p3r = new _p3o.SlotItemEffectModel(),
            _p3s = !1,
            _p3t = new _p3o.SlotItemEffectModel(),
            _p3u = 0,
            _p3v = _p3q.get_slotnums(455);
        if (1 != _p3q.ctype && 5 != _p3q.ctype && 12 != _p3q.ctype || (_p3t.houg += 2, _p3t.tyku += 1, 12 == _p3q.ctype && (_p3t.houg += 1), 666 == _p3q.ship_id ? (_p3t.houg += 1, _p3t.tais += 1) : 959 == _p3q.ship_id && (_p3t.houg += 2, 2 <= _p3v && (_p3r.houg += 2), 3 <= _p3v && (_p3r.houg += 3)), _p3u = 1, _p3s = !0), 'うらなみ' == _p3q.yomi && (_p3t.houg += 1, 647 == _p3q.ship_id && (_p3t.houg += 1, _p3t.raig += 1, _p3t.tais += 1, _p3t.kaih += 1), _p3s = !0), 0 == _p3s) return _p3r;
        if (_p3r.add(_p3t.multiply(_p3v)), 0 == _p3u) return _p3r;
        for (var _p3w, _p3x, _p3y = 0, _p3z = 0, _p40 = 0, _p41 = _p3q.have_slot_ids(); _p40 < _p41.length; _p40++) {
            var _p42 = _p41[_p40],
                _p43 = _p3p.default.model.slot.getMst(_p42),
                _p44 = _p43.equipType;
            12 != _p44 && 13 != _p44 || (5 <= _p43.sakuteki && (_p3y += _p3q.get_slotnums(parseInt(_p42))), 2 <= _p43.taiku && (_p3z += _p3q.get_slotnums(parseInt(_p42))));
        }
        return 1 == _p3u && (1 <= _p3y && (_p3r.houg += 3, _p3r.kaih += 2, _p3r.raig += 1), 1 == (_p3x = _p3q.get_slotnums(13) + _p3q.get_slotnums(125) + (_p3w = _p3q.get_slotnums(285))) ? (_p3r.houg += 1, _p3r.raig += 3) : 2 <= _p3x && (_p3r.houg += 2, _p3r.raig += 5), 1 <= _p3w && (_p3r.raig += 1), 1 <= _p3z && (_p3r.tyku += 4)), _p3r;
    };
},
function(_p45, _p46, _p47) {
    'use strict';
    defineModule(_p46);
    Object.defineProperty(_p46, '__esModule', {
        'value': !0
    });
    var _p48 = _p47(3);
    _p46.getSlot456PersonalEffect = function(_p49) {
        var _p4a = new _p48.SlotItemEffectModel(),
            _p4b = !1,
            _p4c = new _p48.SlotItemEffectModel(),
            _p4d = _p49.getCountryName();
        if ('アメリカ' == _p4d && (_p4c.houg += 3, _p4c.kaih += 4, _p4c.saku += 4, _p4a.houm += 3, _p4b = !0), 'イギリス' != _p4d && 'オーストラリア' != _p4d || (_p4c.houg += 2, _p4c.kaih += 2, _p4c.saku += 2, _p4a.houm += 2, _p4b = !0), 87 != _p49.ctype && 91 != _p49.ctype || (_p4c.houg += 1, _p4a.leng += 1, _p4b = !0), 651 != _p49.ship_id && 656 != _p49.ship_id || (_p4a.houg += 2, _p4a.kaih += 2, _p4a.saku += 3, _p4a.leng += 1, _p4a.houm += 2), 0 == _p4b) return _p4a;
        var _p4e = _p49.get_slotnums(456);
        return _p4a.add(_p4c.multiply(_p4e)), _p4a;
    };
},
function(_p4f, _p4g, _p4h) {
    'use strict';
    defineModule(_p4g);
    Object.defineProperty(_p4g, '__esModule', {
        'value': !0
    });
    var _p4i = _p4h(3);
    _p4g.getSlot457PersonalEffect = function(_p4j) {
        var _p4k = new _p4i.SlotItemEffectModel(),
            _p4l = 0;
        if (109 == _p4j.ctype ? (_p4k.raig += 3, _p4k.kaih += 3, _p4l = 1) : 71 == _p4j.ctype || 103 == _p4j.ctype ? (_p4k.raig += 2, _p4k.kaih += 2, _p4l = 2) : 44 == _p4j.ctype && (_p4k.raig += 1, _p4k.kaih += 4, _p4l = 3), 0 == _p4l) return _p4k;
        var _p4m = _p4j.get_each_level_nums(461),
            _p4n = [];
        return 0 < _p4l && _p4m.forEach(function(_p4o, _p4p) {
            for (var _p4q = 1; _p4q <= _p4j.SLOT_LEVEL_MAX; _p4q++) null == _p4n[_p4q] && (_p4n[_p4q] = 0), _p4q <= _p4p && (_p4n[_p4q] += _p4o);
        }), 1 == _p4l ? (1 <= _p4n[2] && (_p4k.raig += +_p4n[2]), 1 <= _p4n[3] && (_p4k.kaih += +_p4n[3]), 1 <= _p4n[4] && (_p4k.raig += +_p4n[4]), 1 <= _p4n[5] && (_p4k.houm += +_p4n[5]), 1 <= _p4n[6] && (_p4k.raig += +_p4n[6]), 1 <= _p4n[8] && (_p4k.raig += +_p4n[8]), 1 <= _p4n[10] && (_p4k.houm += +_p4n[10])) : 2 == _p4l ? (1 <= _p4n[3] && (_p4k.kaih += +_p4n[3]), 1 <= _p4n[4] && (_p4k.raig += +_p4n[4]), 1 <= _p4n[6] && (_p4k.raig += +_p4n[6]), 1 <= _p4n[8] && (_p4k.raig += +_p4n[8]), 1 <= _p4n[10] && (_p4k.houm += +_p4n[10])) : 3 == _p4l && (1 <= _p4n[4] && (_p4k.raig += +_p4n[4]), 1 <= _p4n[6] && (_p4k.raig += +_p4n[6]), 1 <= _p4n[8] && (_p4k.raig += +_p4n[8]), 1 <= _p4n[10] && (_p4k.houm += +_p4n[10])), _p4k;
    };
},
function(_p4r, _p4s, _p4t) {
    'use strict';
    defineModule(_p4s);
    Object.defineProperty(_p4s, '__esModule', {
        'value': !0
    });
    var _p4u = _p4t(3);
    _p4s.getSlot458PersonalEffect = function(_p4v) {
        var _p4w = new _p4u.SlotItemEffectModel(),
            _p4x = 0,
            _p4y = !1;
        if (13 != _p4v.stype && 14 != _p4v.stype || (_p4y = !0), 109 == _p4v.ctype ? (_p4w.raig += 3, _p4w.kaih += 6, _p4x = 1) : 71 == _p4v.ctype || 103 == _p4v.ctype ? (_p4w.raig += 3, _p4w.kaih += 4, _p4x = 2) : 44 == _p4v.ctype && (_p4w.raig += 3, _p4w.kaih += 3, _p4x = 3), 0 == _p4y && 0 == _p4x) return _p4w;
        var _p4z = [];
        [458, 461].forEach(function(_p50) {
            var _p51 = _p4v.get_each_level_nums(_p50);
            null == _p4z[_p50] && (_p4z[_p50] = []), _p51.forEach(function(_p52, _p53) {
                for (var _p54 = 1; _p54 <= _p4v.SLOT_LEVEL_MAX; _p54++) null == _p4z[_p50][_p54] && (_p4z[_p50][_p54] = 0), _p54 <= _p53 && (_p4z[_p50][_p54] += _p52);
            });
        });
        var _p55 = _p4z[458][2],
            _p56 = _p4z[458][3],
            _p57 = _p4z[458][4],
            _p58 = _p4z[458][5],
            _p59 = _p4z[458][6],
            _p5a = _p4z[458][8],
            _p5b = _p4z[458][10],
            _p5c = _p4z[461][4];
        return 1 <= _p4x && _p4x <= 3 && (1 <= _p57 && (_p4w.houm += +_p57), 1 <= _p59 && (_p4w.kaih += +_p59), 1 <= _p5a && (_p4w.raig += +_p5a)), _p4y && (1 <= _p56 && (_p4w.kaih += +_p56), 1 <= _p58 && (_p4w.raig += +_p58), 1 <= _p5b && (_p4w.houm += +_p5b), 1 <= _p55 && 1 <= _p5c && (_p4w.raig += 7, _p4w.houm += 5)), _p4w;
    };
},
function(_p5d, _p5e, _p5f) {
    'use strict';
    defineModule(_p5e);
    Object.defineProperty(_p5e, '__esModule', {
        'value': !0
    });
    var _p5g = _p5f(3);
    _p5e.getSlot465PersonalEffect = function(_p5h) {
        var _p5i = new _p5g.SlotItemEffectModel(),
            _p5j = !1,
            _p5k = new _p5g.SlotItemEffectModel(),
            _p5l = _p5h.get_slotnums(142),
            _p5m = _p5h.get_slotnums(460),
            _p5n = _p5l + _p5m;
        if (916 == _p5h.ship_id ? (_p5k.houg += 2, _p5k.kaih += 8, _p5k.houm += 2, 1 <= _p5m && (_p5i.kaih += 2, _p5i.houm += 1), _p5j = !0) : 911 != _p5h.ship_id && 546 != _p5h.ship_id || (_p5k.houg += 1, _p5k.kaih += 2, _p5k.houm += 1, 1 <= _p5m && (_p5i.kaih += 1, _p5i.houm += 1), _p5j = !0), 37 == _p5h.ctype && 1 <= _p5n && (_p5i.houg += 2, _p5i.houm += 2), 0 == _p5j) return _p5i;
        var _p5o = _p5h.get_slotnums(465);
        return _p5i.add(_p5k.multiply(_p5o)), _p5i;
    };
},
function(_p5p, _p5q, _p5r) {
    'use strict';
    defineModule(_p5q);
    Object.defineProperty(_p5q, '__esModule', {
        'value': !0
    });
    var _p5s = _p5r(3);
    _p5q.getSlot464PersonalEffect = function(_p5t) {
        var _p5u = new _p5s.SlotItemEffectModel(),
            _p5v = !1,
            _p5w = new _p5s.SlotItemEffectModel(),
            _p5x = _p5t.get_slotnums(142),
            _p5y = _p5t.get_slotnums(460),
            _p5z = _p5x + _p5y;
        if (37 == _p5t.ctype ? (_p5w.tyku += 3, _p5w.kaih += 2, 1 <= _p5z && (_p5u.tyku += 2, _p5u.kaih += 1, _p5u.houm += 1), _p5v = !0) : 6 != _p5t.ctype && 73 != _p5t.ctype && 113 != _p5t.ctype || (_p5w.tyku = _p5w.tyku - 2, _p5w.kaih = _p5w.kaih - 2, _p5v = !0), 916 != _p5t.ship_id && 911 != _p5t.ship_id && 546 != _p5t.ship_id && 593 != _p5t.ship_id && 954 != _p5t.ship_id || (_p5w.tyku += 2, _p5w.kaih += 2, 1 <= _p5y && (_p5u.houg += 2, _p5u.tyku += 2, _p5u.kaih += 2, _p5u.houm += 3), _p5v = !0), 0 == _p5v) return _p5u;
        var _p60 = _p5t.get_slotnums(464);
        return _p5u.add(_p5w.multiply(_p60)), _p5u;
    };
},
function(_p61, _p62, _p63) {
    'use strict';
    defineModule(_p62);
    Object.defineProperty(_p62, '__esModule', {
        'value': !0
    });
    var _p64 = _p63(3);
    _p62.getSlot463PersonalEffect = function(_p65) {
        var _p66 = new _p64.SlotItemEffectModel(),
            _p67 = !1,
            _p68 = new _p64.SlotItemEffectModel(),
            _p69 = _p65.get_slotnums(142),
            _p6a = _p65.get_slotnums(460),
            _p6b = _p69 + _p6a;
        if (37 == _p65.ctype && (_p68.houg += 1, _p68.tyku += 2, _p68.kaih += 1, _p68.houm += 1, 1 <= _p6b && (_p66.tyku += 1, _p66.kaih += 1, _p66.houm += 1), _p67 = !0), 916 != _p65.ship_id && 911 != _p65.ship_id && 546 != _p65.ship_id || (_p68.houg += 1, _p68.kaih += 1, _p68.houm += 2, 1 <= _p6a && (_p66.houg += 1, _p66.kaih += 1, _p66.houm += 2), _p67 = !0), 0 == _p67) return _p66;
        var _p6c = _p65.get_slotnums(463);
        return _p66.add(_p68.multiply(_p6c)), _p66;
    };
},
function(_p6d, _p6e, _p6f) {
    'use strict';
    defineModule(_p6e);
    Object.defineProperty(_p6e, '__esModule', {
        'value': !0
    });
    var _p6g = _p6f(3);
    _p6e.getSlot12PersonalEffect = function(_p6h) {
        var _p6i = new _p6g.SlotItemEffectModel(),
            _p6j = !1,
            _p6k = new _p6g.SlotItemEffectModel(),
            _p6l = _p6h.get_slotnums(142) + _p6h.get_slotnums(460);
        if (37 == _p6h.ctype && (_p6k.houg += 1, _p6k.kaih += 1, _p6k.houm += 1, 1 <= _p6l && (_p6i.kaih += 1, _p6i.houm += 1), _p6j = !0), 0 == _p6j) return _p6i;
        var _p6m = _p6h.get_slotnums(12);
        return _p6i.add(_p6k.multiply(_p6m)), _p6i;
    };
},
function(_p6n, _p6o, _p6p) {
    'use strict';
    defineModule(_p6o);
    Object.defineProperty(_p6o, '__esModule', {
        'value': !0
    });
    var _p6q = _p6p(3);
    _p6o.getSlot234PersonalEffect = function(_p6r) {
        var _p6s = new _p6q.SlotItemEffectModel(),
            _p6t = !1,
            _p6u = new _p6q.SlotItemEffectModel(),
            _p6v = _p6r.get_slotnums(142) + _p6r.get_slotnums(460);
        if (37 == _p6r.ctype && (_p6u.houg += 1, _p6u.tyku += 1, _p6u.kaih += 1, _p6u.houm += 1, 1 <= _p6v && (_p6s.tyku += 1, _p6s.kaih += 1, _p6s.houm += 1), _p6t = !0), 0 == _p6t) return _p6s;
        var _p6w = _p6r.get_slotnums(234);
        return _p6s.add(_p6u.multiply(_p6w)), _p6s;
    };
},
function(_p6x, _p6y, _p6z) {
    'use strict';
    defineModule(_p6y);
    Object.defineProperty(_p6y, '__esModule', {
        'value': !0
    });
    var _p70 = _p6z(3);
    _p6y.getSlot51cmSeriesGunPersonalEffect = function(_p71) {
        var _p72 = new _p70.SlotItemEffectModel(),
            _p73 = !1,
            _p74 = new _p70.SlotItemEffectModel(),
            _p75 = _p71.get_slotnums(142),
            _p76 = _p71.get_slotnums(460),
            _p77 = _p75 + _p76;
        if (916 != _p71.ship_id && 911 != _p71.ship_id && 546 != _p71.ship_id || (_p74.houg += 1, _p74.houm += 1, 1 <= _p76 && (_p72.kaih += 1, _p72.houm += 1), _p73 = !0), 37 == _p71.ctype && 1 <= _p77 && (_p72.houg += 1, _p72.houm += 2), 0 == _p73) return _p72;
        var _p78 = _p71.get_slotnums(128) + _p71.get_slotnums(281);
        return _p72.add(_p74.multiply(_p78)), _p72;
    };
},
function(_p79, _p7a, _p7b) {
    'use strict';
    defineModule(_p7a);
    Object.defineProperty(_p7a, '__esModule', {
        'value': !0
    });
    var _p7c = _p7b(3);
    _p7a.getSlot466PersonalEffect = function(_p7d) {
        var _p7e = new _p7c.SlotItemEffectModel(),
            _p7f = !1,
            _p7g = new _p7c.SlotItemEffectModel();
        if (277 == _p7d.ship_id || 278 == _p7d.ship_id || 156 == _p7d.ship_id || 288 == _p7d.ship_id || 112 == _p7d.ship_id || 280 == _p7d.ship_id || 279 == _p7d.ship_id ? (_p7g.houg += 1, _p7g.houm += 1, _p7f = !0) : 461 == _p7d.ship_id || 462 == _p7d.ship_id || 466 == _p7d.ship_id || 467 == _p7d.ship_id ? (_p7g.houg += 2, _p7g.kaih += 2, _p7g.houm += 1, _p7f = !0) : 594 != _p7d.ship_id && 698 != _p7d.ship_id && 646 != _p7d.ship_id && 599 != _p7d.ship_id && 610 != _p7d.ship_id && 196 != _p7d.ship_id && 197 != _p7d.ship_id || (_p7g.houg += 1, _p7g.kaih += 1, _p7g.houm += 2, _p7f = !0), 0 == _p7f) return _p7e;
        var _p7h = _p7d.get_slotnums(466);
        return _p7e.add(_p7g.multiply(_p7h)), _p7e;
    };
},
function(_p7i, _p7j, _p7k) {
    'use strict';
    defineModule(_p7j);
    Object.defineProperty(_p7j, '__esModule', {
        'value': !0
    });
    var _p7l = _p7k(3);
    _p7j.getSlot467PersonalEffect = function(_p7m) {
        var _p7n = new _p7l.SlotItemEffectModel(),
            _p7o = !1,
            _p7p = new _p7l.SlotItemEffectModel();
        if ('アメリカ' == _p7m.getCountryName()) {
            for (var _p7q = _p7m.getUSSWaterRaderDict(), _p7r = _p7m.getUSSAirRaderDict(), _p7s = 0, _p7t = 0, _p7u = 0, _p7v = _p7m.have_slot_ids(); _p7u < _p7v.length; _p7u++) {
                var _p7w = _p7v[_p7u];
                _p7q[parseInt(_p7w)] && (_p7s += _p7m.get_slotnums(parseInt(_p7w))), _p7r[parseInt(_p7w)] && (_p7t += _p7m.get_slotnums(parseInt(_p7w)));
            }
            _p7p.houg += 1, _p7p.tyku += 1, _p7p.kaih += 2, 1 <= _p7s && (_p7n.houg += 1, _p7n.tyku += 1, _p7n.kaih += 1, _p7n.houm += 2), 1 <= _p7t && (_p7n.tyku += 2, _p7n.kaih += 2), 65 != _p7m.ctype && 93 != _p7m.ctype && 102 != _p7m.ctype && 107 != _p7m.ctype && 125 != _p7m.ctype || (_p7p.tyku += 2, _p7p.kaih += 1), _p7o = !0;
        }
        if (0 == _p7o) return _p7n;
        var _p7x = _p7m.get_slotnums(467);
        return _p7n.add(_p7p.multiply(_p7x)), _p7n;
    };
},
function(_p7y, _p7z, _p80) {
    'use strict';
    defineModule(_p7z);
    Object.defineProperty(_p7z, '__esModule', {
        'value': !0
    });
    var _p81 = _p80(3);
    _p7z.getSlot247PersonalEffect = function(_p82) {
        var _p83 = new _p81.SlotItemEffectModel(),
            _p84 = !1,
            _p85 = new _p81.SlotItemEffectModel(),
            _p86 = 0;
        if ('フランス' == _p82.getCountryName() && (_p85.houg += 2, _p85.houm += 2, _p84 = !0, _p86 = 1), 0 == _p84) return _p83;
        var _p87 = _p82.get_slotnums(247);
        if (_p83.add(_p85.multiply(_p87)), 0 == _p86) return _p83;
        var _p88 = _p82.get_each_level_nums(247),
            _p89 = 0,
            _p8a = 0;
        0 < _p86 && _p88.forEach(function(_p8b, _p8c) {
            4 <= _p8c && (_p89 += _p8b), 8 <= _p8c && (_p8a += _p8b);
        });
        var _p8d = _p88[10];
        return 1 == _p86 && (1 <= _p89 && (_p83.houg += +_p89, _p83.houm += +_p89), 1 <= _p8a && (_p83.kaih += +_p8a, _p83.houg += +_p8a, _p83.houm += +_p8a), 1 <= _p8d && (_p83.kaih += +_p8d, _p83.houm += +_p8d)), _p83;
    };
},
function(_p8e, _p8f, _p8g) {
    'use strict';
    defineModule(_p8f);
    Object.defineProperty(_p8f, '__esModule', {
        'value': !0
    });
    var _p8h = _p8g(3);
    _p8f.getSlot38cmFourBarrelGunPersonalEffect = function(_p8i) {
        var _p8j = new _p8h.SlotItemEffectModel(),
            _p8k = _p8i.get_slotnums(245),
            _p8l = _p8i.get_slotnums(246),
            _p8m = _p8i.get_slotnums(468),
            _p8n = _p8k + _p8l + _p8m,
            _p8o = 0,
            _p8p = 0,
            _p8q = new Array();
        if (79 != _p8i.ctype) return _p8j;
        _p8j.houg += 2 * _p8n, _p8j.houm += +_p8n, 1 <= _p8m && (_p8j.houg += +_p8m, _p8p = 1, _p8q.push(468)), _p8o = 1;
        var _p8r = _p8i.get_slotnums(247);
        if (1 == _p8o && 1 <= _p8r && (_p8j.kaih += 2 * _p8r, _p8j.houg += 2 * _p8r, _p8j.houm += 2 * _p8r), 0 == _p8p) return _p8j;
        for (var _p8s, _p8t, _p8u, _p8v = {}, _p8w = {}, _p8x = {}, _p8y = 0, _p8z = _p8q; _p8y < _p8z.length; _p8y++) {
            var _p90 = _p8z[_p8y];
            _p8w[_p90] = 0, _p8x[_p90] = 0;
            for (var _p91 = _p8v[_p90] = 0, _p92 = _p8i.have_slots_dict[_p90]; _p91 < _p92.length; _p91++) {
                var _p93 = _p92[_p91].level;
                4 <= _p93 && _p8w[_p90]++, 8 <= _p93 && _p8x[_p90]++, 10 <= _p93 && _p8v[_p90]++;
            }
        }
        return 1 == _p8p && 0 < _p8m && (_p8s = _p8w[468], _p8t = _p8x[468], _p8u = _p8v[468], 1 <= _p8s && (_p8j.houg += +_p8s, _p8j.houm += +_p8s), 1 <= _p8t && (_p8j.houg += +_p8t, _p8j.houm += +_p8t), 1 <= _p8u && (_p8j.houm += +_p8u)), _p8j;
    };
},
function(_p94, _p95, _p96) {
    'use strict';
    var _p97 = this && this.__importDefault || function(_p98) {
        return _p98 && _p98.__esModule ? _p98 : {
            'default': _p98
        };
    };
    defineModule(_p95);
    Object.defineProperty(_p95, '__esModule', {
        'value': !0
    });
    var _p99 = _p96(3),
        _p9a = _p97(_p96(0));
    _p95.getSlot470PersonalEffect = function(_p9b) {
        var _p9c = new _p99.SlotItemEffectModel(),
            _p9d = !1,
            _p9e = new _p99.SlotItemEffectModel(),
            _p9f = 0,
            _p9g = 0;
        23 == _p9b.ctype || 18 == _p9b.ctype ? (_p9e.houg += 1, _p9d = !0, _p9f = 1) : 30 == _p9b.ctype && (_p9e.houg += 2, _p9d = !0, _p9f = 2), 'しぐれ' != _p9b.yomi && 'ゆきかぜ' != _p9b.yomi && 'いそかぜ' != _p9b.yomi || (_p9e.kaih += 2, _p9d = !0), 961 == _p9b.ship_id && (_p9e.houg += 3, _p9e.houm += 3, _p9e.kaih += 2, _p9d = !0);
        var _p9h = _p9b.get_slotnums(470);
        566 != _p9b.ship_id && 567 != _p9b.ship_id && 568 != _p9b.ship_id && 656 != _p9b.ship_id && 670 != _p9b.ship_id && 915 != _p9b.ship_id && 651 != _p9b.ship_id && 145 != _p9b.ship_id && 961 != _p9b.ship_id && 951 != _p9b.ship_id || (_p9c.houg += 1, _p9c.houm += 2, 2 <= _p9h && (_p9c.houg += 2), _p9g = 1), _p9d && _p9c.add(_p9e.multiply(_p9h));
        var _p9i = 0;
        if (0 < _p9f)
            for (var _p9j = 0, _p9k = _p9b.have_slot_ids(); _p9j < _p9k.length; _p9j++) {
                var _p9l = _p9k[_p9j],
                    _p9m = _p9a.default.model.slot.getMst(_p9l),
                    _p9n = _p9m.equipType;
                12 != _p9n && 13 != _p9n || (5 <= _p9m.sakuteki && (_p9i += _p9b.get_slotnums(parseInt(_p9l))), 2 <= _p9m.taiku && _p9b.get_slotnums(parseInt(_p9l)));
            }
        if (1 == _p9f ? 1 <= _p9i && (_p9c.houg += 1, _p9c.kaih += 1, _p9c.raig += 3, _p9c.houm += 1) : 2 == _p9f && 1 <= _p9i && (_p9c.houg += 2, _p9c.kaih += 1, _p9c.raig += 3, _p9c.houm += 3), 0 == _p9g) return _p9c;
        var _p9o, _p9p = _p9b.get_each_level_nums(470),
            _p9q = 0,
            _p9r = 0;
        return 0 < _p9g && _p9p.forEach(function(_p9s, _p9t) {
            5 <= _p9t && (_p9q += _p9s), 8 <= _p9t && (_p9r += _p9s);
        }), 1 == _p9g && (1 <= _p9q && (_p9c.houm += +_p9q), 1 <= _p9r && (_p9c.houg += +_p9r), 1 <= (_p9o = _p9p[10]) && (_p9c.houm += +_p9o)), _p9c;
    };
},
function(_p9u, _p9v, _p9w) {
    'use strict';
    defineModule(_p9v);
    Object.defineProperty(_p9v, '__esModule', {
        'value': !0
    });
    var _p9x = _p9w(3);
    _p9v.getSlot471PersonalEffect = function(_p9y) {
        var _p9z = new _p9x.SlotItemEffectModel(),
            _pa0 = !1,
            _pa1 = new _p9x.SlotItemEffectModel(),
            _pa2 = 0;
        if ('フランス' == _p9y.getCountryName() && (_pa1.houg += 2, _pa1.kaih += 2, _pa1.houm += 2, _pa0 = !0, _pa2 = 1), 79 == _p9y.ctype && (_pa1.houg += 2, _pa1.houm += 1, _pa0 = !0), 0 == _pa0) return _p9z;
        var _pa3 = _p9y.get_slotnums(471);
        if (_p9z.add(_pa1.multiply(_pa3)), 0 == _pa2) return _p9z;
        var _pa4, _pa5 = _p9y.get_each_level_nums(471),
            _pa6 = 0,
            _pa7 = 0;
        return 0 < _pa2 && _pa5.forEach(function(_pa8, _pa9) {
            6 <= _pa9 && (_pa6 += _pa8), 8 <= _pa9 && (_pa7 += _pa8);
        }), 1 == _pa2 && (1 <= _pa6 && (_p9z.kaih += +_pa6, _p9z.houm += +_pa6), 1 <= _pa7 && (_p9z.houg += +_pa7, _p9z.kaih += +_pa7, _p9z.houm += +_pa7), 1 <= (_pa4 = _pa5[10]) && (_p9z.houg += +_pa4, _p9z.houm += +_pa4)), _p9z;
    };
},
function(_paa, _pab, _pac) {
    'use strict';
    defineModule(_pab);
    Object.defineProperty(_pab, '__esModule', {
        'value': !0
    });
    var _pad = _pac(3);
    _pab.getSlot472PersonalEffect = function(_pae) {
        var _paf, _pag = new _pad.SlotItemEffectModel(),
            _pah = !1,
            _pai = new _pad.SlotItemEffectModel(),
            _paj = _pae.getCountryName();
        return 'アメリカ' == _paj && (_pai.tais += 2, _pah = !0), 'イギリス' == _paj && (_pai.tais += 1, _pah = !0), 1 == _pae.stype && (_pai.kaih += 1, _pah = !0), _pah && (_paf = _pae.get_slotnums(472), _pag.add(_pai.multiply(_paf))), 920 == _pae.ship_id && (_pag.tais += 1, _pag.kaih += 1, _pag.houm += 1), _pag;
    };
},
function(_pak, _pal, _pam) {
    'use strict';
    defineModule(_pal);
    Object.defineProperty(_pal, '__esModule', {
        'value': !0
    });
    var _pan = _pam(3);
    _pal.getSlot227PersonalEffect = function(_pao) {
        var _pap = new _pan.SlotItemEffectModel(),
            _paq = _pao.get_each_level_nums(227),
            _par = 0;
        _paq.forEach(function(_pas, _pat) {
            8 <= _pat && (_par += _pas);
        }), 1 <= _par && (_pap.tais += +_par);
        var _pau = _paq[10];
        return 1 <= _pau && (_pap.tais += +_pau), _pap;
    };
},
function(_pav, _paw, _pax) {
    'use strict';
    defineModule(_paw);
    Object.defineProperty(_paw, '__esModule', {
        'value': !0
    });
    var _pay = _pax(3);
    _paw.getSlot132PersonalEffect = function(_paz) {
        var _pb0 = new _pay.SlotItemEffectModel(),
            _pb1 = _paz.get_each_level_nums(132),
            _pb2 = 0,
            _pb3 = 0,
            _pb4 = 0,
            _pb5 = 0,
            _pb6 = 0;
        return _pb1.forEach(function(_pb7, _pb8) {
            3 <= _pb8 && (_pb2 += _pb7), 5 <= _pb8 && (_pb3 += _pb7), 7 <= _pb8 && (_pb4 += _pb7), 8 <= _pb8 && (_pb5 += _pb7), 9 <= _pb8 && (_pb6 += _pb7);
        }), 1 <= _pb2 && (_pb0.kaih += 1), 1 <= _pb3 && (_pb0.tais += 1), 1 <= _pb4 && (_pb0.kaih += 1), 1 <= _pb5 && (_pb0.tais += 1), 1 <= _pb6 && (_pb0.houm += 1), 1 <= _pb1[10] && (_pb0.tais += 1), 911 != _paz.ship_id && 916 != _paz.ship_id && 546 != _paz.ship_id || (_pb0.kaih += 1), 461 != _paz.ship_id && 466 != _paz.ship_id && 462 != _paz.ship_id && 467 != _paz.ship_id && 156 != _paz.ship_id || (_pb0.kaih += 2), _pb0;
    };
},
function(_pb9, _pba, _pbb) {
    'use strict';
    defineModule(_pba);
    Object.defineProperty(_pba, '__esModule', {
        'value': !0
    });
    var _pbc = _pbb(3);
    _pba.getSlot473PersonalEffect = function(_pbd) {
        var _pbe = new _pbc.SlotItemEffectModel(),
            _pbf = !1,
            _pbg = new _pbc.SlotItemEffectModel(),
            _pbh = _pbd.getCountryName();
        if ('アメリカ' == _pbh && (_pbg.houg += 1, _pbg.kaih += 1, _pbg.tyku += 1, _pbf = !0), 'イギリス' == _pbh && (_pbg.houg += 1, _pbg.kaih += 1, _pbf = !0), 0 == _pbf) return _pbe;
        var _pbi = _pbd.get_slotnums(473);
        return _pbe.add(_pbg.multiply(_pbi)), _pbe;
    };
},
function(_pbj, _pbk, _pbl) {
    'use strict';
    defineModule(_pbk);
    Object.defineProperty(_pbk, '__esModule', {
        'value': !0
    });
    var _pbm = _pbl(3);
    _pbk.getSlot474PersonalEffect = function(_pbn) {
        var _pbo = new _pbm.SlotItemEffectModel(),
            _pbp = !1,
            _pbq = new _pbm.SlotItemEffectModel(),
            _pbr = _pbn.getCountryName();
        if ('アメリカ' == _pbr && (_pbq.houg += 2, _pbq.kaih += 1, _pbq.tyku += 1, _pbp = !0), 'イギリス' == _pbr && (_pbq.houg += 1, _pbq.kaih += 1, _pbq.tyku += 1, _pbp = !0), 'フランス' == _pbr && (_pbq.houg += 1, _pbq.tyku += 1, _pbp = !0), 707 != _pbn.ship_id && 930 != _pbn.ship_id || (_pbq.houg += 1, _pbq.kaih += 1, _pbp = !0), 0 == _pbp) return _pbo;
        var _pbs = _pbn.get_slotnums(474);
        return _pbo.add(_pbq.multiply(_pbs)), _pbo;
    };
},
function(_pbt, _pbu, _pbv) {
    'use strict';
    defineModule(_pbu);
    Object.defineProperty(_pbu, '__esModule', {
        'value': !0
    });
    var _pbw = _pbv(3);
    _pbu.getSlot478PersonalEffect = function(_pbx) {
        var _pby = new _pbw.SlotItemEffectModel(),
            _pbz = _pbx.get_each_level_nums(478),
            _pc0 = [];
        return _pbz.forEach(function(_pc1, _pc2) {
            for (var _pc3 = 1; _pc3 <= _pbx.SLOT_LEVEL_MAX; _pc3++) _pc3 <= _pc2 && (null == _pc0[_pc3] && (_pc0[_pc3] = 0), _pc0[_pc3] += _pc1);
        }), _pc0.every(function(_pc4) {
            return 0 == _pc4;
        }) || (1 <= _pc0[1] && (_pby.houg += 1), 1 <= _pc0[2] && (_pby.houm += 1), 1 <= _pc0[3] && (_pby.kaih += 1), 1 <= _pc0[4] && (_pby.baku += 1), 1 <= _pc0[5] && (_pby.raig += 1), 1 <= _pc0[6] && (_pby.tyku += 1), 1 <= _pc0[7] && (_pby.houg += 1), 1 <= _pc0[8] && (_pby.houm += 1), 1 <= _pc0[9] && (_pby.kaih += 1), 1 <= _pc0[10] && (_pby.houg += 1)), _pby;
    };
},
function(_pc5, _pc6, _pc7) {
    'use strict';
    defineModule(_pc6);
    Object.defineProperty(_pc6, '__esModule', {
        'value': !0
    });
    var _pc8 = _pc7(3);
    _pc6.getSlot483PersonalEffect = function(_pc9) {
        var _pca = new _pc8.SlotItemEffectModel(),
            _pcb = 0,
            _pcc = 0,
            _pcd = 0,
            _pce = 0,
            _pcf = 0,
            _pcg = 0,
            _pch = 0;
        if (6 == _pc9.ctype ? (_pca.houg += 2, _pca.tyku += 3, _pca.houm += 1, _pcb = 1) : 2 == _pc9.ctype ? (_pca.houg += 1, _pca.tyku += 2, _pca.kaih += 2, _pca.houm += 1, _pcc = 1) : 37 == _pc9.ctype && (_pcd = 1), 8 == _pc9.stype || 9 == _pc9.stype || 10 == _pc9.stype ? _pce = 1 : 5 != _pc9.stype && 6 != _pc9.stype || (_pcf = 1), 149 == _pc9.ship_id ? (_pca.houg += 2, _pca.tyku += 2) : 591 == _pc9.ship_id ? (_pca.houg += 3, _pca.tyku += 3, _pca.kaih += 1) : 150 == _pc9.ship_id ? (_pca.houg += 1, _pca.tyku += 1) : 592 == _pc9.ship_id ? (_pca.houg += 2, _pca.tyku += 2, _pca.kaih += 2) : 151 == _pc9.ship_id ? (_pca.houg += 1, _pca.tyku += 2, _pca.kaih += 2) : 593 == _pc9.ship_id ? (_pca.houg += 2, _pca.tyku += 5, _pca.kaih += 3) : 954 == _pc9.ship_id ? (_pca.houg += 2, _pca.tyku += 4, _pca.kaih += 2) : 152 == _pc9.ship_id ? (_pca.houg += 2, _pca.tyku += 2) : 911 == _pc9.ship_id || 916 == _pc9.ship_id || 546 == _pc9.ship_id ? (_pca.houg += 2, _pca.tyku += 2, _pca.kaih += 2, _pcg = 1) : 553 == _pc9.ship_id || 554 == _pc9.ship_id ? (_pca.houg += 1, _pca.tyku += 2, _pca.kaih += 1, _pch = 1) : 541 == _pc9.ship_id || 411 == _pc9.ship_id || 412 == _pc9.ship_id ? (_pca.houg += 1, _pca.tyku += 2) : 573 == _pc9.ship_id && (_pca.houg += 2, _pca.tyku += 2, _pca.kaih += 1), 0 == [_pcb, _pcc, _pcd, _pce, _pcf, _pcg, _pch].reduce(function(_pci, _pcj) {
                return _pci + _pcj;
            }, 0)) return _pca;
        var _pck = _pc9.get_each_level_nums(483),
            _pcl = 0,
            _pcm = [];
        return _pck.forEach(function(_pcn, _pco) {
            6 <= _pco && (_pcl += _pcn);
            for (var _pcp = 1; _pcp <= _pc9.SLOT_LEVEL_MAX; _pcp++) null == _pcm[_pcp] && (_pcm[_pcp] = 0), _pcp <= _pco && (_pcm[_pcp] += _pcn);
        }), 1 == _pcb ? (1 <= _pcl && (_pca.houm += 1), 1 <= _pck[10] && (_pca.houm += 1)) : 1 == _pcc ? (1 <= _pcm[5] && (_pca.kaih += 1), 1 <= _pcm[6] && (_pca.houm += 1), 1 <= _pcm[10] && (_pca.kaih += 1)) : 1 == _pcd && (1 <= _pcm[6] && (_pca.houm += 1), 1 <= _pcm[10] && (_pca.kaih += 1)), 1 == _pce ? (1 <= _pcm[2] && (_pca.tyku += 1), 1 <= _pcm[4] && (_pca.houg += 1), 1 <= _pcm[7] && (_pca.kaih += 1), 1 <= _pcm[8] && (_pca.tyku += 1), 1 <= _pcm[9] && (_pca.houg += 1)) : 1 == _pcf && (1 <= _pcm[2] && (_pca.tyku += 1), 1 <= _pcm[4] && (_pca.houg += 1), 1 <= _pcm[6] && (_pca.kaih += 1), 1 <= _pcm[8] && (_pca.houm += 1), 1 <= _pcm[10] && (_pca.houg += 1)), 1 == _pcg ? 1 <= _pcm[5] && (_pca.houm += 1) : 1 == _pch && (1 <= _pcm[1] && (_pca.houm += 1), 1 <= _pcm[3] && (_pca.houm += 1)), _pca;
    };
},
function(_pcq, _pcr, _pcs) {
    'use strict';
    defineModule(_pcr);
    Object.defineProperty(_pcr, '__esModule', {
        'value': !0
    });
    var _pct = _pcs(3);
    _pcr.getSlot485PersonalEffect = function(_pcu) {
        var _pcv, _pcw = new _pct.SlotItemEffectModel(),
            _pcx = !1,
            _pcy = new _pct.SlotItemEffectModel();
        9 == _pcu.ctype && (_pcy.houg += 1, _pcy.kaih += 2, _pcy.tyku += 3, _pcx = !0), 501 != _pcu.ship_id && 506 != _pcu.ship_id || (_pcy.kaih += 1, _pcy.tyku += 2, _pcy.houm += 1, _pcx = !0), _pcx && (_pcv = _pcu.get_slotnums(485), _pcw.add(_pcy.multiply(_pcv)));
        var _pcz = _pcu.get_each_level_nums(485),
            _pd0 = 0,
            _pd1 = 0,
            _pd2 = 0,
            _pd3 = _pcz[10];
        return _pcz.forEach(function(_pd4, _pd5) {
            3 <= _pd5 && (_pd0 += _pd4), 5 <= _pd5 && (_pd1 += _pd4), 7 <= _pd5 && (_pd2 += _pd4);
        }), 0 < _pd0 && (_pcw.houg += +_pd0), 0 < _pd1 && (_pcw.tyku += +_pd1), 0 < _pd2 && (_pcw.kaih += +_pd2), 0 < _pd3 && (_pcw.houm += +_pd3), _pcw;
    };
},
function(_pd6, _pd7, _pd8) {
    'use strict';
    var _pd9 = this && this.__importDefault || function(_pda) {
        return _pda && _pda.__esModule ? _pda : {
            'default': _pda
        };
    };
    defineModule(_pd7);
    Object.defineProperty(_pd7, '__esModule', {
        'value': !0
    });
    var _pdb = _pd8(3),
        _pdc = _pd9(_pd8(0));
    _pd7.getSlot275PersonalEffect = function(_pdd) {
        var _pde = new _pdb.SlotItemEffectModel(),
            _pdf = !1,
            _pdg = new _pdb.SlotItemEffectModel(),
            _pdh = 0,
            _pdi = 0;
        if (894 != _pdd.ship_id && 899 != _pdd.ship_id || (_pdg.houg += 1, _pdg.tyku += 3, _pdg.kaih += 2, _pdf = !0, _pdh = _pdi = 1), 0 == _pdf) return _pde;
        var _pdj = _pdd.get_slotnums(275);
        _pde.add(_pdg.multiply(_pdj));
        var _pdk = 0;
        if (0 < _pdh)
            for (var _pdl = 0, _pdm = _pdd.have_slot_ids(); _pdl < _pdm.length; _pdl++) {
                var _pdn = _pdm[_pdl],
                    _pdo = _pdc.default.model.slot.getMst(_pdn),
                    _pdp = _pdo.equipType;
                12 != _pdp && 13 != _pdp || (5 <= _pdo.sakuteki && _pdd.get_slotnums(parseInt(_pdn)), 2 <= _pdo.taiku && (_pdk += _pdd.get_slotnums(parseInt(_pdn))));
            }
        if (1 == _pdh && 0 < _pdk && (_pde.tyku += 3, _pde.kaih += 3), 0 == _pdi) return _pde;
        var _pdq = _pdd.get_each_level_nums(275),
            _pdr = 0,
            _pds = _pdq[10];
        return 0 < _pdi && _pdq.forEach(function(_pdt, _pdu) {
            7 <= _pdu && (_pdr += _pdt);
        }), 1 == _pdi && (0 < _pdr && (_pde.tyku += +_pdr, _pde.kaih += +_pdr), 0 < _pds && (_pde.houg += +_pds, _pde.tyku += +_pds, _pde.houm += +_pds)), _pde;
    };
},
function(_pdv, _pdw, _pdx) {
    'use strict';
    defineModule(_pdw);
    Object.defineProperty(_pdw, '__esModule', {
        'value': !0
    });
    var _pdy = _pdx(3);
    _pdw.getSlot486PersonalEffect = function(_pdz) {
        var _pe0, _pe1 = new _pdy.SlotItemEffectModel(),
            _pe2 = !1,
            _pe3 = new _pdy.SlotItemEffectModel();
        894 == _pdz.ship_id || 899 == _pdz.ship_id ? (_pe3.houg += 4, _pe3.tyku += 4, _pe3.kaih += 3, _pe3.houm += 2, _pe2 = !0) : 888 != _pdz.ship_id && 883 != _pdz.ship_id || (_pe3.houg += 2, _pe3.tyku += 2, _pe3.kaih += 2, _pe3.houm += 1, _pe2 = !0), _pe2 && (_pe0 = _pdz.get_slotnums(486), _pe1.add(_pe3.multiply(_pe0)));
        var _pe4 = _pdz.get_each_level_nums(486),
            _pe5 = 0,
            _pe6 = 0,
            _pe7 = _pe4[10];
        return _pe4.forEach(function(_pe8, _pe9) {
            6 <= _pe9 && (_pe5 += _pe8), 8 <= _pe9 && (_pe6 += _pe8);
        }), 0 < _pe5 && (_pe1.kaih += +_pe5, _pe1.houm += +_pe5), 0 < _pe6 && (_pe1.tyku += +_pe6, _pe1.kaih += +_pe6), 0 < _pe7 && (_pe1.houg += +_pe7, _pe1.houm += +_pe7), _pe1;
    };
},
function(_pea, _peb, _pec) {
    'use strict';
    defineModule(_peb);
    Object.defineProperty(_peb, '__esModule', {
        'value': !0
    });
    var _ped = _pec(3);
    _peb.getSlot487PersonalEffect = function(_pee) {
        var _pef, _peg = new _ped.SlotItemEffectModel(),
            _peh = !1,
            _pei = new _ped.SlotItemEffectModel();
        894 == _pee.ship_id || 899 == _pee.ship_id ? (_pei.houg += 5, _pei.tyku += 3, _pei.kaih += 2, _pei.houm += 4, _peh = !0) : 888 != _pee.ship_id && 883 != _pee.ship_id || (_pei.houg += 3, _pei.tyku += 1, _pei.kaih += 1, _pei.houm += 2, _peh = !0), _peh && (_pef = _pee.get_slotnums(487), _peg.add(_pei.multiply(_pef)));
        var _pej = _pee.get_each_level_nums(487),
            _pek = 0,
            _pel = 0,
            _pem = _pej[10];
        return _pej.forEach(function(_pen, _peo) {
            6 <= _peo && (_pek += _pen), 8 <= _peo && (_pel += _pen);
        }), 0 < _pek && (_peg.houg += +_pek, _peg.kaih += +_pek), 0 < _pel && (_peg.tyku += +_pel, _peg.houm += +_pel), 0 < _pem && (_peg.houg += +_pem, _peg.houm += +_pem), _peg;
    };
},
function(_pep, _peq, _per) {
    'use strict';
    defineModule(_peq);
    Object.defineProperty(_peq, '__esModule', {
        'value': !0
    });
    var _pes = _per(3);
    _peq.getSlot488PersonalEffect = function(_pet) {
        var _peu = new _pes.SlotItemEffectModel(),
            _pev = !1,
            _pew = new _pes.SlotItemEffectModel(),
            _pex = 0,
            _pey = _pet.getCountryName(),
            _pez = {
                145: 1,
                961: 1,
                557: 2,
                558: 2,
                228: 2,
                656: 2,
                651: 2,
                243: 2,
                412: 3,
                411: 3,
                419: 3,
                235: 3,
                407: 3,
                538: 3,
                537: 3,
                663: 3,
                668: 3,
                43: 3
            }[_pet.ship_id];
        if (('日本' == _pey && 2 == _pet.stype || {
                74: 1,
                77: 1,
                85: 1,
                117: 1,
                104: 1
            }[_pet.ctype] && 1 == _pet.stype) && (_pew.tais += 1, _pew.kaih += 1, _pev = !0), 1 == _pez ? (_pew.tais += 5, _pew.kaih += 4, _pew.houm += 2, _pev = !0, _pex = 1) : 2 == _pez ? (_pew.tais += 2, _pew.kaih += 1, _pew.houm += 1, _pev = !0, _pex = 2) : 3 == _pez && (_pew.tais += 1, _pev = !0, _pex = 2), 0 == _pev) return _peu;
        var _pf0 = _pet.get_slotnums(488);
        if (_peu.add(_pew.multiply(_pf0)), 0 == _pex) return _peu;
        var _pf1 = _pet.get_each_level_nums(488),
            _pf2 = [];
        return _pf1.forEach(function(_pf3, _pf4) {
            for (var _pf5 = 1; _pf5 <= _pet.SLOT_LEVEL_MAX; _pf5++) _pf5 <= _pf4 && (null == _pf2[_pf5] && (_pf2[_pf5] = 0), _pf2[_pf5] += _pf3);
        }), 1 == _pex ? (1 <= _pf2[3] && (_peu.kaih += +_pf2[3]), 1 <= _pf2[5] && (_peu.tais += +_pf2[5]), 1 <= _pf2[7] && (_peu.houm += +_pf2[7]), 1 <= _pf2[8] && (_peu.kaih += +_pf2[8]), 1 <= _pf2[9] && (_peu.tais += +_pf2[9]), 1 <= _pf2[10] && (_peu.tais += +_pf2[10])) : 2 == _pex && (1 <= _pf2[5] && (_peu.tais += +_pf2[5]), 1 <= _pf2[7] && (_peu.kaih += +_pf2[7]), 1 <= _pf2[9] && (_peu.houm += +_pf2[9]), 1 <= _pf2[10] && (_peu.tais += +_pf2[10])), _peu;
    };
},
function(_pf6, _pf7, _pf8) {
    'use strict';
    defineModule(_pf7);
    Object.defineProperty(_pf7, '__esModule', {
        'value': !0
    });
    var _pf9 = _pf8(3);
    _pf7.getSlot489PersonalEffect = function(_pfa) {
        var _pfb, _pfc = new _pf9.SlotItemEffectModel(),
            _pfd = !1,
            _pfe = new _pf9.SlotItemEffectModel();
        'あきつまる' != _pfa.yomi && 'やましおまる' != _pfa.yomi && 'くまのまる' != _pfa.yomi || (_pfe.tyku = _pfe.tyku + 2, _pfe.kaih = _pfe.kaih + 1, _pfe.houg = _pfe.houg + 1, _pfe.tais = _pfe.tais + 1, _pfe.houm = _pfe.houm + 1, _pfd = !0), 717 != _pfa.ship_id && 948 != _pfa.ship_id || (_pfe.tyku = _pfe.tyku + 2, _pfe.kaih = _pfe.kaih + 2, _pfe.houg = _pfe.houg + 2, _pfe.tais = _pfe.tais + 1, _pfe.houm = _pfe.houm + 1, _pfd = !0), _pfd && (_pfb = _pfa.get_slotnums(489) + _pfa.get_slotnums(491), _pfc.add(_pfe.multiply(_pfb)));
        var _pff = _pfa.get_each_level_nums(489),
            _pfg = _pfa.get_each_level_nums(491),
            _pfh = 0,
            _pfi = 0,
            _pfj = 0;
        _pff.forEach(function(_pfk, _pfl) {
            3 <= _pfl && (_pfh += _pfk), 6 <= _pfl && (_pfi += _pfk), 8 <= _pfl && (_pfj += _pfk);
        }), _pfg.forEach(function(_pfm, _pfn) {
            3 <= _pfn && (_pfh += _pfm), 6 <= _pfn && (_pfi += _pfm), 8 <= _pfn && (_pfj += _pfm);
        });
        var _pfo = _pff[10] + _pfg[10];
        return 1 <= _pfh && (_pfc.kaih = _pfc.kaih + +_pfh), 1 <= _pfi && (_pfc.tais = _pfc.tais + +_pfi), 1 <= _pfj && (_pfc.houm = _pfc.houm + +_pfj), 1 <= _pfo && (_pfc.houg = _pfc.houg + +_pfo), _pfc;
    };
},
function(_pfp, _pfq, _pfr) {
    'use strict';
    defineModule(_pfq);
    Object.defineProperty(_pfq, '__esModule', {
        'value': !0
    });
    var _pfs = _pfr(3);
    _pfq.getSlotSmokePersonalEffect = function(_pft) {
        var _pfu = new _pfs.SlotItemEffectModel(),
            _pfv = !1,
            _pfw = new _pfs.SlotItemEffectModel();
        if (959 == _pft.ship_id && (_pfw.kaih += 4, _pfv = !0), 'ジョンストン' == _pft.yomi || 'サミュエル・B・ロバーツ' == _pft.yomi || 'せんだい' == _pft.yomi || 'はるかぜ' == _pft.yomi || 'かみかぜ' == _pft.yomi || 'しきなみ' == _pft.yomi || 'うらなみ' == _pft.yomi || 'あおば' == _pft.yomi ? (_pfw.kaih += 3, _pfv = !0) : 'いなづま' != _pft.yomi && 'はぐろ' != _pft.yomi && 'はつしも' != _pft.yomi && 'かすみ' != _pft.yomi && 'ふぶき' != _pft.yomi && 'あたご' != _pft.yomi && 'あまぎり' != _pft.yomi && 'はまなみ' != _pft.yomi || (_pfw.kaih += 2, _pfv = !0), 0 == _pfv) return _pfu;
        var _pfx = _pft.get_slotnums(500) + _pft.get_slotnums(501);
        return _pfu.add(_pfw.multiply(_pfx)), _pfu;
    };
},
function(_pfy, _pfz, _pg0) {
    'use strict';
    var _pg1 = this && this.__importDefault || function(_pg2) {
        return _pg2 && _pg2.__esModule ? _pg2 : {
            'default': _pg2
        };
    };
    defineModule(_pfz);
    Object.defineProperty(_pfz, '__esModule', {
        'value': !0
    });
    var _pg3 = _pg0(3),
        _pg4 = _pg1(_pg0(0));
    _pfz.getSlot502PersonalEffect = function(_pg5) {
        var _pg6, _pg7, _pg8, _pg9, _pga, _pgb, _pgc, _pgd, _pge, _pgf, _pgg, _pgh, _pgi, _pgj = new _pg3.SlotItemEffectModel(),
            _pgk = _pg5.get_slotnums(502),
            _pgl = {
                149: 2,
                591: 2,
                150: 1,
                592: 1,
                152: 1,
                151: 2,
                593: 5,
                954: 3
            },
            _pgm = {
                149: 1,
                591: 1,
                592: 1,
                151: 2,
                593: 4,
                954: 3
            },
            _pgn = {
                593: 1,
                954: 1,
                151: 2,
                591: 2,
                150: 3,
                592: 3,
                149: 3,
                152: 3
            },
            _pgo = {
                593: 1,
                151: 2,
                149: 2,
                591: 2,
                954: 2
            },
            _pgp = {
                151: 1,
                593: 1,
                954: 1
            };
        if (_pgl[_pg5.ship_id] && (_pg6 = _pgl[_pg5.ship_id], _pgj.houg += _pgk * _pg6), _pgm[_pg5.ship_id] && (_pg7 = _pgm[_pg5.ship_id], _pgj.tyku += _pgk * _pg7), _pgn[_pg5.ship_id] && (_pg8 = _pgn[_pg5.ship_id], _pg9 = _pg5.get_each_level_nums(502), _pga = [], _pg9.forEach(function(_pgq, _pgr) {
                for (var _pgs = 1; _pgs <= _pg5.SLOT_LEVEL_MAX; _pgs++) _pgs <= _pgr && (null == _pga[_pgs] && (_pga[_pgs] = 0), _pga[_pgs] += _pgq);
            }), 1 == _pg8 ? (_pgj.kaih += 3 * _pgk, 0 < _pga[1] && (_pgj.kaih += +_pga[1]), 0 < _pga[3] && (_pgj.tyku += +_pga[3]), 0 < _pga[5] && (_pgj.houg += +_pga[5]), 0 < _pga[7] && (_pgj.kaih += +_pga[7]), 0 < _pga[8] && (_pgj.tyku += +_pga[8]), 0 < _pga[9] && (_pgj.houg += +_pga[9]), 0 < _pga[10] && (_pgj.tyku += +_pga[10])) : 2 == _pg8 ? (_pgj.kaih += +_pgk, 0 < _pga[2] && 151 == _pg5.ship_id && (_pgj.kaih += +_pga[2]), 0 < _pga[4] && (_pgj.tyku += +_pga[4]), 0 < _pga[6] && (_pgj.houg += +_pga[6]), 0 < _pga[8] && (_pgj.kaih += +_pga[8]), 0 < _pga[10] && (_pgj.tyku += +_pga[10])) : 3 == _pg8 && (0 < _pga[5] && (_pgj.kaih += +_pga[5]), 0 < _pga[8] && (_pgj.houg += +_pga[8]), 0 < _pga[10] && (_pgj.tyku += +_pga[10]))), _pgo[_pg5.ship_id]) {
            for (var _pgt = 0, _pgu = 0, _pgv = _pg5.have_slot_ids(); _pgu < _pgv.length; _pgu++) {
                var _pgw = _pgv[_pgu],
                    _pgx = _pg4.default.model.slot.getMst(_pgw),
                    _pgy = _pgx.equipType;
                12 != _pgy && 13 != _pgy || (5 <= _pgx.sakuteki && (_pgt += _pg5.get_slotnums(parseInt(_pgw))), 2 <= _pgx.taiku && _pg5.get_slotnums(parseInt(_pgw)));
            }
            0;
            var _pgz = _pgo[_pg5.ship_id];
            1 == _pgz && 1 <= _pgt ? (_pgj.houg += 3, _pgj.kaih += 4) : 2 == _pgz && 1 <= _pgt && (_pgj.houg += 2, _pgj.kaih += 2);
        }
        return _pgp[_pg5.ship_id] && (_pgb = _pgp[_pg5.ship_id], _pgc = [], _pgd = [], _pge = _pg5.have_slot_ids(), [410, 411].forEach(function(_ph0) {
            -1 < _pge.indexOf(_ph0.toString()) && (_pgd[_ph0] = _pg5.get_each_level_nums(_ph0), null == _pgc[_ph0] && (_pgc[_ph0] = []), _pgd[_ph0].forEach(function(_ph1, _ph2) {
                for (var _ph3 = 1; _ph3 <= _pg5.SLOT_LEVEL_MAX; _ph3++) null == _pgc[_ph0][_ph3] && (_pgc[_ph0][_ph3] = 0), _ph3 <= _ph2 && (_pgc[_ph0][_ph3] += _ph1);
            }));
        }), _pgf = _pgd[410], _pgg = _pgd[411], 1 == _pgb && (_pgf && (_pgj.tyku += 1, 1 <= (_pgh = _pgc[410])[7] && (_pgj.houg += 1), 1 <= _pgh[10] && (_pgj.kaih += 1)), _pgg && (_pgj.tyku += 2, 1 <= (_pgi = _pgc[411])[2] && (_pgj.houg += 1), 1 <= _pgi[4] && (_pgj.kaih += 1), 1 <= _pgi[6] && (_pgj.houm += 1), 1 <= _pgi[8] && (_pgj.tyku += 1), 1 <= _pgi[10] && (_pgj.houg += 1)))), _pgj;
    };
},
function(_ph4, _ph5, _ph6) {
    'use strict';
    var _ph7 = this && this.__importDefault || function(_ph8) {
        return _ph8 && _ph8.__esModule ? _ph8 : {
            'default': _ph8
        };
    };
    defineModule(_ph5);
    Object.defineProperty(_ph5, '__esModule', {
        'value': !0
    });
    var _ph9 = _ph6(3),
        _pha = _ph7(_ph6(0));
    _ph5.getSlot503PersonalEffect = function(_phb) {
        var _phc, _phd, _phe, _phf, _phg, _phh = new _ph9.SlotItemEffectModel(),
            _phi = _phb.get_slotnums(503),
            _phj = {
                149: 2,
                150: 2,
                151: 2,
                152: 2,
                591: 3,
                592: 3,
                593: 4,
                954: 4
            },
            _phk = {
                149: 1,
                591: 1,
                592: 1,
                151: 2,
                593: 4,
                954: 3
            },
            _phl = {
                593: 1,
                954: 1,
                151: 2,
                591: 2,
                592: 2,
                149: 3,
                150: 3,
                152: 3
            },
            _phm = {
                954: 1,
                151: 2,
                591: 2,
                592: 2,
                593: 2
            },
            _phn = {
                591: 1,
                592: 1,
                593: 1,
                954: 1
            },
            _pho = {
                591: 1,
                592: 2,
                593: 2,
                954: 3
            };
        _phj[_phb.ship_id] && (_phc = _phj[_phb.ship_id], _phh.houg += _phi * _phc), _phk[_phb.ship_id] && (_phd = _phk[_phb.ship_id], _phh.tyku += _phi * _phd), _phl[_phb.ship_id] && (_phe = _phl[_phb.ship_id], _phf = _phb.get_each_level_nums(503), _phg = [], _phf.forEach(function(_php, _phq) {
            for (var _phr = 1; _phr <= _phb.SLOT_LEVEL_MAX; _phr++) _phr <= _phq && (null == _phg[_phr] && (_phg[_phr] = 0), _phg[_phr] += _php);
        }), 1 == _phe ? (_phh.houm += 2 * _phi, 0 < _phg[1] && (_phh.houg += +_phg[1]), 0 < _phg[2] && (_phh.tyku += +_phg[2]), 0 < _phg[4] && (_phh.houm += +_phg[4]), 0 < _phg[6] && (_phh.houg += +_phg[6]), 0 < _phg[8] && (_phh.tyku += +_phg[8]), 0 < _phg[10] && (_phh.houm += +_phg[10])) : 2 == _phe ? (_phh.houm += +_phi, 0 < _phg[2] && (_phh.houg += +_phg[2]), 0 < _phg[4] && (_phh.tyku += +_phg[4]), 0 < _phg[6] && (_phh.houm += +_phg[6]), 0 < _phg[8] && (_phh.houg += +_phg[8]), 0 < _phg[10] && (_phh.houm += +_phg[10])) : 3 == _phe && (0 < _phg[4] && (_phh.houm += +_phg[4]), 0 < _phg[7] && (_phh.houg += +_phg[7]), 0 < _phg[10] && (_phh.tyku += +_phg[10])));
        var _phs = 0;
        _phm[_phb.ship_id] && (_phs = _phm[_phb.ship_id]);
        var _pht = 0;
        _pho[_phb.ship_id] && (_pht = _pho[_phb.ship_id]);
        var _phu = 0,
            _phv = 0,
            _phw = _phb.have_slot_ids();
        if (0 < _phs + _pht)
            for (var _phx = 0, _phy = _phw; _phx < _phy.length; _phx++) {
                var _phz = _phy[_phx],
                    _pi0 = _pha.default.model.slot.getMst(_phz),
                    _pi1 = _pi0.equipType;
                12 != _pi1 && 13 != _pi1 || (5 <= _pi0.sakuteki && (_phu += _phb.get_slotnums(parseInt(_phz))), 2 <= _pi0.taiku && _phb.get_slotnums(parseInt(_phz)), 8 <= _pi0.meichu && (_phv += _phb.get_slotnums(parseInt(_phz))));
            }
        1 == _phs ? 1 <= _phu && (_phh.houg += 3, _phh.houm += 3, _phh.kaih += 2) : 2 == _phs && 1 <= _phu && (_phh.houg += 2, _phh.houm += 2, _phh.kaih += 1);
        var _pi2, _pi3, _pi4, _pi5 = 0,
            _pi6 = [],
            _pi7 = [];
        return _phn[_phb.ship_id] && (_pi5 = _phn[_phb.ship_id], _pi2 = _phb.have_slot_ids(), [174].forEach(function(_pi8) {
            -1 < _pi2.indexOf(_pi8.toString()) && (_pi7[_pi8] = _phb.get_each_level_nums(_pi8), null == _pi6[_pi8] && (_pi6[_pi8] = []), _pi7[_pi8].forEach(function(_pi9, _pia) {
                for (var _pib = 1; _pib <= _phb.SLOT_LEVEL_MAX; _pib++) null == _pi6[_pi8][_pib] && (_pi6[_pi8][_pib] = 0), _pib <= _pia && (_pi6[_pi8][_pib] += _pi9);
            }));
        })), 0 < _pi5 && (_pi3 = _pi7[174], 1 == _pi5 && _pi3 && (_pi4 = _pi6[174], _phh.raig += 4, 1 <= _pi4[6] && (_phh.raig += 1), 1 <= _pi4[8] && (_phh.houm += 1), 1 <= _pi4[10] && (_phh.houg += 1))), 0 < _phv && (1 <= _pht && _pht <= 3 && (_phh.houg += 2, _phh.houm += 2, _phh.kaih += 2), 1 == _pht ? _phh.houg += 1 : 3 == _pht && (_phh.houg += 2)), _phh;
    };
},
function(_pic, _pid, _pie) {
    'use strict';
    var _pif = this && this.__importDefault || function(_pig) {
        return _pig && _pig.__esModule ? _pig : {
            'default': _pig
        };
    };
    defineModule(_pid);
    Object.defineProperty(_pid, '__esModule', {
        'value': !0
    });
    var _pih = _pie(3),
        _pii = _pif(_pie(0));
    _pid.getSlot505PersonalEffect = function(_pij) {
        var _pik, _pil = new _pih.SlotItemEffectModel(),
            _pim = !1,
            _pin = new _pih.SlotItemEffectModel();
        2 == _pij.stype ? (_pin.houg += 1, _pin.tyku += 2, _pin.kaih += 2, _pim = !0) : 1 == _pij.stype ? (_pin.houg += 1, _pin.tyku += 1, _pin.kaih += 1, _pim = !0) : 3 == _pij.stype || 21 == _pij.stype || 4 == _pij.stype ? (_pin.tyku += 1, _pin.kaih += 2, _pim = !0) : 5 != _pij.stype && 6 != _pij.stype && 16 != _pij.stype || (_pin.tyku += 1, _pin.kaih += 1, _pim = !0), _pim && (_pik = _pij.get_slotnums(505), _pil.add(_pin.multiply(_pik)));
        var _pio = {
                961: 1,
                145: 2,
                497: 2,
                656: 2,
                668: 2,
                951: 2,
                498: 3,
                144: 3,
                242: 3,
                243: 3,
                228: 3,
                651: 3,
                244: 4,
                245: 4,
                323: 4,
                557: 5,
                558: 5,
                578: 5,
                419: 5,
                464: 5,
                470: 5,
                407: 5,
                235: 5,
                147: 5,
                955: 5,
                960: 5
            },
            _pip = {
                961: 1,
                145: 2,
                497: 2,
                656: 2,
                419: 2,
                951: 2
            },
            _piq = {
                961: 1,
                656: 1,
                951: 1
            };
        1 == _pio[_pij.ship_id] ? (_pil.houg += 2, _pil.tyku += 3, _pil.kaih += 4) : 2 == _pio[_pij.ship_id] ? (_pil.houg += 1, _pil.tyku += 2, _pil.kaih += 3) : 3 == _pio[_pij.ship_id] ? (_pil.tyku += 2, _pil.kaih += 2) : 4 == _pio[_pij.ship_id] ? (_pil.tyku += 1, _pil.kaih += 2) : 5 == _pio[_pij.ship_id] && (_pil.houg += 1, _pil.tyku += 1, _pil.kaih += 1);
        var _pir = 0;
        if (_pip[_pij.ship_id] && _pir++, _piq[_pij.ship_id] && _pir++, 0 == _pir) return _pil;
        for (var _pis = 0, _pit = 0, _piu = 0, _piv = _pij.have_slot_ids(); _piu < _piv.length; _piu++) {
            var _piw = _piv[_piu],
                _pix = _pii.default.model.slot.getMst(_piw),
                _piy = _pix.equipType;
            12 != _piy && 13 != _piy || (5 <= _pix.sakuteki && (_pis += _pij.get_slotnums(parseInt(_piw))), 2 <= _pix.taiku && (_pit += _pij.get_slotnums(parseInt(_piw))));
        }
        var _piz = _pip[_pij.ship_id];
        0 < _pit && 0 < _piz && (1 == _piz ? (_pil.houg += 1, _pil.tyku += 2, _pil.kaih += 3) : 2 == _piz && (_pil.tyku += 2, _pil.kaih += 2));
        var _pj0 = _piq[_pij.ship_id];
        return 0 < _pis && 0 < _pj0 && 1 == _pj0 && (_pil.houg += 1, _pil.kaih += 1), _pil;
    };
},
function(_pj1, _pj2, _pj3) {
    'use strict';
    defineModule(_pj2);
    Object.defineProperty(_pj2, '__esModule', {
        'value': !0
    });
    var _pj4 = _pj3(3);
    _pj2.getSlot506PersonalEffect = function(_pj5) {
        var _pj6 = new _pj4.SlotItemEffectModel();
        return 961 == _pj5.ship_id ? (_pj6.houg += 2, _pj6.houm += 3, _pj6.tyku += 2, _pj6.kaih += 4) : 145 == _pj5.ship_id || 497 == _pj5.ship_id || 656 == _pj5.ship_id || 557 == _pj5.ship_id || 558 == _pj5.ship_id || 951 == _pj5.ship_id ? (_pj6.houg += 1, _pj6.houm += 2, _pj6.tyku += 1, _pj6.kaih += 3) : 578 != _pj5.ship_id && 419 != _pj5.ship_id && 464 != _pj5.ship_id && 470 != _pj5.ship_id && 407 != _pj5.ship_id && 235 != _pj5.ship_id && 147 != _pj5.ship_id && 538 != _pj5.ship_id && 537 != _pj5.ship_id && 955 != _pj5.ship_id && 960 != _pj5.ship_id || (_pj6.houg += 1, _pj6.houm += 1, _pj6.tyku += 1, _pj6.kaih += 2), _pj6;
    };
},
function(_pj7, _pj8, _pj9) {
    'use strict';
    defineModule(_pj8);
    Object.defineProperty(_pj8, '__esModule', {
        'value': !0
    });
    var _pja = _pj9(3);
    _pj8.getSlot14inch45CaliberGunPersonalEffect = function(_pjb) {
        var _pjc, _pjd, _pje, _pjf = new _pja.SlotItemEffectModel(),
            _pjg = !1,
            _pjh = new _pja.SlotItemEffectModel(),
            _pji = {
                507: 507,
                508: 507
            },
            _pjj = _pjb.get_slotnums(507),
            _pjk = _pjb.get_slotnums(508),
            _pjl = _pjj + _pjk,
            _pjm = _pjb.getCountryName(),
            _pjn = _pjb.getUSSWaterRaderDict();
        if (125 == _pjb.ctype && (_pjh.houg += 1, _pjh.kaih += 1, _pjh.houm += 1, _pjg = !0, 1 <= _pjj && 1 <= _pjk && (_pjf.houg += 1, _pjf.houm += 1)), 'アメリカ' == _pjm && 8 <= _pjb.stype && _pjb.stype <= 10) {
            _pjh.houg += 2, _pjh.kaih += 1, _pjh.houm += 1, _pjg = !0;
            for (var _pjo = 0, _pjp = 0, _pjq = _pjb.have_slot_ids(); _pjp < _pjq.length; _pjp++) {
                var _pjr = _pjq[_pjp];
                _pjn[Number(_pjr)] && (_pjo += _pjb.get_slotnums(parseInt(_pjr)));
            }
            1 <= _pjo && (_pjf.houg += 1, _pjf.kaih += 1, _pjf.houm += 2), 1 <= _pjj && 1 <= _pjk && (_pjf.houg += 1, _pjf.houm += 1, _pjf.kaih += 2);
        }
        else 6 != _pjb.ctype && 26 != _pjb.ctype && 2 != _pjb.ctype && 'イギリス' != _pjm || (_pjf.kaih += 1, _pjf.houm += 1, 1 <= _pjj && 1 <= _pjk && (_pjf.houg += 1, _pjf.houm += 1, _pjf.kaih += 1));
        _pjg && _pjf.add(_pjh.multiply(_pjl));
        for (var _pjs = {}, _pjt = {}, _pju = {}, _pjv = 0, _pjw = Object.keys(_pji); _pjv < _pjw.length; _pjv++) {
            ! function(_pjx) {
                var _pjy = Number(_pjx),
                    _pjz = _pji[_pjy];
                _pjs[_pjz] = null != (_pjc = _pjs[_pjz]) ? _pjc : 0, _pjt[_pjz] = null != (_pjd = _pjt[_pjz]) ? _pjd : 0, _pju[_pjz] = null != (_pje = _pju[_pjz]) ? _pje : 0, _pjb.get_each_level_nums(_pjy).forEach(function(_pk0, _pk1) {
                    3 <= _pk1 && (_pjs[_pjz] += _pk0), 6 <= _pk1 && (_pjt[_pjz] += _pk0), 9 <= _pk1 && (_pju[_pjz] += _pk0);
                });
            }(_pjw[_pjv]);
        }
        return 1 <= _pjs[507] && (_pjf.houg += +_pjs[507]), 1 <= _pjt[507] && (_pjf.souk += +_pjt[507]), 1 <= _pju[507] && (_pjf.houm += +_pju[507]), _pjf;
    };
},
function(_pk2, _pk3, _pk4) {
    'use strict';
    defineModule(_pk3);
    Object.defineProperty(_pk3, '__esModule', {
        'value': !0
    });
    var _pk5 = _pk4(3);
    _pk3.getSlot510PersonalEffect = function(_pk6) {
        var _pk7 = new _pk5.SlotItemEffectModel(),
            _pk8 = !1,
            _pk9 = new _pk5.SlotItemEffectModel();
        if ('イギリス' == _pk6.getCountryName() && (_pk9.houg += 2, _pk9.tais += 3, _pk9.kaih += 2, _pk9.saku += 2, _pk8 = !0), 88 == _pk6.ctype && (_pk7.houg += 4, _pk7.kaih += 2, _pk9.saku += 3, _pk9.houm += 2, _pk8 = !0), 0 == _pk8) return _pk7;
        var _pka = _pk6.get_slotnums(510);
        return _pk7.add(_pk9.multiply(_pka)), _pk7;
    };
},
function(_pkb, _pkc, _pkd) {
    'use strict';
    defineModule(_pkc);
    Object.defineProperty(_pkc, '__esModule', {
        'value': !0
    });
    var _pke = _pkd(3);
    _pkc.getSlot511PersonalEffect = function(_pkf) {
        var _pkg = new _pke.SlotItemEffectModel();
        return 122 == _pkf.ctype ? (_pkg.raig += 3, _pkg.kaih += 4) : 114 == _pkf.ctype && (_pkg.raig += 1, _pkg.kaih += 2), _pkg;
    };
},
function(_pkh, _pki, _pkj) {
    'use strict';
    defineModule(_pki);
    Object.defineProperty(_pki, '__esModule', {
        'value': !0
    });
    var _pkk = _pkj(3);
    _pki.getSlot517PersonalEffect = function(_pkl) {
        var _pkm = new _pkk.SlotItemEffectModel();
        null == {
            66: 0,
            28: 0,
            12: 0,
            1: 0,
            5: 0,
            10: 0,
            23: 0,
            18: 0,
            30: 0,
            38: 0,
            22: 0,
            54: 0,
            101: 0
        }[_pkl.ctype] && 74 != _pkl.ctype && 77 != _pkl.ctype && 85 != _pkl.ctype && 117 != _pkl.ctype && 104 != _pkl.ctype || (_pkm.houm += 1, _pkm.kaih += 1, _pkm.saku += 1), 38 == _pkl.ctype && (_pkm.houg += 1, _pkm.houm += 1), 960 == _pkl.ship_id ? (_pkm.houg += 2, _pkm.houm += 1, _pkm.kaih += 3, _pkm.saku += 2) : 955 != _pkl.ship_id && 578 != _pkl.ship_id && 961 != _pkl.ship_id && 656 != _pkl.ship_id && 464 != _pkl.ship_id && 470 != _pkl.ship_id && 419 != _pkl.ship_id && 407 != _pkl.ship_id && 235 != _pkl.ship_id && 147 != _pkl.ship_id || (_pkm.houg += 1, _pkm.houm += 1, _pkm.kaih += 2, _pkm.saku += 1);
        for (var _pkn = [], _pko = 0, _pkp = [267, 366, 450, 517]; _pko < _pkp.length; _pko++) {
            ! function(_pkq) {
                var _pkr = _pkl.get_each_level_nums(_pkq);
                null == _pkn[_pkq] && (_pkn[_pkq] = []), _pkr.forEach(function(_pks, _pkt) {
                    for (var _pku = 1; _pku <= _pkl.SLOT_LEVEL_MAX; _pku++) null == _pkn[_pkq][_pku] && (_pkn[_pkq][_pku] = 0), _pku <= _pkt && (_pkn[_pkq][_pku] += _pks);
                });
            }(_pkp[_pko]);
        }
        var _pkv = _pkn[517];
        return 0 < _pkv[7] && (_pkm.houm += 1), 0 < _pkv[8] && (_pkm.kaih += 1), 0 < _pkv[9] && (_pkm.houg += 1), 0 < _pkv[10] && (_pkm.houm += 1), (0 < _pkn[267][3] || 0 < _pkn[366][3]) && (_pkm.houg += 1, _pkm.houm += 1, 38 == _pkl.ctype && (_pkm.houg += 1, _pkm.houm += 1), 0 < _pkn[450][4] && (_pkm.houg += 1, _pkm.houm += 1, _pkm.tyku += 4, _pkm.kaih += 3)), _pkm;
    };
},
function(_pkw, _pkx, _pky) {
    'use strict';
    defineModule(_pkx);
    Object.defineProperty(_pkx, '__esModule', {
        'value': !0
    });
    var _pkz = _pky(3);
    _pkx.getSlot518PersonalEffect = function(_pl0) {
        var _pl1 = new _pkz.SlotItemEffectModel(),
            _pl2 = !1,
            _pl3 = new _pkz.SlotItemEffectModel();
        if (34 != _pl0.ctype && 56 != _pl0.ctype || (_pl3.houg += 1, _pl3.tyku += 1, _pl3.tais += 1, _pl3.kaih += 1, _pl2 = !0), 16 == _pl0.stype && (_pl3.houg += 1, _pl3.raig += 1, _pl3.kaih += 1, _pl2 = !0), 622 != _pl0.ship_id && 624 != _pl0.ship_id && 623 != _pl0.ship_id || (_pl3.houg += 1, _pl2 = !0), 622 != _pl0.ship_id && 624 != _pl0.ship_id || (_pl3.tyku += 1, _pl2 = !0), 624 == _pl0.ship_id && (_pl3.tais += 2, _pl2 = !0), 0 == _pl2) return _pl1;
        var _pl4 = _pl0.get_slotnums(518);
        return _pl1.add(_pl3.multiply(_pl4)), _pl1;
    };
},
function(_pl5, _pl6, _pl7) {
    'use strict';
    defineModule(_pl6);
    Object.defineProperty(_pl6, '__esModule', {
        'value': !0
    });
    var _pl8 = _pl7(3);
    _pl6.getSlot85PersonalEffect = function(_pl9) {
        var _pla = new _pl8.SlotItemEffectModel(),
            _plb = _pl9.get_each_level_over_nums([85]),
            _plc = _plb[85][6],
            _pld = _plb[85][8],
            _ple = _plb[85][10],
            _plf = _pl9.get_have_rader_nums().air_rader,
            _plg = _pl9.getCountryName();
        return 0 < _plc && (_pla.tyku += +_plc, _pla.kaih += +_plc, 1 <= _plf && (_pla.tyku += 2)), 0 < _pld && (_pla.houg += +_pld, 'ドイツ' != _plg && 'イタリア' != _plg || (_pla.tyku += +_pld, _pla.kaih += +_pld)), 0 < _ple && (_pla.kaih += +_ple, _pla.houm += +_ple, 'ドイツ' != _plg && 'イタリア' != _plg || (_pla.houg += 1)), _pla;
    };
},
function(_plh, _pli, _plj) {
    'use strict';
    defineModule(_pli);
    Object.defineProperty(_pli, '__esModule', {
        'value': !0
    });
    var _plk = _plj(3);
    _pli.getSlot519PersonalEffect = function(_pll) {
        var _plm = new _plk.SlotItemEffectModel();
        return 122 == _pll.ctype && (_plm.houm += 2, _plm.kaih += 2), 114 == _pll.ctype && (_plm.raig += 1, _plm.houm += 2, _plm.kaih += 2), _plm;
    };
}
