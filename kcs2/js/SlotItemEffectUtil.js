{
    72170: (_1nq, _1nr) => {
        'use strict';
        var _1ns = null;
        defineModule(_1nr);
        Object.defineProperty(_1nr, '__esModule', {
            'value': true
        }), _1nr.SHIP_COUNTRY = void 0, _1nr.SHIP_COUNTRY = {
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
            126: '日本',
            127: '日本',
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
        };
    },
    73785: function(_lbj, _lbk, _lbl) {
        'use strict';
        var _lbm = null;
        var _lbn = this && this.__importDefault || function(_lbo) {
            var _lbp = null;
            return _lbo && _lbo.__esModule ? _lbo : {
                'default': _lbo
            };
        };
        defineModule(_lbk);
        Object.defineProperty(_lbk, '__esModule', {
            'value': true
        }), _lbk.SlotItemEffectParamModel = void 0;
        var _lbq = _lbn(_lbl(18622)),
            _lbr = _lbl(72170),
            _lbs = (function() {
                var _lbt = null;

                function _lbu(_lbv, _lbw) {
                    var _lbx = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _lby = {}, _lbz = {}, _lc0 = {}, _lc1 = 0, _lc2 = _lbw; _lc1 < _lc2.length; _lc1++) {
                        var _lc3 = _lc2[_lc1];
                        null != _lc3 && (null == _lby[_lc3.mstID] && (_lby[_lc3.mstID] = new Array()), _lby[_lc3.mstID].push(_lc3), null == _lbz[_lc3.mstID] ? _lbz[_lc3.mstID] = 1 : _lbz[_lc3.mstID] += 1, null == _lc0[_lc3.equipType] ? _lc0[_lc3.equipType] = 1 : _lc0[_lc3.equipType] += 1);
                    }
                    this._have_slots_dict = _lby, this._have_slotnums_dict = _lbz, this._have_type3nums_dict = _lc0, this._ship_id = _lbv.mstID, this._yomi = _lbv.yomi, this._stype = _lbv.shipTypeID, this._ctype = _lbv.getClassType();
                }
                return Object.defineProperty(_lbu.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _lc4 = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbu.prototype, 'ship_id', {
                    'get': function() {
                        var _lc5 = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbu.prototype, 'yomi', {
                    'get': function() {
                        var _lc6 = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbu.prototype, 'stype', {
                    'get': function() {
                        var _lc7 = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbu.prototype, 'ctype', {
                    'get': function() {
                        var _lc8 = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _lbu.prototype.get_slotnums = function(_lc9) {
                    var _lca = null;
                    return null == this._have_slotnums_dict[_lc9] ? 0 : this._have_slotnums_dict[_lc9];
                }, _lbu.prototype.get_type3_nums = function(_lcb) {
                    var _lcc = null;
                    return null == this._have_type3nums_dict[_lcb] ? 0 : this._have_type3nums_dict[_lcb];
                }, _lbu.prototype.have_slot_ids = function() {
                    var _lcd = null;
                    return Object.keys(this._have_slots_dict);
                }, _lbu.prototype.get_each_level_nums = function(_lce) {
                    var _lcf = null,
                        _lcg = this._have_slots_dict[_lce],
                        _lch = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _lcg)
                        for (var _lci = 0, _lcj = _lcg; _lci < _lcj.length; _lci++) {
                            _lch[_lcj[_lci].level]++;
                        }
                    return _lch;
                }, _lbu.prototype.get_each_level_over_nums = function(_lck) {
                    var _lcl = null;
                    for (var _lcm = this, _lcn = [], _lco = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _lcp = function(_lcq) {
                            var _lcr = null;
                            if (_lcn[_lcq] = Array.apply(null, new Array(_lcs.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _lcs.have_slots_dict[_lcq]) return 'continue';
                            _lcs.get_each_level_nums(_lcq).forEach(function(_lct, _lcu) {
                                var _lcv = null;
                                for (var _lcw = 1; _lcw <= _lcm.SLOT_LEVEL_MAX; _lcw++) _lcu >= _lcw && (_lcn[_lcq][_lcw] += _lct, _lco[_lcw] += _lct);
                            });
                        }, _lcs = this, _lcx = 0, _lcy = _lck; _lcx < _lcy.length; _lcx++) {
                        _lcp(_lcy[_lcx]);
                    }
                    return {
                        'slot': _lcn,
                        'total': _lco
                    };
                }, _lbu.prototype.get_have_rader_nums = function() {
                    var _lcz = null;
                    for (var _ld0 = 0, _ld1 = 0, _ld2 = 0, _ld3 = this.have_slot_ids(); _ld2 < _ld3.length; _ld2++) {
                        var _ld4 = _ld3[_ld2],
                            _ld5 = _lbq.default.model.slot.getMst(_ld4),
                            _ld6 = _ld5.equipType;
                        12 != _ld6 && 13 != _ld6 || (_ld5.sakuteki >= 5 && (_ld0 += this.get_slotnums(parseInt(_ld4))), _ld5.taiku >= 2 && (_ld1 += this.get_slotnums(parseInt(_ld4))));
                    }
                    return {
                        'water_rader': _ld0,
                        'air_rader': _ld1
                    };
                }, _lbu.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _lbu.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _lbu.prototype.getCountryName = function() {
                    var _ld7 = null;
                    return null == _lbr.SHIP_COUNTRY[this._ctype] ? '' : _lbr.SHIP_COUNTRY[this._ctype];
                }, _lbu.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _lbu.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _lbu;
            }());
        _lbk.SlotItemEffectParamModel = _lbs;
    },
    16718: (_loe, _lof, _log) => {
        'use strict';
        var _loh = null;
        defineModule(_lof);
        Object.defineProperty(_lof, '__esModule', {
            'value': true
        }), _lof.TaskGetSlotItemEffectParams = void 0;
        var _loi = _log(74496),
            _loj = _log(82692),
            _lok = (function() {
                var _lol = null;

                function _lom(_lon, _loo, _lop) {
                    var _loq = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lon;
                    var _lor = _lon.getSlotitems();
                    _lor.push(_lon.getSlotitemEx());
                    var _los = _lor.map(function(_lot) {
                        var _lou = null;
                        return null == _lot || null != _loo && _lot.memID == _loo.memID ? null : _lot;
                    });
                    this._removeSlots = _los;
                    var _lov = _los.map(function(_low) {
                        return _low;
                    });
                    _lov.push(_lop), this._toSlots = _lov;
                }
                return _lom.prototype.start = function() {
                    var _lox = null,
                        _loy = this._ship.getSlotitems();
                    _loy.push(this._ship.getSlotitemEx());
                    var _loz = _loj.SlotItemEffectUtil.getSlotitemEffect(this._ship, _loy),
                        _lp0 = _loj.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lp1 = _loj.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_loz, _lp0),
                        'toSlotItemEffect': this._subEffectModels(_lp1, _lp0)
                    };
                }, _lom.prototype._subEffectModels = function(_lp2, _lp3) {
                    var _lp4 = null,
                        _lp5 = new _loi.SlotItemEffectModel();
                    return _lp5.houg = _lp2.houg - _lp3.houg, _lp5.raig = _lp2.raig - _lp3.raig, _lp5.tyku = _lp2.tyku - _lp3.tyku, _lp5.souk = _lp2.souk - _lp3.souk, _lp5.kaih = _lp2.kaih - _lp3.kaih, _lp5.tais = _lp2.tais - _lp3.tais, _lp5.saku = _lp2.saku - _lp3.saku, _lp5.baku = _lp2.baku - _lp3.baku, _lp5.houm = _lp2.houm - _lp3.houm, _lp5.leng = _lp2.leng - _lp3.leng, _lp5;
                }, _lom;
            }());
        _lof.TaskGetSlotItemEffectParams = _lok;
    },
    69377: function(_mcv, _mcw, _mcx) {
        'use strict';
        var _mcy = null;
        var _mcz = this && this.__importDefault || function(_md0) {
            var _md1 = null;
            return _md0 && _md0.__esModule ? _md0 : {
                'default': _md0
            };
        };
        defineModule(_mcw);
        Object.defineProperty(_mcw, '__esModule', {
            'value': true
        }), _mcw.get25mmMachinegunEffect = void 0;
        var _md2 = _mcx(74496),
            _md3 = _mcz(_mcx(18622));
        _mcw.get25mmMachinegunEffect = function(_md4) {
            var _md5 = null,
                _md6 = new _md2.SlotItemEffectModel(),
                _md7 = false,
                _md8 = new _md2.SlotItemEffectModel(),
                _md9 = 0;
            if (662 == _md4.ship_id || 663 == _md4.ship_id ? (_md8.tyku += 2, _md8.kaih += 1, _md7 = true) : 668 == _md4.ship_id && (_md8.tyku += 3, _md8.kaih += 2, _md7 = true), 56 == _md4.ctype && (_md8.houg += 1, _md8.tyku += 2, _md8.kaih += 2, _md7 = true, _md9 = 1), 0 == _md7) return _md6;
            var _mda = _md4.get_slotnums(39) + _md4.get_slotnums(40) + _md4.get_slotnums(49) + _md4.get_slotnums(131);
            if (_md6.add(_md8.multiply(_mda)), 0 == _md9) return _md6;
            for (var _mdb = 0, _mdc = 0, _mdd = _md4.have_slot_ids(); _mdc < _mdd.length; _mdc++) {
                var _mde = _mdd[_mdc],
                    _mdf = _md3.default.model.slot.getMst(_mde),
                    _mdg = _mdf.equipType;
                12 != _mdg && 13 != _mdg || (_mdf.sakuteki >= 5 && _md4.get_slotnums(parseInt(_mde)), _mdf.taiku >= 2 && (_mdb += _md4.get_slotnums(parseInt(_mde))));
            }
            return _mdb >= 1 && 1 == _md9 && (_md6.tyku += 2, _md6.kaih += 2), _md6;
        };
    },
    77670: function(_mdh, _mdi, _mdj) {
        'use strict';
        var _mdk = null;
        var _mdl = this && this.__importDefault || function(_mdm) {
            var _mdn = null;
            return _mdm && _mdm.__esModule ? _mdm : {
                'default': _mdm
            };
        };
        defineModule(_mdi);
        Object.defineProperty(_mdi, '__esModule', {
            'value': true
        }), _mdi.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mdo = _mdj(74496),
            _mdp = _mdl(_mdj(18622));
        _mdi.get8cmAntiAircraftGunPersonalEffect = function(_mdq) {
            var _mdr = null,
                _mds = new _mdo.SlotItemEffectModel(),
                _mdt = false,
                _mdu = new _mdo.SlotItemEffectModel(),
                _mdv = 0;
            if (501 != _mdq.ship_id && 506 != _mdq.ship_id && 502 != _mdq.ship_id && 507 != _mdq.ship_id || (_mdu.tyku += 2, _mdu.kaih += 1, _mdt = true, _mdv = 1), 501 != _mdq.ship_id && 506 != _mdq.ship_id || (_mdu.houg += 1, _mdu.tyku += 2, _mdu.kaih += 2, _mdt = true, _mdv = 1), 0 == _mdt) return _mds;
            var _mdw = _mdq.get_slotnums(66) + _mdq.get_slotnums(220);
            _mds.add(_mdu.multiply(_mdw));
            for (var _mdx = 0, _mdy = 0, _mdz = _mdq.have_slot_ids(); _mdy < _mdz.length; _mdy++) {
                var _me0 = _mdz[_mdy],
                    _me1 = _mdp.default.model.slot.getMst(_me0),
                    _me2 = _me1.equipType;
                12 != _me2 && 13 != _me2 || (_me1.sakuteki >= 5 && _mdq.get_slotnums(parseInt(_me0)), _me1.taiku >= 2 && (_mdx += _mdq.get_slotnums(parseInt(_me0))));
            }
            return 0 == _mdv || _mdx >= 1 && (_mds.tyku += 1, _mds.kaih += 2), _mds;
        };
    },
    34165: (_me3, _me4, _me5) => {
        'use strict';
        var _me6 = null;
        defineModule(_me4);
        Object.defineProperty(_me4, '__esModule', {
            'value': true
        }), _me4.getCamouflageSlotPersonalEffect = void 0;
        var _me7 = _me5(74496);
        _me4.getCamouflageSlotPersonalEffect = function(_me8) {
            var _me9 = null,
                _mea = new _me7.SlotItemEffectModel();
            return 'きそ' != _me8.yomi && 'たま' != _me8.yomi || (_mea.kaih = 7, _mea.souk = 2), _mea;
        };
    },
    31127: (_meb, _mec, _med) => {
        'use strict';
        var _mee = null;
        defineModule(_mec);
        Object.defineProperty(_mec, '__esModule', {
            'value': true
        }), _mec.getHighZuiunSeriesEffect = void 0;
        var _mef = _med(74496);
        _mec.getHighZuiunSeriesEffect = function(_meg) {
            var _meh = null,
                _mei = new _mef.SlotItemEffectModel(),
                _mej = false,
                _mek = new _mef.SlotItemEffectModel();
            if (662 == _meg.ship_id ? (_mei.houg += 3, _mei.kaih += 1) : 663 == _meg.ship_id || 668 == _meg.ship_id || 501 == _meg.ship_id || 506 == _meg.ship_id || 553 == _meg.ship_id || 554 == _meg.ship_id ? (_mek.houg += 3, _mek.kaih += 2, _mek.tyku += 1, _mej = true) : 502 != _meg.ship_id && 507 != _meg.ship_id || (_mek.houg += 2, _mek.kaih += 2, _mek.tyku += 1, _mej = true), 0 == _mej) return _mei;
            var _mel = 0;
            return [237, 322, 323, 490].forEach(function(_mem) {
                var _men = null;
                _mel += _meg.get_slotnums(_mem);
            }), _mei.add(_mek.multiply(_mel)), _mei;
        };
    },
    81018: function(_meo, _mep, _meq) {
        'use strict';
        var _mer = null;
        var _mes = this && this.__importDefault || function(_met) {
            var _meu = null;
            return _met && _met.__esModule ? _met : {
                'default': _met
            };
        };
        defineModule(_mep);
        Object.defineProperty(_mep, '__esModule', {
            'value': true
        }), _mep.getRaderPrivateEffect = void 0;
        var _mev = _meq(74496),
            _mew = _mes(_meq(18622));
        _mep.getRaderPrivateEffect = function(_mex) {
            var _mey = null,
                _mez = new _mev.SlotItemEffectModel(),
                _mf0 = 0,
                _mf1 = 0;
            if (569 == _mex.ship_id || 648 == _mex.ship_id || 961 == _mex.ship_id || 951 == _mex.ship_id) _mf0 = 1;
            else {
                if (955 != _mex.ship_id && 960 != _mex.ship_id) return _mez;
                _mf0 = 2, _mf1 = 1;
            }
            for (var _mf2 = 0, _mf3 = 0, _mf4 = _mex.have_slot_ids(); _mf3 < _mf4.length; _mf3++) {
                var _mf5 = _mf4[_mf3],
                    _mf6 = _mew.default.model.slot.getMst(_mf5),
                    _mf7 = _mf6.equipType;
                12 != _mf7 && 13 != _mf7 || (_mf6.sakuteki >= 5 && _mex.get_slotnums(parseInt(_mf5)), _mf6.taiku >= 2 && (_mf2 += _mex.get_slotnums(parseInt(_mf5))));
            }
            if (_mf2 > 0 && (1 == _mf0 ? (_mez.houg += 1, _mez.kaih += 3, _mez.tyku += 2) : 2 == _mf0 && (_mez.tyku += 2, _mez.kaih += 1)), 0 == _mf1) return _mez;
            for (var _mf8 = [], _mf9 = function(_mfa) {
                    var _mfb = null;
                    if (null == _mex.have_slots_dict[_mfa]) return 'continue';
                    var _mfc = _mex.get_each_level_nums(_mfa);
                    null == _mf8[_mfa] && (_mf8[_mfa] = []), _mfc.forEach(function(_mfd, _mfe) {
                        var _mff = null;
                        for (var _mfg = 1; _mfg <= _mex.SLOT_LEVEL_MAX; _mfg++) null == _mf8[_mfa][_mfg] && (_mf8[_mfa][_mfg] = 0), _mfe >= _mfg && (_mf8[_mfa][_mfg] += _mfd);
                    });
                }, _mfh = 0, _mfi = [450]; _mfh < _mfi.length; _mfh++) {
                _mf9(_mfi[_mfh]);
            }
            var _mfj = null != _mf8[450] ? _mf8[450][4] : 0;
            return 1 == _mf1 && _mfj > 0 && (_mez.houg += 1, _mez.houm += 1, _mez.tyku += 1, _mez.kaih += 2), _mez;
        };
    },
    56716: (_mfk, _mfl, _mfm) => {
        'use strict';
        var _mfn = null;
        defineModule(_mfl);
        Object.defineProperty(_mfl, '__esModule', {
            'value': true
        }), _mfl.getSearchLightEffect = void 0;
        var _mfo = _mfm(74496);
        _mfl.getSearchLightEffect = function(_mfp) {
            var _mfq = null,
                _mfr = new _mfo.SlotItemEffectModel(),
                _mfs = _mfp.get_type3_nums(29);
            return 'ひえい' == _mfp.yomi || 'きりしま' == _mfp.yomi || 'ちょうかい' == _mfp.yomi || 'じんつう' == _mfp.yomi || 'あかつき' == _mfp.yomi ? (_mfr.houg += 4, _mfr.kaih -= 1) : 'あきぐも' == _mfp.yomi ? _mfr.houg = _mfr.houg + 2 * _mfs : 'ゆきかぜ' == _mfp.yomi && (_mfr.houg = _mfr.houg + _mfs, _mfr.tyku = _mfr.tyku + _mfs), 662 != _mfp.ship_id && 663 != _mfp.ship_id && 668 != _mfp.ship_id || (_mfr.raig += 2, _mfr.houg += 4), 'じんつう' == _mfp.yomi && (_mfr.raig += 8, _mfr.houg += 4), _mfr;
        };
    },
    17713: (_mft, _mfu, _mfv) => {
        'use strict';
        var _mfw = null;
        defineModule(_mfu);
        Object.defineProperty(_mfu, '__esModule', {
            'value': true
        }), _mfu.getSearchLightLargeEffect = void 0;
        var _mfx = _mfv(74496);
        _mfu.getSearchLightLargeEffect = function(_mfy) {
            var _mfz = null,
                _mg0 = new _mfx.SlotItemEffectModel();
            'ひえい' == _mfy.yomi || 'きりしま' == _mfy.yomi ? (_mg0.houg += 6, _mg0.kaih -= 2) : 'やまと' != _mfy.yomi && 'むさし' != _mfy.yomi || (_mg0.houg += 4, _mg0.kaih -= 1);
            var _mg1 = _mfy.get_slotnums(174);
            return 592 == _mfy.ship_id && (_mg0.houg += 3, _mg0.raig += 3, _mg1 > 0 && (_mg0.raig += 5)), _mg0;
        };
    },
    17213: (_mg2, _mg3, _mg4) => {
        'use strict';
        var _mg5 = null;
        defineModule(_mg3);
        Object.defineProperty(_mg3, '__esModule', {
            'value': true
        }), _mg3.getSlot100PersonalEffect = void 0;
        var _mg6 = _mg4(74496);
        _mg3.getSlot100PersonalEffect = function(_mg7) {
            var _mg8 = null,
                _mg9 = new _mg6.SlotItemEffectModel(),
                _mga = new _mg6.SlotItemEffectModel();
            if (553 == _mg7.ship_id) _mga.houg = 4;
            else {
                if (554 != _mg7.ship_id) return 196 == _mg7.ship_id ? (_mg9.houg = 3, _mg9) : 197 == _mg7.ship_id ? (_mg9.houg = 6, _mg9) : _mg9;
                _mga.houg = 4;
            }
            var _mgb = _mg7.get_slotnums(100);
            return _mg9 = _mga.multiply(_mgb);
        };
    },
    40176: (_mgc, _mgd, _mge) => {
        'use strict';
        var _mgf = null;
        defineModule(_mgd);
        Object.defineProperty(_mgd, '__esModule', {
            'value': true
        }), _mgd.getSlot104PersonalEffect = void 0;
        var _mgg = _mge(74496);
        _mgd.getSlot104PersonalEffect = function(_mgh) {
            var _mgi = null,
                _mgj = new _mgg.SlotItemEffectModel(),
                _mgk = new _mgg.SlotItemEffectModel();
            if (149 == _mgh.ship_id || 591 == _mgh.ship_id) _mgk.houg = 2;
            else {
                if (150 == _mgh.ship_id || 592 == _mgh.ship_id) _mgk.houg = 1;
                else {
                    if (152 == _mgh.ship_id) _mgk.houg = 1;
                    else {
                        if (151 != _mgh.ship_id && 593 != _mgh.ship_id && 954 != _mgh.ship_id) return _mgj;
                        _mgk.houg = 2, _mgk.tyku = 1, _mgk.kaih = 2;
                    }
                }
            }
            var _mgl = _mgh.get_slotnums(104);
            return _mgj = _mgk.multiply(_mgl);
        };
    },
    32889: (_mgm, _mgn, _mgo) => {
        'use strict';
        var _mgp = null;
        defineModule(_mgn);
        Object.defineProperty(_mgn, '__esModule', {
            'value': true
        }), _mgn.getSlot106PersonalEffect = void 0;
        var _mgq = _mgo(74496);
        _mgn.getSlot106PersonalEffect = function(_mgr) {
            var _mgs = null,
                _mgt = new _mgq.SlotItemEffectModel(),
                _mgu = new _mgq.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mgr.ship_id) >= 0 ? (_mgu.houg += 1, _mgu.tyku += 2, _mgu.souk += 1, _mgu.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mgr.yomi) >= 0 ? (_mgu.tyku += 1, _mgu.souk += 1, _mgu.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mgr.yomi) >= 0 && (_mgu.tyku += 2, _mgu.souk += 1, _mgu.kaih += 2, 663 != _mgr.ship_id && 668 != _mgr.ship_id || (_mgt.houg += 1, _mgt.tyku += 1, _mgt.souk += 1, _mgt.kaih += 1), 668 == _mgr.ship_id && (_mgt.tyku += 1, _mgt.kaih += 1)), !_mgu.exists()) return _mgt;
            var _mgv = _mgr.get_slotnums(106) + _mgr.get_slotnums(450);
            return _mgt.add(_mgu.multiply(_mgv)), _mgt;
        };
    },
    15133: (_mgw, _mgx, _mgy) => {
        'use strict';
        var _mgz = null;
        defineModule(_mgx);
        Object.defineProperty(_mgx, '__esModule', {
            'value': true
        }), _mgx.getSlot115PersonalEffect = void 0;
        var _mh0 = _mgy(74496);
        _mgx.getSlot115PersonalEffect = function(_mh1) {
            var _mh2 = null,
                _mh3 = new _mh0.SlotItemEffectModel(),
                _mh4 = false,
                _mh5 = new _mh0.SlotItemEffectModel(),
                _mh6 = 0;
            if (55 != _mh1.ctype && 47 != _mh1.ctype || (_mh5.houg += 2, _mh5.saku += 2, _mh5.kaih += 1, _mh4 = true, _mh6 = 1), 0 == _mh4) return _mh3;
            var _mh7 = _mh1.get_slotnums(115);
            if (_mh3.add(_mh5.multiply(_mh7)), 0 == _mh6) return _mh3;
            var _mh8 = _mh1.get_each_level_nums(115)[10];
            return 1 == _mh6 && (_mh3.houg += 1 * _mh8, _mh3.kaih += 1 * _mh8), _mh3;
        };
    },
    55747: (_mh9, _mha, _mhb) => {
        'use strict';
        var _mhc = null;
        defineModule(_mha);
        Object.defineProperty(_mha, '__esModule', {
            'value': true
        }), _mha.getSlot118PersonalEffect = void 0;
        var _mhd = _mhb(74496);
        _mha.getSlot118PersonalEffect = function(_mhe) {
            var _mhf = null,
                _mhg = new _mhd.SlotItemEffectModel(),
                _mhh = false,
                _mhi = new _mhd.SlotItemEffectModel(),
                _mhj = 0;
            if (52 == _mhe.ctype && (_mhi.houg += 1, _mhi.saku += 2, _mhi.kaih += 2, _mhj = 1, _mhh = true), 507 == _mhe.ship_id && (_mhi.houg += 3, _mhi.saku += 2, _mhi.kaih += 1, _mhj = 2, _mhh = true), 0 == _mhh) return _mhg;
            var _mhk = _mhe.get_slotnums(118) + _mhe.get_slotnums(521);
            if (_mhg.add(_mhi.multiply(_mhk)), 0 == _mhe.get_slotnums(118)) return _mhg;
            if (0 == _mhj) return _mhg;
            var _mhl = _mhe.get_each_level_nums(118),
                _mhm = 0,
                _mhn = 0,
                _mho = 0,
                _mhp = _mhl[10];
            return _mhl.forEach(function(_mhq, _mhr) {
                _mhr >= 2 && (_mhm += _mhq), _mhr >= 5 && (_mhn += _mhq), _mhr >= 7 && (_mho += _mhq);
            }), 1 == _mhj ? (_mhg.houg += 2 * _mhp, _mhg.saku += 1 * _mhp) : 2 == _mhj && (_mhg.houm += 1 * _mhm, _mhg.kaih += 1 * _mhn, _mhg.houg += 1 * _mho, _mhg.houg += 1 * _mhp, _mhg.raig += 1 * _mhp, _mhg.tyku += 1 * _mhp, _mhg.saku += 1 * _mhp, _mhg.kaih += 1 * _mhp), _mhg;
        };
    },
    11285: (_mhs, _mht, _mhu) => {
        'use strict';
        var _mhv = null;
        defineModule(_mht);
        Object.defineProperty(_mht, '__esModule', {
            'value': true
        }), _mht.getSlot119PersonalEffect = void 0;
        var _mhw = _mhu(74496);
        _mht.getSlot119PersonalEffect = function(_mhx) {
            var _mhy = null,
                _mhz = new _mhw.SlotItemEffectModel(),
                _mi0 = new _mhw.SlotItemEffectModel();
            34 == _mhx.ctype || 56 == _mhx.ctype ? _mi0.houg += 1 : 90 == _mhx.ctype && (_mi0.houg += 2, _mi0.raig += 1);
            var _mi1 = true;
            if (_mi0.exists() || (_mi1 = false), 0 == _mi1) return _mhz;
            var _mi2 = _mhx.get_slotnums(119);
            return _mhz = _mi0.multiply(_mi2);
        };
    },
    96200: (_mi3, _mi4, _mi5) => {
        'use strict';
        var _mi6 = null;
        defineModule(_mi4);
        Object.defineProperty(_mi4, '__esModule', {
            'value': true
        }), _mi4.getSlot120mm50GroupPersonalEffect = void 0;
        var _mi7 = _mi5(74496);
        _mi4.getSlot120mm50GroupPersonalEffect = function(_mi8) {
            var _mi9 = null,
                _mia = new _mi7.SlotItemEffectModel(),
                _mib = false,
                _mic = new _mi7.SlotItemEffectModel(),
                _mid = _mi8.get_slotnums(147),
                _mie = _mi8.get_slotnums(393),
                _mif = _mi8.get_slotnums(394),
                _mig = new _mi7.SlotItemEffectModel(),
                _mih = new _mi7.SlotItemEffectModel();
            if (61 == _mi8.ctype && (_mic.houg += 1, _mic.kaih += 1, _mib = true, _mie >= 1 && (_mig.houg += 1, _mig.tyku += 1), _mif >= 1 && (_mih.houg += 1, _mih.tyku += 1, _mih.kaih += 1, 'グレカーレ' == _mi8.yomi && (_mih.kaih += 1)), 1), 0 == _mib) return _mia;
            var _mii = _mid + _mie + _mif;
            _mia.add(_mic.multiply(_mii)).add(_mig.multiply(_mie)).add(_mih.multiply(_mif));
            var _mij = _mi8.get_each_level_over_nums([394]).slot[394];
            return _mij[7] >= 1 && (_mia.houm += 1 * _mij[7], 'グレカーレ' == _mi8.yomi && (_mia.houg += 1 * _mij[7])), _mij[8] >= 1 && (_mia.houg += 1 * _mij[8]), _mij[9] >= 1 && (_mia.houm += 1 * _mij[9]), _mij[10] >= 1 && (_mia.houg += 1 * _mij[10], 'グレカーレ' == _mi8.yomi && (_mia.kaih += 1 * _mij[10])), _mia;
        };
    },
    33155: function(_mik, _mil, _mim) {
        'use strict';
        var _min = null;
        var _mio = this && this.__importDefault || function(_mip) {
            var _miq = null;
            return _mip && _mip.__esModule ? _mip : {
                'default': _mip
            };
        };
        defineModule(_mil);
        Object.defineProperty(_mil, '__esModule', {
            'value': true
        }), _mil.getSlot121PersonalEffect = void 0;
        var _mir = _mim(74496),
            _mis = _mio(_mim(18622));
        _mil.getSlot121PersonalEffect = function(_mit) {
            var _miu = null,
                _miv = new _mir.SlotItemEffectModel(),
                _miw = 0;
            if (54 == _mit.ctype && (_miv.tyku += 4, _miv.kaih += 2, _miw = 1), 0 == _miw) return _miv;
            for (var _mix = 0, _miy = 0, _miz = _mit.have_slot_ids(); _miy < _miz.length; _miy++) {
                var _mj0 = _miz[_miy],
                    _mj1 = _mis.default.model.slot.getMst(_mj0),
                    _mj2 = _mj1.equipType;
                12 != _mj2 && 13 != _mj2 || (_mj1.sakuteki >= 5 && _mit.get_slotnums(parseInt(_mj0)), _mj1.taiku >= 2 && (_mix += _mit.get_slotnums(parseInt(_mj0))));
            }
            return _mix >= 1 && (_miv.tyku += 2, _miv.kaih += 2), _miv;
        };
    },
    9115: function(_mj3, _mj4, _mj5) {
        'use strict';
        var _mj6 = null;
        var _mj7 = this && this.__importDefault || function(_mj8) {
            var _mj9 = null;
            return _mj8 && _mj8.__esModule ? _mj8 : {
                'default': _mj8
            };
        };
        defineModule(_mj4);
        Object.defineProperty(_mj4, '__esModule', {
            'value': true
        }), _mj4.getSlot122PersonalEffect = void 0;
        var _mja = _mj5(74496),
            _mjb = _mj7(_mj5(18622));
        _mj4.getSlot122PersonalEffect = function(_mjc) {
            var _mjd = null,
                _mje = new _mja.SlotItemEffectModel(),
                _mjf = 0,
                _mjg = 0,
                _mjh = false;
            656 == _mjc.ship_id && (_mjh = true, _mjf = 1, _mjg = 1);
            var _mji = 0,
                _mjj = 0,
                _mjk = _mjc.get_each_level_nums(122),
                _mjl = 0;
            if (_mjh) {
                _mjk.forEach(function(_mjm, _mjn) {
                    _mjn >= 4 && (_mjl += _mjm);
                });
                for (var _mjo = 0, _mjp = _mjc.have_slot_ids(); _mjo < _mjp.length; _mjo++) {
                    var _mjq = _mjp[_mjo],
                        _mjr = _mjb.default.model.slot.getMst(_mjq),
                        _mjs = _mjr.equipType;
                    12 != _mjs && 13 != _mjs || (_mjr.sakuteki >= 5 && (_mji += _mjc.get_slotnums(parseInt(_mjq))), _mjr.taiku >= 2 && (_mjj += _mjc.get_slotnums(parseInt(_mjq))));
                }
            }
            return _mjl > 0 && (1 == _mjg && (_mji > 0 && (_mje.houg += 4, _mje.kaih += 3), _mjj > 0 && (_mje.tyku += 4, _mje.kaih += 3)), 1 == _mjf && (_mje.houg += 5 * _mjl, _mje.tyku += 3 * _mjl, _mje.kaih += 2 * _mjl)), _mje;
        };
    },
    85127: (_mjt, _mju, _mjv) => {
        'use strict';
        var _mjw = null;
        defineModule(_mju);
        Object.defineProperty(_mju, '__esModule', {
            'value': true
        }), _mju.getSlot123PersonalEffect = void 0;
        var _mjx = _mjv(74496);
        _mju.getSlot123PersonalEffect = function(_mjy) {
            var _mjz = null,
                _mk0 = new _mjx.SlotItemEffectModel(),
                _mk1 = (new _mjx.SlotItemEffectModel(), 0),
                _mk2 = (_mjy.get_slotnums(123), _mjy.get_slotnums(124));
            if ('ドイツ' != _mjy.getCountryName()) return _mk0;
            _mk1 = 1, _mk2 >= 1 && (_mk0.kaih += 1 * _mk2);
            var _mk3 = _mjy.get_each_level_over_nums([123, 124]),
                _mk4 = _mk3.slot[123],
                _mk5 = _mk3.slot[124];
            return 1 == _mk1 && (_mk4[5] >= 1 && (_mk0.houg += 1 * _mk4[5]), _mk4[7] >= 1 && (_mk0.houm += 1 * _mk4[7]), _mk4[9] >= 1 && (_mk0.houg += 1 * _mk4[9]), _mk4[10] >= 1 && (_mk0.houm += 1 * _mk4[10]), _mk5[8] >= 1 && (_mk0.kaih += 1 * _mk5[8]), _mk5[10] >= 1 && (_mk0.houm += 1 * _mk5[10])), _mk0;
        };
    },
    87204: (_mk6, _mk7, _mk8) => {
        'use strict';
        var _mk9 = null;
        defineModule(_mk7);
        Object.defineProperty(_mk7, '__esModule', {
            'value': true
        }), _mk7.getSlot124PersonalEffect = void 0;
        var _mka = _mk8(74496);
        _mk7.getSlot124PersonalEffect = function(_mkb) {
            var _mkc = null,
                _mkd = new _mka.SlotItemEffectModel(),
                _mke = (new _mka.SlotItemEffectModel(), 0),
                _mkf = _mkb.getCountryName();
            if ('ドイツ' == _mkf) _mke = 1;
            else {
                if ('イタリア' != _mkf) return _mkd;
                _mke = 2;
            }
            var _mkg = _mkb.get_each_level_over_nums([124]).slot[124];
            return 1 == _mke ? (_mkg[7] >= 1 && (_mkd.houm += 1 * _mkg[7]), _mkg[8] >= 1 && (_mkd.houg += 1 * _mkg[8]), _mkg[9] >= 1 && (_mkd.tyku += 1 * _mkg[9]), _mkg[10] >= 1 && (_mkd.houm += 1 * _mkg[10])) : 2 == _mke && (_mkg[8] >= 1 && (_mkd.houm += 1 * _mkg[8]), _mkg[9] >= 1 && (_mkd.tyku += 1 * _mkg[9]), _mkg[10] >= 1 && (_mkd.houg += 1 * _mkg[10])), _mkd;
        };
    },
    37173: (_mkh, _mki, _mkj) => {
        'use strict';
        var _mkk = null;
        defineModule(_mki);
        Object.defineProperty(_mki, '__esModule', {
            'value': true
        }), _mki.getSlot129PersonalEffect = void 0;
        var _mkl = _mkj(74496);
        _mki.getSlot129PersonalEffect = function(_mkm) {
            var _mkn = null,
                _mko = new _mkl.SlotItemEffectModel(),
                _mkp = false,
                _mkq = new _mkl.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mkm.ctype) >= 0 ? (_mkq.houg = 1, _mkq.raig = 2, _mkq.kaih = 2, _mkq.tais = 2, _mkq.saku = 1, _mkp = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mkm.ctype) >= 0 ? (_mkq.houg = 1, _mkq.raig = 2, _mkq.kaih = 2, _mkq.saku = 3, _mkp = true) : [7, 13, 29, 8, 9, 31].indexOf(_mkm.ctype) >= 0 && (_mkq.houg = 1, _mkq.kaih = 2, _mkq.saku = 3, _mkp = true), 0 == _mkp) return _mko;
            var _mkr = _mkm.get_slotnums(129);
            return _mko = _mkq.multiply(_mkr);
        };
    },
    73254: (_mks, _mkt, _mku) => {
        'use strict';
        var _mkv = null;
        defineModule(_mkt);
        Object.defineProperty(_mkt, '__esModule', {
            'value': true
        }), _mkt.getSlot12PersonalEffect = void 0;
        var _mkw = _mku(74496);
        _mkt.getSlot12PersonalEffect = function(_mkx) {
            var _mky = null,
                _mkz = new _mkw.SlotItemEffectModel(),
                _ml0 = false,
                _ml1 = new _mkw.SlotItemEffectModel(),
                _ml2 = _mkx.get_slotnums(142) + _mkx.get_slotnums(460);
            if (37 == _mkx.ctype && (_ml1.houg += 1, _ml1.kaih += 1, _ml1.houm += 1, _ml2 >= 1 && (_mkz.kaih += 1, _mkz.houm += 1), _ml0 = true), 0 == _ml0) return _mkz;
            var _ml3 = _mkx.get_slotnums(12);
            return _mkz.add(_ml1.multiply(_ml3)), _mkz;
        };
    },
    93373: (_ml4, _ml5, _ml6) => {
        'use strict';
        var _ml7 = null;
        defineModule(_ml5);
        Object.defineProperty(_ml5, '__esModule', {
            'value': true
        }), _ml5.getSlot132PersonalEffect = void 0;
        var _ml8 = _ml6(74496);
        _ml5.getSlot132PersonalEffect = function(_ml9) {
            var _mla = null,
                _mlb = new _ml8.SlotItemEffectModel(),
                _mlc = _ml9.get_each_level_nums(132),
                _mld = 0,
                _mle = 0,
                _mlf = 0,
                _mlg = 0,
                _mlh = 0;
            return _mlc.forEach(function(_mli, _mlj) {
                _mlj >= 3 && (_mld += _mli), _mlj >= 5 && (_mle += _mli), _mlj >= 7 && (_mlf += _mli), _mlj >= 8 && (_mlg += _mli), _mlj >= 9 && (_mlh += _mli);
            }), _mld >= 1 && (_mlb.kaih += 1), _mle >= 1 && (_mlb.tais += 1), _mlf >= 1 && (_mlb.kaih += 1), _mlg >= 1 && (_mlb.tais += 1), _mlh >= 1 && (_mlb.houm += 1), _mlc[10] >= 1 && (_mlb.tais += 1), 911 != _ml9.ship_id && 916 != _ml9.ship_id && 546 != _ml9.ship_id || (_mlb.kaih += 1), 461 != _ml9.ship_id && 466 != _ml9.ship_id && 462 != _ml9.ship_id && 467 != _ml9.ship_id && 156 != _ml9.ship_id || (_mlb.kaih += 2), _mlb;
        };
    },
    88838: (_mlk, _mll, _mlm) => {
        'use strict';
        var _mln = null;
        defineModule(_mll);
        Object.defineProperty(_mll, '__esModule', {
            'value': true
        }), _mll.getSlot136PersonalEffect = void 0;
        var _mlo = _mlm(74496);
        _mll.getSlot136PersonalEffect = function(_mlp) {
            var _mlq = null,
                _mlr = new _mlo.SlotItemEffectModel(),
                _mls = 0;
            if (58 != _mlp.ctype && 61 != _mlp.ctype && 64 != _mlp.ctype && 68 != _mlp.ctype && 80 != _mlp.ctype && 92 != _mlp.ctype && 113 != _mlp.ctype && 124 != _mlp.ctype || (_mlr.souk += 2, _mlr.kaih += 1, _mls = 1), 879 == _mlp.ship_id && (_mlr.souk += 1, _mlr.kaih += 1), 0 == _mls) return _mlr;
            var _mlt = _mlp.get_each_level_nums(136),
                _mlu = 0,
                _mlv = 0,
                _mlw = _mlt[10];
            return _mls > 0 && _mlt.forEach(function(_mlx, _mly) {
                _mly >= 3 && (_mlu += _mlx), _mly >= 6 && (_mlv += _mlx);
            }), 1 == _mls && (_mlu >= 1 && (_mlr.souk += 1 * _mlu), _mlv >= 1 && (_mlr.souk += 1 * _mlv), _mlw >= 1 && (_mlr.souk += 1 * _mlw)), _mlr;
        };
    },
    17274: (_mlz, _mm0, _mm1) => {
        'use strict';
        var _mm2 = null;
        defineModule(_mm0);
        Object.defineProperty(_mm0, '__esModule', {
            'value': true
        }), _mm0.getSlot139PersonalEffect = void 0;
        var _mm3 = _mm1(74496);
        _mm0.getSlot139PersonalEffect = function(_mm4) {
            var _mm5 = null,
                _mm6 = new _mm3.SlotItemEffectModel(),
                _mm7 = false,
                _mm8 = new _mm3.SlotItemEffectModel();
            if (662 != _mm4.ship_id && 663 != _mm4.ship_id && 668 != _mm4.ship_id || (_mm8.houg += 2, _mm8.tyku += 1, _mm7 = true), 0 == _mm7) return _mm6;
            var _mm9 = _mm4.get_slotnums(139);
            return _mm6.add(_mm8.multiply(_mm9)), _mm6;
        };
    },
    21713: (_mma, _mmb, _mmc) => {
        'use strict';
        var _mmd = null;
        defineModule(_mmb);
        Object.defineProperty(_mmb, '__esModule', {
            'value': true
        }), _mmb.getSlot143PersonalEffect = void 0;
        var _mme = _mmc(74496);
        _mmb.getSlot143PersonalEffect = function(_mmf) {
            var _mmg = null,
                _mmh = new _mme.SlotItemEffectModel();
            return 'あかぎ' == _mmf.yomi ? _mmh.houg = 3 : 'かが' == _mmf.yomi || 'しょうかく' == _mmf.yomi ? _mmh.houg = 2 : ('ずいかく' == _mmf.yomi || 'りゅうじょう' == _mmf.yomi) && (_mmh.houg = 1), _mmh;
        };
    },
    59823: (_mmi, _mmj, _mmk) => {
        'use strict';
        var _mml = null;
        defineModule(_mmj);
        Object.defineProperty(_mmj, '__esModule', {
            'value': true
        }), _mmj.getSlot144PersonalEffect = void 0;
        var _mmm = _mmk(74496);
        _mmj.getSlot144PersonalEffect = function(_mmn) {
            var _mmo = null,
                _mmp = new _mmm.SlotItemEffectModel();
            return 'あかぎ' == _mmn.yomi ? _mmp.houg = 3 : 'かが' == _mmn.yomi ? _mmp.houg = 2 : 'しょうかく' == _mmn.yomi ? (_mmp.houg = 2, 461 != _mmn.ship_id && 466 != _mmn.ship_id || (_mmp.houg += 2)) : 'ずいかく' == _mmn.yomi ? (_mmp.houg = 1, 462 != _mmn.ship_id && 467 != _mmn.ship_id || (_mmp.houg += 1)) : 'りゅうじょう' == _mmn.yomi && (_mmp.houg = 1), _mmp;
        };
    },
    57440: (_mmq, _mmr, _mms) => {
        'use strict';
        var _mmt = null;
        defineModule(_mmr);
        Object.defineProperty(_mmr, '__esModule', {
            'value': true
        }), _mmr.getSlot149PersonalEffect = void 0;
        var _mmu = _mms(74496);
        _mmr.getSlot149PersonalEffect = function(_mmv) {
            var _mmw = null,
                _mmx = new _mmu.SlotItemEffectModel(),
                _mmy = new _mmu.SlotItemEffectModel(),
                _mmz = false;
            return 488 == _mmv.ship_id || 141 == _mmv.ship_id || 160 == _mmv.ship_id || 622 == _mmv.ship_id || 623 == _mmv.ship_id || 656 == _mmv.ship_id || 961 == _mmv.ship_id ? (_mmy.tais = 1, _mmy.kaih = 3, _mmz = true) : 624 == _mmv.ship_id ? (_mmy.tais = 3, _mmy.kaih = 5, _mmz = true) : 662 == _mmv.ship_id && (_mmy.tais = 2, _mmy.kaih = 4, _mmz = true), 54 == _mmv.ctype && (_mmy.tais = 1, _mmy.kaih = 2, _mmz = true), 0 == _mmz ? _mmx : _mmx = _mmy.multiply(1);
        };
    },
    29493: (_mn0, _mn1, _mn2) => {
        'use strict';
        var _mn3 = null;
        defineModule(_mn1);
        Object.defineProperty(_mn1, '__esModule', {
            'value': true
        }), _mn1.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mn4 = _mn2(74496);
        _mn1.getSlot14inch45CaliberGunPersonalEffect = function(_mn5) {
            var _mn6 = null,
                _mn7, _mn8, _mn9, _mna = new _mn4.SlotItemEffectModel(),
                _mnb = false,
                _mnc = new _mn4.SlotItemEffectModel(),
                _mnd = {
                    507: 507,
                    508: 507
                },
                _mne = _mn5.get_slotnums(507),
                _mnf = _mn5.get_slotnums(508),
                _mng = _mne + _mnf,
                _mnh = _mn5.getCountryName(),
                _mni = _mn5.getUSSWaterRaderDict();
            if (125 == _mn5.ctype && (_mnc.houg += 1, _mnc.kaih += 1, _mnc.houm += 1, _mnb = true, _mne >= 1 && _mnf >= 1 && (_mna.houg += 1, _mna.houm += 1)), 'アメリカ' == _mnh && _mn5.stype >= 8 && _mn5.stype <= 10) {
                _mnc.houg += 2, _mnc.kaih += 1, _mnc.houm += 1, _mnb = true;
                for (var _mnj = 0, _mnk = 0, _mnl = _mn5.have_slot_ids(); _mnk < _mnl.length; _mnk++) {
                    var _mnm = _mnl[_mnk];
                    _mni[Number(_mnm)] && (_mnj += _mn5.get_slotnums(parseInt(_mnm)));
                }
                _mnj >= 1 && (_mna.houg += 1, _mna.kaih += 1, _mna.houm += 2), _mne >= 1 && _mnf >= 1 && (_mna.houg += 1, _mna.houm += 1, _mna.kaih += 2);
            }
            else 6 != _mn5.ctype && 26 != _mn5.ctype && 2 != _mn5.ctype && 'イギリス' != _mnh || (_mna.kaih += 1, _mna.houm += 1, _mne >= 1 && _mnf >= 1 && (_mna.houg += 1, _mna.houm += 1, _mna.kaih += 1));
            _mnb && _mna.add(_mnc.multiply(_mng));
            for (var _mnn = {}, _mno = {}, _mnp = {}, _mnq = function(_mnr) {
                    var _mns = null,
                        _mnt = Number(_mnr),
                        _mnu = _mnd[_mnt];
                    _mnn[_mnu] = null !== (_mn7 = _mnn[_mnu]) && void 0 !== _mn7 ? _mn7 : 0, _mno[_mnu] = null !== (_mn8 = _mno[_mnu]) && void 0 !== _mn8 ? _mn8 : 0, _mnp[_mnu] = null !== (_mn9 = _mnp[_mnu]) && void 0 !== _mn9 ? _mn9 : 0, _mn5.get_each_level_nums(_mnt).forEach(function(_mnv, _mnw) {
                        _mnw >= 3 && (_mnn[_mnu] += _mnv), _mnw >= 6 && (_mno[_mnu] += _mnv), _mnw >= 9 && (_mnp[_mnu] += _mnv);
                    });
                }, _mnx = 0, _mny = Object.keys(_mnd); _mnx < _mny.length; _mnx++) {
                _mnq(_mny[_mnx]);
            }
            return _mnn[507] >= 1 && (_mna.houg += 1 * _mnn[507]), _mno[507] >= 1 && (_mna.souk += 1 * _mno[507]), _mnp[507] >= 1 && (_mna.houm += 1 * _mnp[507]), _mna;
        };
    },
    66985: (_mnz, _mo0, _mo1) => {
        'use strict';
        var _mo2 = null;
        defineModule(_mo0);
        Object.defineProperty(_mo0, '__esModule', {
            'value': true
        }), _mo0.getSlot15PersonalEffect = void 0;
        var _mo3 = _mo1(74496);
        _mo0.getSlot15PersonalEffect = function(_mo4) {
            var _mo5 = null,
                _mo6 = new _mo3.SlotItemEffectModel(),
                _mo7 = false;
            if ((566 == _mo4.ship_id || 567 == _mo4.ship_id || 568 == _mo4.ship_id || 648 == _mo4.ship_id || 651 == _mo4.ship_id || 656 == _mo4.ship_id || 670 == _mo4.ship_id || 915 == _mo4.ship_id || 951 == _mo4.ship_id || 'たけ' == _mo4.yomi) && (_mo7 = true), 0 == _mo7) return _mo6;
            var _mo8 = _mo4.get_slotnums(15);
            return 30 == _mo4.ctype && (1 == _mo8 ? _mo6.raig = 2 : _mo8 >= 2 && (_mo6.raig = 4)), 'たけ' == _mo4.yomi && (_mo6.raig += 5, _mo6.kaih += 1), _mo6;
        };
    },
    79086: (_mo9, _moa, _mob) => {
        'use strict';
        var _moc = null;
        defineModule(_moa);
        Object.defineProperty(_moa, '__esModule', {
            'value': true
        }), _moa.getSlot165_216PersonalEffect = void 0;
        var _mod = _mob(74496);
        _moa.getSlot165_216PersonalEffect = function(_moe) {
            var _mof = null,
                _mog = new _mod.SlotItemEffectModel();
            return 501 != _moe.ship_id && 506 != _moe.ship_id && 502 != _moe.ship_id && 507 != _moe.ship_id || (_mog.tyku += 2, _mog.kaih += 2), _mog;
        };
    },
    88102: (_moh, _moi, _moj) => {
        'use strict';
        var _mok = null;
        defineModule(_moi);
        Object.defineProperty(_moi, '__esModule', {
            'value': true
        }), _moi.getSlot16M1PersonalEffect = void 0;
        var _mol = _moj(74496);
        _moi.getSlot16M1PersonalEffect = function(_mom) {
            var _mon = null,
                _moo = new _mol.SlotItemEffectModel(),
                _mop = new _mol.SlotItemEffectModel();
            67 == _mom.ctype || 78 == _mom.ctype || 82 == _mom.ctype || 88 == _mom.ctype || 108 == _mom.ctype || 112 == _mom.ctype ? (_mop.houg += 2, _mop.souk += 1, 67 == _mom.ctype && (_mop.kaih -= 2)) : 149 == _mom.ship_id || 150 == _mom.ship_id || 151 == _mom.ship_id || 152 == _mom.ship_id ? (_mop.houg += 1, _mop.souk += 1, _mop.kaih -= 3) : 591 == _mom.ship_id || 592 == _mom.ship_id ? (_mop.houg += 2, _mop.souk += 1, _mop.kaih -= 2) : 593 != _mom.ship_id && 954 != _mom.ship_id || (_mop.houg += 1, _mop.souk += 1, _mop.kaih -= 1);
            var _moq = true;
            if (_mop.exists() || (_moq = false), 0 == _moq) return _moo;
            var _mor = _mom.get_slotnums(298) + _mom.get_slotnums(299) + _mom.get_slotnums(300);
            return _moo = _mop.multiply(_mor);
        };
    },
    29240: (_mos, _mot, _mou) => {
        'use strict';
        var _mov = null;
        defineModule(_mot);
        Object.defineProperty(_mot, '__esModule', {
            'value': true
        }), _mot.getSlot171PersonalEffect = void 0;
        var _mow = _mou(74496);
        _mot.getSlot171PersonalEffect = function(_mox) {
            var _moy = null,
                _moz = new _mow.SlotItemEffectModel(),
                _mp0 = 0;
            'アメリカ' == _mox.getCountryName() && (_mp0 = 1), 65 != _mox.ctype && 93 != _mox.ctype && 102 != _mox.ctype && 107 != _mox.ctype && 125 != _mox.ctype || (_moz.houg += 1, _moz.saku += 1, _mp0 = 2);
            var _mp1 = _mox.get_each_level_nums(171),
                _mp2 = 0,
                _mp3 = 0,
                _mp4 = 0;
            return _mp0 > 0 && (_mp1.map(function(_mp5, _mp6) {
                _mp6 >= 5 && (_mp2 += _mp5), _mp6 >= 3 && (_mp3 += _mp5), _mp6 >= 8 && (_mp4 += _mp5);
            }), 1 != _mp0 && 2 != _mp0 || (_mp1[10] > 0 && (_moz.houg += 1), _mp2 > 0 && (_moz.kaih += 1)), 2 == _mp0 && (_mp3 > 0 && (_moz.saku += 1), _mp4 > 0 && (_moz.saku += 1))), _moz;
        };
    },
    40885: (_mp7, _mp8, _mp9) => {
        'use strict';
        var _mpa = null;
        defineModule(_mp8);
        Object.defineProperty(_mp8, '__esModule', {
            'value': true
        }), _mp8.getSlot174PersonalEffect = void 0;
        var _mpb = _mp9(74496);
        _mp8.getSlot174PersonalEffect = function(_mpc) {
            var _mpd = null,
                _mpe = new _mpb.SlotItemEffectModel(),
                _mpf = new _mpb.SlotItemEffectModel();
            if (66 == _mpc.ctype && (_mpf.raig = 1, _mpf.kaih = 2), 591 == _mpc.ship_id || 592 == _mpc.ship_id || 954 == _mpc.ship_id ? (_mpf.raig += 6, _mpf.kaih += 3) : 593 == _mpc.ship_id ? (_mpf.raig += 5, _mpf.kaih += 2) : 488 != _mpc.ship_id && 622 != _mpc.ship_id && 623 != _mpc.ship_id && 624 != _mpc.ship_id || (_mpf.houg += 2, _mpf.raig += 4, _mpf.kaih += 4), !_mpf.exists()) return _mpe;
            var _mpg = _mpc.get_slotnums(174);
            return _mpe = _mpf.multiply(_mpg);
        };
    },
    19614: (_mph, _mpi, _mpj) => {
        'use strict';
        var _mpk = null;
        defineModule(_mpi);
        Object.defineProperty(_mpi, '__esModule', {
            'value': true
        }), _mpi.getSlot179PersonalEffect = void 0;
        var _mpl = _mpj(74496);
        _mpi.getSlot179PersonalEffect = function(_mpm) {
            var _mpn = null,
                _mpo = new _mpl.SlotItemEffectModel(),
                _mpp = new _mpl.SlotItemEffectModel();
            if (54 == _mpm.ctype && (_mpp.raig = 1), !_mpp.exists()) return _mpo;
            var _mpq = _mpm.get_slotnums(179);
            return _mpo = _mpp.multiply(_mpq);
        };
    },
    87220: (_mpr, _mps, _mpt) => {
        'use strict';
        var _mpu = null;
        defineModule(_mps);
        Object.defineProperty(_mps, '__esModule', {
            'value': true
        }), _mps.getSlot184PersonalEffect = void 0;
        var _mpv = _mpt(74496);
        _mps.getSlot184PersonalEffect = function(_mpw) {
            var _mpx = null,
                _mpy = new _mpv.SlotItemEffectModel(),
                _mpz = new _mpv.SlotItemEffectModel();
            if (68 == _mpw.ctype && (_mpz.houg += 1, _mpz.tyku += 2, _mpz.kaih += 3), !_mpz.exists()) return _mpy;
            var _mq0 = _mpw.get_slotnums(184);
            return _mpy = _mpz.multiply(_mq0);
        };
    },
    81367: (_mq1, _mq2, _mq3) => {
        'use strict';
        var _mq4 = null;
        defineModule(_mq2);
        Object.defineProperty(_mq2, '__esModule', {
            'value': true
        }), _mq2.getSlot188PersonalEffect = void 0;
        var _mq5 = _mq3(74496);
        _mq2.getSlot188PersonalEffect = function(_mq6) {
            var _mq7 = null,
                _mq8 = new _mq5.SlotItemEffectModel(),
                _mq9 = new _mq5.SlotItemEffectModel();
            if (68 == _mq6.ctype && (_mq9.houg += 3, _mq9.tyku += 1, _mq9.kaih += 1), !_mq9.exists()) return _mq8;
            var _mqa = _mq6.get_slotnums(188);
            return _mq8 = _mq9.multiply(_mqa);
        };
    },
    13052: (_mqb, _mqc, _mqd) => {
        'use strict';
        var _mqe = null;
        defineModule(_mqc);
        Object.defineProperty(_mqc, '__esModule', {
            'value': true
        }), _mqc.getSlot189PersonalEffect = void 0;
        var _mqf = _mqd(74496);
        _mqc.getSlot189PersonalEffect = function(_mqg) {
            var _mqh = null,
                _mqi = new _mqf.SlotItemEffectModel(),
                _mqj = new _mqf.SlotItemEffectModel();
            if (68 != _mqg.ctype && 63 != _mqg.ctype || (_mqj.tyku += 1, _mqj.kaih += 2), !_mqj.exists()) return _mqi;
            var _mqk = _mqg.get_slotnums(189);
            return _mqi = _mqj.multiply(_mqk);
        };
    },
    66904: (_mql, _mqm, _mqn) => {
        'use strict';
        var _mqo = null;
        defineModule(_mqm);
        Object.defineProperty(_mqm, '__esModule', {
            'value': true
        }), _mqm.getSlot18_52_PersonalEffect = void 0;
        var _mqp = _mqn(74496);
        _mqm.getSlot18_52_PersonalEffect = function(_mqq) {
            var _mqr = null,
                _mqs = new _mqp.SlotItemEffectModel(),
                _mqt = new _mqp.SlotItemEffectModel();
            if (277 == _mqq.ship_id || 278 == _mqq.ship_id || 156 == _mqq.ship_id ? _mqt.houg = 1 : 594 == _mqq.ship_id || 698 == _mqq.ship_id || 646 == _mqq.ship_id ? (_mqt.houg = 1, _mqt.kaih = 1) : 599 != _mqq.ship_id && 610 != _mqq.ship_id || (_mqt.houg = 2, _mqt.kaih = 1), !_mqt.exists()) return _mqs;
            var _mqu = _mqq.get_slotnums(18) + _mqq.get_slotnums(52);
            return _mqs = _mqt.multiply(_mqu);
        };
    },
    94968: (_mqv, _mqw, _mqx) => {
        'use strict';
        var _mqy = null;
        defineModule(_mqw);
        Object.defineProperty(_mqw, '__esModule', {
            'value': true
        }), _mqw.getSlot194PersonalEffect = void 0;
        var _mqz = _mqx(74496);
        _mqw.getSlot194PersonalEffect = function(_mr0) {
            var _mr1 = null,
                _mr2 = new _mqz.SlotItemEffectModel(),
                _mr3 = new _mqz.SlotItemEffectModel();
            if (70 == _mr0.ctype ? (_mr3.houg += 3, _mr3.kaih += 2, _mr3.saku += 2) : 72 != _mr0.ctype && 62 != _mr0.ctype || (_mr3.kaih += 1, _mr3.saku += 2), 392 == _mr0.ship_id && (_mr3.houg += 1, _mr3.kaih += 2, _mr3.saku += 2), !_mr3.exists()) return _mr2;
            var _mr4 = _mr0.get_slotnums(194);
            return _mr2 = _mr3.multiply(_mr4);
        };
    },
    94781: (_mr5, _mr6, _mr7) => {
        'use strict';
        var _mr8 = null;
        defineModule(_mr6);
        Object.defineProperty(_mr6, '__esModule', {
            'value': true
        }), _mr6.getSlot195PersonalEffect = void 0;
        var _mr9 = _mr7(74496);
        _mr6.getSlot195PersonalEffect = function(_mra) {
            var _mrb = null,
                _mrc = new _mr9.SlotItemEffectModel(),
                _mrd = false,
                _mre = new _mr9.SlotItemEffectModel();
            if ('アメリカ' == _mra.getCountryName() && (_mre.houg += 1, _mrd = true), 0 == _mrd) return _mrc;
            var _mrf = _mra.get_slotnums(195);
            return _mrc.add(_mre.multiply(_mrf));
        };
    },
    98137: (_mrg, _mrh, _mri) => {
        'use strict';
        var _mrj = null;
        defineModule(_mrh);
        Object.defineProperty(_mrh, '__esModule', {
            'value': true
        }), _mrh.getSlot19PersonalEffect = void 0;
        var _mrk = _mri(74496);
        _mrh.getSlot19PersonalEffect = function(_mrl) {
            var _mrm = null,
                _mrn = new _mrk.SlotItemEffectModel(),
                _mro = new _mrk.SlotItemEffectModel();
            if ('ほうしょう' == _mrl.yomi && (_mro.houg = 2, _mro.kaih = 2, _mro.tais = 2, _mro.tyku = 2), 75 != _mrl.ctype && 76 != _mrl.ctype || (_mro.houg = 2, _mro.tais = 3), 7 == _mrl.stype && (_mro.tyku += 1, _mro.kaih += 1), 894 != _mrl.ship_id && 899 != _mrl.ship_id || (_mro.houg += 1, _mro.kaih += 1, _mro.tais += 1, _mro.tyku += 1), !_mro.exists()) return _mrn;
            var _mrp = _mrl.get_slotnums(19);
            return _mrn = _mro.multiply(_mrp);
        };
    },
    48658: (_mrq, _mrr, _mrs) => {
        'use strict';
        var _mrt = null;
        defineModule(_mrr);
        Object.defineProperty(_mrr, '__esModule', {
            'value': true
        }), _mrr.getSlot204PersonalEffect = void 0;
        var _mru = _mrs(74496);
        _mrr.getSlot204PersonalEffect = function(_mrv) {
            var _mrw = null,
                _mrx = new _mru.SlotItemEffectModel();
            if (591 != _mrv.ship_id && 592 != _mrv.ship_id && 593 != _mrv.ship_id && 954 != _mrv.ship_id) return _mrx;
            _mrx.souk = _mrx.souk + 1, _mrx.raig = _mrx.raig + 1;
            for (var _mry = _mrv.get_each_level_nums(204), _mrz = 0, _ms0 = 0; _ms0 <= 10; _ms0++) _ms0 >= 7 && (_mrz += _mry[_ms0]);
            return _mrz > 0 && (_mrx.souk = _mrx.souk + 1), _mry[10] > 0 && (_mrx.raig = _mrx.raig + 1), _mrx;
        };
    },
    2306: (_ms1, _ms2, _ms3) => {
        'use strict';
        var _ms4 = null;
        defineModule(_ms2);
        Object.defineProperty(_ms2, '__esModule', {
            'value': true
        }), _ms2.getSlot217PersonalEffect = void 0;
        var _ms5 = _ms3(74496);
        _ms2.getSlot217PersonalEffect = function(_ms6) {
            var _ms7 = null,
                _ms8 = new _ms5.SlotItemEffectModel(),
                _ms9 = false,
                _msa = new _ms5.SlotItemEffectModel();
            if (501 == _ms6.ship_id || 506 == _ms6.ship_id ? (_msa.houg += 1, _msa.kaih += 3, _msa.tyku += 5, _ms9 = true) : 502 != _ms6.ship_id && 507 != _ms6.ship_id || (_msa.houg += 1, _msa.kaih += 2, _msa.tyku += 4, _ms9 = true), 0 == _ms9) return _ms8;
            var _msb = _ms6.get_slotnums(217);
            return _ms8.add(_msa.multiply(_msb)), _ms8;
        };
    },
    91302: function(_msc, _msd, _mse) {
        'use strict';
        var _msf = null;
        var _msg = this && this.__importDefault || function(_msh) {
            var _msi = null;
            return _msh && _msh.__esModule ? _msh : {
                'default': _msh
            };
        };
        defineModule(_msd);
        Object.defineProperty(_msd, '__esModule', {
            'value': true
        }), _msd.getSlot220PersonalEffect = void 0;
        var _msj = _mse(74496),
            _msk = _msg(_mse(18622));
        _msd.getSlot220PersonalEffect = function(_msl) {
            var _msm = null,
                _msn = new _msj.SlotItemEffectModel(),
                _mso = false,
                _msp = new _msj.SlotItemEffectModel(),
                _msq = 0,
                _msr = 0;
            if (662 == _msl.ship_id || 663 == _msl.ship_id || 668 == _msl.ship_id || 501 == _msl.ship_id || 506 == _msl.ship_id || 502 == _msl.ship_id || 507 == _msl.ship_id ? (_msp.houg += 1, _msp.tyku += 3, _msp.kaih += 2, _mso = true, _msq = 1) : 894 != _msl.ship_id && 899 != _msl.ship_id || (_msp.tyku += 2, _msp.kaih += 2, _mso = true, _msq = 1, _msr = 1), 0 == _mso) return _msn;
            var _mss = _msl.get_slotnums(220);
            _msn.add(_msp.multiply(_mss));
            for (var _mst = 0, _msu = 0, _msv = _msl.have_slot_ids(); _msu < _msv.length; _msu++) {
                var _msw = _msv[_msu],
                    _msx = _msk.default.model.slot.getMst(_msw),
                    _msy = _msx.equipType;
                12 != _msy && 13 != _msy || (_msx.sakuteki >= 5 && _msl.get_slotnums(parseInt(_msw)), _msx.taiku >= 2 && (_mst += _msl.get_slotnums(parseInt(_msw))));
            }
            if (_mst >= 1 && 1 == _msq && (_msn.tyku += 3, _msn.kaih += 3), 0 == _msr) return _msn;
            var _msz = _msl.get_each_level_nums(220)[10];
            return 1 == _msr && _msz > 0 && (_msn.houg += 1 * _msz, _msn.tyku += 1 * _msz, _msn.kaih += 1 * _msz), _msn;
        };
    },
    20418: (_mt0, _mt1, _mt2) => {
        'use strict';
        var _mt3 = null;
        defineModule(_mt1);
        Object.defineProperty(_mt1, '__esModule', {
            'value': true
        }), _mt1.getSlot227PersonalEffect = void 0;
        var _mt4 = _mt2(74496);
        _mt1.getSlot227PersonalEffect = function(_mt5) {
            var _mt6 = null,
                _mt7 = new _mt4.SlotItemEffectModel(),
                _mt8 = _mt5.get_each_level_nums(227),
                _mt9 = 0;
            _mt8.forEach(function(_mta, _mtb) {
                _mtb >= 8 && (_mt9 += _mta);
            }), _mt9 >= 1 && (_mt7.tais += 1 * _mt9);
            var _mtc = _mt8[10];
            return _mtc >= 1 && (_mt7.tais += 1 * _mtc), _mt7;
        };
    },
    1906: (_mtd, _mte, _mtf) => {
        'use strict';
        var _mtg = null;
        defineModule(_mte);
        Object.defineProperty(_mte, '__esModule', {
            'value': true
        }), _mte.getSlot228PersonalEffect = void 0;
        var _mth = _mtf(74496);
        _mte.getSlot228PersonalEffect = function(_mti) {
            var _mtj = null,
                _mtk = new _mth.SlotItemEffectModel(),
                _mtl = new _mth.SlotItemEffectModel();
            if ('ほうしょう' == _mti.yomi && (_mtl.houg = 3, _mtl.kaih = 4, _mtl.tais = 4, _mtl.tyku = 3), 75 != _mti.ctype && 76 != _mti.ctype || (_mtl.houg = 2, _mtl.tais = 5, _mtl.tyku = 1, _mtl.kaih = 1), 7 == _mti.stype && (_mtl.tais += 2, _mtl.tyku += 1, _mtl.kaih += 1), 894 != _mti.ship_id && 899 != _mti.ship_id || (_mtl.houg += 1, _mtl.kaih += 2, _mtl.tais += 2, _mtl.tyku += 1), !_mtl.exists()) return _mtk;
            var _mtm = _mti.get_slotnums(228);
            return _mtk = _mtl.multiply(_mtm);
        };
    },
    61887: function(_mtn, _mto, _mtp) {
        'use strict';
        var _mtq = null;
        var _mtr = this && this.__importDefault || function(_mts) {
            var _mtt = null;
            return _mts && _mts.__esModule ? _mts : {
                'default': _mts
            };
        };
        defineModule(_mto);
        Object.defineProperty(_mto, '__esModule', {
            'value': true
        }), _mto.getSlot229PersonalEffect = void 0;
        var _mtu = _mtp(74496),
            _mtv = _mtr(_mtp(18622));
        _mto.getSlot229PersonalEffect = function(_mtw) {
            var _mtx = null;
            for (var _mty = new _mtu.SlotItemEffectModel(), _mtz = 0, _mu0 = 0, _mu1 = _mtw.have_slots_dict[229]; _mu0 < _mu1.length; _mu0++) {
                _mu1[_mu0].level >= 7 && _mtz++;
            }
            var _mu2 = _mtz,
                _mu3 = 0,
                _mu4 = 0,
                _mu5 = 0,
                _mu6 = _mtw.get_slotnums(229);
            if (622 == _mtw.ship_id || 623 == _mtw.ship_id || 624 == _mtw.ship_id) _mty.houg += 1 * _mu6, _mty.tyku += 1 * _mu6, _mu3 = 2;
            else {
                if (656 == _mtw.ship_id) _mty.houg += 2 * _mu6, _mty.tyku += 3 * _mu6, _mty.tais += 2 * _mu6, _mu3 = 3;
                else {
                    if (0 == _mtz) return _mty;
                }
            }
            if (488 == _mtw.ship_id ? (_mty.tyku += 3 * _mu2, _mu3 = 1) : 220 == _mtw.ship_id ? _mty.tyku += 2 * _mu2 : 23 == _mtw.ship_id ? _mty.tyku += 1 * _mu2 : 160 == _mtw.ship_id ? (_mty.tyku += 2 * _mu2, _mu3 = 1) : 224 == _mtw.ship_id ? _mty.tyku += 1 * _mu2 : 487 == _mtw.ship_id ? (_mty.tyku += 2 * _mu2, _mu3 = 1) : 289 == _mtw.ship_id && (_mty.tyku += 1 * _mu2), (66 == _mtw.ctype || 28 == _mtw.ctype) && (_mty.houg += 1 * _mu2, _mty.tyku += 1 * _mu2, _mu4 = 1), 1 == _mtw.stype && (_mty.houg += 1 * _mu2, _mty.tyku += 1 * _mu2, _mu5 = 1), ('ゆら' == _mtw.yomi || 'なか' == _mtw.yomi || 'きぬ' == _mtw.yomi) && (_mty.houg += 2 * _mu2), 0 == _mu3 + _mu4 + _mu5) return _mty;
            for (var _mu7 = 0, _mu8 = 0, _mu9 = 0, _mua = _mtw.have_slot_ids(); _mu9 < _mua.length; _mu9++) {
                var _mub = _mua[_mu9],
                    _muc = _mtv.default.model.slot.getMst(_mub),
                    _mud = _muc.equipType;
                12 != _mud && 13 != _mud || (_muc.sakuteki >= 5 && (_mu7 += _mtw.get_slotnums(parseInt(_mub))), _muc.taiku >= 2 && (_mu8 += _mtw.get_slotnums(parseInt(_mub))));
            }
            return 1 == _mu3 ? _mu7 > 0 && (_mty.houg += 3, _mty.kaih += 2) : 2 == _mu3 ? (_mu7 > 0 && (_mty.houg += 1, _mty.kaih += 1), _mu8 > 0 && (_mty.tyku += 2, _mty.kaih += 2)) : 3 == _mu3 && (_mu7 > 0 && (_mty.houg += 2, _mty.kaih += 2), _mu8 > 0 && (_mty.tyku += 3, _mty.kaih += 2)), 1 == _mu4 && _mu7 > 0 && (_mty.houg += 2, _mty.kaih += 3), 1 == _mu5 && _mu7 > 0 && (_mty.houg += 1, _mty.kaih += 4), _mty;
        };
    },
    55734: (_mue, _muf, _mug) => {
        'use strict';
        var _muh = null;
        defineModule(_muf);
        Object.defineProperty(_muf, '__esModule', {
            'value': true
        }), _muf.getSlot234PersonalEffect = void 0;
        var _mui = _mug(74496);
        _muf.getSlot234PersonalEffect = function(_muj) {
            var _muk = null,
                _mul = new _mui.SlotItemEffectModel(),
                _mum = false,
                _mun = new _mui.SlotItemEffectModel(),
                _muo = _muj.get_slotnums(142) + _muj.get_slotnums(460);
            if (37 == _muj.ctype && (_mun.houg += 1, _mun.tyku += 1, _mun.kaih += 1, _mun.houm += 1, _muo >= 1 && (_mul.tyku += 1, _mul.kaih += 1, _mul.houm += 1), _mum = true), 0 == _mum) return _mul;
            var _mup = _muj.get_slotnums(234);
            return _mul.add(_mun.multiply(_mup)), _mul;
        };
    },
    17562: function(_muq, _mur, _mus) {
        'use strict';
        var _mut = null;
        var _muu = this && this.__importDefault || function(_muv) {
            var _muw = null;
            return _muv && _muv.__esModule ? _muv : {
                'default': _muv
            };
        };
        defineModule(_mur);
        Object.defineProperty(_mur, '__esModule', {
            'value': true
        }), _mur.getSlot235PersonalEffect = void 0;
        var _mux = _mus(74496),
            _muy = _muu(_mus(18622));
        _mur.getSlot235PersonalEffect = function(_muz) {
            var _mv0 = null,
                _mv1 = new _mux.SlotItemEffectModel(),
                _mv2 = false,
                _mv3 = new _mux.SlotItemEffectModel(),
                _mv4 = 0;
            if (52 != _muz.ctype && 9 != _muz.ctype || (_mv3.houg += 2, _mv3.tyku += 1, _mv2 = true), 321 == _muz.ship_id && (_mv3.houg += 1, _mv3.kaih += 1, _mv4 = 1), 0 == _mv2) return _mv1;
            var _mv5 = _muz.get_slotnums(235);
            if (_mv1.add(_mv3.multiply(_mv5)), 0 == _mv4) return _mv1;
            for (var _mv6 = 0, _mv7 = 0, _mv8 = 0, _mv9 = _muz.have_slot_ids(); _mv8 < _mv9.length; _mv8++) {
                var _mva = _mv9[_mv8],
                    _mvb = _muy.default.model.slot.getMst(_mva),
                    _mvc = _mvb.equipType;
                12 != _mvc && 13 != _mvc || (_mvb.sakuteki >= 5 && (_mv6 += _muz.get_slotnums(parseInt(_mva))), _mvb.taiku >= 2 && (_mv7 += _muz.get_slotnums(parseInt(_mva))));
            }
            return _mv6 >= 1 && 1 == _mv4 && (_mv1.houg += 3, _mv1.kaih += 2), _mv7 >= 1 && 1 == _mv4 && (_mv1.tyku += 3, _mv1.kaih += 3), _mv1;
        };
    },
    47970: (_mvd, _mve, _mvf) => {
        'use strict';
        var _mvg = null;
        defineModule(_mve);
        Object.defineProperty(_mve, '__esModule', {
            'value': true
        }), _mve.getSlot237PersonalEffect = void 0;
        var _mvh = _mvf(74496);
        _mve.getSlot237PersonalEffect = function(_mvi) {
            var _mvj = null,
                _mvk = new _mvh.SlotItemEffectModel(),
                _mvl = new _mvh.SlotItemEffectModel();
            if (553 == _mvi.ship_id) _mvl.houg = 4, _mvl.kaih = 2;
            else {
                if (82 == _mvi.ship_id) _mvl.houg = 3, _mvl.kaih = 1;
                else {
                    if (88 == _mvi.ship_id) _mvl.houg = 3, _mvl.kaih = 1;
                    else {
                        if (554 == _mvi.ship_id) _mvl.houg = 4, _mvl.kaih = 2;
                        else {
                            if (411 == _mvi.ship_id) _mvl.houg = 2;
                            else {
                                if (412 != _mvi.ship_id) return _mvk;
                                _mvl.houg = 2;
                            }
                        }
                    }
                }
            }
            var _mvm = _mvi.get_slotnums(237);
            return _mvk = _mvl.multiply(_mvm);
        };
    },
    14386: (_mvn, _mvo, _mvp) => {
        'use strict';
        var _mvq = null;
        defineModule(_mvo);
        Object.defineProperty(_mvo, '__esModule', {
            'value': true
        }), _mvo.getSlot238_239PersonalEffect = void 0;
        var _mvr = _mvp(74496);
        _mvo.getSlot238_239PersonalEffect = function(_mvs) {
            var _mvt = null,
                _mvu = new _mvr.SlotItemEffectModel();
            return 501 != _mvs.ship_id && 506 != _mvs.ship_id && 502 != _mvs.ship_id && 507 != _mvs.ship_id || (_mvu.kaih += 1, _mvu.raig += 1), _mvu;
        };
    },
    82229: (_mvv, _mvw, _mvx) => {
        'use strict';
        var _mvy = null;
        defineModule(_mvw);
        Object.defineProperty(_mvw, '__esModule', {
            'value': true
        }), _mvw.getSlot242PersonalEffect = void 0;
        var _mvz = _mvx(74496);
        _mvw.getSlot242PersonalEffect = function(_mw0) {
            var _mw1 = null,
                _mw2 = new _mvz.SlotItemEffectModel(),
                _mw3 = false,
                _mw4 = new _mvz.SlotItemEffectModel();
            if (78 == _mw0.ctype && (_mw4.houg += 2, _mw4.kaih += 1, _mw3 = true), 'ほうしょう' == _mw0.yomi && (_mw4.houg += 1, _mw3 = true), 0 == _mw3) return _mw2;
            var _mw5 = _mw0.get_slotnums(242);
            return _mw2.add(_mw4.multiply(_mw5)), _mw2;
        };
    },
    10325: (_mw6, _mw7, _mw8) => {
        'use strict';
        var _mw9 = null;
        defineModule(_mw7);
        Object.defineProperty(_mw7, '__esModule', {
            'value': true
        }), _mw7.getSlot243PersonalEffect = void 0;
        var _mwa = _mw8(74496);
        _mw7.getSlot243PersonalEffect = function(_mwb) {
            var _mwc = null,
                _mwd = new _mwa.SlotItemEffectModel(),
                _mwe = false,
                _mwf = new _mwa.SlotItemEffectModel();
            if (78 == _mwb.ctype && (_mwf.houg += 3, _mwf.kaih += 1, _mwe = true), 'ほうしょう' == _mwb.yomi && (_mwf.houg += 2, _mwe = true), 0 == _mwe) return _mwd;
            var _mwg = _mwb.get_slotnums(243);
            return _mwd.add(_mwf.multiply(_mwg)), _mwd;
        };
    },
    351: (_mwh, _mwi, _mwj) => {
        'use strict';
        var _mwk = null;
        defineModule(_mwi);
        Object.defineProperty(_mwi, '__esModule', {
            'value': true
        }), _mwi.getSlot244PersonalEffect = void 0;
        var _mwl = _mwj(74496);
        _mwi.getSlot244PersonalEffect = function(_mwm) {
            var _mwn = null,
                _mwo = new _mwl.SlotItemEffectModel(),
                _mwp = false,
                _mwq = new _mwl.SlotItemEffectModel();
            if (78 == _mwm.ctype && (_mwq.houg += 4, _mwq.kaih += 2, _mwp = true), 'ほうしょう' == _mwm.yomi && (_mwq.houg += 3, _mwp = true), 0 == _mwp) return _mwo;
            var _mwr = _mwm.get_slotnums(244);
            return _mwo.add(_mwq.multiply(_mwr)), _mwo;
        };
    },
    61977: (_mws, _mwt, _mwu) => {
        'use strict';
        var _mwv = null;
        defineModule(_mwt);
        Object.defineProperty(_mwt, '__esModule', {
            'value': true
        }), _mwt.getSlot247PersonalEffect = void 0;
        var _mww = _mwu(74496);
        _mwt.getSlot247PersonalEffect = function(_mwx) {
            var _mwy = null,
                _mwz = new _mww.SlotItemEffectModel(),
                _mx0 = false,
                _mx1 = new _mww.SlotItemEffectModel(),
                _mx2 = 0;
            if ('フランス' == _mwx.getCountryName() && (_mx1.houg += 2, _mx1.houm += 2, _mx0 = true, _mx2 = 1), 0 == _mx0) return _mwz;
            var _mx3 = _mwx.get_slotnums(247);
            if (_mwz.add(_mx1.multiply(_mx3)), 0 == _mx2) return _mwz;
            var _mx4 = _mwx.get_each_level_nums(247),
                _mx5 = 0,
                _mx6 = 0;
            _mx2 > 0 && _mx4.forEach(function(_mx7, _mx8) {
                _mx8 >= 4 && (_mx5 += _mx7), _mx8 >= 8 && (_mx6 += _mx7);
            });
            var _mx9 = _mx4[10];
            return 1 == _mx2 && (_mx5 >= 1 && (_mwz.houg += 1 * _mx5, _mwz.houm += 1 * _mx5), _mx6 >= 1 && (_mwz.kaih += 1 * _mx6, _mwz.houg += 1 * _mx6, _mwz.houm += 1 * _mx6), _mx9 >= 1 && (_mwz.kaih += 1 * _mx9, _mwz.houm += 1 * _mx9)), _mwz;
        };
    },
    31797: function(_mxa, _mxb, _mxc) {
        'use strict';
        var _mxd = null;
        var _mxe = this && this.__importDefault || function(_mxf) {
            var _mxg = null;
            return _mxf && _mxf.__esModule ? _mxf : {
                'default': _mxf
            };
        };
        defineModule(_mxb);
        Object.defineProperty(_mxb, '__esModule', {
            'value': true
        }), _mxb.getSlot266PersonalEffect2 = _mxb.getSlot266PersonalEffect = void 0;
        var _mxh = _mxc(74496),
            _mxi = _mxe(_mxc(18622));
        _mxb.getSlot266PersonalEffect = function(_mxj) {
            var _mxk = null,
                _mxl = new _mxh.SlotItemEffectModel(),
                _mxm = false;
            if (566 != _mxj.ship_id && 567 != _mxj.ship_id && 568 != _mxj.ship_id && 656 != _mxj.ship_id && 670 != _mxj.ship_id && 915 != _mxj.ship_id && 951 != _mxj.ship_id || (_mxm = true), 0 == _mxm) return _mxl;
            var _mxn = _mxj.get_slotnums(266);
            return 30 == _mxj.ctype && (1 == _mxn ? _mxl.houg = 1 : _mxn >= 2 && (_mxl.houg = 3)), _mxl;
        }, _mxb.getSlot266PersonalEffect2 = function(_mxo) {
            var _mxp = null,
                _mxq = new _mxh.SlotItemEffectModel(),
                _mxr = 0,
                _mxs = new _mxh.SlotItemEffectModel();
            if (23 == _mxo.ctype || 18 == _mxo.ctype ? (_mxs.houg = 1, _mxr = 1) : 30 == _mxo.ctype && (_mxs.houg = 1, _mxr = 2), ('しぐれ' == _mxo.yomi || 'ゆきかぜ' == _mxo.yomi || 'いそかぜ' == _mxo.yomi) && (_mxs.kaih = 1), 961 == _mxo.ship_id && (_mxs.houg += 1, _mxs.houm += 1, _mxs.kaih += 1), !_mxs.exists()) return _mxq;
            var _mxt = _mxo.get_slotnums(266);
            if (_mxq = _mxs.multiply(_mxt), 0 == _mxr) return _mxq;
            for (var _mxu = 0, _mxv = 0, _mxw = _mxo.have_slot_ids(); _mxv < _mxw.length; _mxv++) {
                var _mxx = _mxw[_mxv],
                    _mxy = _mxi.default.model.slot.getMst(_mxx),
                    _mxz = _mxy.equipType;
                (12 == _mxz || 13 == _mxz) && _mxy.sakuteki >= 5 && (_mxu += _mxo.get_slotnums(parseInt(_mxx)));
            }
            return _mxu > 0 && (1 == _mxr ? (_mxq.houg += 1, _mxq.kaih += 1, _mxq.raig += 3) : 2 == _mxr && (_mxq.houg += 2, _mxq.kaih += 1, _mxq.raig += 3)), _mxq;
        };
    },
    45738: function(_my0, _my1, _my2) {
        'use strict';
        var _my3 = null;
        var _my4 = this && this.__importDefault || function(_my5) {
            var _my6 = null;
            return _my5 && _my5.__esModule ? _my5 : {
                'default': _my5
            };
        };
        defineModule(_my1);
        Object.defineProperty(_my1, '__esModule', {
            'value': true
        }), _my1.getSlot267PersonalEffect2 = _my1.getSlot267PersonalEffect = void 0;
        var _my7 = _my2(74496),
            _my8 = _my4(_my2(18622));
        _my1.getSlot267PersonalEffect = function(_my9) {
            var _mya = null,
                _myb = new _my7.SlotItemEffectModel(),
                _myc = 0,
                _myd = 0;
            if (38 == _my9.ctype || 22 == _my9.ctype) _myc = 2, _myd = 1;
            else {
                if (30 != _my9.ctype) return _myb;
                _myc = 1, _myd = 1;
            }
            var _mye = _my9.get_slotnums(267) + _my9.get_slotnums(366);
            return _myb.houg = _myc * _mye, _myb.kaih = _myd * _mye, _myb;
        }, _my1.getSlot267PersonalEffect2 = function(_myf) {
            var _myg = null,
                _myh = new _my7.SlotItemEffectModel(),
                _myi = _myf.get_slotnums(267),
                _myj = _myf.get_slotnums(366),
                _myk = _myi + _myj;
            if (566 != _myf.ship_id && 567 != _myf.ship_id && 568 != _myf.ship_id && 656 != _myf.ship_id && 670 != _myf.ship_id && 915 != _myf.ship_id && 951 != _myf.ship_id || (_myi > 0 && (_myh.houg += 1), 1 == _myj ? (_myh.houg += 1, _myh.tyku += 2) : _myj >= 2 && (_myh.houg += 2, _myh.tyku += 4)), 38 != _myf.ctype && 229 != _myf.ship_id && [648, 961].indexOf(_myf.ship_id) < 0) return _myh;
            var _myl = false,
                _mym = false,
                _myn = false,
                _myo = false,
                _myp = false,
                _myq = false,
                _myr = false,
                _mys = false,
                _myt = false,
                _myu = false,
                _myv = false,
                _myw = 0,
                _myx = 0,
                _myy = 0;
            543 == _myf.ship_id ? (_myh.houg = 1 * _myk, _mym = true) : 229 == _myf.ship_id ? _myn = true : 542 == _myf.ship_id ? (_myh.houg = 1 * _myk, _myo = true) : 563 == _myf.ship_id ? (_myh.houg = 1 * _myk, _myp = true) : 564 == _myf.ship_id ? (_myh.houg = 1 * _myk, _myq = true) : 578 == _myf.ship_id ? (_myh.houg = 1 * _myk, _myr = true) : 569 == _myf.ship_id ? (_myh.houg = 1 * _myk, _mys = true) : 649 == _myf.ship_id ? (_myh.houg = 2 * _myk, _myu = true) : 955 == _myf.ship_id || 960 == _myf.ship_id ? (_myh.houg = 2 * _myk, _myv = true) : 648 == _myf.ship_id ? (_myh.houg = 2 * _myk, _myt = true, _myw = 1, _myx = 1, _myy = 1) : 961 == _myf.ship_id && (_myh.houg = 2 * _myk, _myl = true, _myw = 1, _myx = 1, _myy = 1);
            for (var _myz = 0, _mz0 = 0, _mz1 = 0, _mz2 = _myf.have_slot_ids(); _mz1 < _mz2.length; _mz1++) {
                var _mz3 = _mz2[_mz1],
                    _mz4 = _my8.default.model.slot.getMst(_mz3),
                    _mz5 = _mz4.equipType;
                12 != _mz5 && 13 != _mz5 || (_mz4.sakuteki >= 5 && (_myz += _myf.get_slotnums(parseInt(_mz3))), _mz4.taiku >= 2 && (_mz0 += _myf.get_slotnums(parseInt(_mz3))));
            }
            if (_myz > 0 && _myi > 0 && ((38 == _myf.ctype || _myt) && (_myh.houg += 2, _myh.raig += 3, _myh.kaih += 1, 955 == _myf.ship_id ? _myh.raig -= 1 : 960 == _myf.ship_id && (_myh.raig -= 2)), (_myo || _mym || _myn || _myp || _myq || _myr || _mys || _myt || _myu || _myv) && (_myh.houg += 1, _myh.raig += 3, _myh.kaih += 2)), _myj > 0 && (_myo || _mym || _myp || _myq || _myr || _myn || _mys || _myt || _myu || _myl || _myv)) {
                1 == _myj ? (_myh.tyku += 3, _myh.houg += 1, _myh.houm += 1) : _myj >= 2 && (_myh.tyku += 5, _myh.houg += 3, _myh.houm += 1, 955 == _myf.ship_id && (_myh.houg += 1)), (_mys || _myt) && (_myh.houg += 1, _myh.tyku += 2), _myz > 0 && (_myh.houg += 2, _myh.kaih += 2, _myh.raig += 4, _myh.houm += 2, 960 == _myf.ship_id && (_myh.raig -= 1, _myh.houg += 1)), _mz0 > 0 && (_myh.houg += 1, _myh.kaih += 3, _myh.tyku += 5, _myh.houm += 1);
                var _mz6 = _myf.get_each_level_nums(366),
                    _mz7 = 0,
                    _mz8 = 0;
                _mz6.forEach(function(_mz9, _mza) {
                    _mza >= 5 && (_mz7 += _mz9), _mza >= 8 && (_mz8 += _mz9);
                }), _mz7 >= 1 && (_myh.houm += 1 * _mz7), _mz8 >= 1 && (_myh.houg += 1 * _mz8);
                var _mzb = _mz6[10];
                _mzb >= 1 && (_myh.houm += 1 * _mzb);
            }
            var _mzc = _myf.get_slotnums(129),
                _mzd = _myf.get_slotnums(74),
                _mze = _myf.get_slotnums(412);
            return _myw > 0 && _mzc > 0 && 1 == _myw && (_myh.houg += 2, _myh.kaih += 3, _myh.tyku += 2), _myy > 0 && _mze > 0 && 1 == _myy && (_myh.houg += 2, _myh.kaih += 3, _myh.tyku += 2), _myx > 0 && _mzd > 0 && 1 == _myx && (_myh.houg += 3, _myh.kaih -= 3), _myh;
        };
    },
    23934: (_mzf, _mzg, _mzh) => {
        'use strict';
        var _mzi = null;
        defineModule(_mzg);
        Object.defineProperty(_mzg, '__esModule', {
            'value': true
        }), _mzg.getSlot271PersonalEffect = void 0;
        var _mzj = _mzh(74496);
        _mzg.getSlot271PersonalEffect = function(_mzk) {
            var _mzl = null,
                _mzm = new _mzj.SlotItemEffectModel(),
                _mzn = 0;
            if (508 != _mzk.ship_id && 509 != _mzk.ship_id && 888 != _mzk.ship_id && 883 != _mzk.ship_id || (_mzn = 1), 0 == _mzn) return _mzm;
            var _mzo = _mzk.get_each_level_nums(271),
                _mzp = 0,
                _mzq = 0,
                _mzr = 0,
                _mzs = _mzo[10];
            return _mzn > 0 && _mzo.forEach(function(_mzt, _mzu) {
                _mzu >= 4 && (_mzp += _mzt), _mzu >= 6 && (_mzq += _mzt), _mzu >= 8 && (_mzr += _mzt);
            }), 1 == _mzn && (_mzp >= 1 && (_mzm.houg += 1 * _mzp), _mzq >= 1 && (_mzm.tyku += 2 * _mzq), _mzr >= 1 && (_mzm.kaih += 2 * _mzr), _mzs >= 1 && (_mzm.houg += 1 * _mzs)), _mzm;
        };
    },
    17712: function(_mzv, _mzw, _mzx) {
        'use strict';
        var _mzy = null;
        var _mzz = this && this.__importDefault || function(_n00) {
            var _n01 = null;
            return _n00 && _n00.__esModule ? _n00 : {
                'default': _n00
            };
        };
        defineModule(_mzw);
        Object.defineProperty(_mzw, '__esModule', {
            'value': true
        }), _mzw.getSlot275PersonalEffect = void 0;
        var _n02 = _mzx(74496),
            _n03 = _mzz(_mzx(18622));
        _mzw.getSlot275PersonalEffect = function(_n04) {
            var _n05 = null,
                _n06 = new _n02.SlotItemEffectModel(),
                _n07 = false,
                _n08 = new _n02.SlotItemEffectModel(),
                _n09 = 0,
                _n0a = 0;
            if (894 != _n04.ship_id && 899 != _n04.ship_id || (_n08.houg += 1, _n08.tyku += 3, _n08.kaih += 2, _n07 = true, _n0a = 1, _n09 = 1), 0 == _n07) return _n06;
            var _n0b = _n04.get_slotnums(275);
            _n06.add(_n08.multiply(_n0b));
            var _n0c = 0;
            if (_n09 > 0)
                for (var _n0d = 0, _n0e = _n04.have_slot_ids(); _n0d < _n0e.length; _n0d++) {
                    var _n0f = _n0e[_n0d],
                        _n0g = _n03.default.model.slot.getMst(_n0f),
                        _n0h = _n0g.equipType;
                    12 != _n0h && 13 != _n0h || (_n0g.sakuteki >= 5 && _n04.get_slotnums(parseInt(_n0f)), _n0g.taiku >= 2 && (_n0c += _n04.get_slotnums(parseInt(_n0f))));
                }
            if (1 == _n09 && _n0c > 0 && (_n06.tyku += 3, _n06.kaih += 3), 0 == _n0a) return _n06;
            var _n0i = _n04.get_each_level_nums(275),
                _n0j = 0,
                _n0k = _n0i[10];
            return _n0a > 0 && _n0i.forEach(function(_n0l, _n0m) {
                _n0m >= 7 && (_n0j += _n0l);
            }), 1 == _n0a && (_n0j > 0 && (_n06.tyku += 1 * _n0j, _n06.kaih += 1 * _n0j), _n0k > 0 && (_n06.houg += 1 * _n0k, _n06.tyku += 1 * _n0k, _n06.houm += 1 * _n0k)), _n06;
        };
    },
    93733: (_n0n, _n0o, _n0p) => {
        'use strict';
        var _n0q = null;
        defineModule(_n0o);
        Object.defineProperty(_n0o, '__esModule', {
            'value': true
        }), _n0o.getSlot277PersonalEffect = void 0;
        var _n0r = _n0p(74496);
        _n0o.getSlot277PersonalEffect = function(_n0s) {
            var _n0t = null,
                _n0u = new _n0r.SlotItemEffectModel(),
                _n0v = false,
                _n0w = new _n0r.SlotItemEffectModel();
            if ('アメリカ' != _n0s.getCountryName() && 67 != _n0s.ctype && 78 != _n0s.ctype && 82 != _n0s.ctype && 88 != _n0s.ctype && 108 != _n0s.ctype && 112 != _n0s.ctype || (_n0w.houg += 1, _n0w.kaih += 1, _n0v = true), 83 == _n0s.ctype && (_n0w.houg += 1, _n0w.kaih += 1, _n0w.tyku += 1, _n0v = true), 0 == _n0v) return _n0u;
            var _n0x = _n0s.get_slotnums(277);
            return _n0u.add(_n0w.multiply(_n0x)), _n0u;
        };
    },
    34718: (_n0y, _n0z, _n10) => {
        'use strict';
        var _n11 = null;
        defineModule(_n0z);
        Object.defineProperty(_n0z, '__esModule', {
            'value': true
        }), _n0z.getSlot278PersonalEffect = void 0;
        var _n12 = _n10(74496);
        _n0z.getSlot278PersonalEffect = function(_n13) {
            var _n14 = null,
                _n15 = new _n12.SlotItemEffectModel();
            return 'アメリカ' == _n13.getCountryName() ? (_n15.tyku += 1, _n15.kaih += 3, _n15.saku += 1) : 67 == _n13.ctype || 78 == _n13.ctype || 82 == _n13.ctype || 88 == _n13.ctype || 108 == _n13.ctype || 112 == _n13.ctype ? (_n15.tyku += 1, _n15.kaih += 2) : 96 == _n13.ctype && (_n15.tyku += 1, _n15.kaih += 1), _n15;
        };
    },
    69245: (_n16, _n17, _n18) => {
        'use strict';
        var _n19 = null;
        defineModule(_n17);
        Object.defineProperty(_n17, '__esModule', {
            'value': true
        }), _n17.getSlot279PersonalEffect = void 0;
        var _n1a = _n18(74496);
        _n17.getSlot279PersonalEffect = function(_n1b) {
            var _n1c = null,
                _n1d = new _n1a.SlotItemEffectModel();
            return 'アメリカ' == _n1b.getCountryName() ? (_n1d.houg += 2, _n1d.tyku += 2, _n1d.kaih += 3, _n1d.saku += 2) : 67 == _n1b.ctype || 78 == _n1b.ctype || 82 == _n1b.ctype || 88 == _n1b.ctype || 108 == _n1b.ctype || 112 == _n1b.ctype ? (_n1d.houg += 1, _n1d.tyku += 1, _n1d.kaih += 2, _n1d.saku += 1) : 96 == _n1b.ctype && (_n1d.houg += 1, _n1d.tyku += 1, _n1d.kaih += 1), _n1d;
        };
    },
    18478: (_n1e, _n1f, _n1g) => {
        'use strict';
        var _n1h = null;
        defineModule(_n1f);
        Object.defineProperty(_n1f, '__esModule', {
            'value': true
        }), _n1f.getSlot282PersonalEffect = void 0;
        var _n1i = _n1g(74496);
        _n1f.getSlot282PersonalEffect = function(_n1j) {
            var _n1k = null,
                _n1l = new _n1i.SlotItemEffectModel(),
                _n1m = false,
                _n1n = false;
            147 != _n1j.ship_id && 73 != _n1j.ctype && 81 != _n1j.ctype || (_n1m = true), 'ゆうばり' == _n1j.yomi && (_n1n = true);
            var _n1o = new _n1i.SlotItemEffectModel();
            if ((_n1m || _n1n) && (_n1o.houg += 2, _n1o.souk += 1), !_n1o.exists()) return _n1l;
            var _n1p = _n1j.get_slotnums(282);
            return _n1l = _n1o.multiply(_n1p);
        };
    },
    2899: (_n1q, _n1r, _n1s) => {
        'use strict';
        var _n1t = null;
        defineModule(_n1r);
        Object.defineProperty(_n1r, '__esModule', {
            'value': true
        }), _n1r.getSlot283PersonalEffect = void 0;
        var _n1u = _n1s(74496);
        _n1r.getSlot283PersonalEffect = function(_n1v) {
            var _n1w = null,
                _n1x = new _n1u.SlotItemEffectModel(),
                _n1y = false;
            147 != _n1v.ship_id && 73 != _n1v.ctype && 81 != _n1v.ctype || (_n1y = true);
            var _n1z = new _n1u.SlotItemEffectModel();
            if (_n1y && (_n1z.raig += 3, _n1z.houg += 1, _n1z.souk += 1), !_n1z.exists()) return _n1x;
            var _n20 = _n1v.get_slotnums(283);
            return _n1x = _n1z.multiply(_n20);
        };
    },
    57120: (_n21, _n22, _n23) => {
        'use strict';
        var _n24 = null;
        defineModule(_n22);
        Object.defineProperty(_n22, '__esModule', {
            'value': true
        }), _n22.getSlot285PersonalEffect = void 0;
        var _n25 = _n23(74496);
        _n22.getSlot285PersonalEffect = function(_n26) {
            var _n27 = null,
                _n28 = new _n25.SlotItemEffectModel(),
                _n29 = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_n26.ship_id) >= 0 && (_n29 = true), 0 == _n29) return _n28;
            var _n2a = _n26.get_each_level_nums(285),
                _n2b = _n26.get_slotnums(285);
            _n2b > 2 && (_n2b = 2), _n28.raig = 2 * _n2b, _n28.kaih = 1 * _n2b;
            var _n2c = _n2a[10];
            1 == _n2c && (_n28.houg += 1, _n28.raig += 1), _n2c >= 2 && (_n28.houg += 2, _n28.raig += 1), _n2c >= 3 && (_n28.raig += 3);
            var _n2d = _n26.get_slotnums(285);
            return 903 == _n26.ship_id ? (_n2d >= 2 && (_n28.raig += 2), _n2d >= 3 && (_n28.raig += 2)) : 908 != _n26.ship_id && 959 != _n26.ship_id || (_n2d >= 2 && (_n28.raig += 1), _n2d >= 3 && (_n28.raig += 1)), _n28;
        };
    },
    74985: function(_n2e, _n2f, _n2g) {
        'use strict';
        var _n2h = null;
        var _n2i = this && this.__importDefault || function(_n2j) {
            var _n2k = null;
            return _n2j && _n2j.__esModule ? _n2j : {
                'default': _n2j
            };
        };
        defineModule(_n2f);
        Object.defineProperty(_n2f, '__esModule', {
            'value': true
        }), _n2f.getSlot286PersonalEffect3 = _n2f.getSlot286PersonalEffect2 = _n2f.getSlot286PersonalEffect = void 0;
        var _n2l = _n2g(74496),
            _n2m = _n2i(_n2g(18622));
        _n2f.getSlot286PersonalEffect = function(_n2n) {
            var _n2o = null,
                _n2p = new _n2l.SlotItemEffectModel(),
                _n2q = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975].indexOf(_n2n.ship_id) >= 0 && (_n2q = true), 0 == _n2q) return _n2p;
            var _n2r = _n2n.get_each_level_nums(286),
                _n2s = _n2n.get_slotnums(286);
            _n2s > 2 && (_n2s = 2), _n2p.raig = 2 * _n2s, _n2p.kaih = 1 * _n2s;
            var _n2t = _n2r[10];
            if (1 == _n2t ? _n2p.houg = _n2p.houg + 1 : _n2t >= 2 && (_n2p.houg = _n2p.houg + 2), 30 == _n2n.ctype || 961 == _n2n.ship_id) {
                var _n2u = _n2r[5] + _n2r[6] + _n2r[7] + _n2r[8] + _n2r[9] + _n2r[10];
                1 == _n2u ? _n2p.raig = _n2p.raig + 1 : _n2u >= 2 && (_n2p.raig = _n2p.raig + 2);
            }
            return _n2p;
        }, _n2f.getSlot286PersonalEffect2 = function(_n2v) {
            var _n2w = null,
                _n2x = new _n2l.SlotItemEffectModel(),
                _n2y = false,
                _n2z = 0;
            if ('たけ' == _n2v.yomi && (_n2y = true, _n2z = 1), 0 == _n2y) return _n2x;
            var _n30 = _n2v.get_each_level_nums(286),
                _n31 = 0;
            return _n2z > 0 && _n30.forEach(function(_n32, _n33) {
                _n33 >= 7 && (_n31 += _n32);
            }), 'たけ' == _n2v.yomi && (_n2x.raig += 7, _n2x.kaih += 2, _n31 >= 1 && (_n2x.raig += 2), _n30[10] >= 1 && (_n2x.raig += 2)), _n2x;
        }, _n2f.getSlot286PersonalEffect3 = function(_n34) {
            var _n35 = null,
                _n36 = new _n2l.SlotItemEffectModel(),
                _n37 = false,
                _n38 = new _n2l.SlotItemEffectModel(),
                _n39 = 0;
            if (662 != _n34.ship_id && 663 != _n34.ship_id && 668 != _n34.ship_id || (_n38.raig += 2, _n37 = true, _n39 = 1), 0 == _n37) return _n36;
            var _n3a = _n34.get_slotnums(286);
            _n36.add(_n38.multiply(_n3a));
            for (var _n3b = 0, _n3c = 0, _n3d = _n34.have_slot_ids(); _n3c < _n3d.length; _n3c++) {
                var _n3e = _n3d[_n3c],
                    _n3f = _n2m.default.model.slot.getMst(_n3e),
                    _n3g = _n3f.equipType;
                12 != _n3g && 13 != _n3g || (_n3f.sakuteki >= 5 && (_n3b += _n34.get_slotnums(parseInt(_n3e))), _n3f.taiku >= 2 && _n34.get_slotnums(parseInt(_n3e)));
            }
            return _n3b >= 1 && 1 == _n39 && (_n36.raig += 3, _n36.kaih += 2), _n36;
        };
    },
    9234: (_n3h, _n3i, _n3j) => {
        'use strict';
        var _n3k = null;
        defineModule(_n3i);
        Object.defineProperty(_n3i, '__esModule', {
            'value': true
        }), _n3i.getSlot287PersonalEffect = void 0;
        var _n3l = _n3j(74496);
        _n3i.getSlot287PersonalEffect = function(_n3m) {
            var _n3n = null,
                _n3o = new _n3l.SlotItemEffectModel(),
                _n3p = new _n3l.SlotItemEffectModel(),
                _n3q = false;
            if (488 == _n3m.ship_id || 141 == _n3m.ship_id || 160 == _n3m.ship_id || 624 == _n3m.ship_id || 656 == _n3m.ship_id ? (_n3p.tais = 1, _n3p.kaih = 1, _n3q = true) : 662 != _n3m.ship_id && 961 != _n3m.ship_id || (_n3p.tais = 3, _n3q = true), 0 == _n3q) return _n3o;
            var _n3r = _n3m.get_slotnums(287);
            return _n3o = _n3p.multiply(_n3r);
        };
    },
    30802: (_n3s, _n3t, _n3u) => {
        'use strict';
        var _n3v = null;
        defineModule(_n3t);
        Object.defineProperty(_n3t, '__esModule', {
            'value': true
        }), _n3t.getSlot288PersonalEffect = void 0;
        var _n3w = _n3u(74496);
        _n3t.getSlot288PersonalEffect = function(_n3x) {
            var _n3y = null,
                _n3z = new _n3w.SlotItemEffectModel(),
                _n40 = new _n3w.SlotItemEffectModel(),
                _n41 = false;
            if (488 == _n3x.ship_id || 141 == _n3x.ship_id || 160 == _n3x.ship_id || 656 == _n3x.ship_id ? (_n40.tais = 2, _n40.kaih = 1, _n41 = true) : 624 == _n3x.ship_id ? (_n40.houg = 1, _n40.tais = 3, _n40.kaih = 2, _n41 = true) : 662 != _n3x.ship_id && 961 != _n3x.ship_id || (_n40.tais = 4, _n40.kaih = 1, _n41 = true), 0 == _n41) return _n3z;
            var _n42 = _n3x.get_slotnums(288);
            return _n3z = _n40.multiply(_n42);
        };
    },
    97002: function(_n43, _n44, _n45) {
        'use strict';
        var _n46 = null;
        var _n47 = this && this.__importDefault || function(_n48) {
            var _n49 = null;
            return _n48 && _n48.__esModule ? _n48 : {
                'default': _n48
            };
        };
        defineModule(_n44);
        Object.defineProperty(_n44, '__esModule', {
            'value': true
        }), _n44.getSlot289PersonalEffect = void 0;
        var _n4a = _n45(74496),
            _n4b = _n47(_n45(18622));
        _n44.getSlot289PersonalEffect = function(_n4c) {
            var _n4d = null,
                _n4e = new _n4a.SlotItemEffectModel(),
                _n4f = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3
                },
                _n4g = 0,
                _n4h = new _n4a.SlotItemEffectModel();
            if (149 == _n4c.ship_id || 591 == _n4c.ship_id) _n4h.houg = 2, _n4h.tyku = 1, _n4g = 1;
            else {
                if (150 == _n4c.ship_id || 592 == _n4c.ship_id) _n4h.houg = 1;
                else {
                    if (152 == _n4c.ship_id) _n4h.houg = 1;
                    else {
                        if (151 != _n4c.ship_id && 593 != _n4c.ship_id && 954 != _n4c.ship_id) return _n4e;
                        _n4h.houg = 2, _n4h.tyku = 2, _n4h.kaih = 2, _n4g = 1;
                    }
                }
            }
            var _n4i = _n4c.get_slotnums(289);
            if (_n4e = _n4h.multiply(_n4i), _n4f[_n4c.ship_id]) {
                var _n4j = _n4c.get_each_level_nums(289),
                    _n4k = new Array();
                _n4j.forEach(function(_n4l, _n4m) {
                    var _n4n = null;
                    for (var _n4o = 1; _n4o <= _n4c.SLOT_LEVEL_MAX; _n4o++) _n4m >= _n4o && (null == _n4k[_n4o] && (_n4k[_n4o] = 0), _n4k[_n4o] += _n4l);
                });
                var _n4p = _n4f[_n4c.ship_id];
                1 == _n4p ? (_n4k[1] >= 1 && (_n4e.kaih += 1 * _n4k[1]), _n4k[3] >= 1 && (_n4e.tyku = _n4e.tyku + 1 * _n4k[3]), _n4k[5] >= 1 && (_n4e.houg = _n4e.houg + 1 * _n4k[5]), _n4k[7] >= 1 && (_n4e.kaih += 1 * _n4k[7]), _n4k[8] >= 1 && (_n4e.tyku += 1 * _n4k[8]), _n4k[9] >= 1 && (_n4e.houg += 1 * _n4k[9]), _n4k[10] >= 1 && (_n4e.kaih += 1 * _n4k[10])) : 2 == _n4p ? (_n4k[4] >= 1 && (_n4e.tyku += 1 * _n4k[4]), _n4k[6] >= 1 && (_n4e.kaih += 1 * _n4k[6]), _n4k[8] >= 1 && (_n4e.houg += 1 * _n4k[8]), _n4k[10] >= 1 && (_n4e.kaih += 1 * _n4k[10])) : 3 == _n4p && (_n4k[7] >= 1 && (_n4e.tyku += 1 * _n4k[7]), _n4k[9] >= 1 && (_n4e.houg += 1 * _n4k[9]), _n4k[10] >= 1 && (_n4e.kaih += 1 * _n4k[10]));
            }
            if (0 == _n4g) return _n4e;
            for (var _n4q = 0, _n4r = 0, _n4s = _n4c.have_slot_ids(); _n4r < _n4s.length; _n4r++) {
                var _n4t = _n4s[_n4r],
                    _n4u = _n4b.default.model.slot.getMst(_n4t),
                    _n4v = _n4u.equipType;
                (12 == _n4v || 13 == _n4v) && _n4u.sakuteki >= 5 && (_n4q += _n4c.get_slotnums(parseInt(_n4t)));
            }
            return _n4q > 0 && (_n4e.houg += 2, _n4e.kaih += 2), _n4e;
        };
    },
    16748: function(_n4w, _n4x, _n4y) {
        'use strict';
        var _n4z = null;
        var _n50 = this && this.__importDefault || function(_n51) {
            var _n52 = null;
            return _n51 && _n51.__esModule ? _n51 : {
                'default': _n51
            };
        };
        defineModule(_n4x);
        Object.defineProperty(_n4x, '__esModule', {
            'value': true
        }), _n4x.getSlot290PersonalEffect = void 0;
        var _n53 = _n4y(74496),
            _n54 = _n50(_n4y(18622));
        _n4x.getSlot290PersonalEffect = function(_n55) {
            var _n56 = null,
                _n57 = new _n53.SlotItemEffectModel(),
                _n58 = 0,
                _n59 = new _n53.SlotItemEffectModel();
            if (411 == _n55.ship_id) _n59.houg = 1;
            else {
                if (412 == _n55.ship_id) _n59.houg = 1;
                else {
                    if (82 == _n55.ship_id) _n59.houg = 2, _n59.tyku = 2, _n59.kaih = 1, _n58 = 1;
                    else {
                        if (553 == _n55.ship_id) _n59.houg = 3, _n59.tyku = 2, _n59.kaih = 1, _n59.houm = 3, _n58 = 1;
                        else {
                            if (88 == _n55.ship_id) _n59.houg = 2, _n59.tyku = 2, _n59.kaih = 1, _n58 = 1;
                            else {
                                if (554 != _n55.ship_id) return _n57;
                                _n59.houg = 3, _n59.tyku = 2, _n59.kaih = 2, _n59.houm = 3, _n58 = 1;
                            }
                        }
                    }
                }
            }
            var _n5a = _n55.get_slotnums(290);
            if (_n57 = _n59.multiply(_n5a), 0 == _n58) return _n57;
            for (var _n5b = 0, _n5c = 0, _n5d = _n55.have_slot_ids(); _n5c < _n5d.length; _n5c++) {
                var _n5e = _n5d[_n5c],
                    _n5f = _n54.default.model.slot.getMst(_n5e),
                    _n5g = _n5f.equipType;
                (12 == _n5g || 13 == _n5g) && _n5f.taiku >= 2 && (_n5b += _n55.get_slotnums(parseInt(_n5e)));
            }
            return _n5b > 0 && (_n57.tyku += 2, _n57.kaih += 3), _n57;
        };
    },
    53618: (_n5h, _n5i, _n5j) => {
        'use strict';
        var _n5k = null;
        defineModule(_n5i);
        Object.defineProperty(_n5i, '__esModule', {
            'value': true
        }), _n5i.getSlot291PersonalEffect = void 0;
        var _n5l = _n5j(74496);
        _n5i.getSlot291PersonalEffect = function(_n5m) {
            var _n5n = null,
                _n5o = new _n5l.SlotItemEffectModel(),
                _n5p = new _n5l.SlotItemEffectModel();
            if (553 == _n5m.ship_id) _n5p.houg = 6, _n5p.kaih = 1;
            else {
                if (554 != _n5m.ship_id) return _n5o;
                _n5p.houg = 6, _n5p.kaih = 1;
            }
            var _n5q = _n5m.get_slotnums(291);
            return _n5o = _n5p.multiply(_n5q);
        };
    },
    72573: (_n5r, _n5s, _n5t) => {
        'use strict';
        var _n5u = null;
        defineModule(_n5s);
        Object.defineProperty(_n5s, '__esModule', {
            'value': true
        }), _n5s.getSlot292PersonalEffect = void 0;
        var _n5v = _n5t(74496);
        _n5s.getSlot292PersonalEffect = function(_n5w) {
            var _n5x = null,
                _n5y = new _n5v.SlotItemEffectModel(),
                _n5z = new _n5v.SlotItemEffectModel();
            if (553 == _n5w.ship_id) _n5z.houg = 8, _n5z.kaih = 2, _n5z.tyku = 1;
            else {
                if (554 != _n5w.ship_id) return _n5y;
                _n5z.houg = 8, _n5z.kaih = 2, _n5z.tyku = 1;
            }
            var _n60 = _n5w.get_slotnums(292);
            return _n5y = _n5z.multiply(_n60);
        };
    },
    8955: function(_n61, _n62, _n63) {
        'use strict';
        var _n64 = null;
        var _n65 = this && this.__importDefault || function(_n66) {
            var _n67 = null;
            return _n66 && _n66.__esModule ? _n66 : {
                'default': _n66
            };
        };
        defineModule(_n62);
        Object.defineProperty(_n62, '__esModule', {
            'value': true
        }), _n62.getSlot293PersonalEffect = void 0;
        var _n68 = _n63(74496),
            _n69 = _n65(_n63(18622));
        _n62.getSlot293PersonalEffect = function(_n6a) {
            var _n6b = null,
                _n6c = new _n68.SlotItemEffectModel(),
                _n6d = new _n68.SlotItemEffectModel(),
                _n6e = 0;
            if (66 == _n6a.ctype || 28 == _n6a.ctype) _n6d.houg = 2, _n6d.tyku = 1, _n6d.kaih = 3, _n6e = 1;
            else {
                if (74 != _n6a.ctype && 77 != _n6a.ctype) return _n6c;
                _n6d.houg = 1, _n6d.tyku = 1, _n6d.kaih = 2, _n6e = 2;
            }
            var _n6f = _n6a.get_slotnums(293);
            _n6c = _n6d.multiply(_n6f);
            for (var _n6g = 0, _n6h = 0, _n6i = _n6a.have_slot_ids(); _n6h < _n6i.length; _n6h++) {
                var _n6j = _n6i[_n6h],
                    _n6k = _n69.default.model.slot.getMst(_n6j),
                    _n6l = _n6k.equipType;
                (12 == _n6l || 13 == _n6l) && _n6k.sakuteki >= 5 && (_n6g += _n6a.get_slotnums(parseInt(_n6j)));
            }
            var _n6m = _n6a.get_slotnums(174);
            return 1 == _n6e ? (_n6g > 0 && (_n6c.houg += 2, _n6c.kaih += 3, _n6c.raig += 1), 1 == _n6m ? (_n6c.houg += 2, _n6c.raig += 4) : _n6m >= 2 && (_n6c.houg += 3, _n6c.raig += 7)) : 2 == _n6e && _n6g > 0 && (_n6c.houg += 2, _n6c.kaih += 3, _n6c.tais += 1), _n6c;
        };
    },
    98947: function(_n6n, _n6o, _n6p) {
        'use strict';
        var _n6q = null;
        var _n6r = this && this.__importDefault || function(_n6s) {
            var _n6t = null;
            return _n6s && _n6s.__esModule ? _n6s : {
                'default': _n6s
            };
        };
        defineModule(_n6o);
        Object.defineProperty(_n6o, '__esModule', {
            'value': true
        }), _n6o.getSlot294PersonalEffect = void 0;
        var _n6u = _n6p(74496),
            _n6v = _n6r(_n6p(18622));
        _n6o.getSlot294PersonalEffect = function(_n6w) {
            var _n6x = null,
                _n6y = new _n6u.SlotItemEffectModel(),
                _n6z = new _n6u.SlotItemEffectModel(),
                _n70 = 0,
                _n71 = _n6w.get_slotnums(294);
            if (12 != _n6w.ctype && 1 != _n6w.ctype && 5 != _n6w.ctype) return _n6y;
            _n6z.houg = 1, 959 == _n6w.ship_id && (_n6z.houg += 1, _n71 >= 2 && (_n6y.houg += 2), _n71 >= 3 && (_n6y.houg += 3), _n70 = 1), _n6y.add(_n6z.multiply(_n71));
            for (var _n72 = 0, _n73 = 0, _n74 = _n6w.have_slot_ids(); _n73 < _n74.length; _n73++) {
                var _n75 = _n74[_n73],
                    _n76 = _n6v.default.model.slot.getMst(_n75),
                    _n77 = _n76.equipType;
                (12 == _n77 || 13 == _n77) && _n76.sakuteki >= 5 && (_n72 += _n6w.get_slotnums(parseInt(_n75)));
            }
            var _n78 = _n6w.get_slotnums(13),
                _n79 = _n6w.get_slotnums(125),
                _n7a = _n6w.get_slotnums(285),
                _n7b = _n78 + _n79 + _n7a;
            if (_n72 > 0 && (_n6y.houg += 3, _n6y.kaih += 2, _n6y.raig += 1), 1 == _n7b ? (_n6y.houg += 1, _n6y.raig += 3) : _n7b >= 2 && (_n6y.houg += 2, _n6y.raig += 5), _n7a >= 1 && (_n6y.raig += 1), 0 == _n70) return _n6y;
            var _n7c = _n6w.get_each_level_nums(294),
                _n7d = [];
            return _n70 > 0 && _n7c.forEach(function(_n7e, _n7f) {
                var _n7g = null;
                for (var _n7h = 1; _n7h <= _n6w.SLOT_LEVEL_MAX; _n7h++) null == _n7d[_n7h] && (_n7d[_n7h] = 0), _n7f >= _n7h && (_n7d[_n7h] += _n7e);
            }), 1 == _n70 && (_n7d[6] >= 1 && (_n6y.houm += 4 * _n7d[6]), _n7d[7] >= 1 && (_n6y.houg = _n6y.houg + 6 * _n7d[7]), _n7d[8] >= 1 && (_n6y.houg = _n6y.houg + 1 * _n7d[8]), _n7d[9] >= 1 && (_n6y.houg = _n6y.houg + 1 * _n7d[9]), _n7d[10] >= 1 && (_n6y.houg += 1 * _n7d[10])), _n6y;
        };
    },
    44726: function(_n7i, _n7j, _n7k) {
        'use strict';
        var _n7l = null;
        var _n7m = this && this.__importDefault || function(_n7n) {
            var _n7o = null;
            return _n7n && _n7n.__esModule ? _n7n : {
                'default': _n7n
            };
        };
        defineModule(_n7j);
        Object.defineProperty(_n7j, '__esModule', {
            'value': true
        }), _n7j.getSlot295PersonalEffect = void 0;
        var _n7p = _n7k(74496),
            _n7q = _n7m(_n7k(18622));
        _n7j.getSlot295PersonalEffect = function(_n7r) {
            var _n7s = null,
                _n7t = new _n7p.SlotItemEffectModel(),
                _n7u = new _n7p.SlotItemEffectModel(),
                _n7v = _n7r.get_slotnums(295);
            if (12 != _n7r.ctype && 1 != _n7r.ctype && 5 != _n7r.ctype) return _n7t;
            _n7u.houg = 2, _n7u.tyku = 2, 666 == _n7r.ship_id ? (_n7u.houg += 1, _n7u.tyku += 1, _n7u.tais += 1) : 959 == _n7r.ship_id && (_n7u.houg += 2, _n7v >= 2 && (_n7t.houg += 2), _n7v >= 3 && (_n7t.houg += 3)), _n7t.add(_n7u.multiply(_n7v));
            for (var _n7w = 0, _n7x = 0, _n7y = 0, _n7z = _n7r.have_slot_ids(); _n7y < _n7z.length; _n7y++) {
                var _n80 = _n7z[_n7y],
                    _n81 = _n7q.default.model.slot.getMst(_n80),
                    _n82 = _n81.equipType;
                12 != _n82 && 13 != _n82 || (_n81.sakuteki >= 5 && (_n7w += _n7r.get_slotnums(parseInt(_n80))), _n81.taiku >= 2 && (_n7x += _n7r.get_slotnums(parseInt(_n80))));
            }
            var _n83 = _n7r.get_slotnums(13),
                _n84 = _n7r.get_slotnums(125),
                _n85 = _n7r.get_slotnums(285),
                _n86 = _n83 + _n84 + _n85;
            return _n7w > 0 && (_n7t.houg += 3, _n7t.kaih += 2, _n7t.raig += 1), 1 == _n86 ? (_n7t.houg += 1, _n7t.raig += 3) : _n86 >= 2 && (_n7t.houg += 2, _n7t.raig += 5), _n85 >= 1 && (_n7t.raig += 1), _n7x > 0 && (_n7t.tyku += 6), _n7t;
        };
    },
    93065: function(_n87, _n88, _n89) {
        'use strict';
        var _n8a = null;
        var _n8b = this && this.__importDefault || function(_n8c) {
            var _n8d = null;
            return _n8c && _n8c.__esModule ? _n8c : {
                'default': _n8c
            };
        };
        defineModule(_n88);
        Object.defineProperty(_n88, '__esModule', {
            'value': true
        }), _n88.getSlot296PersonalEffect = void 0;
        var _n8e = _n89(74496),
            _n8f = _n8b(_n89(18622));
        _n88.getSlot296PersonalEffect = function(_n8g) {
            var _n8h = null,
                _n8i = new _n8e.SlotItemEffectModel(),
                _n8j = new _n8e.SlotItemEffectModel();
            1 != _n8g.ctype && 5 != _n8g.ctype && 10 != _n8g.ctype && 23 != _n8g.ctype || (_n8j.houg += 1), 10 != _n8g.ctype && 23 != _n8g.ctype || (_n8j.kaih += 1), 145 == _n8g.ship_id || 961 == _n8g.ship_id ? (_n8j.houg += 1, _n8j.tyku += 1) : 144 == _n8g.ship_id ? (_n8j.houg += 1, _n8j.raig += 1) : 469 == _n8g.ship_id || 588 == _n8g.ship_id || 667 == _n8g.ship_id || 587 == _n8g.ship_id || 242 == _n8g.ship_id ? _n8j.kaih += 1 : 497 == _n8g.ship_id ? (_n8j.houg += 1, _n8j.kaih += 1) : 244 == _n8g.ship_id ? _n8j.kaih += 1 : 498 == _n8g.ship_id || 975 == _n8g.ship_id ? (_n8j.tyku += 1, _n8j.kaih += 1) : 627 == _n8g.ship_id ? (_n8j.houg += 2, _n8j.raig += 1) : 903 != _n8g.ship_id && 908 != _n8g.ship_id || (_n8j.houg += 3);
            var _n8k = true;
            if (_n8j.exists() || (_n8k = false), 0 == _n8k) return _n8i;
            var _n8l = _n8g.get_slotnums(296);
            _n8i = _n8j.multiply(_n8l);
            var _n8m = 0;
            if (1 != _n8g.ctype && 5 != _n8g.ctype && 10 != _n8g.ctype || (_n8m = 1), 23 == _n8g.ctype && (_n8m = 2), 0 == _n8m) return _n8i;
            for (var _n8n = 0, _n8o = 0, _n8p = 0, _n8q = _n8g.have_slot_ids(); _n8p < _n8q.length; _n8p++) {
                var _n8r = _n8q[_n8p],
                    _n8s = _n8f.default.model.slot.getMst(_n8r),
                    _n8t = _n8s.equipType;
                12 != _n8t && 13 != _n8t || (_n8s.sakuteki >= 5 && (_n8n += _n8g.get_slotnums(parseInt(_n8r))), _n8s.taiku >= 2 && (_n8o += _n8g.get_slotnums(parseInt(_n8r))));
            }
            return _n8n > 0 && (1 == _n8m ? (_n8i.houg += 1, _n8i.kaih += 2, _n8i.raig += 2) : 2 == _n8m && (_n8i.houg += 1, _n8i.kaih += 2, _n8i.raig += 3)), _n8g.get_slotnums(285) + _n8g.get_slotnums(125) >= 1 && 1 == _n8m && (_n8i.houg += 1, _n8i.raig += 3), _n8g.get_slotnums(15) + _n8g.get_slotnums(286) >= 1 && 2 == _n8m && (_n8i.houg += 1, _n8i.raig += 3), _n8o > 0 && (1 == _n8m ? _n8i.tyku += 5 : 2 == _n8m && (_n8i.tyku += 6)), _n8i;
        };
    },
    85767: (_n8u, _n8v, _n8w) => {
        'use strict';
        var _n8x = null;
        defineModule(_n8v);
        Object.defineProperty(_n8v, '__esModule', {
            'value': true
        }), _n8v.getSlot297PersonalEffect = void 0;
        var _n8y = _n8w(74496);
        _n8v.getSlot297PersonalEffect = function(_n8z) {
            var _n90 = null,
                _n91 = new _n8y.SlotItemEffectModel(),
                _n92 = new _n8y.SlotItemEffectModel();
            if (12 == _n8z.ctype) _n92.kaih = 2;
            else {
                if (1 != _n8z.ctype && 5 != _n8z.ctype) return _n91;
                _n92.kaih = 1;
            }
            var _n93 = _n8z.get_slotnums(297);
            return _n91 = _n92.multiply(_n93);
        };
    },
    38314: (_n94, _n95, _n96) => {
        'use strict';
        var _n97 = null;
        defineModule(_n95);
        Object.defineProperty(_n95, '__esModule', {
            'value': true
        }), _n95.getSlot301PersonalEffect = void 0;
        var _n98 = _n96(74496);
        _n95.getSlot301PersonalEffect = function(_n99) {
            var _n9a = null,
                _n9b = new _n98.SlotItemEffectModel(),
                _n9c = new _n98.SlotItemEffectModel();
            67 != _n99.ctype && 78 != _n99.ctype && 82 != _n99.ctype && 88 != _n99.ctype && 108 != _n99.ctype && 112 != _n99.ctype || (_n9c.tyku += 2, _n9c.kaih += 1, _n9c.souk += 1);
            var _n9d = true;
            if (_n9c.exists() || (_n9d = false), 0 == _n9d) return _n9b;
            var _n9e = _n99.get_slotnums(301);
            return _n9b = _n9c.multiply(_n9e);
        };
    },
    59747: (_n9f, _n9g, _n9h) => {
        'use strict';
        var _n9i = null;
        defineModule(_n9g);
        Object.defineProperty(_n9g, '__esModule', {
            'value': true
        }), _n9g.getSlot302PersonalEffect = void 0;
        var _n9j = _n9h(74496);
        _n9g.getSlot302PersonalEffect = function(_n9k) {
            var _n9l = null,
                _n9m = new _n9j.SlotItemEffectModel(),
                _n9n = new _n9j.SlotItemEffectModel();
            if (76 == _n9k.ctype && (_n9n.tais = 1, _n9n.kaih = 1), !_n9n.exists()) return _n9m;
            var _n9o = _n9k.get_slotnums(302);
            return _n9m = _n9n.multiply(_n9o);
        };
    },
    40649: (_n9p, _n9q, _n9r) => {
        'use strict';
        var _n9s = null;
        defineModule(_n9q);
        Object.defineProperty(_n9q, '__esModule', {
            'value': true
        }), _n9q.getSlot303PersonalEffect = void 0;
        var _n9t = _n9r(74496);
        _n9q.getSlot303PersonalEffect = function(_n9u) {
            var _n9v = null,
                _n9w = new _n9t.SlotItemEffectModel(),
                _n9x = new _n9t.SlotItemEffectModel();
            if (16 == _n9u.ctype || 4 == _n9u.ctype || 20 == _n9u.ctype || 41 == _n9u.ctype ? (_n9x.houg = 1, _n9x.tyku = 1) : 89 == _n9u.ctype && (_n9x.houg = 1, _n9x.tyku = 2, _n9x.kaih = 1), !_n9x.exists()) return _n9w;
            var _n9y = _n9u.get_slotnums(303);
            return _n9w = _n9x.multiply(_n9y);
        };
    },
    13533: (_n9z, _na0, _na1) => {
        'use strict';
        var _na2 = null;
        defineModule(_na0);
        Object.defineProperty(_na0, '__esModule', {
            'value': true
        }), _na0.getSlot304PersonalEffect = void 0;
        var _na3 = _na1(74496);
        _na0.getSlot304PersonalEffect = function(_na4) {
            var _na5 = null,
                _na6 = new _na3.SlotItemEffectModel(),
                _na7 = new _na3.SlotItemEffectModel();
            if (16 == _na4.ctype || 4 == _na4.ctype || 20 == _na4.ctype || 41 == _na4.ctype ? (_na7.houg = 1, _na7.tais = 1, _na7.kaih = 1) : 89 == _na4.ctype && (_na7.houg = 1, _na7.tais = 2, _na7.kaih = 2), !_na7.exists()) return _na6;
            var _na8 = _na4.get_slotnums(304);
            return _na6 = _na7.multiply(_na8);
        };
    },
    99791: (_na9, _naa, _nab) => {
        'use strict';
        var _nac = null;
        defineModule(_naa);
        Object.defineProperty(_naa, '__esModule', {
            'value': true
        }), _naa.getSlot305More320mmGunPersonalEffect = void 0;
        var _nad = _nab(74496);
        _naa.getSlot305More320mmGunPersonalEffect = function(_nae) {
            var _naf = null,
                _nag = new _nad.SlotItemEffectModel(),
                _nah = _nae.get_slotnums(426),
                _nai = _nae.get_slotnums(427),
                _naj = _nae.get_slotnums(428),
                _nak = _nae.get_slotnums(429),
                _nal = _nah + _nai + _naj + _nak;
            return 113 == _nae.ctype ? (_nag.houg = _nag.houg + 2 * _nal, _nah >= 1 && (_nag.houg = _nag.houg + 1 * _nah, _nag.kaih = _nag.kaih + 1 * _nah, (_nah >= 2 || _nai >= 1) && (_nag.houg = _nag.houg + 1, _nag.kaih = _nag.kaih + 1)), _naj >= 1 && (_nag.houg = _nag.houg + 1 * _naj, _nag.kaih = _nag.kaih + 1 * _naj, (_naj >= 2 || _nak >= 1) && (_nag.houg = _nag.houg + 2, _nag.kaih = _nag.kaih + 1))) : 73 == _nae.ctype ? (_nag.houg = _nag.houg + 1 * _nal, _nah >= 1 && (_nag.houg = _nag.houg + 1 * _nah, _nag.kaih = _nag.kaih + 1 * _nah, (_nah >= 2 || _nai >= 1) && (_nag.houg = _nag.houg + 1)), _naj >= 1 && (_nag.houg = _nag.houg + 1 * _naj, _nag.kaih = _nag.kaih + 1 * _naj, (_naj >= 2 || _nak >= 1) && (_nag.houg = _nag.houg + 1))) : 58 == _nae.ctype && _naj >= 1 && (_nag.houg = _nag.houg + 1 * _naj, _nag.kaih = _nag.kaih + 2 * _naj, (_naj >= 2 || _nak >= 1) && (_nag.houg = _nag.houg + 2, _nag.kaih = _nag.kaih + 1)), _nag;
        };
    },
    12138: (_nam, _nan, _nao) => {
        'use strict';
        var _nap = null;
        defineModule(_nan);
        Object.defineProperty(_nan, '__esModule', {
            'value': true
        }), _nan.getSlot305_And_306_PersonalEffect = void 0;
        var _naq = _nao(74496);
        _nan.getSlot305_And_306_PersonalEffect = function(_nar) {
            var _nas = null,
                _nat = new _naq.SlotItemEffectModel(),
                _nau = new _naq.SlotItemEffectModel();
            if (76 == _nar.ctype && (_nau.tais = 1, _nau.kaih = 1), 'しんよう' == _nar.yomi ? (_nau.tais += 2, _nau.kaih += 1) : 'グラーフ・ツェッペリン' != _nar.yomi && 'アクィラ' != _nar.yomi || (_nau.houg = 1, _nau.kaih = 1), !_nau.exists()) return _nat;
            var _nav = _nar.get_slotnums(305) + _nar.get_slotnums(306);
            return _nat = _nau.multiply(_nav);
        };
    },
    30042: (_naw, _nax, _nay) => {
        'use strict';
        var _naz = null;
        defineModule(_nax);
        Object.defineProperty(_nax, '__esModule', {
            'value': true
        }), _nax.getSlot307PersonalEffect = void 0;
        var _nb0 = _nay(74496);
        _nax.getSlot307PersonalEffect = function(_nb1) {
            var _nb2 = null,
                _nb3 = new _nb0.SlotItemEffectModel(),
                _nb4 = new _nb0.SlotItemEffectModel();
            if ('アメリカ' == _nb1.getCountryName() && (_nb4.houg = 1, _nb4.tyku = 1, _nb4.kaih = 1), !_nb4.exists()) return _nb3;
            var _nb5 = _nb1.get_slotnums(307);
            return _nb3 = _nb4.multiply(_nb5);
        };
    },
    33623: (_nb6, _nb7, _nb8) => {
        'use strict';
        var _nb9 = null;
        defineModule(_nb7);
        Object.defineProperty(_nb7, '__esModule', {
            'value': true
        }), _nb7.getSlot308PersonalEffect = void 0;
        var _nba = _nb8(74496);
        _nb7.getSlot308PersonalEffect = function(_nbb) {
            var _nbc = null,
                _nbd = new _nba.SlotItemEffectModel(),
                _nbe = new _nba.SlotItemEffectModel();
            if ('アメリカ' == _nbb.getCountryName() && (_nbe.houg = 1, _nbe.tyku = 1, _nbe.kaih = 1), 2 == _nbb.stype ? _nbe.houg += 1 : 1 == _nbb.stype && (_nbe.tyku += 1, _nbe.kaih += 1), 651 != _nbb.ship_id && 656 != _nbb.ship_id || (_nbe.houg += 1, _nbe.tyku += 1, _nbe.kaih += 1), !_nbe.exists()) return _nbd;
            var _nbf = _nbb.get_slotnums(308);
            return _nbd = _nbe.multiply(_nbf);
        };
    },
    17732: (_nbg, _nbh, _nbi) => {
        'use strict';
        var _nbj = null;
        defineModule(_nbh);
        Object.defineProperty(_nbh, '__esModule', {
            'value': true
        }), _nbh.getSlot30_410PersonalEffect = void 0;
        var _nbk = _nbi(74496);
        _nbh.getSlot30_410PersonalEffect = function(_nbl) {
            var _nbm = null,
                _nbn = new _nbk.SlotItemEffectModel();
            return 73 != _nbl.ship_id && 501 != _nbl.ship_id && 506 != _nbl.ship_id && 502 != _nbl.ship_id && 507 != _nbl.ship_id || (_nbn.tyku += 3, _nbn.kaih += 2, _nbn.saku += 2, _nbl.get_slotnums(410) >= 1 && (_nbn.tyku += 2, _nbn.kaih += 2, _nbn.houg += 1, _nbn.souk += 1)), 54 == _nbl.ctype && (_nbn.tyku += 3, _nbn.kaih += 2, _nbn.saku += 2, _nbl.get_slotnums(410) >= 1 && (_nbn.tyku += 2, _nbn.kaih += 2, _nbn.houg += 1, _nbn.souk += 1)), _nbn;
        };
    },
    85630: function(_nbo, _nbp, _nbq) {
        'use strict';
        var _nbr = null;
        var _nbs = this && this.__importDefault || function(_nbt) {
            var _nbu = null;
            return _nbt && _nbt.__esModule ? _nbt : {
                'default': _nbt
            };
        };
        defineModule(_nbp);
        Object.defineProperty(_nbp, '__esModule', {
            'value': true
        }), _nbp.getSlot310PersonalEffect = void 0;
        var _nbv = _nbq(74496),
            _nbw = _nbs(_nbq(18622));
        _nbp.getSlot310PersonalEffect = function(_nbx) {
            var _nby = null,
                _nbz = new _nbv.SlotItemEffectModel(),
                _nc0 = new _nbv.SlotItemEffectModel(),
                _nc1 = new _nbv.SlotItemEffectModel();
            34 == _nbx.ctype ? (_nc0.houg += 2, _nc0.tyku += 1, _nc0.kaih += 1, _nc1.houg += 2) : 56 == _nbx.ctype ? (_nc0.houg += 2, _nc0.kaih += 1, _nc1.houg += 2, _nc1.kaih += 2) : 90 == _nbx.ctype && (_nc0.houg += 3, _nc0.raig += 2, _nc0.tyku += 1, _nc0.kaih += 1, _nc1.houg += 1, _nc1.raig += 1);
            var _nc2 = new _nbv.SlotItemEffectModel(),
                _nc3 = new _nbv.SlotItemEffectModel();
            622 != _nbx.ship_id && 623 != _nbx.ship_id && 624 != _nbx.ship_id || (_nc0.houg += 2, _nc0.kaih += 1, _nc0.tais += 1, _nc2.houg = 1, _nc2.raig = 1, _nc3.houg = 3, _nc3.kaih = 2, _nc3.raig = 2);
            var _nc4 = true;
            if (_nc0.exists() || (_nc4 = false), 0 == _nc4) return _nbz;
            var _nc5 = _nbx.get_slotnums(310) + _nbx.get_slotnums(518);
            _nbz = _nc0.multiply(_nc5);
            for (var _nc6 = 0, _nc7 = 0, _nc8 = 0, _nc9 = [310, 518]; _nc8 < _nc9.length; _nc8++) {
                var _nca = _nc9[_nc8],
                    _ncb = _nbx.have_slots_dict[_nca];
                if (null != _ncb)
                    for (var _ncc = 0, _ncd = _ncb; _ncc < _ncd.length; _ncc++) {
                        var _nce = _ncd[_ncc];
                        null != _nce && (_nce.level >= 7 && _nc6++, _nce.level >= 10 && _nc7++);
                    }
            }
            if (_nc2.exists() && _nc6 > 0 && _nbz.add(_nc2.multiply(_nc6)), _nc1.exists() && _nc7 > 0 && _nbz.add(_nc1.multiply(_nc7)), _nc3.exists()) {
                for (var _ncf = 0, _ncg = 0, _nch = _nbx.have_slot_ids(); _ncg < _nch.length; _ncg++) {
                    var _nci = _nch[_ncg],
                        _ncj = _nbw.default.model.slot.getMst(_nci),
                        _nck = _ncj.equipType;
                    (12 == _nck || 13 == _nck) && _ncj.sakuteki >= 5 && (_ncf += _nbx.get_slotnums(parseInt(_nci)));
                }
                _ncf > 0 && _nbz.add(_nc3);
            }
            return _nbz;
        };
    },
    88736: (_ncl, _ncm, _ncn) => {
        'use strict';
        var _nco = null;
        defineModule(_ncm);
        Object.defineProperty(_ncm, '__esModule', {
            'value': true
        }), _ncm.getSlot313PersonalEffect = void 0;
        var _ncp = _ncn(74496);
        _ncm.getSlot313PersonalEffect = function(_ncq) {
            var _ncr = null,
                _ncs = new _ncp.SlotItemEffectModel(),
                _nct = new _ncp.SlotItemEffectModel();
            87 != _ncq.ctype && 91 != _ncq.ctype || (_nct.houg += 2, _nct.tyku += 2, _nct.kaih += 1, _nct.souk += 1), 651 != _ncq.ship_id && 656 != _ncq.ship_id || (_nct.houg += 2, _nct.tyku += 2, _nct.kaih += 1, _nct.souk += 1);
            var _ncu = true;
            if (_nct.exists() || (_ncu = false), 0 == _ncu) return _ncs;
            var _ncv = _ncq.get_slotnums(313);
            return _ncs = _nct.multiply(_ncv);
        };
    },
    49341: (_ncw, _ncx, _ncy) => {
        'use strict';
        var _ncz = null;
        defineModule(_ncx);
        Object.defineProperty(_ncx, '__esModule', {
            'value': true
        }), _ncx.getSlot314PersonalEffect = void 0;
        var _nd0 = _ncy(74496);
        _ncx.getSlot314PersonalEffect = function(_nd1) {
            var _nd2 = null,
                _nd3 = new _nd0.SlotItemEffectModel(),
                _nd4 = new _nd0.SlotItemEffectModel();
            87 != _nd1.ctype && 91 != _nd1.ctype || (_nd4.houg += 1, _nd4.raig += 3);
            var _nd5 = true;
            if (_nd4.exists() || (_nd5 = false), 0 == _nd5) return _nd3;
            var _nd6 = _nd1.get_slotnums(314);
            return _nd3 = _nd4.multiply(_nd6);
        };
    },
    74306: (_nd7, _nd8, _nd9) => {
        'use strict';
        var _nda = null;
        defineModule(_nd8);
        Object.defineProperty(_nd8, '__esModule', {
            'value': true
        }), _nd8.getSlot315PersonalEffect = void 0;
        var _ndb = _nd9(74496);
        _nd8.getSlot315PersonalEffect = function(_ndc) {
            var _ndd = null,
                _nde = new _ndb.SlotItemEffectModel(),
                _ndf = new _ndb.SlotItemEffectModel();
            'アメリカ' == _ndc.getCountryName() && (_ndf.houg += 2, _ndf.kaih += 3, _ndf.saku += 4), 87 != _ndc.ctype && 91 != _ndc.ctype || (_ndf.houg += 1, _nde.leng += 1), 651 != _ndc.ship_id && 656 != _ndc.ship_id || (_nde.houg += 2, _nde.kaih += 2, _nde.saku += 3, _nde.leng += 1);
            var _ndg = true;
            if (_ndf.exists() || (_ndg = false), 0 == _ndg) return _nde;
            var _ndh = _ndc.get_slotnums(315);
            return _nde.add(_ndf.multiply(_ndh)), _nde;
        };
    },
    83898: (_ndi, _ndj, _ndk) => {
        'use strict';
        var _ndl = null;
        defineModule(_ndj);
        Object.defineProperty(_ndj, '__esModule', {
            'value': true
        }), _ndj.getSlot316PersonalEffect = void 0;
        var _ndm = _ndk(74496);
        _ndj.getSlot316PersonalEffect = function(_ndn) {
            var _ndo = null,
                _ndp = new _ndm.SlotItemEffectModel(),
                _ndq = new _ndm.SlotItemEffectModel();
            if (68 == _ndn.ctype) {
                if (_ndq.houg += 4, _ndq.tyku += 1, _ndq.kaih += 1, !_ndq.exists()) return _ndp;
                var _ndr = _ndn.get_slotnums(316);
                _ndp = _ndq.multiply(_ndr);
            }
            return _ndp;
        };
    },
    71873: (_nds, _ndt, _ndu) => {
        'use strict';
        var _ndv = null;
        defineModule(_ndt);
        Object.defineProperty(_ndt, '__esModule', {
            'value': true
        }), _ndt.getSlot317PersonalEffect = void 0;
        var _ndw = _ndu(74496);
        _ndt.getSlot317PersonalEffect = function(_ndx) {
            var _ndy = null,
                _ndz = new _ndw.SlotItemEffectModel(),
                _ne0 = new _ndw.SlotItemEffectModel(),
                _ne1 = 0,
                _ne2 = false;
            if (6 == _ndx.ctype ? (_ne0.houg += 2, _ne0.tyku += 1, _ne1 = 1, _ne2 = true) : 2 == _ndx.ctype && (_ne0.houg += 1, _ne0.tyku += 1, _ne0.kaih += 1, _ne1 = 2, _ne2 = true), 149 == _ndx.ship_id || 591 == _ndx.ship_id || 592 == _ndx.ship_id ? (_ne0.houg += 2, _ne0.tyku += 2, _ne2 = true) : 150 == _ndx.ship_id ? (_ne0.houg += 1, _ne0.tyku += 1, _ne2 = true) : 151 == _ndx.ship_id ? (_ne0.houg += 1, _ne0.tyku += 1, _ne0.kaih += 1, _ne2 = true) : 593 == _ndx.ship_id ? (_ne0.houg += 1, _ne0.tyku += 3, _ne0.kaih += 2, _ne2 = true) : 954 == _ndx.ship_id ? (_ne0.houg += 2, _ne0.tyku += 2, _ne0.kaih += 1, _ne2 = true) : 152 == _ndx.ship_id ? (_ne0.houg += 2, _ne0.tyku += 1, _ne2 = true) : 541 == _ndx.ship_id ? (_ne0.houg += 1, _ne0.tyku += 2, _ne2 = true) : 573 == _ndx.ship_id && (_ne0.houg += 2, _ne0.tyku += 2, _ne0.kaih += 1, _ne2 = true), 0 == _ne2) return _ndz;
            if (_ndz.add(_ne0), 0 == _ne1) return _ndz;
            var _ne3 = _ndx.get_each_level_nums(317),
                _ne4 = [];
            return _ne1 > 0 && _ne3.forEach(function(_ne5, _ne6) {
                var _ne7 = null;
                for (var _ne8 = 1; _ne8 <= _ndx.SLOT_LEVEL_MAX; _ne8++) null == _ne4[_ne8] && (_ne4[_ne8] = 0), _ne6 >= _ne8 && (_ne4[_ne8] += _ne5);
            }), 1 == _ne1 ? _ne4[8] >= 1 && (_ndz.houm += 1) : 2 == _ne1 && _ne3[10] >= 1 && (_ndz.houm += 1), _ndz;
        };
    },
    53122: function(_ne9, _nea, _neb) {
        'use strict';
        var _nec = null;
        var _ned = this && this.__importDefault || function(_nee) {
            var _nef = null;
            return _nee && _nee.__esModule ? _nee : {
                'default': _nee
            };
        };
        defineModule(_nea);
        Object.defineProperty(_nea, '__esModule', {
            'value': true
        }), _nea.getSlot318PersonalEffect = void 0;
        var _neg = _neb(74496),
            _neh = _ned(_neb(18622));
        _nea.getSlot318PersonalEffect = function(_nei) {
            var _nej = null,
                _nek = new _neg.SlotItemEffectModel(),
                _nel = new _neg.SlotItemEffectModel(),
                _nem = new _neg.SlotItemEffectModel(),
                _nen = new _neg.SlotItemEffectModel();
            if (411 == _nei.ship_id || 412 == _nei.ship_id ? _nel.houg += 1 : 82 == _nei.ship_id ? (_nel.houg += 2, _nel.tyku += 2, _nel.kaih += 2, _nen.tyku = 2, _nen.kaih = 3, _nen.houm = 1) : 553 == _nei.ship_id ? (_nel.houg += 2, _nel.tyku += 2, _nel.kaih += 2, _nel.houm += 3, _nen.tyku = 2, _nen.kaih = 3, _nen.houm = 1, _nem.kaih = 2, _nem.souk = 1) : 88 == _nei.ship_id ? (_nel.houg += 2, _nel.tyku += 2, _nel.kaih += 2, _nen.tyku = 2, _nen.kaih = 3, _nen.houm = 1) : 541 == _nei.ship_id || 573 == _nei.ship_id ? (_nel.houg += 3, _nel.tyku += 2, _nel.kaih += 1, _nel.houm += 2, _nem.houg = 2, _nem.kaih = 2, _nem.souk = 1, _nem.houm = 1) : 554 == _nei.ship_id && (_nel.houg += 3, _nel.tyku += 2, _nel.kaih += 2, _nel.houm += 3, _nen.tyku = 2, _nen.kaih = 3, _nen.houm = 1, _nem.houg = 1, _nem.kaih = 2, _nem.souk = 1, _nem.houm = 1), !_nel.exists()) return _nek;
            var _neo = _nei.get_slotnums(318);
            if (_nek = _nel.multiply(_neo), !_nem.exists() && !_nen.exists()) return _nek;
            for (var _nep = 0, _neq = 0, _ner = _nei.have_slot_ids(); _neq < _ner.length; _neq++) {
                var _nes = _ner[_neq],
                    _net = _neh.default.model.slot.getMst(_nes),
                    _neu = _net.equipType;
                (12 == _neu || 13 == _neu) && _net.taiku >= 2 && (_nep += _nei.get_slotnums(parseInt(_nes)));
            }
            var _nev = _nei.get_slotnums(290);
            return _nen.exists() && _nep > 0 && 0 == _nev && _nek.add(_nen), _nem.exists() && _nev >= 1 && _nek.add(_nem), _nek;
        };
    },
    51063: (_new, _nex, _ney) => {
        'use strict';
        var _nez = null;
        defineModule(_nex);
        Object.defineProperty(_nex, '__esModule', {
            'value': true
        }), _nex.getSlot319PersonalEffect = void 0;
        var _nf0 = _ney(74496);
        _nex.getSlot319PersonalEffect = function(_nf1) {
            var _nf2 = null,
                _nf3 = new _nf0.SlotItemEffectModel(),
                _nf4 = new _nf0.SlotItemEffectModel();
            if (554 != _nf1.ship_id && 553 != _nf1.ship_id || (_nf4.houg = 7, _nf4.tyku = 3, _nf4.kaih = 2), !_nf4.exists()) return _nf3;
            var _nf5 = _nf1.get_slotnums(319);
            return _nf3 = _nf4.multiply(_nf5);
        };
    },
    91491: (_nf6, _nf7, _nf8) => {
        'use strict';
        var _nf9 = null;
        defineModule(_nf7);
        Object.defineProperty(_nf7, '__esModule', {
            'value': true
        }), _nf7.getSlot320PersonalEffect = void 0;
        var _nfa = _nf8(74496);
        _nf7.getSlot320PersonalEffect = function(_nfb) {
            var _nfc = null,
                _nfd = new _nfa.SlotItemEffectModel(),
                _nfe = new _nfa.SlotItemEffectModel();
            if (553 == _nfb.ship_id) _nfe.houg = 2;
            else {
                if (554 == _nfb.ship_id) _nfe.houg = 4;
                else {
                    if (196 == _nfb.ship_id) _nfe.houg = 3;
                    else {
                        if (197 == _nfb.ship_id) _nfe.houg = 3;
                        else {
                            if (508 == _nfb.ship_id) _nfe.houg = 4;
                            else {
                                if (509 != _nfb.ship_id) return _nfd;
                                _nfe.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nff = _nfb.get_slotnums(320);
            return _nfd = _nfe.multiply(_nff);
        };
    },
    85495: (_nfg, _nfh, _nfi) => {
        'use strict';
        var _nfj = null;
        defineModule(_nfh);
        Object.defineProperty(_nfh, '__esModule', {
            'value': true
        }), _nfh.getSlot322PersonalEffect = void 0;
        var _nfk = _nfi(74496);
        _nfh.getSlot322PersonalEffect = function(_nfl) {
            var _nfm = null,
                _nfn = new _nfk.SlotItemEffectModel(),
                _nfo = new _nfk.SlotItemEffectModel();
            if (554 != _nfl.ship_id && 553 != _nfl.ship_id || (_nfo.houg = 5, _nfo.tyku = 2, _nfo.kaih = 2, _nfo.tais = 1), !_nfo.exists()) return _nfn;
            var _nfp = _nfl.get_slotnums(322);
            return _nfn = _nfo.multiply(_nfp);
        };
    },
    65365: (_nfq, _nfr, _nfs) => {
        'use strict';
        var _nft = null;
        defineModule(_nfr);
        Object.defineProperty(_nfr, '__esModule', {
            'value': true
        }), _nfr.getSlot323PersonalEffect = void 0;
        var _nfu = _nfs(74496);
        _nfr.getSlot323PersonalEffect = function(_nfv) {
            var _nfw = null,
                _nfx = new _nfu.SlotItemEffectModel(),
                _nfy = new _nfu.SlotItemEffectModel();
            if (554 != _nfv.ship_id && 553 != _nfv.ship_id || (_nfy.houg = 6, _nfy.tyku = 3, _nfy.kaih = 3, _nfy.tais = 2), !_nfy.exists()) return _nfx;
            var _nfz = _nfv.get_slotnums(323);
            return _nfx = _nfy.multiply(_nfz);
        };
    },
    98164: (_ng0, _ng1, _ng2) => {
        'use strict';
        var _ng3 = null;
        defineModule(_ng1);
        Object.defineProperty(_ng1, '__esModule', {
            'value': true
        }), _ng1.getSlot324And325PersonalEffect = void 0;
        var _ng4 = _ng2(74496);
        _ng1.getSlot324And325PersonalEffect = function(_ng5) {
            var _ng6 = null,
                _ng7 = new _ng4.SlotItemEffectModel(),
                _ng8 = new _ng4.SlotItemEffectModel();
            if (554 == _ng5.ship_id || 646 == _ng5.ship_id ? (_ng8.houg = 2, _ng8.tais = 3, _ng8.kaih = 1) : 553 == _ng5.ship_id && (_ng8.houg = 1, _ng8.tais = 2, _ng8.kaih = 1), !_ng8.exists()) return _ng7;
            var _ng9 = _ng5.get_slotnums(324) + _ng5.get_slotnums(325);
            return _ng7 = _ng8.multiply(_ng9);
        };
    },
    38114: (_nga, _ngb, _ngc) => {
        'use strict';
        var _ngd = null;
        defineModule(_ngb);
        Object.defineProperty(_ngb, '__esModule', {
            'value': true
        }), _ngb.getSlot326PersonalEffect = void 0;
        var _nge = _ngc(74496);
        _ngb.getSlot326PersonalEffect = function(_ngf) {
            var _ngg = null,
                _ngh = new _nge.SlotItemEffectModel(),
                _ngi = new _nge.SlotItemEffectModel();
            if (646 == _ngf.ship_id ? (_ngi.houg = 3, _ngi.tais = 5, _ngi.kaih = 3) : 554 == _ngf.ship_id ? (_ngi.houg = 3, _ngi.tais = 4, _ngi.kaih = 2) : 553 == _ngf.ship_id && (_ngi.houg = 1, _ngi.tais = 3, _ngi.kaih = 1), !_ngi.exists()) return _ngh;
            var _ngj = _ngf.get_slotnums(326);
            return _ngh = _ngi.multiply(_ngj);
        };
    },
    21003: (_ngk, _ngl, _ngm) => {
        'use strict';
        var _ngn = null;
        defineModule(_ngl);
        Object.defineProperty(_ngl, '__esModule', {
            'value': true
        }), _ngl.getSlot327PersonalEffect = void 0;
        var _ngo = _ngm(74496);
        _ngl.getSlot327PersonalEffect = function(_ngp) {
            var _ngq = null,
                _ngr = new _ngo.SlotItemEffectModel(),
                _ngs = new _ngo.SlotItemEffectModel();
            if (646 == _ngp.ship_id ? (_ngs.houg = 5, _ngs.tais = 6, _ngs.kaih = 4) : 554 == _ngp.ship_id ? (_ngs.houg = 4, _ngs.tais = 5, _ngs.kaih = 2) : 553 == _ngp.ship_id && (_ngs.houg = 2, _ngs.tais = 4, _ngs.kaih = 1), !_ngs.exists()) return _ngr;
            var _ngt = _ngp.get_slotnums(327);
            return _ngr = _ngs.multiply(_ngt);
        };
    },
    77010: (_ngu, _ngv, _ngw) => {
        'use strict';
        var _ngx = null;
        defineModule(_ngv);
        Object.defineProperty(_ngv, '__esModule', {
            'value': true
        }), _ngv.getSlot328PersonalEffect = void 0;
        var _ngy = _ngw(74496);
        _ngv.getSlot328PersonalEffect = function(_ngz) {
            var _nh0 = null,
                _nh1 = new _ngy.SlotItemEffectModel(),
                _nh2 = new _ngy.SlotItemEffectModel();
            if ('こんごう' == _ngz.yomi ? (_nh2.houg = 1, _nh2.kaih = 1, 209 == _ngz.ship_id || 149 == _ngz.ship_id ? _nh2.houg += 1 : 591 == _ngz.ship_id && (_nh2.houg += 2, _nh2.raig += 1)) : 'ひえい' == _ngz.yomi ? (_nh2.houg = 1, _nh2.kaih = 1, 210 == _ngz.ship_id || 150 == _ngz.ship_id ? _nh2.houg += 1 : 592 == _ngz.ship_id && (_nh2.houg += 2, _nh2.tyku += 1)) : 'はるな' == _ngz.yomi ? (_nh2.houg = 1, _nh2.kaih = 1, 211 == _ngz.ship_id || 151 == _ngz.ship_id ? _nh2.houg += 1 : 593 == _ngz.ship_id ? (_nh2.houg += 1, _nh2.tyku += 2) : 954 == _ngz.ship_id && (_nh2.houg += 2, _nh2.tyku += 1)) : 'きりしま' == _ngz.yomi ? (_nh2.houg = 1, _nh2.kaih = 1, 212 != _ngz.ship_id && 152 != _ngz.ship_id || (_nh2.houg += 1)) : ('ふそう' == _ngz.yomi || 'やましろ' == _ngz.yomi || 'いせ' == _ngz.yomi || 'ひゅうが' == _ngz.yomi) && (_nh2.houg = 1), !_nh2.exists()) return _nh1;
            var _nh3 = _ngz.get_slotnums(328);
            return _nh1 = _nh2.multiply(_nh3);
        };
    },
    39126: (_nh4, _nh5, _nh6) => {
        'use strict';
        var _nh7 = null;
        defineModule(_nh5);
        Object.defineProperty(_nh5, '__esModule', {
            'value': true
        }), _nh5.getSlot329PersonalEffect = void 0;
        var _nh8 = _nh6(74496);
        _nh5.getSlot329PersonalEffect = function(_nh9) {
            var _nha = null,
                _nhb = new _nh8.SlotItemEffectModel(),
                _nhc = new _nh8.SlotItemEffectModel();
            if ('こんごう' == _nh9.yomi ? (_nhc.houg = 1, _nhc.kaih = 1, 209 == _nh9.ship_id ? _nhc.houg += 1 : 149 == _nh9.ship_id ? (_nhc.houg += 2, _nhc.tyku += 1) : 591 == _nh9.ship_id && (_nhc.houg += 3, _nhc.tyku += 1, _nhc.raig += 2)) : 'ひえい' == _nh9.yomi ? (_nhc.houg = 1, _nhc.kaih = 1, 210 == _nh9.ship_id ? _nhc.houg += 1 : 150 == _nh9.ship_id ? (_nhc.houg += 2, _nhc.tyku += 1) : 592 == _nh9.ship_id && (_nhc.houg += 3, _nhc.tyku += 1, _nhc.raig += 2)) : 'はるな' == _nh9.yomi ? (_nhc.houg = 1, _nhc.kaih = 1, 211 == _nh9.ship_id ? _nhc.houg += 1 : 151 == _nh9.ship_id ? (_nhc.houg += 2, _nhc.tyku += 1) : 593 == _nh9.ship_id ? (_nhc.houg += 2, _nhc.tyku += 3, _nhc.raig += 1) : 954 == _nh9.ship_id && (_nhc.houg += 3, _nhc.tyku += 1, _nhc.raig += 2)) : 'きりしま' == _nh9.yomi ? (_nhc.houg = 1, _nhc.kaih = 1, 212 == _nh9.ship_id ? _nhc.houg += 1 : 152 == _nh9.ship_id && (_nhc.houg += 2, _nhc.tyku += 1)) : ('ふそう' == _nh9.yomi || 'やましろ' == _nh9.yomi || 'いせ' == _nh9.yomi || 'ひゅうが' == _nh9.yomi) && (_nhc.houg = 1), !_nhc.exists()) return _nhb;
            var _nhd = _nh9.get_slotnums(329);
            return _nhb = _nhc.multiply(_nhd);
        };
    },
    72176: (_nhe, _nhf, _nhg) => {
        'use strict';
        var _nhh = null;
        defineModule(_nhf);
        Object.defineProperty(_nhf, '__esModule', {
            'value': true
        }), _nhf.getSlot335PersonalEffect = void 0;
        var _nhi = _nhg(74496);
        _nhf.getSlot335PersonalEffect = function(_nhj) {
            var _nhk = null,
                _nhl = new _nhi.SlotItemEffectModel(),
                _nhm = new _nhi.SlotItemEffectModel();
            if (277 == _nhj.ship_id || 278 == _nhj.ship_id ? (_nhm.tyku = 1, _nhm.kaih = 1) : 594 != _nhj.ship_id && 599 != _nhj.ship_id && 610 != _nhj.ship_id && 646 != _nhj.ship_id && 698 != _nhj.ship_id || (_nhm.tyku = 2, _nhm.kaih = 1), !_nhm.exists()) return _nhl;
            var _nhn = _nhj.get_slotnums(335);
            return _nhl = _nhm.multiply(_nhn);
        };
    },
    33846: (_nho, _nhp, _nhq) => {
        'use strict';
        var _nhr = null;
        defineModule(_nhp);
        Object.defineProperty(_nhp, '__esModule', {
            'value': true
        }), _nhp.getSlot336PersonalEffect = void 0;
        var _nhs = _nhq(74496);
        _nhp.getSlot336PersonalEffect = function(_nht) {
            var _nhu = null,
                _nhv = new _nhs.SlotItemEffectModel(),
                _nhw = new _nhs.SlotItemEffectModel();
            if (277 == _nht.ship_id || 278 == _nht.ship_id ? (_nhw.houg = 1, _nhw.tyku = 1, _nhw.kaih = 1) : 594 != _nht.ship_id && 599 != _nht.ship_id && 610 != _nht.ship_id && 646 != _nht.ship_id && 698 != _nht.ship_id || (_nhw.houg = 1, _nhw.tyku = 2, _nhw.kaih = 1), !_nhw.exists()) return _nhv;
            var _nhx = _nht.get_slotnums(336);
            return _nhv = _nhw.multiply(_nhx);
        };
    },
    97157: (_nhy, _nhz, _ni0) => {
        'use strict';
        var _ni1 = null;
        defineModule(_nhz);
        Object.defineProperty(_nhz, '__esModule', {
            'value': true
        }), _nhz.getSlot337PersonalEffect = void 0;
        var _ni2 = _ni0(74496);
        _nhz.getSlot337PersonalEffect = function(_ni3) {
            var _ni4 = null,
                _ni5 = new _ni2.SlotItemEffectModel(),
                _ni6 = new _ni2.SlotItemEffectModel();
            if (277 == _ni3.ship_id || 278 == _ni3.ship_id ? (_ni6.houg = 1, _ni6.tyku = 1, _ni6.kaih = 1) : 594 != _ni3.ship_id && 599 != _ni3.ship_id && 610 != _ni3.ship_id && 646 != _ni3.ship_id && 698 != _ni3.ship_id || (_ni6.houg = 2, _ni6.tyku = 2, _ni6.kaih = 1), !_ni6.exists()) return _ni5;
            var _ni7 = _ni3.get_slotnums(337);
            return _ni5 = _ni6.multiply(_ni7);
        };
    },
    63406: (_ni8, _ni9, _nia) => {
        'use strict';
        var _nib = null;
        defineModule(_ni9);
        Object.defineProperty(_ni9, '__esModule', {
            'value': true
        }), _ni9.getSlot338PersonalEffect = void 0;
        var _nic = _nia(74496);
        _ni9.getSlot338PersonalEffect = function(_nid) {
            var _nie = null,
                _nif = new _nic.SlotItemEffectModel(),
                _nig = new _nic.SlotItemEffectModel();
            if (277 == _nid.ship_id || 278 == _nid.ship_id ? (_nig.houg = 1, _nig.tyku = 1, _nig.kaih = 2) : 594 == _nid.ship_id || 646 == _nid.ship_id || 698 == _nid.ship_id ? (_nig.houg = 1, _nig.tyku = 2, _nig.kaih = 3) : 599 != _nid.ship_id && 610 != _nid.ship_id || (_nig.houg = 4, _nig.tyku = 3, _nig.kaih = 4), !_nig.exists()) return _nif;
            var _nih = _nid.get_slotnums(338);
            return _nif = _nig.multiply(_nih);
        };
    },
    66373: (_nii, _nij, _nik) => {
        'use strict';
        var _nil = null;
        defineModule(_nij);
        Object.defineProperty(_nij, '__esModule', {
            'value': true
        }), _nij.getSlot339PersonalEffect = void 0;
        var _nim = _nik(74496);
        _nij.getSlot339PersonalEffect = function(_nin) {
            var _nio = null,
                _nip = new _nim.SlotItemEffectModel(),
                _niq = new _nim.SlotItemEffectModel();
            if (277 == _nin.ship_id || 278 == _nin.ship_id ? (_niq.houg = 1, _niq.tyku = 2, _niq.kaih = 2) : 594 == _nin.ship_id || 646 == _nin.ship_id || 698 == _nin.ship_id ? (_niq.houg = 1, _niq.tyku = 3, _niq.kaih = 4) : 599 != _nin.ship_id && 610 != _nin.ship_id || (_niq.houg = 6, _niq.tyku = 4, _niq.kaih = 5), !_niq.exists()) return _nip;
            var _nir = _nin.get_slotnums(339);
            return _nip = _niq.multiply(_nir);
        };
    },
    19707: (_nis, _nit, _niu) => {
        'use strict';
        var _niv = null;
        defineModule(_nit);
        Object.defineProperty(_nit, '__esModule', {
            'value': true
        }), _nit.getSlot340PersonalEffect = void 0;
        var _niw = _niu(74496);
        _nit.getSlot340PersonalEffect = function(_nix) {
            var _niy = null,
                _niz = new _niw.SlotItemEffectModel(),
                _nj0 = new _niw.SlotItemEffectModel();
            if ('ガリバルディ' != _nix.yomi && 'アブルッツィ' != _nix.yomi || (_nj0.houg = 1, _nj0.tyku = 1, _nj0.kaih = 1), !_nj0.exists()) return _niz;
            var _nj1 = _nix.get_slotnums(340);
            return _niz = _nj0.multiply(_nj1);
        };
    },
    63978: (_nj2, _nj3, _nj4) => {
        'use strict';
        var _nj5 = null;
        defineModule(_nj3);
        Object.defineProperty(_nj3, '__esModule', {
            'value': true
        }), _nj3.getSlot341PersonalEffect = void 0;
        var _nj6 = _nj4(74496);
        _nj3.getSlot341PersonalEffect = function(_nj7) {
            var _nj8 = null,
                _nj9 = new _nj6.SlotItemEffectModel(),
                _nja = new _nj6.SlotItemEffectModel();
            if ('ガリバルディ' == _nj7.yomi || 'アブルッツィ' == _nj7.yomi ? (_nja.houg = 2, _nja.tyku = 1, _nja.kaih = 1) : 'ゴトランド' == _nj7.yomi && (_nja.houg = 1, _nja.tyku = 1, _nja.kaih = 1), !_nja.exists()) return _nj9;
            var _njb = _nj7.get_slotnums(341);
            return _nj9 = _nja.multiply(_njb);
        };
    },
    92382: (_njc, _njd, _nje) => {
        'use strict';
        var _njf = null;
        defineModule(_njd);
        Object.defineProperty(_njd, '__esModule', {
            'value': true
        }), _njd.getSlot342PersonalEffect = void 0;
        var _njg = _nje(74496);
        _njd.getSlot342PersonalEffect = function(_njh) {
            var _nji = null,
                _njj = new _njg.SlotItemEffectModel(),
                _njk = new _njg.SlotItemEffectModel();
            if (277 == _njh.ship_id || 278 == _njh.ship_id || 461 == _njh.ship_id || 466 == _njh.ship_id || 462 == _njh.ship_id || 467 == _njh.ship_id ? _njk.houg = 1 : 594 == _njh.ship_id || 646 == _njh.ship_id || 698 == _njh.ship_id ? (_njk.houg = 2, _njk.tyku = 1, _njk.kaih = 1) : 599 != _njh.ship_id && 610 != _njh.ship_id || (_njk.houg = 3, _njk.tyku = 2, _njk.kaih = 2), !_njk.exists()) return _njj;
            var _njl = _njh.get_slotnums(342);
            return _njj = _njk.multiply(_njl);
        };
    },
    78415: (_njm, _njn, _njo) => {
        'use strict';
        var _njp = null;
        defineModule(_njn);
        Object.defineProperty(_njn, '__esModule', {
            'value': true
        }), _njn.getSlot343PersonalEffect = void 0;
        var _njq = _njo(74496);
        _njn.getSlot343PersonalEffect = function(_njr) {
            var _njs = null,
                _njt = new _njq.SlotItemEffectModel(),
                _nju = new _njq.SlotItemEffectModel();
            if (277 == _njr.ship_id || 278 == _njr.ship_id ? _nju.houg = 2 : 461 == _njr.ship_id || 466 == _njr.ship_id || 462 == _njr.ship_id || 467 == _njr.ship_id ? _nju.houg = 1 : 594 == _njr.ship_id || 646 == _njr.ship_id || 698 == _njr.ship_id ? (_nju.houg = 3, _nju.tyku = 2, _nju.kaih = 1) : 599 != _njr.ship_id && 610 != _njr.ship_id || (_nju.houg = 5, _nju.tyku = 3, _nju.kaih = 3), !_nju.exists()) return _njt;
            var _njv = _njr.get_slotnums(343);
            return _njt = _nju.multiply(_njv);
        };
    },
    23090: (_njw, _njx, _njy) => {
        'use strict';
        var _njz = null;
        defineModule(_njx);
        Object.defineProperty(_njx, '__esModule', {
            'value': true
        }), _njx.getSlot344PersonalEffect = void 0;
        var _nk0 = _njy(74496);
        _njx.getSlot344PersonalEffect = function(_nk1) {
            var _nk2 = null,
                _nk3 = new _nk0.SlotItemEffectModel(),
                _nk4 = new _nk0.SlotItemEffectModel();
            if (599 == _nk1.ship_id || 610 == _nk1.ship_id ? _nk4.houg = 3 : 555 == _nk1.ship_id || 560 == _nk1.ship_id ? (_nk4.houg = 2, _nk4.tais = 2) : 318 == _nk1.ship_id ? (_nk4.houg = 4, _nk4.tais = 1) : 282 == _nk1.ship_id ? (_nk4.houg = 2, _nk4.tais = 1) : 888 == _nk1.ship_id ? (_nk4.houg = 4, _nk4.tais = 2) : 883 == _nk1.ship_id && (_nk4.houg = 5, _nk4.tais = 2), !_nk4.exists()) return _nk3;
            var _nk5 = _nk1.get_slotnums(344);
            return _nk3 = _nk4.multiply(_nk5);
        };
    },
    18776: (_nk6, _nk7, _nk8) => {
        'use strict';
        var _nk9 = null;
        defineModule(_nk7);
        Object.defineProperty(_nk7, '__esModule', {
            'value': true
        }), _nk7.getSlot345PersonalEffect = void 0;
        var _nka = _nk8(74496);
        _nk7.getSlot345PersonalEffect = function(_nkb) {
            var _nkc = null,
                _nkd = new _nka.SlotItemEffectModel(),
                _nke = new _nka.SlotItemEffectModel();
            if (599 == _nkb.ship_id || 610 == _nkb.ship_id ? (_nke.houg = 3, _nke.kaih = 1) : 555 == _nkb.ship_id || 560 == _nkb.ship_id ? (_nke.houg = 3, _nke.tais = 2, _nke.kaih = 2) : 318 == _nkb.ship_id ? (_nke.houg = 5, _nke.tais = 1, _nke.kaih = 2) : 282 == _nkb.ship_id ? (_nke.houg = 3, _nke.tais = 1, _nke.kaih = 1) : 888 == _nkb.ship_id ? (_nke.houg = 4, _nke.tais = 2, _nke.kaih = 2) : 883 == _nkb.ship_id && (_nke.houg = 5, _nke.tais = 2, _nke.kaih = 3), !_nke.exists()) return _nkd;
            var _nkf = _nkb.get_slotnums(345);
            return _nkd = _nke.multiply(_nkf);
        };
    },
    89058: (_nkg, _nkh, _nki) => {
        'use strict';
        var _nkj = null;
        defineModule(_nkh);
        Object.defineProperty(_nkh, '__esModule', {
            'value': true
        }), _nkh.getSlot346PersonalEffect = void 0;
        var _nkk = _nki(74496);
        _nkh.getSlot346PersonalEffect = function(_nkl) {
            var _nkm = null,
                _nkn = new _nkk.SlotItemEffectModel();
            return 'やましおまる' == _nkl.yomi && (_nkn.kaih += 1, _nkn.tais += 1), _nkn;
        };
    },
    84372: (_nko, _nkp, _nkq) => {
        'use strict';
        var _nkr = null;
        defineModule(_nkp);
        Object.defineProperty(_nkp, '__esModule', {
            'value': true
        }), _nkp.getSlot347PersonalEffect = void 0;
        var _nks = _nkq(74496);
        _nkp.getSlot347PersonalEffect = function(_nkt) {
            var _nku = null,
                _nkv = new _nks.SlotItemEffectModel();
            return 'やましおまる' == _nkt.yomi && (_nkv.kaih += 2, _nkv.tais += 2), _nkv;
        };
    },
    39656: (_nkw, _nkx, _nky) => {
        'use strict';
        var _nkz = null;
        defineModule(_nkx);
        Object.defineProperty(_nkx, '__esModule', {
            'value': true
        }), _nkx.getSlot356_357PersonalEffect = void 0;
        var _nl0 = _nky(74496);
        _nkx.getSlot356_357PersonalEffect = function(_nl1) {
            var _nl2 = null,
                _nl3 = new _nl0.SlotItemEffectModel(),
                _nl4 = new _nl0.SlotItemEffectModel();
            if (95 == _nl1.ctype ? _nl4.houg = 2 : 9 == _nl1.ctype && (_nl4.houg = 1), !_nl4.exists()) return _nl3;
            var _nl5 = _nl1.get_slotnums(356) + _nl1.get_slotnums(357);
            return _nl3 = _nl4.multiply(_nl5);
        };
    },
    66039: (_nl6, _nl7, _nl8) => {
        'use strict';
        var _nl9 = null;
        defineModule(_nl7);
        Object.defineProperty(_nl7, '__esModule', {
            'value': true
        }), _nl7.getSlot358PersonalEffect = void 0;
        var _nla = _nl8(74496);
        _nl7.getSlot358PersonalEffect = function(_nlb) {
            var _nlc = null,
                _nld = new _nla.SlotItemEffectModel(),
                _nle = new _nla.SlotItemEffectModel();
            if ('アメリカ' != _nlb.getCountryName() && 67 != _nlb.ctype && 78 != _nlb.ctype && 82 != _nlb.ctype && 88 != _nlb.ctype && 108 != _nlb.ctype && 112 != _nlb.ctype) return _nld;
            _nle.houg += 1, _nle.kaih += 1, _nle.tyku += 1, 95 == _nlb.ctype && (_nle.houg += 1, _nle.kaih += 2, _nle.tyku += 2);
            var _nlf = _nlb.get_slotnums(358);
            return _nld = _nle.multiply(_nlf);
        };
    },
    64679: (_nlg, _nlh, _nli) => {
        'use strict';
        var _nlj = null;
        defineModule(_nlh);
        Object.defineProperty(_nlh, '__esModule', {
            'value': true
        }), _nlh.getSlot359PersonalEffect = void 0;
        var _nlk = _nli(74496);
        _nlh.getSlot359PersonalEffect = function(_nll) {
            var _nlm = null,
                _nln = new _nlk.SlotItemEffectModel(),
                _nlo = new _nlk.SlotItemEffectModel();
            if ('パース' == _nll.yomi ? (_nlo.houg = 2, _nlo.tyku = 2, _nlo.kaih = 1) : 'ゆうばり' == _nll.yomi && (_nlo.houg = 1, _nlo.tyku = 1, _nlo.kaih = 1), 622 != _nll.ship_id && 623 != _nll.ship_id && 624 != _nll.ship_id || (_nlo.houg += 1, _nlo.tyku += 1), !_nlo.exists()) return _nln;
            var _nlp = _nll.get_slotnums(359);
            return _nln = _nlo.multiply(_nlp);
        };
    },
    69954: (_nlq, _nlr, _nls) => {
        'use strict';
        var _nlt = null;
        defineModule(_nlr);
        Object.defineProperty(_nlr, '__esModule', {
            'value': true
        }), _nlr.getSlot35PersonalEffect = void 0;
        var _nlu = _nls(74496);
        _nlr.getSlot35PersonalEffect = function(_nlv) {
            var _nlw = null,
                _nlx = new _nlu.SlotItemEffectModel(),
                _nly = new _nlu.SlotItemEffectModel();
            return 149 == _nlv.ship_id || 591 == _nlv.ship_id || 592 == _nlv.ship_id ? (_nly.houg += 1, _nly.tyku += 1) : 150 == _nlv.ship_id ? _nly.tyku += 1 : 151 == _nlv.ship_id || 593 == _nlv.ship_id || 954 == _nlv.ship_id ? (_nly.tyku += 1, _nly.kaih += 1) : 152 == _nlv.ship_id && (_nly.houg += 1), _nly.exists() ? _nlx = _nly.multiply(1) : _nlx;
        };
    },
    95953: (_nlz, _nm0, _nm1) => {
        'use strict';
        var _nm2 = null;
        defineModule(_nm0);
        Object.defineProperty(_nm0, '__esModule', {
            'value': true
        }), _nm0.getSlot360_361PersonalEffect = void 0;
        var _nm3 = _nm1(74496);
        _nm0.getSlot360_361PersonalEffect = function(_nm4) {
            var _nm5 = null,
                _nm6 = new _nm3.SlotItemEffectModel(),
                _nm7 = new _nm3.SlotItemEffectModel();
            if ('デ・ロイテル' == _nm4.yomi ? (_nm7.houg = 2, _nm7.tyku = 2, _nm7.kaih = 1) : 'ゴトランド' == _nm4.yomi && (_nm7.houg = 2, _nm7.tyku = 1, _nm7.kaih = 1), 41 == _nm4.ctype && (_nm7.houg = 1, _nm7.tyku = 1), !_nm7.exists()) return _nm6;
            var _nm8 = _nm4.get_slotnums(360) + _nm4.get_slotnums(361);
            return _nm6 = _nm7.multiply(_nm8);
        };
    },
    86384: (_nm9, _nma, _nmb) => {
        'use strict';
        var _nmc = null;
        defineModule(_nma);
        Object.defineProperty(_nma, '__esModule', {
            'value': true
        }), _nma.getSlot362_363PersonalEffect = void 0;
        var _nmd = _nmb(74496);
        _nma.getSlot362_363PersonalEffect = function(_nme) {
            var _nmf = null,
                _nmg = new _nmd.SlotItemEffectModel(),
                _nmh = new _nmd.SlotItemEffectModel(),
                _nmi = false;
            if (99 == _nme.ctype ? (_nmh.houg = 1, _nmh.tyku = 2, _nmh.kaih = 1, _nmi = true) : 34 == _nme.ctype || 21 == _nme.ctype ? (_nmh.houg = -3, _nmh.tyku = -3, _nmh.kaih = -8, _nmi = true) : 4 == _nme.ctype || 20 == _nme.ctype || 16 == _nme.ctype ? (_nmh.houg = -3, _nmh.tyku = -2, _nmh.kaih = -6, _nmi = true) : 89 == _nme.ctype || 56 == _nme.ctype ? (_nmh.houg = -2, _nmh.tyku = -1, _nmh.kaih = -4, _nmi = true) : 52 != _nme.ctype && 41 != _nme.ctype && 98 != _nme.ctype || (_nmh.tyku = -1, _nmh.kaih = -2, _nmi = true), 'アメリカ' == _nme.getCountryName() && (_nmh.tyku += 1, _nmh.kaih += 1, _nmi = true), 0 == _nmi) return _nmg;
            var _nmj = _nme.get_slotnums(362) + _nme.get_slotnums(363);
            return _nmg = _nmh.multiply(_nmj);
        };
    },
    65345: (_nmk, _nml, _nmm) => {
        'use strict';
        var _nmn = null;
        defineModule(_nml);
        Object.defineProperty(_nml, '__esModule', {
            'value': true
        }), _nml.getSlot364PersonalEffect = void 0;
        var _nmo = _nmm(74496);
        _nml.getSlot364PersonalEffect = function(_nmp) {
            var _nmq = null;
            new _nmo.SlotItemEffectModel();
            var _nmr = new _nmo.SlotItemEffectModel();
            623 == _nmp.ship_id || 586 == _nmp.ship_id || 119 == _nmp.ship_id || 118 == _nmp.ship_id || 657 == _nmp.ship_id || 506 == _nmp.ship_id || 668 == _nmp.ship_id || 507 == _nmp.ship_id ? (_nmr.raig = 1, _nmr.kaih = -2, 119 == _nmp.ship_id ? _nmr.raig += 1 : 507 == _nmp.ship_id ? _nmr.raig += 2 : 623 == _nmp.ship_id && (_nmr.houg += 1, _nmr.raig += 3)) : (_nmr.houg = -1, _nmr.kaih = -7);
            var _nms = _nmp.get_slotnums(364);
            return _nmr.multiply(_nms);
        };
    },
    46514: (_nmt, _nmu, _nmv) => {
        'use strict';
        var _nmw = null;
        defineModule(_nmu);
        Object.defineProperty(_nmu, '__esModule', {
            'value': true
        }), _nmu.getSlot365PersonalEffect = void 0;
        var _nmx = _nmv(74496);
        _nmu.getSlot365PersonalEffect = function(_nmy) {
            var _nmz = null,
                _nn0 = new _nmx.SlotItemEffectModel(),
                _nn1 = new _nmx.SlotItemEffectModel(),
                _nn2 = false;
            return 37 != _nmy.ctype && 19 != _nmy.ctype && 2 != _nmy.ctype && 26 != _nmy.ctype && 6 != _nmy.ctype || (_nn1.houg += 1, _nn2 = true), 136 != _nmy.ship_id && 148 != _nmy.ship_id && 546 != _nmy.ship_id && 541 != _nmy.ship_id && 573 != _nmy.ship_id && 911 != _nmy.ship_id && 916 != _nmy.ship_id && 593 != _nmy.ship_id || (_nn1.houg += 1, _nn2 = true), 591 != _nmy.ship_id && 592 != _nmy.ship_id && 954 != _nmy.ship_id || (_nn1.houg += 2, _nn2 = true), 0 == _nn2 ? _nn0 : _nn0 = _nn1.multiply(1);
        };
    },
    81976: (_nn3, _nn4, _nn5) => {
        'use strict';
        var _nn6 = null;
        defineModule(_nn4);
        Object.defineProperty(_nn4, '__esModule', {
            'value': true
        }), _nn4.getSlot367PersonalEffect = void 0;
        var _nn7 = _nn5(74496);
        _nn4.getSlot367PersonalEffect = function(_nn8) {
            var _nn9 = null,
                _nna = new _nn7.SlotItemEffectModel(),
                _nnb = new _nn7.SlotItemEffectModel(),
                _nnc = false;
            if ('ゴトランド' == _nn8.yomi && (_nnb.houg += 2, _nnb.tais += 1, _nnb.kaih += 1, _nnb.saku += 1, _nnc = true), 70 == _nn8.ctype ? (_nnb.houg += 1, _nnb.tais += 1, _nnb.kaih += 1, _nnb.saku += 1, _nnc = true) : 72 == _nn8.ctype || 62 == _nn8.ctype ? (_nnb.houg += 1, _nnb.kaih += 1, _nnb.saku += 1, _nnc = true) : 67 != _nn8.ctype && 78 != _nn8.ctype && 82 != _nn8.ctype && 88 != _nn8.ctype && 108 != _nn8.ctype && 112 != _nn8.ctype || (_nnb.houg += 2, _nnb.kaih += 2, _nnb.saku += 2, _nnc = true), 0 == _nnc) return _nna;
            var _nnd = _nn8.get_slotnums(367);
            return _nna = _nnb.multiply(_nnd);
        };
    },
    89331: (_nne, _nnf, _nng) => {
        'use strict';
        var _nnh = null;
        defineModule(_nnf);
        Object.defineProperty(_nnf, '__esModule', {
            'value': true
        }), _nnf.getSlot368PersonalEffect = void 0;
        var _nni = _nng(74496);
        _nnf.getSlot368PersonalEffect = function(_nnj) {
            var _nnk = null,
                _nnl = new _nni.SlotItemEffectModel(),
                _nnm = new _nni.SlotItemEffectModel(),
                _nnn = false;
            if ('ゴトランド' == _nnj.yomi && (_nnm.houg = 4, _nnm.tais = 3, _nnm.kaih = 2, _nnm.saku = 3, _nnn = true, 630 == _nnj.ship_id && (_nnl.houg += 2, _nnl.raig += 2, _nnl.kaih += 1, _nnl.saku += 1)), 70 == _nnj.ctype ? (_nnm.houg = 2, _nnm.tais = 3, _nnm.kaih = 1, _nnm.saku = 2, _nnn = true) : 72 == _nnj.ctype || 62 == _nnj.ctype ? (_nnm.houg += 1, _nnm.tais += 2, _nnm.kaih += 1, _nnm.saku += 2, _nnn = true) : 67 != _nnj.ctype && 78 != _nnj.ctype && 82 != _nnj.ctype && 88 != _nnj.ctype && 108 != _nnj.ctype && 112 != _nnj.ctype || (_nnm.houg += 2, _nnm.tais += 2, _nnm.kaih += 2, _nnm.saku += 2, _nnn = true), 0 == _nnn) return _nnl;
            var _nno = _nnj.get_slotnums(368);
            return _nnl.add(_nnm.multiply(_nno)), _nnl;
        };
    },
    73973: (_nnp, _nnq, _nnr) => {
        'use strict';
        var _nns = null;
        defineModule(_nnq);
        Object.defineProperty(_nnq, '__esModule', {
            'value': true
        }), _nnq.getSlot369PersonalEffect = void 0;
        var _nnt = _nnr(74496);
        _nnq.getSlot369PersonalEffect = function(_nnu) {
            var _nnv = null,
                _nnw = new _nnt.SlotItemEffectModel(),
                _nnx = new _nnt.SlotItemEffectModel(),
                _nny = false;
            if ('ゴトランド' == _nnu.yomi && (_nnx.houg = 5, _nnx.tais = 4, _nnx.kaih = 4, _nnx.saku = 3, _nny = true, 630 == _nnu.ship_id && (_nnw.houg += 3, _nnw.raig += 3, _nnw.kaih += 2, _nnw.saku += 2)), 70 == _nnu.ctype ? (_nnx.houg += 3, _nnx.tais += 3, _nnx.kaih += 2, _nnx.saku += 3, _nny = true) : 72 == _nnu.ctype || 62 == _nnu.ctype ? (_nnx.houg += 2, _nnx.tais += 2, _nnx.kaih += 1, _nnx.saku += 2, _nny = true) : 67 != _nnu.ctype && 78 != _nnu.ctype && 82 != _nnu.ctype && 88 != _nnu.ctype && 108 != _nnu.ctype && 112 != _nnu.ctype || (_nnx.houg += 2, _nnx.tais += 2, _nnx.kaih += 2, _nnx.saku += 2, _nny = true), 0 == _nny) return _nnw;
            var _nnz = _nnu.get_slotnums(369);
            return _nnw.add(_nnx.multiply(_nnz)), _nnw;
        };
    },
    21178: (_no0, _no1, _no2) => {
        'use strict';
        var _no3 = null;
        defineModule(_no1);
        Object.defineProperty(_no1, '__esModule', {
            'value': true
        }), _no1.getSlot370PersonalEffect = void 0;
        var _no4 = _no2(74496);
        _no1.getSlot370PersonalEffect = function(_no5) {
            var _no6 = null,
                _no7 = new _no4.SlotItemEffectModel(),
                _no8 = new _no4.SlotItemEffectModel(),
                _no9 = false;
            if ('ゴトランド' == _no5.yomi && (_no8.houg = 1, _no8.tais = 3, _no8.kaih = 1, _no8.saku = 2, _no9 = true), 70 == _no5.ctype ? (_no8.houg += 1, _no8.tais += 3, _no8.kaih += 1, _no8.saku += 1, _no9 = true) : 72 == _no5.ctype || 62 == _no5.ctype ? (_no8.houg += 1, _no8.tais += 2, _no8.kaih += 1, _no8.saku += 1, _no9 = true) : 67 != _no5.ctype && 78 != _no5.ctype && 82 != _no5.ctype && 88 != _no5.ctype && 108 != _no5.ctype && 112 != _no5.ctype || (_no8.houg += 2, _no8.tais += 3, _no8.kaih += 2, _no8.saku += 2, _no9 = true, 'ウォースパイト' == _no5.yomi && (_no7.houg += 4, _no7.kaih += 1, _no7.saku += 1)), 0 == _no9) return _no7;
            var _noa = _no5.get_slotnums(370);
            return _no7.add(_no8.multiply(_noa)), _no7;
        };
    },
    5079: (_nob, _noc, _nod) => {
        'use strict';
        var _noe = null;
        defineModule(_noc);
        Object.defineProperty(_noc, '__esModule', {
            'value': true
        }), _noc.getSlot371PersonalEffect = void 0;
        var _nof = _nod(74496);
        _noc.getSlot371PersonalEffect = function(_nog) {
            var _noh = null,
                _noi = new _nof.SlotItemEffectModel(),
                _noj = new _nof.SlotItemEffectModel(),
                _nok = false;
            if ('ゴトランド' == _nog.yomi && (_noj.houg = 4, _noj.tais = 2, _noj.kaih = 3, _noj.saku = 6, _nok = true, 630 == _nog.ship_id && (_noi.houg += 2, _noi.kaih += 2, _noi.saku += 3)), 70 == _nog.ctype ? (_noj.houg += 2, _noj.tais += 1, _noj.kaih += 2, _noj.saku += 4, _nok = true) : 79 == _nog.ctype ? (_noj.houg += 2, _noj.kaih += 1, _noj.saku += 3, _nok = true) : 67 != _nog.ctype && 78 != _nog.ctype && 82 != _nog.ctype && 88 != _nog.ctype && 108 != _nog.ctype && 112 != _nog.ctype || (_noj.houg += 3, _noj.tais += 1, _noj.kaih += 2, _noj.saku += 3, _nok = true, 88 == _nog.ctype && (_noi.houg += 3, _noi.kaih += 2, _noi.saku += 2)), 0 == _nok) return _noi;
            var _nol = _nog.get_slotnums(371);
            return _noi.add(_noj.multiply(_nol)), _noi;
        };
    },
    95014: (_nom, _non, _noo) => {
        'use strict';
        var _nop = null;
        defineModule(_non);
        Object.defineProperty(_non, '__esModule', {
            'value': true
        }), _non.getSlot372PersonalEffect = void 0;
        var _noq = _noo(74496);
        _non.getSlot372PersonalEffect = function(_nor) {
            var _nos = null,
                _not = new _noq.SlotItemEffectModel(),
                _nou = false,
                _nov = new _noq.SlotItemEffectModel();
            if ('しょうかく' == _nor.yomi || 'ずいかく' == _nor.yomi || 'たいほう' == _nor.yomi ? (_nov.houg += 1, _nou = true, _not.raig += 1) : 'じゅんよう' != _nor.yomi && 'ひよう' != _nor.yomi || (_nov.houg += 1, _nou = true), 108 == _nor.ship_id || 109 == _nor.ship_id || 291 == _nor.ship_id || 292 == _nor.ship_id || 296 == _nor.ship_id || 297 == _nor.ship_id ? (_nov.houg += 1, _nou = true) : 116 == _nor.ship_id || 74 == _nor.ship_id || 117 == _nor.ship_id || 282 == _nor.ship_id || 185 == _nor.ship_id ? (_nov.tais += 1, _nou = true) : 560 == _nor.ship_id || 555 == _nor.ship_id || 318 == _nor.ship_id ? (_nov.tais += 1, _nou = true, _not.raig += 1) : 508 == _nor.ship_id || 509 == _nor.ship_id ? (_nov.houg += 1, _nou = true) : 883 != _nor.ship_id && 888 != _nor.ship_id || (_nov.houg += 2, _nov.tais += 1, _nou = true, _not.raig += 2), 0 == _nou) return _not;
            var _now = _nor.get_slotnums(372);
            return _not.add(_nov.multiply(_now)), _not;
        };
    },
    53099: (_nox, _noy, _noz) => {
        'use strict';
        var _np0 = null;
        defineModule(_noy);
        Object.defineProperty(_noy, '__esModule', {
            'value': true
        }), _noy.getSlot373PersonalEffect = void 0;
        var _np1 = _noz(74496);
        _noy.getSlot373PersonalEffect = function(_np2) {
            var _np3 = null,
                _np4 = new _np1.SlotItemEffectModel(),
                _np5 = new _np1.SlotItemEffectModel(),
                _np6 = false;
            if ('しょうかく' == _np2.yomi ? (_np5.houg += 2, _np6 = true, _np4.raig += 2, _np4.kaih += 2) : 'ずいかく' == _np2.yomi ? (_np5.houg += 1, _np6 = true, _np4.raig += 2, _np4.kaih += 3) : 'たいほう' == _np2.yomi ? (_np5.houg += 1, _np6 = true, _np4.raig += 2, _np4.kaih += 2) : 'じゅんよう' != _np2.yomi && 'ひよう' != _np2.yomi || (_np5.houg += 1, _np6 = true, _np4.raig += 1, _np4.kaih += 1), 108 == _np2.ship_id || 109 == _np2.ship_id ? (_np5.houg += 1, _np6 = true) : 291 == _np2.ship_id || 292 == _np2.ship_id ? (_np5.houg += 1, _np6 = true, _np4.raig += 1) : 296 == _np2.ship_id || 297 == _np2.ship_id ? (_np5.houg += 1, _np6 = true, _np4.raig += 1, _np4.kaih += 1) : 116 == _np2.ship_id || 74 == _np2.ship_id ? (_np5.tais += 1, _np6 = true) : 117 == _np2.ship_id || 282 == _np2.ship_id || 185 == _np2.ship_id ? (_np5.houg += 1, _np5.tais += 1, _np6 = true, _np4.raig += 1) : 560 == _np2.ship_id || 555 == _np2.ship_id || 318 == _np2.ship_id ? (_np5.houg += 1, _np5.tais += 2, _np6 = true, _np4.raig += 1, _np4.kaih += 1) : 508 == _np2.ship_id || 509 == _np2.ship_id ? (_np5.houg += 1, _np6 = true, _np4.raig += 2, _np4.kaih += 2) : 888 == _np2.ship_id ? (_np5.houg += 2, _np5.tais += 2, _np6 = true, _np4.raig += 2, _np4.kaih += 2) : 883 == _np2.ship_id && (_np5.houg += 1, _np5.tais += 2, _np6 = true, _np4.raig += 3, _np4.kaih += 4), 0 == _np6) return _np4;
            var _np7 = _np2.get_slotnums(373);
            return _np4.add(_np5.multiply(_np7)), _np4;
        };
    },
    76201: (_np8, _np9, _npa) => {
        'use strict';
        var _npb = null;
        defineModule(_np9);
        Object.defineProperty(_np9, '__esModule', {
            'value': true
        }), _np9.getSlot374PersonalEffect = void 0;
        var _npc = _npa(74496);
        _np9.getSlot374PersonalEffect = function(_npd) {
            var _npe = null,
                _npf = new _npc.SlotItemEffectModel(),
                _npg = new _npc.SlotItemEffectModel(),
                _nph = false;
            if ('しょうかく' == _npd.yomi ? (_npg.houg += 3, _nph = true, _npf.raig += 3, _npf.kaih += 3) : 'ずいかく' == _npd.yomi ? (_npg.houg += 2, _nph = true, _npf.raig += 3, _npf.kaih += 4) : 'たいほう' == _npd.yomi ? (_npg.houg += 2, _nph = true, _npf.raig += 3, _npf.kaih += 2) : 'じゅんよう' != _npd.yomi && 'ひよう' != _npd.yomi || (_npg.houg += 1, _nph = true, _npf.raig += 2, _npf.kaih += 2), 108 == _npd.ship_id || 109 == _npd.ship_id ? (_npg.houg += 1, _nph = true, _npf.raig += 1) : 291 == _npd.ship_id || 292 == _npd.ship_id ? (_npg.houg += 1, _npg.tais += 1, _nph = true, _npf.raig += 1) : 296 == _npd.ship_id || 297 == _npd.ship_id ? (_npg.houg += 1, _npg.tais += 1, _nph = true, _npf.raig += 1, _npf.kaih += 1) : 116 == _npd.ship_id || 74 == _npd.ship_id ? (_npg.houg += 1, _npg.tais += 1, _nph = true) : 117 == _npd.ship_id || 282 == _npd.ship_id || 185 == _npd.ship_id ? (_npg.houg += 1, _npg.tais += 2, _nph = true, _npf.raig += 1, _npf.kaih += 1) : 560 == _npd.ship_id || 555 == _npd.ship_id || 318 == _npd.ship_id ? (_npg.houg += 1, _npg.tais += 3, _nph = true, _npf.raig += 1, _npf.kaih += 2) : 508 == _npd.ship_id || 509 == _npd.ship_id ? (_npg.houg += 1, _npg.tais += 2, _nph = true, _npf.raig += 2, _npf.kaih += 3) : 888 == _npd.ship_id ? (_npg.houg += 3, _npg.tais += 3, _nph = true, _npf.raig += 2, _npf.kaih += 3) : 883 == _npd.ship_id && (_npg.houg += 2, _npg.tais += 3, _nph = true, _npf.raig += 3, _npf.kaih += 5), 0 == _nph) return _npf;
            var _npi = _npd.get_slotnums(374);
            return _npf.add(_npg.multiply(_npi)), _npf;
        };
    },
    24931: (_npj, _npk, _npl) => {
        'use strict';
        var _npm = null;
        defineModule(_npk);
        Object.defineProperty(_npk, '__esModule', {
            'value': true
        }), _npk.getSlot375PersonalEffect = void 0;
        var _npn = _npl(74496);
        _npk.getSlot375PersonalEffect = function(_npo) {
            var _npp = null,
                _npq = new _npn.SlotItemEffectModel(),
                _npr = new _npn.SlotItemEffectModel(),
                _nps = false;
            if (69 != _npo.ctype && 83 != _npo.ctype && 84 != _npo.ctype && 105 != _npo.ctype && 116 != _npo.ctype && 118 != _npo.ctype || (_npr.tyku += 3, _npr.houg += 3, _npr.kaih += 3, _npr.tais += 3, _nps = true), 'かが' == _npo.yomi && (_npr.tyku += 1, _npr.houg += 1, _npr.kaih += 1, _npr.tais += 1, _nps = true), 0 == _nps) return _npq;
            var _npt = _npo.get_slotnums(375);
            return _npq.add(_npr.multiply(_npt)), _npq;
        };
    },
    60978: (_npu, _npv, _npw) => {
        'use strict';
        var _npx = null;
        defineModule(_npv);
        Object.defineProperty(_npv, '__esModule', {
            'value': true
        }), _npv.getSlot376PersonalEffect = void 0;
        var _npy = _npw(74496);
        _npv.getSlot376PersonalEffect = function(_npz) {
            var _nq0 = null,
                _nq1 = new _npy.SlotItemEffectModel(),
                _nq2 = new _npy.SlotItemEffectModel(),
                _nq3 = false;
            if ('アメリカ' == _npz.getCountryName() ? (_nq2.houg += 2, _nq2.raig += 4, _nq3 = true) : 67 == _npz.ctype || 78 == _npz.ctype || 82 == _npz.ctype || 88 == _npz.ctype || 108 == _npz.ctype || 112 == _npz.ctype ? (_nq2.houg += 1, _nq2.raig += 2, _nq3 = true) : 96 == _npz.ctype && (_nq2.houg += 1, _nq2.raig += 1, _nq3 = true), 0 == _nq3) return _nq1;
            var _nq4 = _npz.get_slotnums(376);
            return _nq1.add(_nq2.multiply(_nq4)), _nq1;
        };
    },
    74312: (_nq5, _nq6, _nq7) => {
        'use strict';
        var _nq8 = null;
        defineModule(_nq6);
        Object.defineProperty(_nq6, '__esModule', {
            'value': true
        }), _nq6.getSlot377PersonalEffect = void 0;
        var _nq9 = _nq7(74496);
        _nq6.getSlot377PersonalEffect = function(_nqa) {
            var _nqb = null,
                _nqc = new _nq9.SlotItemEffectModel();
            return 'アメリカ' == _nqa.getCountryName() ? (_nqc.tais += 2, _nqc.kaih += 1, 629 == _nqa.ship_id && (_nqc.tais += 1, _nqc.kaih += 2)) : 67 != _nqa.ctype && 78 != _nqa.ctype && 82 != _nqa.ctype && 88 != _nqa.ctype && 108 != _nqa.ctype && 112 != _nqa.ctype && 96 != _nqa.ctype || (_nqc.tais += 1, _nqc.kaih += 1), 651 != _nqa.ship_id && 656 != _nqa.ship_id || (_nqc.tais += 1, _nqc.kaih += 2), _nqc;
        };
    },
    54350: (_nqd, _nqe, _nqf) => {
        'use strict';
        var _nqg = null;
        defineModule(_nqe);
        Object.defineProperty(_nqe, '__esModule', {
            'value': true
        }), _nqe.getSlot378PersonalEffect = void 0;
        var _nqh = _nqf(74496);
        _nqe.getSlot378PersonalEffect = function(_nqi) {
            var _nqj = null,
                _nqk = new _nqh.SlotItemEffectModel();
            return 'アメリカ' == _nqi.getCountryName() ? (_nqk.tais += 3, _nqk.kaih += 1, 629 == _nqi.ship_id && (_nqk.tais += 1, _nqk.kaih += 1)) : 67 == _nqi.ctype || 78 == _nqi.ctype || 82 == _nqi.ctype || 88 == _nqi.ctype || 108 == _nqi.ctype || 112 == _nqi.ctype ? (_nqk.tais += 2, _nqk.kaih += 1) : 96 == _nqi.ctype && (_nqk.tais += 1, _nqk.kaih += 1), 651 != _nqi.ship_id && 656 != _nqi.ship_id || (_nqk.tais += 1, _nqk.kaih += 1), _nqk;
        };
    },
    26262: function(_nql, _nqm, _nqn) {
        'use strict';
        var _nqo = null;
        var _nqp = this && this.__importDefault || function(_nqq) {
            var _nqr = null;
            return _nqq && _nqq.__esModule ? _nqq : {
                'default': _nqq
            };
        };
        defineModule(_nqm);
        Object.defineProperty(_nqm, '__esModule', {
            'value': true
        }), _nqm.getSlot379PersonalEffect = void 0;
        var _nqs = _nqn(74496),
            _nqt = _nqp(_nqn(18622));
        _nqm.getSlot379PersonalEffect = function(_nqu) {
            var _nqv = null,
                _nqw = new _nqs.SlotItemEffectModel(),
                _nqx = false,
                _nqy = new _nqs.SlotItemEffectModel();
            if (1 == _nqu.stype ? (_nqy.tyku += 2, _nqy.houg += 1, _nqx = true) : 21 != _nqu.stype && 16 != _nqu.stype || (_nqy.tyku += 1, _nqy.houg += 1, _nqx = true), 66 == _nqu.ctype || 28 == _nqu.ctype ? (_nqy.houg += 1, _nqy.tyku += 2, _nqx = true) : 101 == _nqu.ctype && (_nqy.tyku += 2, _nqy.houg += 1, _nqw.tyku += 2, _nqw.houg += 2, _nqx = true), 'ゆら' == _nqu.yomi || 'なか' == _nqu.yomi || 'きぬ' == _nqu.yomi || 'いすず' == _nqu.yomi ? (_nqy.houg += 2, _nqx = true) : 'おおい' != _nqu.yomi && 'きたかみ' != _nqu.yomi || (_nqy.tyku += 2, _nqy.houg += 2, _nqx = true), 'ゆら' != _nqu.yomi && 'なか' != _nqu.yomi && 'きぬ' != _nqu.yomi && 'いすず' != _nqu.yomi && 'ゆうばり' != _nqu.yomi || (_nqy.tais += 1, _nqx = true), 'てんりゅう' != _nqu.yomi && 'たつた' != _nqu.yomi && 'ゆうばり' != _nqu.yomi || (_nqy.houg += 1, _nqx = true), 488 == _nqu.ship_id ? (_nqy.tyku += 4, _nqx = true) : 220 == _nqu.ship_id ? (_nqy.tyku += 3, _nqx = true) : 23 == _nqu.ship_id ? (_nqy.tyku += 2, _nqx = true) : 160 == _nqu.ship_id || 487 == _nqu.ship_id || 141 == _nqu.ship_id ? (_nqy.tyku += 3, _nqx = true) : 224 == _nqu.ship_id || 289 == _nqu.ship_id || 219 == _nqu.ship_id || 56 == _nqu.ship_id || 113 == _nqu.ship_id || 22 == _nqu.ship_id ? (_nqy.tyku += 2, _nqx = true) : 651 != _nqu.ship_id && 656 != _nqu.ship_id || (_nqy.tyku += 3, _nqy.houg += 3, 656 == _nqu.ship_id && (_nqy.kaih += 3, _nqy.tais += 2), _nqx = true), 488 != _nqu.ship_id && 160 != _nqu.ship_id && 487 != _nqu.ship_id && 141 != _nqu.ship_id || (_nqy.tais += 1, _nqx = true), 477 != _nqu.ship_id && 478 != _nqu.ship_id && 624 != _nqu.ship_id || (_nqy.tais += 2, _nqx = true), 477 != _nqu.ship_id && 478 != _nqu.ship_id && 624 != _nqu.ship_id && 622 != _nqu.ship_id || (_nqy.tyku += 2, _nqx = true), 652 != _nqu.ship_id && 657 != _nqu.ship_id && 547 != _nqu.ship_id && 146 != _nqu.ship_id || (_nqw.houg += 2), 652 != _nqu.ship_id && 657 != _nqu.ship_id && 547 != _nqu.ship_id && 146 != _nqu.ship_id || (_nqw.tyku += 2), _nqx) {
                var _nqz = _nqu.get_slotnums(379);
                _nqw.add(_nqy.multiply(_nqz));
            }
            var _nr0 = new _nqs.SlotItemEffectModel(),
                _nr1 = false;
            16 == _nqu.stype || 3 == _nqu.stype || 4 == _nqu.stype || 21 == _nqu.stype ? (_nr0.houg += 1, _nr0.kaih += 2, _nr1 = true) : 1 == _nqu.stype && (_nr0.houg += 1, _nr0.kaih += 4, _nr1 = true), 66 == _nqu.ctype || 28 == _nqu.ctype || 21 == _nqu.ctype || 34 == _nqu.ctype ? (_nr0.houg += 2, _nr0.kaih += 3, _nr1 = true) : 101 == _nqu.ctype && (_nr0.houg += 4, _nr0.kaih += 3, _nr1 = true), 488 == _nqu.ship_id || 651 == _nqu.ship_id || 656 == _nqu.ship_id ? (_nr0.houg += 2, _nr0.kaih += 2, _nr1 = true) : 487 == _nqu.ship_id || 160 == _nqu.ship_id || 141 == _nqu.ship_id || 118 == _nqu.ship_id || 119 == _nqu.ship_id ? (_nr0.houg += 1, _nr0.kaih += 1, _nr1 = true) : 652 != _nqu.ship_id && 657 != _nqu.ship_id && 547 != _nqu.ship_id && 146 != _nqu.ship_id || (_nr0.houg += 1, _nr0.kaih += 1, _nr1 = true);
            var _nr2 = new _nqs.SlotItemEffectModel(),
                _nr3 = false;
            if (656 == _nqu.ship_id && (_nr2.tyku += 3, _nr2.kaih += 2, _nr3 = true), _nr1 || _nr3) {
                for (var _nr4 = 0, _nr5 = 0, _nr6 = 0, _nr7 = _nqu.have_slot_ids(); _nr6 < _nr7.length; _nr6++) {
                    var _nr8 = _nr7[_nr6],
                        _nr9 = _nqt.default.model.slot.getMst(_nr8),
                        _nra = _nr9.equipType;
                    12 != _nra && 13 != _nra || (_nr9.sakuteki >= 5 && (_nr4 += _nqu.get_slotnums(parseInt(_nr8))), _nr9.taiku >= 2 && (_nr5 += _nqu.get_slotnums(parseInt(_nr8))));
                }
                _nr1 && _nr4 > 0 && _nqw.add(_nr0), _nr3 && _nr5 > 0 && _nqw.add(_nr2);
            }
            return _nqw;
        };
    },
    45530: function(_nrb, _nrc, _nrd) {
        'use strict';
        var _nre = null;
        var _nrf = this && this.__importDefault || function(_nrg) {
            var _nrh = null;
            return _nrg && _nrg.__esModule ? _nrg : {
                'default': _nrg
            };
        };
        defineModule(_nrc);
        Object.defineProperty(_nrc, '__esModule', {
            'value': true
        }), _nrc.getSlot380PersonalEffect = void 0;
        var _nri = _nrd(74496),
            _nrj = _nrf(_nrd(18622));
        _nrc.getSlot380PersonalEffect = function(_nrk) {
            var _nrl = null,
                _nrm = new _nri.SlotItemEffectModel(),
                _nrn = false,
                _nro = new _nri.SlotItemEffectModel();
            if (21 != _nrk.stype && 16 != _nrk.stype || (_nro.tyku += 2, _nro.houg += 1, _nrn = true), 101 == _nrk.ctype && (_nro.tyku += 2, _nro.houg += 1, _nrn = true, _nrm.tyku += 2, _nrm.houg += 2), 'ゆら' == _nrk.yomi || 'なか' == _nrk.yomi || 'きぬ' == _nrk.yomi || 'いすず' == _nrk.yomi ? (_nro.houg += 2, _nrn = true) : 'おおい' != _nrk.yomi && 'きたかみ' != _nrk.yomi || (_nro.tyku += 2, _nro.houg += 3, _nrn = true), 'ゆら' != _nrk.yomi && 'なか' != _nrk.yomi && 'きぬ' != _nrk.yomi && 'いすず' != _nrk.yomi && 'ゆうばり' != _nrk.yomi || (_nro.tais += 1, _nrn = true), 'てんりゅう' != _nrk.yomi && 'たつた' != _nrk.yomi && 'ゆうばり' != _nrk.yomi || (_nro.houg += 1, _nrn = true), 488 == _nrk.ship_id ? (_nro.tyku += 4, _nrn = true) : 220 == _nrk.ship_id ? (_nro.tyku += 3, _nrn = true) : 23 == _nrk.ship_id ? (_nro.tyku += 2, _nrn = true) : 160 == _nrk.ship_id || 487 == _nrk.ship_id || 141 == _nrk.ship_id ? (_nro.tyku += 3, _nrn = true) : 224 == _nrk.ship_id || 289 == _nrk.ship_id || 219 == _nrk.ship_id || 56 == _nrk.ship_id || 113 == _nrk.ship_id || 22 == _nrk.ship_id ? (_nro.tyku += 2, _nrn = true) : 651 == _nrk.ship_id || 656 == _nrk.ship_id ? (_nro.tyku += 3, _nro.houg += 3, _nrn = true) : 407 != _nrk.ship_id && 665 != _nrk.ship_id || (_nro.houg += 2, _nro.tyku += 2, _nrn = true, _nrm.houg += 1, _nrm.tyku += 1, _nrm.kaih += 2), 488 != _nrk.ship_id && 160 != _nrk.ship_id && 487 != _nrk.ship_id && 141 != _nrk.ship_id || (_nro.tais += 1, _nrn = true), 477 != _nrk.ship_id && 478 != _nrk.ship_id && 624 != _nrk.ship_id || (_nro.tais += 2, _nrn = true), 477 != _nrk.ship_id && 478 != _nrk.ship_id && 624 != _nrk.ship_id && 622 != _nrk.ship_id || (_nro.tyku += 2, _nrn = true), 652 != _nrk.ship_id && 657 != _nrk.ship_id || (_nro.houg += 3, _nrn = true), 547 != _nrk.ship_id && 146 != _nrk.ship_id || (_nrm.houg += 2), 652 != _nrk.ship_id && 657 != _nrk.ship_id && 547 != _nrk.ship_id && 146 != _nrk.ship_id || (_nrm.tyku += 2), _nrn) {
                var _nrp = _nrk.get_slotnums(380);
                _nrm.add(_nro.multiply(_nrp));
            }
            var _nrq = new _nri.SlotItemEffectModel(),
                _nrr = false,
                _nrs = new _nri.SlotItemEffectModel(),
                _nrt = false,
                _nru = false;
            if (16 != _nrk.stype && 3 != _nrk.stype && 4 != _nrk.stype && 21 != _nrk.stype || (_nrq.houg += 2, _nrq.kaih += 1, _nrr = true), 101 == _nrk.ctype && (_nrq.houg += 4, _nrq.kaih += 3, _nrr = true), 488 != _nrk.ship_id && 487 != _nrk.ship_id && 160 != _nrk.ship_id && 141 != _nrk.ship_id && 118 != _nrk.ship_id && 119 != _nrk.ship_id && 651 != _nrk.ship_id && 656 != _nrk.ship_id || (_nrq.houg += 1, _nrq.kaih += 2, _nrr = true), 652 == _nrk.ship_id || 657 == _nrk.ship_id || 547 == _nrk.ship_id || 146 == _nrk.ship_id ? (_nrq.houg += 1, _nrq.kaih += 3, _nrr = true) : 407 != _nrk.ship_id && 665 != _nrk.ship_id || (_nru = true, _nrr = true, _nrq.houg += 2, _nrq.kaih += 1, _nrt = true, _nrs.houg += 1, _nrs.tyku += 2, _nrs.kaih += 1), _nrr || _nru) {
                for (var _nrv = 0, _nrw = 0, _nrx = 0, _nry = _nrk.have_slot_ids(); _nrx < _nry.length; _nrx++) {
                    var _nrz = _nry[_nrx],
                        _ns0 = _nrj.default.model.slot.getMst(_nrz),
                        _ns1 = _ns0.equipType;
                    12 == _ns1 || 13 == _ns1 ? _ns0.sakuteki >= 5 && (_nrv += _nrk.get_slotnums(parseInt(_nrz))) : 21 == _ns1 && (_nrw += _nrk.get_slotnums(parseInt(_nrz)));
                }
                _nrr && _nrv > 0 && _nrm.add(_nrq), _nrt && _nrw > 0 && _nrm.add(_nrs);
            }
            return _nrm;
        };
    },
    44053: (_ns2, _ns3, _ns4) => {
        'use strict';
        var _ns5 = null;
        defineModule(_ns3);
        Object.defineProperty(_ns3, '__esModule', {
            'value': true
        }), _ns3.getSlot381PersonalEffect = void 0;
        var _ns6 = _ns4(74496);
        _ns3.getSlot381PersonalEffect = function(_ns7) {
            var _ns8 = null,
                _ns9 = new _ns6.SlotItemEffectModel(),
                _nsa = false,
                _nsb = new _ns6.SlotItemEffectModel(),
                _nsc = 0;
            if ('アメリカ' == _ns7.getCountryName() && (_nsb.houg += 1, 102 == _ns7.ctype && (_nsb.houg += 1), _nsa = true, _nsc = 1), 0 == _nsa) return _ns9;
            var _nsd = _ns7.get_slotnums(381);
            if (_ns9.add(_nsb.multiply(_nsd)), 0 == _nsc) return _ns9;
            var _nse = _ns7.get_each_level_nums(381),
                _nsf = 0;
            return _nse.map(function(_nsg, _nsh) {
                _nsh >= 6 && (_nsf += _nsg);
            }), 1 == _nsc && (_ns9.houg += 1 * _nsf), _ns9;
        };
    },
    65441: function(_nsi, _nsj, _nsk) {
        'use strict';
        var _nsl = null;
        var _nsm = this && this.__importDefault || function(_nsn) {
            var _nso = null;
            return _nsn && _nsn.__esModule ? _nsn : {
                'default': _nsn
            };
        };
        defineModule(_nsj);
        Object.defineProperty(_nsj, '__esModule', {
            'value': true
        }), _nsj.getSlot382PersonalEffect = void 0;
        var _nsp = _nsk(74496),
            _nsq = _nsm(_nsk(18622));
        _nsj.getSlot382PersonalEffect = function(_nsr) {
            var _nss = null,
                _nst = new _nsp.SlotItemEffectModel(),
                _nsu = false,
                _nsv = new _nsp.SlotItemEffectModel(),
                _nsw = false,
                _nsx = new _nsp.SlotItemEffectModel(),
                _nsy = new _nsp.SlotItemEffectModel(),
                _nsz = 2;
            1 == _nsr.stype && (_nsv.tyku += 2, _nsv.kaih += 2, _nsv.tais += 1, _nsu = true, _nsx.houg += 2, _nsx.kaih += 3, _nsy.tyku += 2, _nsy.kaih += 3, _nsw = true, _nsz = 1), 66 != _nsr.ctype && 28 != _nsr.ctype && 101 != _nsr.ctype || (_nsv.tyku += 2, _nsv.kaih += 1, _nsu = true, _nsx.houg += 1, _nsx.kaih += 2, _nsy.tyku += 2, _nsy.kaih += 2, _nsw = true, _nsz = 1), 'ゆら' != _nsr.yomi && 'なか' != _nsr.yomi && 'きぬ' != _nsr.yomi || (_nsv.tyku += 1, _nsu = true), 488 == _nsr.ship_id || 220 == _nsr.ship_id ? (_nsv.kaih += 1, _nsu = true, 488 == _nsr.ship_id && (_nsx.houg += 1, _nsx.kaih += 1, _nsy.tyku += 2, _nsy.kaih += 2, _nsw = true, _nsz = 1)) : 160 == _nsr.ship_id || 224 == _nsr.ship_id ? (_nsv.kaih += 1, _nsu = true, 160 == _nsr.ship_id && (_nsx.houg += 1, _nsx.kaih += 1, _nsy.tyku += 2, _nsy.kaih += 2, _nsw = true)) : 487 == _nsr.ship_id || 289 == _nsr.ship_id ? (_nsv.kaih += 1, _nsu = true, 487 == _nsr.ship_id && (_nsx.houg += 1, _nsx.kaih += 1, _nsy.tyku += 2, _nsy.kaih += 2, _nsw = true)) : 656 == _nsr.ship_id ? (_nsv.tyku += 3, _nsv.kaih += 2, _nsu = true, _nsx.houg += 2, _nsx.kaih += 2, _nsy.tyku += 3, _nsy.kaih += 2, _nsw = true, _nsz = 1) : 145 != _nsr.ship_id && 961 != _nsr.ship_id || (_nsz = 1);
            for (var _nt0 = 0, _nt1 = 0, _nt2 = 0, _nt3 = _nsr.have_slot_ids(); _nt2 < _nt3.length; _nt2++) {
                var _nt4 = _nt3[_nt2],
                    _nt5 = _nsq.default.model.slot.getMst(_nt4),
                    _nt6 = _nt5.equipType;
                12 != _nt6 && 13 != _nt6 || (_nt5.sakuteki >= 5 && (_nt0 += _nsr.get_slotnums(parseInt(_nt4))), _nt5.taiku >= 2 && (_nt1 += _nsr.get_slotnums(parseInt(_nt4))));
            }
            for (var _nt7 = [], _nt8 = function(_nt9) {
                    var _nta = null;
                    if (null == _nsr.have_slots_dict[_nt9]) return 'continue';
                    var _ntb = _nsr.get_each_level_nums(_nt9);
                    null == _nt7[_nt9] && (_nt7[_nt9] = []), _ntb.forEach(function(_ntc, _ntd) {
                        var _nte = null;
                        for (var _ntf = 1; _ntf <= _nsr.SLOT_LEVEL_MAX; _ntf++) null == _nt7[_nt9][_ntf] && (_nt7[_nt9][_ntf] = 0), _ntd >= _ntf && (_nt7[_nt9][_ntf] += _ntc);
                    });
                }, _ntg = 0, _nth = [509]; _ntg < _nth.length; _ntg++) {
                _nt8(_nth[_ntg]);
            }
            var _nti = 0,
                _ntj = 0,
                _ntk = 0,
                _ntl = 0,
                _ntm = 0,
                _ntn = 0;
            null != _nt7[509] && (_nti = _nt7[509][1], _ntj = _nt7[509][2], _ntk = _nt7[509][4], _ntl = _nt7[509][6], _ntm = _nt7[509][8], _ntn = _nt7[509][10], 1 == _nsz ? (_nti >= 1 && (_nst.tyku += 1 * _nti), _ntj >= 1 && (_nst.kaih += 2 * _ntj), _ntk >= 1 && (_nst.houg += 1 * _ntk), _ntl >= 1 && (_nst.tyku += 1 * _ntl), _ntm >= 1 && (_nst.houm += 1 * _ntm), _ntn >= 1 && (_nst.tyku += 1 * _ntn)) : 2 == _nsz && (_ntj >= 1 && (_nst.tyku += 1 * _ntj), _ntk >= 1 && (_nst.kaih += 2 * _ntk), _ntl >= 1 && (_nst.houg += 1 * _ntl), _ntm >= 1 && (_nst.tyku += 1 * _ntm), _ntn >= 1 && (_nst.houm += 1 * _ntn)));
            var _nto = _nsr.get_slotnums(509),
                _ntp = _nto + _nsr.get_slotnums(382);
            return _nsu && _nst.add(_nsv.multiply(_ntp)), 3 != _nsr.stype && 21 != _nsr.stype && 4 != _nsr.stype || _ntj >= 1 && (_nt0 > 0 && (_nst.houg += 1, _nst.kaih += 1), _nt1 > 0 && (_nst.tyku += 2, _nst.kaih += 1)), 145 == _nsr.ship_id ? _ntj >= 1 && (_nt0 > 0 && (_nst.houg += 1, _nst.tyku += 1, _nst.kaih += 2), _nt1 > 0 && (_nst.tyku += 4, _nst.kaih += 2)) : 961 == _nsr.ship_id && _nto > 0 && (_nt0 > 0 && (_nst.houg += 2, _nst.tyku += 2, _nst.kaih += 3), _nt1 > 0 && (_nst.houg += 1, _nst.tyku += 5, _nst.kaih += 3)), _nsw && _nt0 > 0 && _nst.add(_nsx), _nsw && _nt1 > 0 && _nst.add(_nsy), _nst;
        };
    },
    33258: (_ntq, _ntr, _nts) => {
        'use strict';
        var _ntt = null;
        defineModule(_ntr);
        Object.defineProperty(_ntr, '__esModule', {
            'value': true
        }), _ntr.getSlot383PersonalEffect = void 0;
        var _ntu = _nts(74496);
        _ntr.getSlot383PersonalEffect = function(_ntv) {
            var _ntw = null,
                _ntx = new _ntu.SlotItemEffectModel(),
                _nty = false,
                _ntz = new _ntu.SlotItemEffectModel(),
                _nu0 = _ntv.get_each_level_over_nums([383]).slot[383];
            if (44 == _ntv.ctype && (_ntz.raig += 2, _nty = true, _nu0[4] > 0 && (_ntx.raig += 1), _nu0[6] > 0 && (_ntx.houm += 1)), 'い58' == _ntv.yomi && (_ntz.raig += 1, _nty = true), 636 == _ntv.ship_id ? (_ntz.raig += 3, _nty = true) : 607 == _ntv.ship_id && (_ntz.raig += 4, _nty = true), _nu0[8] > 0 && (_ntx.raig += 1), _nu0[10] > 0 && (_ntx.houm += 1), 'い58' != _ntv.yomi && 'い47' != _ntv.yomi || _nu0[5] > 0 && (_ntx.houm += 1), 0 == _nty) return _ntx;
            var _nu1 = _ntv.get_slotnums(383);
            return _ntx.add(_ntz.multiply(_nu1)), _ntx;
        };
    },
    92168: (_nu2, _nu3, _nu4) => {
        'use strict';
        var _nu5 = null;
        defineModule(_nu3);
        Object.defineProperty(_nu3, '__esModule', {
            'value': true
        }), _nu3.getSlot384PersonalEffect = void 0;
        var _nu6 = _nu4(74496);
        _nu3.getSlot384PersonalEffect = function(_nu7) {
            var _nu8 = null,
                _nu9 = new _nu6.SlotItemEffectModel(),
                _nua = false,
                _nub = new _nu6.SlotItemEffectModel();
            44 == _nu7.ctype && (_nub.kaih += 3, _nua = true), 'い58' == _nu7.yomi && (_nub.kaih += 2, _nua = true), 636 == _nu7.ship_id ? (_nub.kaih += 3, _nua = true) : 607 == _nu7.ship_id && (_nub.kaih += 4, _nua = true);
            var _nuc = _nu7.get_slotnums(384);
            _nua && _nu9.add(_nub.multiply(_nuc));
            var _nud = _nuc,
                _nue = _nu7.get_slotnums(213),
                _nuf = _nu7.get_slotnums(214),
                _nug = _nu7.get_slotnums(383);
            return _nud > 0 && _nue + _nuf + _nug > 0 && (_nu9.raig += 3, _nu9.kaih += 2), _nu9;
        };
    },
    85975: (_nuh, _nui, _nuj) => {
        'use strict';
        var _nuk = null;
        defineModule(_nui);
        Object.defineProperty(_nui, '__esModule', {
            'value': true
        }), _nui.getSlot385PersonalEffect = void 0;
        var _nul = _nuj(74496);
        _nui.getSlot385PersonalEffect = function(_num) {
            var _nun = null,
                _nuo = new _nul.SlotItemEffectModel(),
                _nup = false,
                _nuq = new _nul.SlotItemEffectModel(),
                _nur = 0;
            if ('アメリカ' == _num.getCountryName() && (_nuq.houg += 1, 102 == _num.ctype || 107 == _num.ctype ? (_nuq.houg += 1, _nuq.souk += 1) : 93 == _num.ctype && (_nuq.houg += 1), _nup = true, _nur = 1), 8 == _num.stype && (_nuq.houg += 1, _nup = true), 0 == _nup) return _nuo;
            var _nus = _num.get_slotnums(385);
            if (_nuo.add(_nuq.multiply(_nus)), 0 == _nur) return _nuo;
            var _nut = _num.get_each_level_nums(385),
                _nuu = 0;
            return _nut.forEach(function(_nuv, _nuw) {
                _nuw >= 6 && (_nuu += _nuv);
            }), 1 == _nur && (_nuo.houg += 1 * _nuu, _nuo.souk += 1 * _nut[10]), _nuo;
        };
    },
    98467: (_nux, _nuy, _nuz) => {
        'use strict';
        var _nv0 = null;
        defineModule(_nuy);
        Object.defineProperty(_nuy, '__esModule', {
            'value': true
        }), _nuy.getSlot386PersonalEffect = void 0;
        var _nv1 = _nuz(74496);
        _nuy.getSlot386PersonalEffect = function(_nv2) {
            var _nv3 = null,
                _nv4 = new _nv1.SlotItemEffectModel(),
                _nv5 = false,
                _nv6 = new _nv1.SlotItemEffectModel(),
                _nv7 = 0;
            if ('アメリカ' == _nv2.getCountryName() && (_nv6.houg += 1, _nv5 = true, _nv7 = 1), 0 == _nv5) return _nv4;
            var _nv8 = _nv2.get_slotnums(386);
            if (_nv4.add(_nv6.multiply(_nv8)), 0 == _nv7) return _nv4;
            var _nv9 = _nv2.get_each_level_nums(386),
                _nva = 0,
                _nvb = 0;
            return _nv9.forEach(function(_nvc, _nvd) {
                _nvd >= 2 && (_nva += _nvc), _nvd >= 7 && (_nvb += _nvc);
            }), 1 == _nv7 && (_nv4.houg += 1 * _nva, _nv4.houg += 1 * _nvb), _nv4;
        };
    },
    88348: (_nve, _nvf, _nvg) => {
        'use strict';
        var _nvh = null;
        defineModule(_nvf);
        Object.defineProperty(_nvf, '__esModule', {
            'value': true
        }), _nvf.getSlot387PersonalEffect = void 0;
        var _nvi = _nvg(74496);
        _nvf.getSlot387PersonalEffect = function(_nvj) {
            var _nvk = null,
                _nvl = new _nvi.SlotItemEffectModel(),
                _nvm = false,
                _nvn = new _nvi.SlotItemEffectModel(),
                _nvo = 0;
            if ('アメリカ' == _nvj.getCountryName() && (_nvn.houg += 1, _nvm = true, _nvo = 1), 0 == _nvm) return _nvl;
            var _nvp = _nvj.get_slotnums(387);
            if (_nvl.add(_nvn.multiply(_nvp)), 0 == _nvo) return _nvl;
            var _nvq = _nvj.get_each_level_nums(387),
                _nvr = 0,
                _nvs = 0;
            return _nvq.forEach(function(_nvt, _nvu) {
                _nvu >= 2 && (_nvr += _nvt), _nvu >= 7 && (_nvs += _nvt);
            }), 1 == _nvo && (_nvl.houg += 1 * _nvr, _nvl.houg += 1 * _nvs), _nvl;
        };
    },
    21097: (_nvv, _nvw, _nvx) => {
        'use strict';
        var _nvy = null;
        defineModule(_nvw);
        Object.defineProperty(_nvw, '__esModule', {
            'value': true
        }), _nvw.getSlot389PersonalEffect = void 0;
        var _nvz = _nvx(74496);
        _nvw.getSlot389PersonalEffect = function(_nw0) {
            var _nw1 = null,
                _nw2 = new _nvz.SlotItemEffectModel(),
                _nw3 = false,
                _nw4 = new _nvz.SlotItemEffectModel();
            if (594 == _nw0.ship_id || 599 == _nw0.ship_id) _nw4.houg += 2, _nw4.kaih += 2, _nw3 = true;
            else {
                if (698 == _nw0.ship_id || 610 == _nw0.ship_id) _nw4.houg += 3, _nw4.kaih += 2, _nw3 = true;
                else 646 == _nw0.ship_id && (_nw4.houg += 4, _nw4.tais += 4, _nw4.kaih += 3, _nw3 = true, _nw0.get_type3_nums(25) > 0 && (_nw2.houg += 3, _nw2.tais += 6), _nw0.get_slotnums(326) + _nw0.get_slotnums(327) > 0 && (_nw2.houg += 5, _nw2.tais += 4));
            }
            if ('アメリカ' == _nw0.getCountryName() && (_nw4.houg += 2, _nw4.tais += 3, _nw4.kaih += 1, _nw3 = true), 0 == _nw3) return _nw2;
            var _nw5 = _nw0.get_slotnums(389);
            return _nw2.add(_nw4.multiply(_nw5)), _nw2;
        };
    },
    43607: (_nw6, _nw7, _nw8) => {
        'use strict';
        var _nw9 = null;
        defineModule(_nw7);
        Object.defineProperty(_nw7, '__esModule', {
            'value': true
        }), _nw7.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _nwa = _nw8(74496);
        _nw7.getSlot38cmFourBarrelGunPersonalEffect = function(_nwb) {
            var _nwc = null,
                _nwd = new _nwa.SlotItemEffectModel(),
                _nwe = _nwb.get_slotnums(245),
                _nwf = _nwb.get_slotnums(246),
                _nwg = _nwb.get_slotnums(468),
                _nwh = _nwe + _nwf + _nwg,
                _nwi = 0,
                _nwj = 0,
                _nwk = new Array();
            if (79 != _nwb.ctype) return _nwd;
            _nwd.houg += 2 * _nwh, _nwd.houm += 1 * _nwh, _nwg >= 1 && (_nwd.houg += 1 * _nwg, _nwj = 1, _nwk.push(468), _nwk.push(471)), _nwi = 1;
            var _nwl = _nwb.get_slotnums(247),
                _nwm = _nwb.get_slotnums(471);
            if (1 == _nwi && _nwl >= 1 && (_nwd.kaih += 2 * _nwl, _nwd.houg += 2 * _nwl, _nwd.houm += 2 * _nwl), 0 == _nwj) return _nwd;
            for (var _nwn = {}, _nwo = {}, _nwp = {}, _nwq = {}, _nwr = {}, _nws = 0, _nwt = _nwk; _nws < _nwt.length; _nws++) {
                var _nwu = _nwt[_nws];
                if (_nwo[_nwu] = 0, _nwp[_nwu] = 0, _nwq[_nwu] = 0, _nwr[_nwu] = 0, _nwn[_nwu] = 0, null != _nwb.have_slots_dict[_nwu])
                    for (var _nwv = 0, _nww = _nwb.have_slots_dict[_nwu]; _nwv < _nww.length; _nwv++) {
                        var _nwx = _nww[_nwv].level;
                        _nwx >= 4 && _nwo[_nwu]++, _nwx >= 7 && _nwp[_nwu]++, _nwx >= 8 && _nwq[_nwu]++, _nwx >= 9 && _nwr[_nwu]++, _nwx >= 10 && _nwn[_nwu]++;
                    }
            }
            if (1 == _nwj && _nwg > 0) {
                var _nwy = _nwo[468],
                    _nwz = _nwq[468],
                    _nx0 = _nwr[468],
                    _nx1 = _nwn[468],
                    _nx2 = _nwp[471],
                    _nx3 = _nwr[471];
                _nwy >= 1 && (_nwd.houg += 1 * _nwy, _nwd.houm += 1 * _nwy), _nwz >= 1 && (_nwd.houg += 1 * _nwz, _nwd.houm += 1 * _nwz), _nx0 >= 1 && (_nwd.tyku += 1 * _nx0, _nwm >= 1 && (_nwd.houm += 2 * _nwm), _nwl >= 1 && (_nwd.kaih += 1 * _nwl, _nwd.houm += 1 * _nwl)), _nx1 >= 1 && (_nwd.houm += 1 * _nx1, _nwm >= 1 && (_nwd.houm += 1 * _nwm, _nx2 >= 1 && (_nwd.houm += 1 * _nx2), _nx3 >= 1 && (_nwd.kaih += 1 * _nx3)), _nwl >= 1 && (_nwd.houg += 1 * _nwl, _nwd.kaih += 1 * _nwl, _nwd.houm += 1 * _nwl));
            }
            return _nwd;
        };
    },
    2380: (_nx4, _nx5, _nx6) => {
        'use strict';
        var _nx7 = null;
        defineModule(_nx5);
        Object.defineProperty(_nx5, '__esModule', {
            'value': true
        }), _nx5.getSlot38cmTwinGunPersonalEffect = void 0;
        var _nx8 = _nx6(74496);
        _nx5.getSlot38cmTwinGunPersonalEffect = function(_nx9) {
            var _nxa = null,
                _nxb = new _nx8.SlotItemEffectModel(),
                _nxc = false,
                _nxd = new _nx8.SlotItemEffectModel(),
                _nxe = 0,
                _nxf = _nx9.get_slotnums(76),
                _nxg = _nx9.get_slotnums(114),
                _nxh = _nx9.get_slotnums(124);
            if ('ドイツ' == _nx9.getCountryName() && (_nxd.houg += 1, _nxc = true, _nxe = 1, _nxh >= 1 && (_nxb.kaih += 1 * _nxh)), 0 == _nxc) return _nxb;
            var _nxi = _nxf + _nxg;
            _nxb.add(_nxd.multiply(_nxi));
            var _nxj = _nx9.get_each_level_over_nums([114]).slot[114];
            return 1 == _nxe && (_nxj[7] >= 1 && (_nxb.houg += 1 * _nxj[7]), _nxj[8] >= 1 && (_nxb.houm += 1 * _nxj[8]), _nxj[9] >= 1 && (_nxb.souk += 1 * _nxj[9]), _nxj[10] >= 1 && (_nxb.houg += 1 * _nxj[10])), _nxb;
        };
    },
    37273: (_nxk, _nxl, _nxm) => {
        'use strict';
        var _nxn = null;
        defineModule(_nxl);
        Object.defineProperty(_nxl, '__esModule', {
            'value': true
        }), _nxl.getSlot390PersonalEffect = void 0;
        var _nxo = _nxm(74496);
        _nxl.getSlot390PersonalEffect = function(_nxp) {
            var _nxq = null,
                _nxr = new _nxo.SlotItemEffectModel(),
                _nxs = false,
                _nxt = new _nxo.SlotItemEffectModel(),
                _nxu = 0;
            if ('アメリカ' == _nxp.getCountryName() && (_nxt.houg += 1, _nxs = true, _nxu = 1), 102 == _nxp.ctype || 107 == _nxp.ctype ? (_nxt.houg += 1, _nxt.souk += 1, _nxs = true) : 93 == _nxp.ctype && (_nxt.houg += 1, _nxs = true), 8 == _nxp.stype && (_nxt.houg += 1, _nxs = true), 0 == _nxs) return _nxr;
            var _nxv = _nxp.get_slotnums(390);
            if (_nxr.add(_nxt.multiply(_nxv)), 0 == _nxu) return _nxr;
            var _nxw = _nxp.get_each_level_nums(390),
                _nxx = 0,
                _nxy = 0;
            return _nxw.forEach(function(_nxz, _ny0) {
                _ny0 >= 3 && (_nxx += _nxz), _ny0 >= 6 && (_nxy += _nxz);
            }), 1 == _nxu && (_nxr.houg += 1 * _nxx, _nxr.kaih += 1 * _nxy, _nxr.souk += 1 * _nxw[10]), _nxr;
        };
    },
    72694: (_ny1, _ny2, _ny3) => {
        'use strict';
        var _ny4 = null;
        defineModule(_ny2);
        Object.defineProperty(_ny2, '__esModule', {
            'value': true
        }), _ny2.getSlot391PersonalEffect = void 0;
        var _ny5 = _ny3(74496);
        _ny2.getSlot391PersonalEffect = function(_ny6) {
            var _ny7 = null,
                _ny8 = new _ny5.SlotItemEffectModel(),
                _ny9 = false,
                _nya = new _ny5.SlotItemEffectModel();
            if ('しょうかく' == _ny6.yomi || 'ずいかく' == _ny6.yomi ? (_nya.houg += 1, _ny9 = true) : 'じゅんよう' != _ny6.yomi && 'ひよう' != _ny6.yomi || (_nya.houg += 1, _ny9 = true), 116 == _ny6.ship_id || 185 == _ny6.ship_id || 282 == _ny6.ship_id ? (_nya.houg += 1, _ny9 = true) : 117 == _ny6.ship_id || 318 == _ny6.ship_id || 883 == _ny6.ship_id || 888 == _ny6.ship_id ? (_nya.houg += 1, _ny8.kaih += 1, _ny9 = true) : 560 != _ny6.ship_id && 555 != _ny6.ship_id || (_nya.houg += 1, _nya.kaih += 1, _ny9 = true), 0 == _ny9) return _ny8;
            var _nyb = _ny6.get_slotnums(391);
            return _ny8.add(_nya.multiply(_nyb)), _ny8;
        };
    },
    62067: (_nyc, _nyd, _nye) => {
        'use strict';
        var _nyf = null;
        defineModule(_nyd);
        Object.defineProperty(_nyd, '__esModule', {
            'value': true
        }), _nyd.getSlot392PersonalEffect = void 0;
        var _nyg = _nye(74496);
        _nyd.getSlot392PersonalEffect = function(_nyh) {
            var _nyi = null,
                _nyj = new _nyg.SlotItemEffectModel(),
                _nyk = false,
                _nyl = new _nyg.SlotItemEffectModel();
            if ('しょうかく' == _nyh.yomi || 'ずいかく' == _nyh.yomi ? (_nyl.houg += 2, _nyl.kaih += 1, _nyk = true) : 'じゅんよう' != _nyh.yomi && 'ひよう' != _nyh.yomi || (_nyl.houg += 1, _nyl.kaih += 1, _nyk = true), 116 == _nyh.ship_id || 185 == _nyh.ship_id || 282 == _nyh.ship_id ? (_nyl.houg += 2, _nyl.kaih += 1, _nyk = true) : 117 == _nyh.ship_id || 318 == _nyh.ship_id || 883 == _nyh.ship_id || 888 == _nyh.ship_id ? (_nyl.houg += 2, _nyl.kaih += 2, _nyk = true) : 560 != _nyh.ship_id && 555 != _nyh.ship_id || (_nyl.houg += 3, _nyl.kaih += 2, _nyk = true), 0 == _nyk) return _nyj;
            var _nym = _nyh.get_slotnums(392);
            return _nyj.add(_nyl.multiply(_nym)), _nyj;
        };
    },
    87817: function(_nyn, _nyo, _nyp) {
        'use strict';
        var _nyq = null;
        var _nyr = this && this.__importDefault || function(_nys) {
            var _nyt = null;
            return _nys && _nys.__esModule ? _nys : {
                'default': _nys
            };
        };
        defineModule(_nyo);
        Object.defineProperty(_nyo, '__esModule', {
            'value': true
        }), _nyo.getSlot397PersonalEffect = void 0;
        var _nyu = _nyp(74496),
            _nyv = _nyr(_nyp(18622));
        _nyo.getSlot397PersonalEffect = function(_nyw) {
            var _nyx = null,
                _nyy = new _nyu.SlotItemEffectModel(),
                _nyz = false,
                _nz0 = new _nyu.SlotItemEffectModel(),
                _nz1 = 0,
                _nz2 = 0,
                _nz3 = false;
            if (651 == _nyw.ship_id ? (_nz0.houg += 5, _nz0.tyku += 2, _nz0.kaih += 1, _nyz = true, _nz3 = true, _nz1 = 1, _nz2 = 1) : 656 == _nyw.ship_id && (_nz0.houg += 3, _nz0.tyku += 1, _nz0.kaih += 1, _nyz = true, _nz3 = true, _nz1 = 1), 0 == _nyz) return _nyy;
            var _nz4 = _nyw.get_slotnums(397);
            _nyy.add(_nz0.multiply(_nz4));
            var _nz5 = 0,
                _nz6 = _nyw.get_each_level_nums(397),
                _nz7 = 0;
            if (_nz3) {
                _nz6.forEach(function(_nz8, _nz9) {
                    _nz9 >= 4 && (_nz7 += _nz8);
                });
                for (var _nza = 0, _nzb = _nyw.have_slot_ids(); _nza < _nzb.length; _nza++) {
                    var _nzc = _nzb[_nza],
                        _nzd = _nyv.default.model.slot.getMst(_nzc),
                        _nze = _nzd.equipType;
                    12 != _nze && 13 != _nze || (_nzd.sakuteki >= 5 && (_nz5 += _nyw.get_slotnums(parseInt(_nzc))), _nzd.taiku >= 2 && _nyw.get_slotnums(parseInt(_nzc)));
                }
            }
            return 1 == _nz1 && _nz5 > 0 && (_nyy.houg += 3, _nyy.kaih += 3), 1 == _nz2 && (_nyy.houg += 4 * _nz7, _nyy.kaih += 1 * _nz7), _nyy;
        };
    },
    93526: function(_nzf, _nzg, _nzh) {
        'use strict';
        var _nzi = null;
        var _nzj = this && this.__importDefault || function(_nzk) {
            var _nzl = null;
            return _nzk && _nzk.__esModule ? _nzk : {
                'default': _nzk
            };
        };
        defineModule(_nzg);
        Object.defineProperty(_nzg, '__esModule', {
            'value': true
        }), _nzg.getSlot398PersonalEffect = void 0;
        var _nzm = _nzh(74496),
            _nzn = _nzj(_nzh(18622));
        _nzg.getSlot398PersonalEffect = function(_nzo) {
            var _nzp = null,
                _nzq = new _nzm.SlotItemEffectModel(),
                _nzr = false,
                _nzs = new _nzm.SlotItemEffectModel(),
                _nzt = 0,
                _nzu = 0,
                _nzv = false;
            if (651 == _nzo.ship_id ? (_nzs.houg += 4, _nzs.tyku += 4, _nzs.kaih += 2, _nzr = true, _nzv = true, _nzt = 1, _nzu = 1) : 656 == _nzo.ship_id && (_nzs.houg += 3, _nzs.tyku += 2, _nzs.kaih += 2, _nzr = true, _nzv = true, _nzt = 1, _nzu = 2), 0 == _nzr) return _nzq;
            var _nzw = _nzo.get_slotnums(398);
            _nzq.add(_nzs.multiply(_nzw));
            var _nzx = 0,
                _nzy = 0,
                _nzz = _nzo.get_each_level_nums(398),
                _o00 = 0;
            if (_nzv) {
                _nzz.forEach(function(_o01, _o02) {
                    _o02 >= 4 && (_o00 += _o01);
                });
                for (var _o03 = 0, _o04 = _nzo.have_slot_ids(); _o03 < _o04.length; _o03++) {
                    var _o05 = _o04[_o03],
                        _o06 = _nzn.default.model.slot.getMst(_o05),
                        _o07 = _o06.equipType;
                    12 != _o07 && 13 != _o07 || (_o06.sakuteki >= 5 && (_nzx += _nzo.get_slotnums(parseInt(_o05))), _o06.taiku >= 2 && (_nzy += _nzo.get_slotnums(parseInt(_o05))));
                }
            }
            return 1 == _nzt && (_nzx > 0 && (_nzq.houg += 3, _nzq.kaih += 3), _nzy > 0 && (_nzq.tyku += 3, _nzq.kaih += 3)), 1 == _nzu ? (_nzq.houg += 3 * _o00, _nzq.kaih += 2 * _o00) : 2 == _nzu && (_nzq.houg += 2 * _o00, _nzq.kaih += 1 * _o00), _nzq;
        };
    },
    33084: (_o08, _o09, _o0a) => {
        'use strict';
        var _o0b = null;
        defineModule(_o09);
        Object.defineProperty(_o09, '__esModule', {
            'value': true
        }), _o09.getSlot399PersonalEffect = void 0;
        var _o0c = _o0a(74496);
        _o09.getSlot399PersonalEffect = function(_o0d) {
            var _o0e = null,
                _o0f = new _o0c.SlotItemEffectModel(),
                _o0g = false,
                _o0h = new _o0c.SlotItemEffectModel(),
                _o0i = 0;
            if (108 == _o0d.ctype && (_o0h.houg += 1, _o0h.kaih += 2, _o0i = 1, _o0g = true), 0 == _o0g) return _o0f;
            var _o0j = _o0d.get_slotnums(399);
            if (_o0f.add(_o0h.multiply(_o0j)), 0 == _o0i) return _o0f;
            var _o0k = _o0d.get_each_level_nums(399),
                _o0l = 0,
                _o0m = 0;
            return _o0k.map(function(_o0n, _o0o) {
                _o0o >= 3 && (_o0l += _o0n), _o0o >= 5 && (_o0m += _o0n);
            }), 1 == _o0i && (_o0f.houg += 1 * _o0l, _o0f.houg += 1 * _o0m), _o0f;
        };
    },
    80225: (_o0p, _o0q, _o0r) => {
        'use strict';
        var _o0s = null;
        defineModule(_o0q);
        Object.defineProperty(_o0q, '__esModule', {
            'value': true
        }), _o0q.getSlot3_122PersonalEffect = void 0;
        var _o0t = _o0r(74496);
        _o0q.getSlot3_122PersonalEffect = function(_o0u) {
            var _o0v = null,
                _o0w = new _o0t.SlotItemEffectModel(),
                _o0x = false,
                _o0y = new _o0t.SlotItemEffectModel();
            if (54 == _o0u.ctype && (_o0y.houg += 1, _o0y.tyku += 2, _o0y.kaih += 1, _o0x = true), 0 == _o0x) return _o0w;
            var _o0z = _o0u.get_slotnums(3) + _o0u.get_slotnums(122);
            return _o0w.add(_o0y.multiply(_o0z)), _o0w;
        };
    },
    97831: (_o10, _o11, _o12) => {
        'use strict';
        var _o13 = null;
        defineModule(_o11);
        Object.defineProperty(_o11, '__esModule', {
            'value': true
        }), _o11.getSlot400PersonalEffect = void 0;
        var _o14 = _o12(74496);
        _o11.getSlot400PersonalEffect = function(_o15) {
            var _o16 = null,
                _o17 = new _o14.SlotItemEffectModel(),
                _o18 = false,
                _o19 = new _o14.SlotItemEffectModel(),
                _o1a = 0,
                _o1b = false;
            if (147 != _o15.ship_id && 73 != _o15.ctype && 81 != _o15.ctype || (_o1b = true), _o1b && (_o19.kaih += 2, _o19.raig += 5, _o19.houg += 1, _o19.souk += 1, _o18 = true, _o1a = 1), 0 == _o18) return _o17;
            var _o1c = _o15.get_slotnums(400);
            return _o17.add(_o19.multiply(_o1c)), _o15.get_slotnums(282) > 0 && 1 == _o1a && (_o17.houg += 2), _o17;
        };
    },
    4050: function(_o1d, _o1e, _o1f) {
        'use strict';
        var _o1g = null;
        var _o1h = this && this.__importDefault || function(_o1i) {
            var _o1j = null;
            return _o1i && _o1i.__esModule ? _o1i : {
                'default': _o1i
            };
        };
        defineModule(_o1e);
        Object.defineProperty(_o1e, '__esModule', {
            'value': true
        }), _o1e.getSlot407PersonalEffect = void 0;
        var _o1k = _o1f(74496),
            _o1l = _o1h(_o1f(18622));
        _o1e.getSlot407PersonalEffect = function(_o1m) {
            var _o1n = null,
                _o1o = new _o1k.SlotItemEffectModel(),
                _o1p = false,
                _o1q = new _o1k.SlotItemEffectModel(),
                _o1r = 0;
            if (662 != _o1m.ship_id && 663 != _o1m.ship_id && 668 != _o1m.ship_id || (_o1q.houg += 4, _o1q.tyku += 2, _o1q.kaih += 1, _o1p = true, _o1r = 1), 0 == _o1p) return _o1o;
            var _o1s = _o1m.get_slotnums(407);
            _o1o.add(_o1q.multiply(_o1s));
            for (var _o1t = 0, _o1u = 0, _o1v = 0, _o1w = _o1m.have_slot_ids(); _o1v < _o1w.length; _o1v++) {
                var _o1x = _o1w[_o1v],
                    _o1y = _o1l.default.model.slot.getMst(_o1x),
                    _o1z = _o1y.equipType;
                12 != _o1z && 13 != _o1z || (_o1y.sakuteki >= 5 && (_o1t += _o1m.get_slotnums(parseInt(_o1x))), _o1y.taiku >= 2 && (_o1u += _o1m.get_slotnums(parseInt(_o1x))));
            }
            return _o1t >= 1 && 1 == _o1r && (_o1o.houg += 2, _o1o.kaih += 2, _o1o.raig += 2), _o1u >= 1 && 1 == _o1r && (_o1o.tyku += 2, _o1o.kaih += 3), _o1o;
        };
    },
    78466: (_o20, _o21, _o22) => {
        'use strict';
        var _o23 = null;
        defineModule(_o21);
        Object.defineProperty(_o21, '__esModule', {
            'value': true
        }), _o21.getSlot408PersonalEffect = void 0;
        var _o24 = _o22(74496);
        _o21.getSlot408PersonalEffect = function(_o25) {
            var _o26 = null,
                _o27 = new _o24.SlotItemEffectModel(),
                _o28 = false,
                _o29 = new _o24.SlotItemEffectModel();
            if ('しんしゅうまる' == _o25.yomi ? (_o29.houg += 2, _o29.saku += 2, _o29.kaih += 2, _o28 = true) : 'あきつまる' == _o25.yomi && (_o29.houg += 1, _o29.saku += 1, _o29.kaih += 1, _o29.tais += 1, _o28 = true), 2 == _o25.stype && (_o29.houg += 1, _o29.saku += 1, _o29.kaih -= 5, _o28 = true), 0 == _o28) return _o27;
            var _o2a = _o25.get_slotnums(408);
            return _o27.add(_o29.multiply(_o2a)), _o27;
        };
    },
    40061: (_o2b, _o2c, _o2d) => {
        'use strict';
        var _o2e = null;
        defineModule(_o2c);
        Object.defineProperty(_o2c, '__esModule', {
            'value': true
        }), _o2c.getSlot409PersonalEffect = void 0;
        var _o2f = _o2d(74496);
        _o2c.getSlot409PersonalEffect = function(_o2g) {
            var _o2h = null,
                _o2i = new _o2f.SlotItemEffectModel(),
                _o2j = false,
                _o2k = new _o2f.SlotItemEffectModel();
            if ('しんしゅうまる' == _o2g.yomi ? (_o2k.houg += 1, _o2k.tyku += 2, _o2k.kaih += 3, _o2j = true) : 'あきつまる' == _o2g.yomi && (_o2k.houg += 1, _o2k.tyku += 1, _o2k.kaih += 2, _o2k.tais += 1, _o2j = true), 0 == _o2j) return _o2i;
            var _o2l = _o2g.get_slotnums(409);
            return _o2i.add(_o2k.multiply(_o2l)), _o2i;
        };
    },
    79988: (_o2m, _o2n, _o2o) => {
        'use strict';
        var _o2p = null;
        defineModule(_o2n);
        Object.defineProperty(_o2n, '__esModule', {
            'value': true
        }), _o2n.getSlot411PersonalEffect = void 0;
        var _o2q = _o2o(74496);
        _o2n.getSlot411PersonalEffect = function(_o2r) {
            var _o2s = null,
                _o2t = new _o2q.SlotItemEffectModel(),
                _o2u = new _o2q.SlotItemEffectModel(),
                _o2v = false,
                _o2w = 0;
            if (2 == _o2r.stype && (_o2u.kaih -= 9, _o2v = true), 3 != _o2r.stype && 4 != _o2r.stype || (_o2u.kaih -= 7, _o2v = true), 21 == _o2r.stype && (_o2u.kaih -= 6, _o2v = true), 5 != _o2r.stype && 6 != _o2r.stype || (_o2u.kaih -= 5, _o2v = true), 593 == _o2r.ship_id && (_o2t.houg += 1, _o2t.tyku += 2, _o2t.kaih += 3), 151 == _o2r.ship_id || 411 == _o2r.ship_id || 412 == _o2r.ship_id || 593 == _o2r.ship_id || 954 == _o2r.ship_id ? (_o2t.houg += 3, _o2t.tyku += 4, _o2w = 1) : 541 != _o2r.ship_id && 573 != _o2r.ship_id && 553 != _o2r.ship_id && 554 != _o2r.ship_id || (_o2t.houg += 2, _o2t.tyku += 2, _o2w = 1), _o2v) {
                var _o2x = _o2r.get_slotnums(411);
                _o2t.add(_o2u.multiply(_o2x));
            }
            if (0 == _o2w) return _o2t;
            var _o2y = _o2r.get_each_level_nums(411),
                _o2z = 0;
            return _o2w > 0 && _o2y.forEach(function(_o30, _o31) {
                _o31 >= 4 && (_o2z += _o30);
            }), 1 == _o2w && (_o2z >= 1 && (_o2t.houg += 1, _o2t.tyku += 1), _o2y[10] >= 1 && (_o2t.houg += 1, _o2t.tyku += 1)), _o2t;
        };
    },
    74428: (_o32, _o33, _o34) => {
        'use strict';
        var _o35 = null;
        defineModule(_o33);
        Object.defineProperty(_o33, '__esModule', {
            'value': true
        }), _o33.getSlot412PersonalEffect = void 0;
        var _o36 = _o34(74496);
        _o33.getSlot412PersonalEffect = function(_o37) {
            var _o38 = null,
                _o39 = new _o36.SlotItemEffectModel(),
                _o3a = false,
                _o3b = 0,
                _o3c = new _o36.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o37.ctype) >= 0 ? (_o39.houg += 2, _o39.raig += 4, _o39.tais += 2, _o3c.kaih += 3, _o3c.saku += 1, _o3a = true, _o3b = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o37.ctype) >= 0 ? (_o39.houg += 3, _o39.raig += 3, _o3c.kaih += 2, _o3c.saku += 3, _o3a = true, _o3b = 1) : [7, 13, 29, 8, 9, 31].indexOf(_o37.ctype) >= 0 && (_o39.houg += 1, _o3c.kaih += 1, _o3c.saku += 1, _o3a = true), 0 == _o3a) return _o39;
            var _o3d = _o37.get_slotnums(412);
            if (_o39.add(_o3c.multiply(_o3d)), 0 == _o3b) return _o39;
            var _o3e = _o37.get_each_level_nums(412),
                _o3f = 0,
                _o3g = 0;
            return _o3b > 0 && _o3e.forEach(function(_o3h, _o3i) {
                _o3i >= 4 && (_o3f += _o3h), _o3i >= 8 && (_o3g += _o3h);
            }), 1 == _o3b && (_o3f > 0 && (_o39.houg += 1), _o3g > 0 && (_o39.raig += 1)), _o39;
        };
    },
    2631: (_o3j, _o3k, _o3l) => {
        'use strict';
        var _o3m = null;
        defineModule(_o3k);
        Object.defineProperty(_o3k, '__esModule', {
            'value': true
        }), _o3k.getSlot413PersonalEffect = void 0;
        var _o3n = _o3l(74496);
        _o3k.getSlot413PersonalEffect = function(_o3o) {
            var _o3p = null,
                _o3q = new _o3n.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o3o.ctype) >= 0 ? (_o3q.houg += 2, _o3q.raig += 2, _o3q.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o3o.ctype) >= 0 && (_o3q.houg += 4, _o3q.raig += 2, _o3q.kaih += 2), 38 == _o3o.ctype || 54 == _o3o.ctype ? (_o3q.houg += 2, _o3q.raig += 3, _o3q.kaih += 3) : 4 == _o3o.ctype || 20 == _o3o.ctype || 16 == _o3o.ctype || 41 == _o3o.ctype || 52 == _o3o.ctype ? (_o3q.houg += 1, _o3q.raig += 2, _o3q.kaih += 2) : 21 != _o3o.ctype && 34 != _o3o.ctype || (_o3q.tyku += 2, _o3q.raig += 1, _o3q.kaih += 1), 'なか' == _o3o.yomi || 'ゆら' == _o3o.yomi || 'やはぎ' == _o3o.yomi || 'のしろ' == _o3o.yomi || 'はまなみ' == _o3o.yomi || 'しまかぜ' == _o3o.yomi || 'きよしも' == _o3o.yomi || 'はつしも' == _o3o.yomi ? (_o3q.tyku += 1, _o3q.kaih += 1) : 'じんつう' != _o3o.yomi && 'せんだい' != _o3o.yomi && 'ながなみ' != _o3o.yomi && 'はつしも' != _o3o.yomi && 'てるづき' != _o3o.yomi || (_o3q.houg += 1, _o3q.raig += 1), 543 == _o3o.ship_id ? (_o3q.houg += 1, _o3q.kaih += 1) : 159 == _o3o.ship_id && (_o3q.houg += 2), _o3q;
        };
    },
    16498: (_o3r, _o3s, _o3t) => {
        'use strict';
        var _o3u = null;
        defineModule(_o3s);
        Object.defineProperty(_o3s, '__esModule', {
            'value': true
        }), _o3s.getSlot414PersonalEffect = void 0;
        var _o3v = _o3t(74496);
        _o3s.getSlot414PersonalEffect = function(_o3w) {
            var _o3x = null,
                _o3y = new _o3v.SlotItemEffectModel(),
                _o3z = 0;
            if ('アメリカ' == _o3w.getCountryName() && (_o3y.saku += 1, _o3z = 1), 95 != _o3w.ctype && 99 != _o3w.ctype && 106 != _o3w.ctype && 110 != _o3w.ctype && 121 != _o3w.ctype || (_o3y.houg += 1, _o3y.saku += 1, _o3z = 2), 0 == _o3z) return _o3y;
            var _o40 = _o3w.get_each_level_nums(414),
                _o41 = 0,
                _o42 = 0,
                _o43 = 0;
            return _o3z > 0 && _o40.forEach(function(_o44, _o45) {
                _o45 >= 5 && (_o41 += _o44), _o45 >= 3 && (_o42 += _o44), _o45 >= 8 && (_o43 += _o44);
            }), _o3z > 0 && _o41 >= 1 && (_o3y.kaih += 1), 2 == _o3z && (_o42 >= 1 && (_o3y.saku += 1), _o43 >= 1 && (_o3y.kaih += 1), _o40[10] >= 1 && (_o3y.houg += 1)), _o3y;
        };
    },
    27177: (_o46, _o47, _o48) => {
        'use strict';
        var _o49 = null;
        defineModule(_o47);
        Object.defineProperty(_o47, '__esModule', {
            'value': true
        }), _o47.getSlot415PersonalEffect = void 0;
        var _o4a = _o48(74496);
        _o47.getSlot415PersonalEffect = function(_o4b) {
            var _o4c = null,
                _o4d = new _o4a.SlotItemEffectModel(),
                _o4e = [];
            if ('アメリカ' == _o4b.getCountryName() && (_o4d.saku += 1, _o4d.tais += 1, _o4e.push(1)), 95 != _o4b.ctype && 99 != _o4b.ctype && 106 != _o4b.ctype && 110 != _o4b.ctype && 121 != _o4b.ctype || (_o4d.houg += 1, _o4e.push(2)), 0 == _o4e.length) return _o4d;
            var _o4f = _o4b.get_each_level_nums(415),
                _o4g = 0,
                _o4h = 0,
                _o4i = 0;
            return _o4e.length > 0 && (_o4f.forEach(function(_o4j, _o4k) {
                _o4k >= 5 && (_o4g += _o4j), _o4k >= 3 && (_o4h += _o4j), _o4k >= 8 && (_o4i += _o4j);
            }), _o4e.forEach(function(_o4l) {
                var _o4m = null;
                1 == _o4l ? _o4g >= 1 && (_o4d.kaih += 1) : 2 == _o4l && (_o4h >= 1 && (_o4d.kaih += 1), _o4i >= 1 && (_o4d.houg += 1));
            })), _o4d;
        };
    },
    53908: (_o4n, _o4o, _o4p) => {
        'use strict';
        var _o4q = null;
        defineModule(_o4o);
        Object.defineProperty(_o4o, '__esModule', {
            'value': true
        }), _o4o.getSlot419PersonalEffect = void 0;
        var _o4r = _o4p(74496);
        _o4o.getSlot419PersonalEffect = function(_o4s) {
            var _o4t = null,
                _o4u = new _o4r.SlotItemEffectModel(),
                _o4v = false,
                _o4w = new _o4r.SlotItemEffectModel(),
                _o4x = 0;
            if ('アメリカ' == _o4s.getCountryName() && (_o4w.houg += 2, _o4v = true, _o4x = 1), 0 == _o4v) return _o4u;
            var _o4y = _o4s.get_slotnums(419);
            if (_o4u.add(_o4w.multiply(_o4y)), 0 == _o4x) return _o4u;
            var _o4z = _o4s.get_each_level_nums(419),
                _o50 = 0,
                _o51 = 0;
            return _o4x > 0 && _o4z.forEach(function(_o52, _o53) {
                _o53 >= 2 && (_o50 += _o52), _o53 >= 7 && (_o51 += _o52);
            }), 1 == _o4x && (_o50 >= 1 && (_o4u.houg += 1 * _o50), _o51 >= 1 && (_o4u.houg += 1 * _o51)), _o4u;
        };
    },
    79813: (_o54, _o55, _o56) => {
        'use strict';
        var _o57 = null;
        defineModule(_o55);
        Object.defineProperty(_o55, '__esModule', {
            'value': true
        }), _o55.getSlot420PersonalEffect = void 0;
        var _o58 = _o56(74496);
        _o55.getSlot420PersonalEffect = function(_o59) {
            var _o5a = null,
                _o5b = new _o58.SlotItemEffectModel(),
                _o5c = false,
                _o5d = new _o58.SlotItemEffectModel(),
                _o5e = 0;
            if ('アメリカ' != _o59.getCountryName() && 67 != _o59.ctype && 78 != _o59.ctype && 82 != _o59.ctype && 88 != _o59.ctype && 108 != _o59.ctype && 112 != _o59.ctype || (_o5d.houg += 1, _o5e = 1, _o5c = true), 84 == _o59.ctype ? (_o5d.houg += 1, _o5c = true) : 78 == _o59.ctype && (_o5d.houg -= 1, _o5c = true), 7 == _o59.stype && (_o5d.houg -= 2, _o5d.kaih -= 1, _o5d.souk -= 2, _o5c = true), 0 == _o5c) return _o5b;
            var _o5f = _o59.get_slotnums(420);
            if (_o5b.add(_o5d.multiply(_o5f)), 0 == _o5e) return _o5b;
            var _o5g = _o59.get_each_level_nums(420),
                _o5h = 0;
            return _o5e > 0 && _o5g.forEach(function(_o5i, _o5j) {
                _o5j >= 3 && (_o5h += _o5i);
            }), 1 == _o5e && _o5h >= 1 && (_o5b.houg += 1 * _o5h), _o5b;
        };
    },
    16088: (_o5k, _o5l, _o5m) => {
        'use strict';
        var _o5n = null;
        defineModule(_o5l);
        Object.defineProperty(_o5l, '__esModule', {
            'value': true
        }), _o5l.getSlot421PersonalEffect = void 0;
        var _o5o = _o5m(74496);
        _o5l.getSlot421PersonalEffect = function(_o5p) {
            var _o5q = null,
                _o5r = new _o5o.SlotItemEffectModel(),
                _o5s = false,
                _o5t = new _o5o.SlotItemEffectModel(),
                _o5u = 0;
            if ('アメリカ' != _o5p.getCountryName() && 67 != _o5p.ctype && 78 != _o5p.ctype && 82 != _o5p.ctype && 88 != _o5p.ctype && 108 != _o5p.ctype && 112 != _o5p.ctype || (_o5t.houg += 2, _o5s = true, _o5u = 1), 84 == _o5p.ctype ? (_o5t.houg += 1, _o5s = true) : 78 == _o5p.ctype && (_o5t.houg -= 1, _o5s = true), 7 == _o5p.stype && (_o5t.houg -= 2, _o5t.kaih -= 1, _o5t.souk -= 2, _o5s = true), 0 == _o5s) return _o5r;
            var _o5v = _o5p.get_slotnums(421);
            if (_o5r.add(_o5t.multiply(_o5v)), 0 == _o5u) return _o5r;
            var _o5w = _o5p.get_each_level_nums(421),
                _o5x = 0;
            return _o5u > 0 && _o5w.forEach(function(_o5y, _o5z) {
                _o5z >= 5 && (_o5x += _o5y);
            }), 1 == _o5u && _o5x >= 1 && (_o5r.houg += 1 * _o5x), _o5r;
        };
    },
    69939: (_o60, _o61, _o62) => {
        'use strict';
        var _o63 = null;
        defineModule(_o61);
        Object.defineProperty(_o61, '__esModule', {
            'value': true
        }), _o61.getSlot422PersonalEffect = void 0;
        var _o64 = _o62(74496);
        _o61.getSlot422PersonalEffect = function(_o65) {
            var _o66 = null,
                _o67 = new _o64.SlotItemEffectModel(),
                _o68 = false,
                _o69 = new _o64.SlotItemEffectModel();
            if ('アメリカ' != _o65.getCountryName() && 67 != _o65.ctype && 78 != _o65.ctype && 82 != _o65.ctype && 88 != _o65.ctype && 108 != _o65.ctype && 112 != _o65.ctype || (_o69.houg += 1, _o69.kaih += 1, _o68 = true), 84 == _o65.ctype && (_o69.houg += 1, _o69.tyku += 1, _o68 = true), 707 == _o65.ship_id && (_o69.houg += 2, _o69.kaih += 2, _o69.tyku += 2, _o68 = true), 0 == _o68) return _o67;
            var _o6a = _o65.get_slotnums(422);
            return _o67.add(_o69.multiply(_o6a)), _o67;
        };
    },
    33734: (_o6b, _o6c, _o6d) => {
        'use strict';
        var _o6e = null;
        defineModule(_o6c);
        Object.defineProperty(_o6c, '__esModule', {
            'value': true
        }), _o6c.getSlot423PersonalEffect = void 0;
        var _o6f = _o6d(74496);
        _o6c.getSlot423PersonalEffect = function(_o6g) {
            var _o6h = null,
                _o6i = new _o6f.SlotItemEffectModel(),
                _o6j = false,
                _o6k = new _o6f.SlotItemEffectModel();
            78 != _o6g.ctype && 112 != _o6g.ctype || (_o6k.houg += 2, _o6k.tyku += 2, _o6k.kaih += 2, _o6k.saku += 2, _o6j = true);
            var _o6l = _o6g.getCountryName();
            if (67 == _o6g.ctype || 78 == _o6g.ctype || 82 == _o6g.ctype || 88 == _o6g.ctype || 108 == _o6g.ctype || 112 == _o6g.ctype ? (_o6k.houg += 2, _o6k.tyku += 2, _o6k.kaih += 2, _o6k.saku += 2, _o6j = true) : 'アメリカ' == _o6l && (_o6k.houg += 1, _o6k.tyku += 1, _o6k.kaih += 1, _o6k.saku += 1, _o6j = true), 0 == _o6j) return _o6i;
            var _o6m = _o6g.get_slotnums(423);
            return _o6i.add(_o6k.multiply(_o6m)), _o6i;
        };
    },
    34432: (_o6n, _o6o, _o6p) => {
        'use strict';
        var _o6q = null;
        defineModule(_o6o);
        Object.defineProperty(_o6o, '__esModule', {
            'value': true
        }), _o6o.getSlot424PersonalEffect = void 0;
        var _o6r = _o6p(74496);
        _o6o.getSlot424PersonalEffect = function(_o6s) {
            var _o6t = null,
                _o6u = new _o6r.SlotItemEffectModel(),
                _o6v = false,
                _o6w = new _o6r.SlotItemEffectModel(),
                _o6x = 0;
            67 != _o6s.ctype && 78 != _o6s.ctype && 82 != _o6s.ctype && 88 != _o6s.ctype && 108 != _o6s.ctype && 112 != _o6s.ctype || (_o6w.houg += 2, _o6w.raig += 3, _o6v = true, _o6x = 1);
            var _o6y = _o6s.get_slotnums(424);
            _o6v && _o6u.add(_o6w.multiply(_o6y));
            var _o6z = _o6s.get_each_level_nums(424),
                _o70 = 0,
                _o71 = 0,
                _o72 = 0;
            _o6z.forEach(function(_o73, _o74) {
                _o74 >= 2 && (_o70 += _o73), _o74 >= 6 && (_o71 += _o73), _o74 >= 8 && (_o72 += _o73);
            });
            var _o75 = _o6z[10];
            return 1 == _o6x && (_o70 >= 1 && (_o6u.houg += 1 * _o70), _o71 >= 1 && (_o6u.houg += 1 * _o71), _o72 >= 1 && (_o6u.houm += 1 * _o72)), _o75 > 0 && (_o6u.houm += 1 * _o75), _o6u;
        };
    },
    97423: (_o76, _o77, _o78) => {
        'use strict';
        var _o79 = null;
        defineModule(_o77);
        Object.defineProperty(_o77, '__esModule', {
            'value': true
        }), _o77.getSlot425PersonalEffect = void 0;
        var _o7a = _o78(74496);
        _o77.getSlot425PersonalEffect = function(_o7b) {
            var _o7c = null,
                _o7d = new _o7a.SlotItemEffectModel(),
                _o7e = false,
                _o7f = new _o7a.SlotItemEffectModel(),
                _o7g = 0;
            67 != _o7b.ctype && 78 != _o7b.ctype && 82 != _o7b.ctype && 88 != _o7b.ctype && 108 != _o7b.ctype && 112 != _o7b.ctype || (_o7f.houg += 2, _o7f.tais += 2, _o7f.raig += 1, _o7f.saku += 1, _o7e = true, _o7g = 1);
            var _o7h = _o7b.get_slotnums(425);
            _o7e && _o7d.add(_o7f.multiply(_o7h));
            var _o7i = _o7b.get_each_level_nums(425),
                _o7j = 0,
                _o7k = 0,
                _o7l = 0,
                _o7m = 0,
                _o7n = 0,
                _o7o = 0;
            _o7i.forEach(function(_o7p, _o7q) {
                _o7q >= 2 && (_o7j += _o7p), _o7q >= 4 && (_o7k += _o7p), _o7q >= 6 && (_o7l += _o7p), _o7q >= 7 && (_o7m += _o7p), _o7q >= 8 && (_o7n += _o7p), _o7q >= 9 && (_o7o += _o7p);
            });
            var _o7r = _o7i[10];
            return 1 == _o7g && (_o7j >= 1 && (_o7d.tais += 1 * _o7j), _o7k >= 1 && (_o7d.houg += 1 * _o7k), _o7l >= 1 && (_o7d.tais += 1 * _o7l), _o7m >= 1 && (_o7d.houm += 1 * _o7m), _o7n >= 1 && (_o7d.raig += 1 * _o7n), _o7o >= 1 && (_o7d.houg += 1 * _o7o), _o7r >= 1 && (_o7d.tais += 1 * _o7r)), _o7m >= 1 && (_o7d.houg += 1 * _o7m), _o7n >= 1 && (_o7d.tais += 1 * _o7n), _o7o >= 1 && (_o7d.houm += 1 * _o7o), _o7r >= 1 && (_o7d.houm += 1 * _o7r), _o7d;
        };
    },
    23551: (_o7s, _o7t, _o7u) => {
        'use strict';
        var _o7v = null;
        defineModule(_o7t);
        Object.defineProperty(_o7t, '__esModule', {
            'value': true
        }), _o7t.getSlot430PersonalEffect = void 0;
        var _o7w = _o7u(74496);
        _o7t.getSlot430PersonalEffect = function(_o7x) {
            var _o7y = null,
                _o7z = new _o7w.SlotItemEffectModel(),
                _o80 = false,
                _o81 = new _o7w.SlotItemEffectModel(),
                _o82 = 0;
            if (113 == _o7x.ctype && (_o81.tyku += 1, _o81.kaih += 1, _o80 = true), 58 != _o7x.ctype && 61 != _o7x.ctype && 64 != _o7x.ctype && 68 != _o7x.ctype && 80 != _o7x.ctype && 92 != _o7x.ctype && 113 != _o7x.ctype && 124 != _o7x.ctype || (_o81.tyku += 2, _o81.kaih += 1, _o80 = true, _o82 = 1), 0 == _o80) return _o7z;
            var _o83 = _o7x.get_slotnums(430);
            if (_o7z.add(_o81.multiply(_o83)), 0 == _o82) return _o7z;
            var _o84 = _o7x.get_each_level_nums(430),
                _o85 = 0,
                _o86 = 0,
                _o87 = 0;
            if (_o82 > 0 && _o84.forEach(function(_o88, _o89) {
                    _o89 >= 2 && (_o85 += _o88), _o89 >= 4 && (_o86 += _o88), _o89 >= 7 && (_o87 += _o88);
                }), 1 == _o82) {
                _o85 >= 1 && (_o7z.kaih += 1 * _o85), _o86 >= 1 && (_o7z.tyku += 1 * _o86), _o87 >= 1 && (_o7z.kaih += 1 * _o87);
                var _o8a = _o84[10];
                _o8a >= 1 && (_o7z.tyku += 1 * _o8a);
            }
            return _o7z;
        };
    },
    6173: (_o8b, _o8c, _o8d) => {
        'use strict';
        var _o8e = null;
        defineModule(_o8c);
        Object.defineProperty(_o8c, '__esModule', {
            'value': true
        }), _o8c.getSlot437PersonalEffect = void 0;
        var _o8f = _o8d(74496);
        _o8c.getSlot437PersonalEffect = function(_o8g) {
            var _o8h = null,
                _o8i = new _o8f.SlotItemEffectModel(),
                _o8j = false,
                _o8k = new _o8f.SlotItemEffectModel();
            if (285 == _o8g.ship_id ? (_o8k.houg += 3, _o8k.tyku += 3, _o8k.kaih += 4, _o8j = true) : 894 == _o8g.ship_id || 899 == _o8g.ship_id ? (_o8k.houg += 4, _o8k.tyku += 4, _o8k.kaih += 4, _o8j = true) : 196 == _o8g.ship_id || 197 == _o8g.ship_id ? (_o8k.houg += 2, _o8k.tyku += 2, _o8k.kaih += 3, _o8j = true) : 508 == _o8g.ship_id || 509 == _o8g.ship_id || 646 == _o8g.ship_id ? (_o8k.houg += 2, _o8k.tyku += 2, _o8k.kaih += 2, _o8j = true) : 888 != _o8g.ship_id && 883 != _o8g.ship_id && 553 != _o8g.ship_id && 554 != _o8g.ship_id || (_o8k.houg += 1, _o8k.tyku += 2, _o8k.kaih += 2, _o8j = true), 0 == _o8j) return _o8i;
            var _o8l = _o8g.get_slotnums(437);
            return _o8i.add(_o8k.multiply(_o8l)), _o8i;
        };
    },
    53709: (_o8m, _o8n, _o8o) => {
        'use strict';
        var _o8p = null;
        defineModule(_o8n);
        Object.defineProperty(_o8n, '__esModule', {
            'value': true
        }), _o8n.getSlot438PersonalEffect = void 0;
        var _o8q = _o8o(74496);
        _o8n.getSlot438PersonalEffect = function(_o8r) {
            var _o8s = null,
                _o8t = new _o8q.SlotItemEffectModel(),
                _o8u = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o8r.ctype) > -1 && (_o8t.tais += 1, _o8t.kaih += 1), 160 == _o8r.ship_id || 488 == _o8r.ship_id || 141 == _o8r.ship_id ? (_o8t.tais += 1, _o8t.kaih += 1) : 145 != _o8r.ship_id && 588 != _o8r.ship_id && 667 != _o8r.ship_id && 578 != _o8r.ship_id && 476 != _o8r.ship_id && 363 != _o8r.ship_id && 961 != _o8r.ship_id || (_o8u = 1), 'うしお' == _o8r.yomi || 'まいかぜ' == _o8r.yomi || 'いそかぜ' == _o8r.yomi || 'はまかぜ' == _o8r.yomi || 'いかづち' == _o8r.yomi || 'やまぐも' == _o8r.yomi || 'うみかぜ' == _o8r.yomi || 'かわかぜ' == _o8r.yomi || 'すずかぜ' == _o8r.yomi ? _o8t.tais += 1 : 'しぐれ' != _o8r.yomi && 'やまかぜ' != _o8r.yomi && 'かみかぜ' != _o8r.yomi && 'はるかぜ' != _o8r.yomi && 'みくら' != _o8r.yomi && 'いしがき' != _o8r.yomi || (_o8t.tais += 1, _o8t.kaih += 1), 0 == _o8u) return _o8t;
            var _o8v = _o8r.get_each_level_nums(438),
                _o8w = 0,
                _o8x = 0,
                _o8y = 0,
                _o8z = _o8v[10];
            return _o8u > 0 && _o8v.forEach(function(_o90, _o91) {
                _o91 >= 4 && (_o8w += _o90), _o91 >= 6 && (_o8x += _o90), _o91 >= 8 && (_o8y += _o90);
            }), 1 == _o8u && (_o8w >= 1 && (_o8t.tais += 1), _o8x >= 1 && (_o8t.kaih += 1), _o8y >= 1 && (_o8t.tais += 1), _o8z >= 1 && (_o8t.kaih += 1)), _o8t;
        };
    },
    99790: (_o92, _o93, _o94) => {
        'use strict';
        var _o95 = null;
        defineModule(_o93);
        Object.defineProperty(_o93, '__esModule', {
            'value': true
        }), _o93.getSlot439PersonalEffect = void 0;
        var _o96 = _o94(74496);
        _o93.getSlot439PersonalEffect = function(_o97) {
            var _o98 = null,
                _o99 = new _o96.SlotItemEffectModel();
            1 != _o97.stype && 2 != _o97.stype && 3 != _o97.stype && 21 != _o97.stype || (_o99.tais += 1, _o99.kaih += 1), 101 != _o97.ctype && 1 != _o97.stype || (_o99.tais += 1);
            var _o9a = _o97.getCountryName();
            return 'アメリカ' != _o9a && 'イギリス' != _o9a || (_o99.tais += 2), _o99;
        };
    },
    18387: (_o9b, _o9c, _o9d) => {
        'use strict';
        var _o9e = null;
        defineModule(_o9c);
        Object.defineProperty(_o9c, '__esModule', {
            'value': true
        }), _o9c.getSlot440_441PersonalEffect = void 0;
        var _o9f = _o9d(74496);
        _o9c.getSlot440_441PersonalEffect = function(_o9g) {
            var _o9h = null,
                _o9i = new _o9f.SlotItemEffectModel();
            return 114 == _o9g.ctype && (_o9i.raig += 2), _o9i;
        };
    },
    70941: (_o9j, _o9k, _o9l) => {
        'use strict';
        var _o9m = null;
        defineModule(_o9k);
        Object.defineProperty(_o9k, '__esModule', {
            'value': true
        }), _o9k.getSlot442_443PersonalEffect = void 0;
        var _o9n = _o9l(74496);
        _o9k.getSlot442_443PersonalEffect = function(_o9o) {
            var _o9p = null,
                _o9q = new _o9n.SlotItemEffectModel();
            return 122 == _o9o.ctype ? (_o9q.raig += 1, _o9q.kaih += 2) : 114 == _o9o.ctype && (_o9q.raig += 2), _o9q;
        };
    },
    35025: (_o9r, _o9s, _o9t) => {
        'use strict';
        var _o9u = null;
        defineModule(_o9s);
        Object.defineProperty(_o9s, '__esModule', {
            'value': true
        }), _o9s.getSlot447PersonalEffect = void 0;
        var _o9v = _o9t(74496);
        _o9s.getSlot447PersonalEffect = function(_o9w) {
            var _o9x = null,
                _o9y = new _o9v.SlotItemEffectModel(),
                _o9z = _o9w.get_each_level_nums(447),
                _oa0 = 0,
                _oa1 = 0,
                _oa2 = 0,
                _oa3 = 0;
            _o9z.forEach(function(_oa4, _oa5) {
                _oa5 >= 2 && (_oa0 += _oa4), _oa5 >= 4 && (_oa1 += _oa4), _oa5 >= 6 && (_oa2 += _oa4), _oa5 >= 8 && (_oa3 += _oa4);
            }), _oa0 >= 1 && (_o9y.houg += 1 * _oa0), _oa1 >= 1 && (_o9y.tyku += 1 * _oa1), _oa2 >= 1 && (_o9y.tais += 1 * _oa2), _oa3 >= 1 && (_o9y.kaih += 1 * _oa3);
            var _oa6 = _o9z[10];
            _oa6 >= 1 && (_o9y.tais += 1 * _oa6);
            var _oa7 = false,
                _oa8 = new _o9v.SlotItemEffectModel();
            if (76 == _o9w.ctype && (_oa8.houg += 1, _oa8.tais += 1, _oa8.kaih += 2, _oa7 = true), 'うんよう' == _o9w.yomi ? (_oa8.houg += 1, _oa8.tais += 1, _oa8.kaih += 1, _oa7 = true) : 'ほうしょう' != _o9w.yomi && 'たいげい・りゅうほう' != _o9w.yomi || (_oa8.houg += 1, _oa8.tais += 2, _oa8.kaih += 1, _oa7 = true), 0 == _oa7) return _o9y;
            894 != _o9w.ship_id && 899 != _o9w.ship_id || (_oa8.houg += 1, _oa8.kaih += 1, _oa8.tais += 1, _oa8.tyku += 1, _oa7 = true);
            var _oa9 = _o9w.get_slotnums(447);
            return _o9y.add(_oa8.multiply(_oa9)), _o9y;
        };
    },
    96804: (_oaa, _oab, _oac) => {
        'use strict';
        var _oad = null;
        defineModule(_oab);
        Object.defineProperty(_oab, '__esModule', {
            'value': true
        }), _oab.getSlot450PersonalEffect = void 0;
        var _oae = _oac(74496);
        _oab.getSlot450PersonalEffect = function(_oaf) {
            var _oag = null,
                _oah = new _oae.SlotItemEffectModel(),
                _oai = false,
                _oaj = new _oae.SlotItemEffectModel();
            if (101 == _oaf.ctype && (_oaj.houg += 1, _oaj.tyku += 2, _oaj.souk += 1, _oaj.kaih += 3, _oai = true), 1 == _oaf.stype && (_oaj.tyku += 1, _oaj.souk += 1, _oaj.kaih += 2, _oai = true), 0 == _oai) return _oah;
            var _oak = _oaf.get_slotnums(450);
            return _oah.add(_oaj.multiply(_oak)), _oah;
        };
    },
    33896: (_oal, _oam, _oan) => {
        'use strict';
        var _oao = null;
        defineModule(_oam);
        Object.defineProperty(_oam, '__esModule', {
            'value': true
        }), _oam.getSlot451PersonalEffect = void 0;
        var _oap = _oan(74496);
        _oam.getSlot451PersonalEffect = function(_oaq) {
            var _oar = null,
                _oas = new _oap.SlotItemEffectModel(),
                _oat = false,
                _oau = new _oap.SlotItemEffectModel(),
                _oav = 0;
            if ('あきつまる' == _oaq.yomi ? (_oau.houg += 1, _oau.tais += 2, _oat = true, 166 == _oaq.ship_id && (_oav = 2)) : 'やましおまる' == _oaq.yomi && (_oau.houg += 1, _oau.tais += 3, _oat = true, _oav = 1), 0 == _oat) return _oas;
            var _oaw = _oaq.get_slotnums(451);
            if (_oas.add(_oau.multiply(_oaw)), 0 == _oav) return _oas;
            var _oax = _oaq.get_each_level_nums(451),
                _oay = [];
            return _oav > 0 && _oax.forEach(function(_oaz, _ob0) {
                var _ob1 = null;
                for (var _ob2 = 1; _ob2 <= _oaq.SLOT_LEVEL_MAX; _ob2++) _ob0 >= _ob2 && (null == _oay[_ob2] && (_oay[_ob2] = 0), _oay[_ob2] += _oaz);
            }), 1 == _oav ? (_oay[1] >= 1 && (_oas.houg += 2 * _oay[1]), _oay[2] >= 1 && (_oas.houm += 1 * _oay[2]), _oay[3] >= 1 && (_oas.tais += 1 * _oay[3]), _oay[4] >= 1 && (_oas.houg += 1 * _oay[4]), _oay[6] >= 1 && (_oas.houm += 1 * _oay[6]), _oay[8] >= 1 && (_oas.tais += 1 * _oay[8]), _oay[10] >= 1 && (_oas.houg += 1 * _oay[10])) : 2 == _oav && (_oay[1] >= 1 && (_oas.houg += 1 * _oay[1]), _oay[3] >= 1 && (_oas.tais += 1 * _oay[3]), _oay[5] >= 1 && (_oas.houm += 1 * _oay[5]), _oay[7] >= 1 && (_oas.tais += 1 * _oay[7]), _oay[10] >= 1 && (_oas.houg += 1 * _oay[10])), _oas;
        };
    },
    11031: function(_ob3, _ob4, _ob5) {
        'use strict';
        var _ob6 = null;
        var _ob7 = this && this.__importDefault || function(_ob8) {
            var _ob9 = null;
            return _ob8 && _ob8.__esModule ? _ob8 : {
                'default': _ob8
            };
        };
        defineModule(_ob4);
        Object.defineProperty(_ob4, '__esModule', {
            'value': true
        }), _ob4.getSlot455PersonalEffect = void 0;
        var _oba = _ob5(74496),
            _obb = _ob7(_ob5(18622));
        _ob4.getSlot455PersonalEffect = function(_obc) {
            var _obd = null,
                _obe = new _oba.SlotItemEffectModel(),
                _obf = false,
                _obg = new _oba.SlotItemEffectModel(),
                _obh = 0,
                _obi = _obc.get_slotnums(455);
            if (1 != _obc.ctype && 5 != _obc.ctype && 12 != _obc.ctype || (_obg.houg += 2, _obg.tyku += 1, 12 == _obc.ctype && (_obg.houg += 1), 666 == _obc.ship_id ? (_obg.houg += 1, _obg.tais += 1) : 959 == _obc.ship_id && (_obg.houg += 2, _obi >= 2 && (_obe.houg += 2), _obi >= 3 && (_obe.houg += 3)), _obh = 1, _obf = true), 'うらなみ' == _obc.yomi && (_obg.houg += 1, 647 == _obc.ship_id && (_obg.houg += 1, _obg.raig += 1, _obg.tais += 1, _obg.kaih += 1), _obf = true), 0 == _obf) return _obe;
            if (_obe.add(_obg.multiply(_obi)), 0 == _obh) return _obe;
            for (var _obj = 0, _obk = 0, _obl = 0, _obm = _obc.have_slot_ids(); _obl < _obm.length; _obl++) {
                var _obn = _obm[_obl],
                    _obo = _obb.default.model.slot.getMst(_obn),
                    _obp = _obo.equipType;
                12 != _obp && 13 != _obp || (_obo.sakuteki >= 5 && (_obj += _obc.get_slotnums(parseInt(_obn))), _obo.taiku >= 2 && (_obk += _obc.get_slotnums(parseInt(_obn))));
            }
            if (1 == _obh) {
                _obj >= 1 && (_obe.houg += 3, _obe.kaih += 2, _obe.raig += 1);
                var _obq = _obc.get_slotnums(13),
                    _obr = _obc.get_slotnums(125),
                    _obs = _obc.get_slotnums(285),
                    _obt = _obq + _obr + _obs;
                1 == _obt ? (_obe.houg += 1, _obe.raig += 3) : _obt >= 2 && (_obe.houg += 2, _obe.raig += 5), _obs >= 1 && (_obe.raig += 1), _obk >= 1 && (_obe.tyku += 4);
            }
            return _obe;
        };
    },
    71383: (_obu, _obv, _obw) => {
        'use strict';
        var _obx = null;
        defineModule(_obv);
        Object.defineProperty(_obv, '__esModule', {
            'value': true
        }), _obv.getSlot456PersonalEffect = void 0;
        var _oby = _obw(74496);
        _obv.getSlot456PersonalEffect = function(_obz) {
            var _oc0 = null,
                _oc1 = new _oby.SlotItemEffectModel(),
                _oc2 = false,
                _oc3 = new _oby.SlotItemEffectModel(),
                _oc4 = _obz.getCountryName();
            if ('アメリカ' == _oc4 && (_oc3.houg += 3, _oc3.kaih += 4, _oc3.saku += 4, _oc1.houm += 3, _oc2 = true), 'イギリス' != _oc4 && 'オーストラリア' != _oc4 || (_oc3.houg += 2, _oc3.kaih += 2, _oc3.saku += 2, _oc1.houm += 2, _oc2 = true), 87 != _obz.ctype && 91 != _obz.ctype || (_oc3.houg += 1, _oc1.leng += 1, _oc2 = true), 651 != _obz.ship_id && 656 != _obz.ship_id || (_oc1.houg += 2, _oc1.kaih += 2, _oc1.saku += 3, _oc1.leng += 1, _oc1.houm += 2), 0 == _oc2) return _oc1;
            var _oc5 = _obz.get_slotnums(456);
            return _oc1.add(_oc3.multiply(_oc5)), _oc1;
        };
    },
    55888: (_oc6, _oc7, _oc8) => {
        'use strict';
        var _oc9 = null;
        defineModule(_oc7);
        Object.defineProperty(_oc7, '__esModule', {
            'value': true
        }), _oc7.getSlot457PersonalEffect = void 0;
        var _oca = _oc8(74496);
        _oc7.getSlot457PersonalEffect = function(_ocb) {
            var _occ = null,
                _ocd = new _oca.SlotItemEffectModel(),
                _oce = 0;
            if (109 == _ocb.ctype ? (_ocd.raig += 3, _ocd.kaih += 3, _oce = 1) : 71 == _ocb.ctype || 103 == _ocb.ctype ? (_ocd.raig += 2, _ocd.kaih += 2, _oce = 2) : 44 == _ocb.ctype && (_ocd.raig += 1, _ocd.kaih += 4, _oce = 3), 0 == _oce) return _ocd;
            var _ocf = _ocb.get_each_level_nums(461),
                _ocg = [];
            return _oce > 0 && _ocf.forEach(function(_och, _oci) {
                var _ocj = null;
                for (var _ock = 1; _ock <= _ocb.SLOT_LEVEL_MAX; _ock++) null == _ocg[_ock] && (_ocg[_ock] = 0), _oci >= _ock && (_ocg[_ock] += _och);
            }), 1 == _oce ? (_ocg[2] >= 1 && (_ocd.raig += 1 * _ocg[2]), _ocg[3] >= 1 && (_ocd.kaih += 1 * _ocg[3]), _ocg[4] >= 1 && (_ocd.raig += 1 * _ocg[4]), _ocg[5] >= 1 && (_ocd.houm += 1 * _ocg[5]), _ocg[6] >= 1 && (_ocd.raig += 1 * _ocg[6]), _ocg[8] >= 1 && (_ocd.raig += 1 * _ocg[8]), _ocg[10] >= 1 && (_ocd.houm += 1 * _ocg[10])) : 2 == _oce ? (_ocg[3] >= 1 && (_ocd.kaih += 1 * _ocg[3]), _ocg[4] >= 1 && (_ocd.raig += 1 * _ocg[4]), _ocg[6] >= 1 && (_ocd.raig += 1 * _ocg[6]), _ocg[8] >= 1 && (_ocd.raig += 1 * _ocg[8]), _ocg[10] >= 1 && (_ocd.houm += 1 * _ocg[10])) : 3 == _oce && (_ocg[4] >= 1 && (_ocd.raig += 1 * _ocg[4]), _ocg[6] >= 1 && (_ocd.raig += 1 * _ocg[6]), _ocg[8] >= 1 && (_ocd.raig += 1 * _ocg[8]), _ocg[10] >= 1 && (_ocd.houm += 1 * _ocg[10])), _ocd;
        };
    },
    2258: (_ocl, _ocm, _ocn) => {
        'use strict';
        var _oco = null;
        defineModule(_ocm);
        Object.defineProperty(_ocm, '__esModule', {
            'value': true
        }), _ocm.getSlot458PersonalEffect = void 0;
        var _ocp = _ocn(74496);
        _ocm.getSlot458PersonalEffect = function(_ocq) {
            var _ocr = null,
                _ocs = new _ocp.SlotItemEffectModel(),
                _oct = 0,
                _ocu = false;
            if (13 != _ocq.stype && 14 != _ocq.stype || (_ocu = true), 109 == _ocq.ctype ? (_ocs.raig += 3, _ocs.kaih += 6, _oct = 1) : 71 == _ocq.ctype || 103 == _ocq.ctype ? (_ocs.raig += 3, _ocs.kaih += 4, _oct = 2) : 44 == _ocq.ctype && (_ocs.raig += 3, _ocs.kaih += 3, _oct = 3), 0 == _ocu && 0 == _oct) return _ocs;
            var _ocv = [];
            [458, 461].forEach(function(_ocw) {
                var _ocx = null,
                    _ocy = _ocq.get_each_level_nums(_ocw);
                null == _ocv[_ocw] && (_ocv[_ocw] = []), _ocy.forEach(function(_ocz, _od0) {
                    var _od1 = null;
                    for (var _od2 = 1; _od2 <= _ocq.SLOT_LEVEL_MAX; _od2++) null == _ocv[_ocw][_od2] && (_ocv[_ocw][_od2] = 0), _od0 >= _od2 && (_ocv[_ocw][_od2] += _ocz);
                });
            });
            var _od3 = _ocv[458][2],
                _od4 = _ocv[458][3],
                _od5 = _ocv[458][4],
                _od6 = _ocv[458][5],
                _od7 = _ocv[458][6],
                _od8 = _ocv[458][8],
                _od9 = _ocv[458][10],
                _oda = _ocv[461][4];
            return _oct >= 1 && _oct <= 3 && (_od5 >= 1 && (_ocs.houm += 1 * _od5), _od7 >= 1 && (_ocs.kaih += 1 * _od7), _od8 >= 1 && (_ocs.raig += 1 * _od8)), _ocu && (_od4 >= 1 && (_ocs.kaih += 1 * _od4), _od6 >= 1 && (_ocs.raig += 1 * _od6), _od9 >= 1 && (_ocs.houm += 1 * _od9), _od3 >= 1 && _oda >= 1 && (_ocs.raig += 7, _ocs.houm += 5)), _ocs;
        };
    },
    43768: (_odb, _odc, _odd) => {
        'use strict';
        var _ode = null;
        defineModule(_odc);
        Object.defineProperty(_odc, '__esModule', {
            'value': true
        }), _odc.getSlot463PersonalEffect = void 0;
        var _odf = _odd(74496);
        _odc.getSlot463PersonalEffect = function(_odg) {
            var _odh = null,
                _odi = new _odf.SlotItemEffectModel(),
                _odj = false,
                _odk = new _odf.SlotItemEffectModel(),
                _odl = _odg.get_slotnums(142),
                _odm = _odg.get_slotnums(460),
                _odn = _odl + _odm;
            if (37 == _odg.ctype && (_odk.houg += 1, _odk.tyku += 2, _odk.kaih += 1, _odk.houm += 1, _odn >= 1 && (_odi.tyku += 1, _odi.kaih += 1, _odi.houm += 1), _odj = true), 916 != _odg.ship_id && 911 != _odg.ship_id && 546 != _odg.ship_id || (_odk.houg += 1, _odk.kaih += 1, _odk.houm += 2, _odm >= 1 && (_odi.houg += 1, _odi.kaih += 1, _odi.houm += 2), _odj = true), 0 == _odj) return _odi;
            var _odo = _odg.get_slotnums(463);
            return _odi.add(_odk.multiply(_odo)), _odi;
        };
    },
    92174: (_odp, _odq, _odr) => {
        'use strict';
        var _ods = null;
        defineModule(_odq);
        Object.defineProperty(_odq, '__esModule', {
            'value': true
        }), _odq.getSlot464PersonalEffect = void 0;
        var _odt = _odr(74496);
        _odq.getSlot464PersonalEffect = function(_odu) {
            var _odv = null,
                _odw = new _odt.SlotItemEffectModel(),
                _odx = false,
                _ody = new _odt.SlotItemEffectModel(),
                _odz = _odu.get_slotnums(142),
                _oe0 = _odu.get_slotnums(460),
                _oe1 = _odz + _oe0;
            if (37 == _odu.ctype ? (_ody.tyku += 3, _ody.kaih += 2, _oe1 >= 1 && (_odw.tyku += 2, _odw.kaih += 1, _odw.houm += 1), _odx = true) : 6 != _odu.ctype && 73 != _odu.ctype && 113 != _odu.ctype || (_ody.tyku = _ody.tyku - 2, _ody.kaih = _ody.kaih - 2, _odx = true), 916 != _odu.ship_id && 911 != _odu.ship_id && 546 != _odu.ship_id && 593 != _odu.ship_id && 954 != _odu.ship_id || (_ody.tyku += 2, _ody.kaih += 2, _oe0 >= 1 && (_odw.houg += 2, _odw.tyku += 2, _odw.kaih += 2, _odw.houm += 3), _odx = true), 0 == _odx) return _odw;
            var _oe2 = _odu.get_slotnums(464);
            return _odw.add(_ody.multiply(_oe2)), _odw;
        };
    },
    38003: (_oe3, _oe4, _oe5) => {
        'use strict';
        var _oe6 = null;
        defineModule(_oe4);
        Object.defineProperty(_oe4, '__esModule', {
            'value': true
        }), _oe4.getSlot465PersonalEffect = void 0;
        var _oe7 = _oe5(74496);
        _oe4.getSlot465PersonalEffect = function(_oe8) {
            var _oe9 = null,
                _oea = new _oe7.SlotItemEffectModel(),
                _oeb = false,
                _oec = new _oe7.SlotItemEffectModel(),
                _oed = _oe8.get_slotnums(142),
                _oee = _oe8.get_slotnums(460),
                _oef = _oed + _oee;
            if (916 == _oe8.ship_id ? (_oec.houg += 2, _oec.kaih += 8, _oec.houm += 2, _oee >= 1 && (_oea.kaih += 2, _oea.houm += 1), _oeb = true) : 911 != _oe8.ship_id && 546 != _oe8.ship_id || (_oec.houg += 1, _oec.kaih += 2, _oec.houm += 1, _oee >= 1 && (_oea.kaih += 1, _oea.houm += 1), _oeb = true), 37 == _oe8.ctype && _oef >= 1 && (_oea.houg += 2, _oea.houm += 2), 0 == _oeb) return _oea;
            var _oeg = _oe8.get_slotnums(465);
            return _oea.add(_oec.multiply(_oeg)), _oea;
        };
    },
    65455: (_oeh, _oei, _oej) => {
        'use strict';
        var _oek = null;
        defineModule(_oei);
        Object.defineProperty(_oei, '__esModule', {
            'value': true
        }), _oei.getSlot466PersonalEffect = void 0;
        var _oel = _oej(74496);
        _oei.getSlot466PersonalEffect = function(_oem) {
            var _oen = null,
                _oeo = new _oel.SlotItemEffectModel(),
                _oep = false,
                _oeq = new _oel.SlotItemEffectModel();
            if (277 == _oem.ship_id || 278 == _oem.ship_id || 156 == _oem.ship_id || 288 == _oem.ship_id || 112 == _oem.ship_id || 280 == _oem.ship_id || 279 == _oem.ship_id ? (_oeq.houg += 1, _oeq.houm += 1, _oep = true) : 461 == _oem.ship_id || 462 == _oem.ship_id || 466 == _oem.ship_id || 467 == _oem.ship_id ? (_oeq.houg += 2, _oeq.kaih += 2, _oeq.houm += 1, _oep = true) : 594 != _oem.ship_id && 698 != _oem.ship_id && 646 != _oem.ship_id && 599 != _oem.ship_id && 610 != _oem.ship_id && 196 != _oem.ship_id && 197 != _oem.ship_id || (_oeq.houg += 1, _oeq.kaih += 1, _oeq.houm += 2, _oep = true), 0 == _oep) return _oeo;
            var _oer = _oem.get_slotnums(466);
            return _oeo.add(_oeq.multiply(_oer)), _oeo;
        };
    },
    70362: (_oes, _oet, _oeu) => {
        'use strict';
        var _oev = null;
        defineModule(_oet);
        Object.defineProperty(_oet, '__esModule', {
            'value': true
        }), _oet.getSlot467PersonalEffect = void 0;
        var _oew = _oeu(74496);
        _oet.getSlot467PersonalEffect = function(_oex) {
            var _oey = null,
                _oez = new _oew.SlotItemEffectModel(),
                _of0 = false,
                _of1 = new _oew.SlotItemEffectModel();
            if ('アメリカ' == _oex.getCountryName()) {
                for (var _of2 = _oex.getUSSWaterRaderDict(), _of3 = _oex.getUSSAirRaderDict(), _of4 = 0, _of5 = 0, _of6 = 0, _of7 = _oex.have_slot_ids(); _of6 < _of7.length; _of6++) {
                    var _of8 = _of7[_of6];
                    _of2[parseInt(_of8)] && (_of4 += _oex.get_slotnums(parseInt(_of8))), _of3[parseInt(_of8)] && (_of5 += _oex.get_slotnums(parseInt(_of8)));
                }
                _of1.houg += 1, _of1.tyku += 1, _of1.kaih += 2, _of4 >= 1 && (_oez.houg += 1, _oez.tyku += 1, _oez.kaih += 1, _oez.houm += 2), _of5 >= 1 && (_oez.tyku += 2, _oez.kaih += 2), 65 != _oex.ctype && 93 != _oex.ctype && 102 != _oex.ctype && 107 != _oex.ctype && 125 != _oex.ctype || (_of1.tyku += 2, _of1.kaih += 1), _of0 = true;
            }
            if (0 == _of0) return _oez;
            var _of9 = _oex.get_slotnums(467);
            return _oez.add(_of1.multiply(_of9)), _oez;
        };
    },
    68086: (_ofa, _ofb, _ofc) => {
        'use strict';
        var _ofd = null;
        defineModule(_ofb);
        Object.defineProperty(_ofb, '__esModule', {
            'value': true
        }), _ofb.getSlot470PersonalEffect = void 0;
        var _ofe = _ofc(74496);
        _ofb.getSlot470PersonalEffect = function(_off) {
            var _ofg = null,
                _ofh = new _ofe.SlotItemEffectModel(),
                _ofi = false,
                _ofj = new _ofe.SlotItemEffectModel(),
                _ofk = _off.get_slotnums(470),
                _ofl = _off.get_slotnums(529),
                _ofm = _ofk + _ofl,
                _ofn = _off.get_each_level_over_nums([470, 529]),
                _ofo = (_ofn.slot[470], _ofn.slot[529]),
                _ofp = _ofn.total,
                _ofq = 0;
            23 == _off.ctype || 18 == _off.ctype ? (_ofj.houg += 1, _ofi = true, _ofq = 1) : 30 == _off.ctype && (_ofj.houg += 2, _ofi = true, _ofq = 2), ('しぐれ' == _off.yomi || 'ゆきかぜ' == _off.yomi || 'いそかぜ' == _off.yomi) && (_ofj.kaih += 2, _ofi = true), 405 == _off.ship_id || 246 == _off.ship_id || 144 == _off.ship_id || 145 == _off.ship_id || 497 == _off.ship_id ? (_ofl >= 1 && (_ofh.houg += 1 * _ofl, _ofh.tyku += 1 * _ofl, _ofh.houm += 1 * _ofl, _ofh.kaih += 1 * _ofl), 2 == _ofl ? _ofh.houg += 1 : _ofl >= 3 && (_ofh.houg += 3), _ofo[8] >= 1 && (_ofh.tyku += 1 * _ofo[8]), _ofo[10] >= 1 && (_ofh.houg += 1 * _ofo[10])) : 323 == _off.ship_id || 498 == _off.ship_id || 961 == _off.ship_id ? (_ofl >= 1 && (_ofh.houg += 2 * _ofl, _ofh.tyku += 2 * _ofl, _ofh.houm += 1 * _ofl, _ofh.kaih += 1 * _ofl), 2 == _ofl ? _ofh.houg += 2 : _ofl >= 3 && (_ofh.houg += 4), _ofo[6] >= 1 && (_ofh.tyku += 1 * _ofo[6]), _ofo[8] >= 1 && (_ofh.houm += 1 * _ofo[8]), _ofo[10] >= 1 && (_ofh.houg += 1 * _ofo[10])) : 975 == _off.ship_id && (_ofl >= 1 && (_ofh.houg += 3 * _ofl, _ofh.tyku += 3 * _ofl, _ofh.houm += 2 * _ofl, _ofh.kaih += 2 * _ofl), 2 == _ofl ? _ofh.houg += 3 : _ofl >= 3 && (_ofh.houg += 6), _ofo[4] >= 1 && (_ofh.tyku += 1 * _ofo[4]), _ofo[6] >= 1 && (_ofh.houg += 1 * _ofo[6]), _ofo[8] >= 1 && (_ofh.houm += 1 * _ofo[8]), _ofo[10] >= 1 && (_ofh.houg += 1 * _ofo[10])), 961 == _off.ship_id && (_ofj.houg += 3, _ofj.houm += 3, _ofj.kaih += 2, _ofi = true), 566 != _off.ship_id && 567 != _off.ship_id && 568 != _off.ship_id && 656 != _off.ship_id && 670 != _off.ship_id && 915 != _off.ship_id && 651 != _off.ship_id && 145 != _off.ship_id && 961 != _off.ship_id && 951 != _off.ship_id || (_ofh.houg += 1, _ofh.houm += 2, _ofm >= 2 && (_ofh.houg += 2), _ofp[5] >= 1 && (_ofh.houm += 1 * _ofp[5]), _ofp[8] >= 1 && (_ofh.houg += 1 * _ofp[8]), _ofp[10] >= 1 && (_ofh.houm += 1 * _ofp[10])), _ofi && _ofh.add(_ofj.multiply(_ofm));
            var _ofr = _off.get_have_rader_nums(),
                _ofs = _ofr.water_rader,
                _oft = _ofr.air_rader;
            return _ofs >= 1 && (1 == _ofq ? (_ofh.houg += 1, _ofh.raig += 3, _ofh.kaih += 1, _ofh.houm += 1) : 2 == _ofq && (_ofh.houg += 2, _ofh.raig += 3, _ofh.kaih += 1, _ofh.houm += 3)), _oft >= 1 && (_ofl >= 1 && (_ofh.tyku += 2, _ofh.kaih += 2), 2 == _ofl ? _ofh.tyku += 2 : _ofl >= 3 && (_ofh.tyku += 4)), _ofh;
        };
    },
    78173: (_ofu, _ofv, _ofw) => {
        'use strict';
        var _ofx = null;
        defineModule(_ofv);
        Object.defineProperty(_ofv, '__esModule', {
            'value': true
        }), _ofv.getSlot471PersonalEffect = void 0;
        var _ofy = _ofw(74496);
        _ofv.getSlot471PersonalEffect = function(_ofz) {
            var _og0 = null,
                _og1 = new _ofy.SlotItemEffectModel(),
                _og2 = false,
                _og3 = new _ofy.SlotItemEffectModel(),
                _og4 = 0;
            if ('フランス' == _ofz.getCountryName() && (_og3.houg += 2, _og3.kaih += 2, _og3.houm += 2, _og2 = true, _og4 = 1), 79 == _ofz.ctype && (_og3.houg += 2, _og3.houm += 1, _og2 = true), 0 == _og2) return _og1;
            var _og5 = _ofz.get_slotnums(471);
            if (_og1.add(_og3.multiply(_og5)), 0 == _og4) return _og1;
            var _og6 = _ofz.get_each_level_nums(471),
                _og7 = 0,
                _og8 = 0;
            if (_og4 > 0 && _og6.forEach(function(_og9, _oga) {
                    _oga >= 6 && (_og7 += _og9), _oga >= 8 && (_og8 += _og9);
                }), 1 == _og4) {
                _og7 >= 1 && (_og1.kaih += 1 * _og7, _og1.houm += 1 * _og7), _og8 >= 1 && (_og1.houg += 1 * _og8, _og1.kaih += 1 * _og8, _og1.houm += 1 * _og8);
                var _ogb = _og6[10];
                _ogb >= 1 && (_og1.houg += 1 * _ogb, _og1.houm += 1 * _ogb);
            }
            return _og1;
        };
    },
    22581: (_ogc, _ogd, _oge) => {
        'use strict';
        var _ogf = null;
        defineModule(_ogd);
        Object.defineProperty(_ogd, '__esModule', {
            'value': true
        }), _ogd.getSlot472PersonalEffect = void 0;
        var _ogg = _oge(74496);
        _ogd.getSlot472PersonalEffect = function(_ogh) {
            var _ogi = null,
                _ogj = new _ogg.SlotItemEffectModel(),
                _ogk = false,
                _ogl = new _ogg.SlotItemEffectModel(),
                _ogm = _ogh.getCountryName();
            if ('アメリカ' == _ogm && (_ogl.tais += 2, _ogk = true), 'イギリス' == _ogm && (_ogl.tais += 1, _ogk = true), 1 == _ogh.stype && (_ogl.kaih += 1, _ogk = true), _ogk) {
                var _ogn = _ogh.get_slotnums(472);
                _ogj.add(_ogl.multiply(_ogn));
            }
            return 920 == _ogh.ship_id && (_ogj.tais += 1, _ogj.kaih += 1, _ogj.houm += 1), _ogj;
        };
    },
    13053: (_ogo, _ogp, _ogq) => {
        'use strict';
        var _ogr = null;
        defineModule(_ogp);
        Object.defineProperty(_ogp, '__esModule', {
            'value': true
        }), _ogp.getSlot473PersonalEffect = void 0;
        var _ogs = _ogq(74496);
        _ogp.getSlot473PersonalEffect = function(_ogt) {
            var _ogu = null,
                _ogv = new _ogs.SlotItemEffectModel(),
                _ogw = false,
                _ogx = new _ogs.SlotItemEffectModel(),
                _ogy = _ogt.getCountryName();
            if ('アメリカ' == _ogy && (_ogx.houg += 1, _ogx.kaih += 1, _ogx.tyku += 1, _ogw = true), 'イギリス' == _ogy && (_ogx.houg += 1, _ogx.kaih += 1, _ogw = true), 0 == _ogw) return _ogv;
            var _ogz = _ogt.get_slotnums(473);
            return _ogv.add(_ogx.multiply(_ogz)), _ogv;
        };
    },
    47874: (_oh0, _oh1, _oh2) => {
        'use strict';
        var _oh3 = null;
        defineModule(_oh1);
        Object.defineProperty(_oh1, '__esModule', {
            'value': true
        }), _oh1.getSlot474PersonalEffect = void 0;
        var _oh4 = _oh2(74496);
        _oh1.getSlot474PersonalEffect = function(_oh5) {
            var _oh6 = null,
                _oh7 = new _oh4.SlotItemEffectModel(),
                _oh8 = false,
                _oh9 = new _oh4.SlotItemEffectModel(),
                _oha = _oh5.getCountryName();
            if ('アメリカ' == _oha && (_oh9.houg += 2, _oh9.kaih += 1, _oh9.tyku += 1, _oh8 = true), 'イギリス' == _oha && (_oh9.houg += 1, _oh9.kaih += 1, _oh9.tyku += 1, _oh8 = true), 'フランス' == _oha && (_oh9.houg += 1, _oh9.tyku += 1, _oh8 = true), 707 != _oh5.ship_id && 930 != _oh5.ship_id || (_oh9.houg += 1, _oh9.kaih += 1, _oh8 = true), 0 == _oh8) return _oh7;
            var _ohb = _oh5.get_slotnums(474);
            return _oh7.add(_oh9.multiply(_ohb)), _oh7;
        };
    },
    42788: (_ohc, _ohd, _ohe) => {
        'use strict';
        var _ohf = null;
        defineModule(_ohd);
        Object.defineProperty(_ohd, '__esModule', {
            'value': true
        }), _ohd.getSlot478PersonalEffect = void 0;
        var _ohg = _ohe(74496);
        _ohd.getSlot478PersonalEffect = function(_ohh) {
            var _ohi = null,
                _ohj = new _ohg.SlotItemEffectModel(),
                _ohk = _ohh.get_each_level_nums(478),
                _ohl = [];
            return _ohk.forEach(function(_ohm, _ohn) {
                var _oho = null;
                for (var _ohp = 1; _ohp <= _ohh.SLOT_LEVEL_MAX; _ohp++) _ohn >= _ohp && (null == _ohl[_ohp] && (_ohl[_ohp] = 0), _ohl[_ohp] += _ohm);
            }), _ohl.every(function(_ohq) {
                return 0 == _ohq;
            }) || (_ohl[1] >= 1 && (_ohj.houg += 1), _ohl[2] >= 1 && (_ohj.houm += 1), _ohl[3] >= 1 && (_ohj.kaih += 1), _ohl[4] >= 1 && (_ohj.baku += 1), _ohl[5] >= 1 && (_ohj.raig += 1), _ohl[6] >= 1 && (_ohj.tyku += 1), _ohl[7] >= 1 && (_ohj.houg += 1), _ohl[8] >= 1 && (_ohj.houm += 1), _ohl[9] >= 1 && (_ohj.kaih += 1), _ohl[10] >= 1 && (_ohj.houg += 1)), _ohj;
        };
    },
    22218: (_ohr, _ohs, _oht) => {
        'use strict';
        var _ohu = null;
        defineModule(_ohs);
        Object.defineProperty(_ohs, '__esModule', {
            'value': true
        }), _ohs.getSlot47PersonalEffect = void 0;
        var _ohv = _oht(74496);
        _ohs.getSlot47PersonalEffect = function(_ohw) {
            var _ohx = null,
                _ohy = new _ohv.SlotItemEffectModel(),
                _ohz = new _ohv.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_ohw.yomi) >= 0 ? (_ohz.tais += 3, _ohz.kaih += 2, _ohz.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_ohw.yomi) >= 0 && (_ohz.tais += 2, _ohz.kaih += 2), !_ohz.exists()) return _ohy;
            var _oi0 = _ohw.get_slotnums(47) + _ohw.get_slotnums(438);
            return _ohy = _ohz.multiply(_oi0);
        };
    },
    57664: (_oi1, _oi2, _oi3) => {
        'use strict';
        var _oi4 = null;
        defineModule(_oi2);
        Object.defineProperty(_oi2, '__esModule', {
            'value': true
        }), _oi2.getSlot483PersonalEffect = void 0;
        var _oi5 = _oi3(74496);
        _oi2.getSlot483PersonalEffect = function(_oi6) {
            var _oi7 = null,
                _oi8 = new _oi5.SlotItemEffectModel(),
                _oi9 = 0,
                _oia = 0,
                _oib = 0,
                _oic = 0,
                _oid = 0,
                _oie = 0,
                _oif = 0;
            if (6 == _oi6.ctype ? (_oi8.houg += 2, _oi8.tyku += 3, _oi8.houm += 1, _oi9 = 1) : 2 == _oi6.ctype ? (_oi8.houg += 1, _oi8.tyku += 2, _oi8.kaih += 2, _oi8.houm += 1, _oia = 1) : 37 == _oi6.ctype && (_oib = 1), 8 == _oi6.stype || 9 == _oi6.stype || 10 == _oi6.stype ? _oic = 1 : 5 != _oi6.stype && 6 != _oi6.stype || (_oid = 1), 149 == _oi6.ship_id ? (_oi8.houg += 2, _oi8.tyku += 2) : 591 == _oi6.ship_id ? (_oi8.houg += 3, _oi8.tyku += 3, _oi8.kaih += 1) : 150 == _oi6.ship_id ? (_oi8.houg += 1, _oi8.tyku += 1) : 592 == _oi6.ship_id ? (_oi8.houg += 2, _oi8.tyku += 2, _oi8.kaih += 2) : 151 == _oi6.ship_id ? (_oi8.houg += 1, _oi8.tyku += 2, _oi8.kaih += 2) : 593 == _oi6.ship_id ? (_oi8.houg += 2, _oi8.tyku += 5, _oi8.kaih += 3) : 954 == _oi6.ship_id ? (_oi8.houg += 2, _oi8.tyku += 4, _oi8.kaih += 2) : 152 == _oi6.ship_id ? (_oi8.houg += 2, _oi8.tyku += 2) : 911 == _oi6.ship_id || 916 == _oi6.ship_id || 546 == _oi6.ship_id ? (_oi8.houg += 2, _oi8.tyku += 2, _oi8.kaih += 2, _oie = 1) : 553 == _oi6.ship_id || 554 == _oi6.ship_id ? (_oi8.houg += 1, _oi8.tyku += 2, _oi8.kaih += 1, _oif = 1) : 541 == _oi6.ship_id || 411 == _oi6.ship_id || 412 == _oi6.ship_id ? (_oi8.houg += 1, _oi8.tyku += 2) : 573 == _oi6.ship_id && (_oi8.houg += 2, _oi8.tyku += 2, _oi8.kaih += 1), 0 == [_oi9, _oia, _oib, _oic, _oid, _oie, _oif].reduce(function(_oig, _oih) {
                    return _oig + _oih;
                }, 0)) return _oi8;
            var _oii = _oi6.get_each_level_nums(483),
                _oij = 0,
                _oik = [];
            return _oii.forEach(function(_oil, _oim) {
                var _oin = null;
                _oim >= 6 && (_oij += _oil);
                for (var _oio = 1; _oio <= _oi6.SLOT_LEVEL_MAX; _oio++) null == _oik[_oio] && (_oik[_oio] = 0), _oim >= _oio && (_oik[_oio] += _oil);
            }), 1 == _oi9 ? (_oij >= 1 && (_oi8.houm += 1), _oii[10] >= 1 && (_oi8.houm += 1)) : 1 == _oia ? (_oik[5] >= 1 && (_oi8.kaih += 1), _oik[6] >= 1 && (_oi8.houm += 1), _oik[10] >= 1 && (_oi8.kaih += 1)) : 1 == _oib && (_oik[6] >= 1 && (_oi8.houm += 1), _oik[10] >= 1 && (_oi8.kaih += 1)), 1 == _oic ? (_oik[2] >= 1 && (_oi8.tyku += 1), _oik[4] >= 1 && (_oi8.houg += 1), _oik[7] >= 1 && (_oi8.kaih += 1), _oik[8] >= 1 && (_oi8.tyku += 1), _oik[9] >= 1 && (_oi8.houg += 1)) : 1 == _oid && (_oik[2] >= 1 && (_oi8.tyku += 1), _oik[4] >= 1 && (_oi8.houg += 1), _oik[6] >= 1 && (_oi8.kaih += 1), _oik[8] >= 1 && (_oi8.houm += 1), _oik[10] >= 1 && (_oi8.houg += 1)), 1 == _oie ? _oik[5] >= 1 && (_oi8.houm += 1) : 1 == _oif && (_oik[1] >= 1 && (_oi8.houm += 1), _oik[3] >= 1 && (_oi8.houm += 1)), _oi8;
        };
    },
    44990: (_oip, _oiq, _oir) => {
        'use strict';
        var _ois = null;
        defineModule(_oiq);
        Object.defineProperty(_oiq, '__esModule', {
            'value': true
        }), _oiq.getSlot485PersonalEffect = void 0;
        var _oit = _oir(74496);
        _oiq.getSlot485PersonalEffect = function(_oiu) {
            var _oiv = null,
                _oiw = new _oit.SlotItemEffectModel(),
                _oix = false,
                _oiy = new _oit.SlotItemEffectModel();
            if (9 == _oiu.ctype && (_oiy.houg += 1, _oiy.kaih += 2, _oiy.tyku += 3, _oix = true), 501 == _oiu.ship_id || 506 == _oiu.ship_id ? (_oiy.kaih += 1, _oiy.tyku += 2, _oiy.houm += 1, _oix = true) : 502 != _oiu.ship_id && 507 != _oiu.ship_id || (_oiy.kaih += 1, _oiy.tyku += 1, _oiy.houm += 1, _oix = true), _oix) {
                var _oiz = _oiu.get_slotnums(485);
                _oiw.add(_oiy.multiply(_oiz));
            }
            var _oj0 = _oiu.get_each_level_nums(485),
                _oj1 = 0,
                _oj2 = 0,
                _oj3 = 0,
                _oj4 = _oj0[10];
            return _oj0.forEach(function(_oj5, _oj6) {
                _oj6 >= 3 && (_oj1 += _oj5), _oj6 >= 5 && (_oj2 += _oj5), _oj6 >= 7 && (_oj3 += _oj5);
            }), _oj1 > 0 && (_oiw.houg += 1 * _oj1), _oj2 > 0 && (_oiw.tyku += 1 * _oj2), _oj3 > 0 && (_oiw.kaih += 1 * _oj3), _oj4 > 0 && (_oiw.houm += 1 * _oj4), _oiw;
        };
    },
    83957: (_oj7, _oj8, _oj9) => {
        'use strict';
        var _oja = null;
        defineModule(_oj8);
        Object.defineProperty(_oj8, '__esModule', {
            'value': true
        }), _oj8.getSlot486PersonalEffect = void 0;
        var _ojb = _oj9(74496);
        _oj8.getSlot486PersonalEffect = function(_ojc) {
            var _ojd = null,
                _oje = new _ojb.SlotItemEffectModel(),
                _ojf = false,
                _ojg = new _ojb.SlotItemEffectModel();
            if (894 == _ojc.ship_id || 899 == _ojc.ship_id ? (_ojg.houg += 4, _ojg.tyku += 4, _ojg.kaih += 3, _ojg.houm += 2, _ojf = true) : 888 != _ojc.ship_id && 883 != _ojc.ship_id || (_ojg.houg += 2, _ojg.tyku += 2, _ojg.kaih += 2, _ojg.houm += 1, _ojf = true), _ojf) {
                var _ojh = _ojc.get_slotnums(486);
                _oje.add(_ojg.multiply(_ojh));
            }
            var _oji = _ojc.get_each_level_nums(486),
                _ojj = 0,
                _ojk = 0,
                _ojl = _oji[10];
            return _oji.forEach(function(_ojm, _ojn) {
                _ojn >= 6 && (_ojj += _ojm), _ojn >= 8 && (_ojk += _ojm);
            }), _ojj > 0 && (_oje.kaih += 1 * _ojj, _oje.houm += 1 * _ojj), _ojk > 0 && (_oje.tyku += 1 * _ojk, _oje.kaih += 1 * _ojk), _ojl > 0 && (_oje.houg += 1 * _ojl, _oje.houm += 1 * _ojl), _oje;
        };
    },
    78539: (_ojo, _ojp, _ojq) => {
        'use strict';
        var _ojr = null;
        defineModule(_ojp);
        Object.defineProperty(_ojp, '__esModule', {
            'value': true
        }), _ojp.getSlot487PersonalEffect = void 0;
        var _ojs = _ojq(74496);
        _ojp.getSlot487PersonalEffect = function(_ojt) {
            var _oju = null,
                _ojv = new _ojs.SlotItemEffectModel(),
                _ojw = false,
                _ojx = new _ojs.SlotItemEffectModel();
            if (894 == _ojt.ship_id || 899 == _ojt.ship_id ? (_ojx.houg += 5, _ojx.tyku += 3, _ojx.kaih += 2, _ojx.houm += 4, _ojw = true) : 888 != _ojt.ship_id && 883 != _ojt.ship_id || (_ojx.houg += 3, _ojx.tyku += 1, _ojx.kaih += 1, _ojx.houm += 2, _ojw = true), _ojw) {
                var _ojy = _ojt.get_slotnums(487);
                _ojv.add(_ojx.multiply(_ojy));
            }
            var _ojz = _ojt.get_each_level_nums(487),
                _ok0 = 0,
                _ok1 = 0,
                _ok2 = _ojz[10];
            return _ojz.forEach(function(_ok3, _ok4) {
                _ok4 >= 6 && (_ok0 += _ok3), _ok4 >= 8 && (_ok1 += _ok3);
            }), _ok0 > 0 && (_ojv.houg += 1 * _ok0, _ojv.kaih += 1 * _ok0), _ok1 > 0 && (_ojv.tyku += 1 * _ok1, _ojv.houm += 1 * _ok1), _ok2 > 0 && (_ojv.houg += 1 * _ok2, _ojv.houm += 1 * _ok2), _ojv;
        };
    },
    96282: (_ok5, _ok6, _ok7) => {
        'use strict';
        var _ok8 = null;
        defineModule(_ok6);
        Object.defineProperty(_ok6, '__esModule', {
            'value': true
        }), _ok6.getSlot488PersonalEffect = void 0;
        var _ok9 = _ok7(74496);
        _ok6.getSlot488PersonalEffect = function(_oka) {
            var _okb = null,
                _okc = new _ok9.SlotItemEffectModel(),
                _okd = false,
                _oke = new _ok9.SlotItemEffectModel(),
                _okf = 0,
                _okg = _oka.getCountryName(),
                _okh = {
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
                }[_oka.ship_id];
            if (('日本' == _okg && 2 == _oka.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_oka.ctype] && 1 == _oka.stype) && (_oke.tais += 1, _oke.kaih += 1, _okd = true), 1 == _okh ? (_oke.tais += 5, _oke.kaih += 4, _oke.houm += 2, _okd = true, _okf = 1) : 2 == _okh ? (_oke.tais += 2, _oke.kaih += 1, _oke.houm += 1, _okd = true, _okf = 2) : 3 == _okh && (_oke.tais += 1, _okd = true, _okf = 2), 0 == _okd) return _okc;
            var _oki = _oka.get_slotnums(488);
            if (_okc.add(_oke.multiply(_oki)), 0 == _okf) return _okc;
            var _okj = _oka.get_each_level_nums(488),
                _okk = [];
            return _okj.forEach(function(_okl, _okm) {
                var _okn = null;
                for (var _oko = 1; _oko <= _oka.SLOT_LEVEL_MAX; _oko++) _okm >= _oko && (null == _okk[_oko] && (_okk[_oko] = 0), _okk[_oko] += _okl);
            }), 1 == _okf ? (_okk[3] >= 1 && (_okc.kaih += 1 * _okk[3]), _okk[5] >= 1 && (_okc.tais += 1 * _okk[5]), _okk[7] >= 1 && (_okc.houm += 1 * _okk[7]), _okk[8] >= 1 && (_okc.kaih += 1 * _okk[8]), _okk[9] >= 1 && (_okc.tais += 1 * _okk[9]), _okk[10] >= 1 && (_okc.tais += 1 * _okk[10])) : 2 == _okf && (_okk[5] >= 1 && (_okc.tais += 1 * _okk[5]), _okk[7] >= 1 && (_okc.kaih += 1 * _okk[7]), _okk[9] >= 1 && (_okc.houm += 1 * _okk[9]), _okk[10] >= 1 && (_okc.tais += 1 * _okk[10])), _okc;
        };
    },
    49679: (_okp, _okq, _okr) => {
        'use strict';
        var _oks = null;
        defineModule(_okq);
        Object.defineProperty(_okq, '__esModule', {
            'value': true
        }), _okq.getSlot489PersonalEffect = void 0;
        var _okt = _okr(74496);
        _okq.getSlot489PersonalEffect = function(_oku) {
            var _okv = null,
                _okw = new _okt.SlotItemEffectModel(),
                _okx = false,
                _oky = new _okt.SlotItemEffectModel();
            if ('あきつまる' != _oku.yomi && 'やましおまる' != _oku.yomi && 'くまのまる' != _oku.yomi || (_oky.tyku = _oky.tyku + 2, _oky.kaih = _oky.kaih + 1, _oky.houg = _oky.houg + 1, _oky.tais = _oky.tais + 1, _oky.houm = _oky.houm + 1, _okx = true), 717 != _oku.ship_id && 948 != _oku.ship_id || (_oky.tyku = _oky.tyku + 2, _oky.kaih = _oky.kaih + 2, _oky.houg = _oky.houg + 2, _oky.tais = _oky.tais + 1, _oky.houm = _oky.houm + 1, _okx = true), _okx) {
                var _okz = _oku.get_slotnums(489) + _oku.get_slotnums(491);
                _okw.add(_oky.multiply(_okz));
            }
            var _ol0 = _oku.get_each_level_nums(489),
                _ol1 = _oku.get_each_level_nums(491),
                _ol2 = 0,
                _ol3 = 0,
                _ol4 = 0;
            _ol0.forEach(function(_ol5, _ol6) {
                _ol6 >= 3 && (_ol2 += _ol5), _ol6 >= 6 && (_ol3 += _ol5), _ol6 >= 8 && (_ol4 += _ol5);
            }), _ol1.forEach(function(_ol7, _ol8) {
                _ol8 >= 3 && (_ol2 += _ol7), _ol8 >= 6 && (_ol3 += _ol7), _ol8 >= 8 && (_ol4 += _ol7);
            });
            var _ol9 = _ol0[10] + _ol1[10];
            return _ol2 >= 1 && (_okw.kaih = _okw.kaih + 1 * _ol2), _ol3 >= 1 && (_okw.tais = _okw.tais + 1 * _ol3), _ol4 >= 1 && (_okw.houm = _okw.houm + 1 * _ol4), _ol9 >= 1 && (_okw.houg = _okw.houg + 1 * _ol9), _okw;
        };
    },
    90312: function(_ola, _olb, _olc) {
        'use strict';
        var _old = null;
        var _ole = this && this.__importDefault || function(_olf) {
            var _olg = null;
            return _olf && _olf.__esModule ? _olf : {
                'default': _olf
            };
        };
        defineModule(_olb);
        Object.defineProperty(_olb, '__esModule', {
            'value': true
        }), _olb.getSlot502PersonalEffect = void 0;
        var _olh = _olc(74496),
            _oli = _ole(_olc(18622));
        _olb.getSlot502PersonalEffect = function(_olj) {
            var _olk = null,
                _oll = new _olh.SlotItemEffectModel(),
                _olm = _olj.get_slotnums(502),
                _oln = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _olo = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _olp = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3
                },
                _olq = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _olr = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_oln[_olj.ship_id]) {
                var _ols = _oln[_olj.ship_id];
                _oll.houg += _olm * _ols;
            }
            if (_olo[_olj.ship_id]) {
                var _olt = _olo[_olj.ship_id];
                _oll.tyku += _olm * _olt;
            }
            if (_olp[_olj.ship_id]) {
                var _olu = _olp[_olj.ship_id],
                    _olv = _olj.get_each_level_nums(502),
                    _olw = [];
                _olv.forEach(function(_olx, _oly) {
                    var _olz = null;
                    for (var _om0 = 1; _om0 <= _olj.SLOT_LEVEL_MAX; _om0++) _oly >= _om0 && (null == _olw[_om0] && (_olw[_om0] = 0), _olw[_om0] += _olx);
                }), 1 == _olu ? (_oll.kaih += 3 * _olm, _olw[1] > 0 && (_oll.kaih += 1 * _olw[1]), _olw[3] > 0 && (_oll.tyku += 1 * _olw[3]), _olw[5] > 0 && (_oll.houg += 1 * _olw[5]), _olw[7] > 0 && (_oll.kaih += 1 * _olw[7]), _olw[8] > 0 && (_oll.tyku += 1 * _olw[8]), _olw[9] > 0 && (_oll.houg += 1 * _olw[9]), _olw[10] > 0 && (_oll.tyku += 1 * _olw[10])) : 2 == _olu ? (_oll.kaih += 1 * _olm, _olw[2] > 0 && 151 == _olj.ship_id && (_oll.kaih += 1 * _olw[2]), _olw[4] > 0 && (_oll.tyku += 1 * _olw[4]), _olw[6] > 0 && (_oll.houg += 1 * _olw[6]), _olw[8] > 0 && (_oll.kaih += 1 * _olw[8]), _olw[10] > 0 && (_oll.tyku += 1 * _olw[10])) : 3 == _olu && (_olw[5] > 0 && (_oll.kaih += 1 * _olw[5]), _olw[8] > 0 && (_oll.houg += 1 * _olw[8]), _olw[10] > 0 && (_oll.tyku += 1 * _olw[10]));
            }
            if (_olq[_olj.ship_id]) {
                for (var _om1 = 0, _om2 = 0, _om3 = _olj.have_slot_ids(); _om2 < _om3.length; _om2++) {
                    var _om4 = _om3[_om2],
                        _om5 = _oli.default.model.slot.getMst(_om4),
                        _om6 = _om5.equipType;
                    12 != _om6 && 13 != _om6 || (_om5.sakuteki >= 5 && (_om1 += _olj.get_slotnums(parseInt(_om4))), _om5.taiku >= 2 && _olj.get_slotnums(parseInt(_om4)));
                }
                0;
                var _om7 = _olq[_olj.ship_id];
                1 == _om7 && _om1 >= 1 ? (_oll.houg += 3, _oll.kaih += 4) : 2 == _om7 && _om1 >= 1 && (_oll.houg += 2, _oll.kaih += 2);
            }
            if (_olr[_olj.ship_id]) {
                var _om8 = _olr[_olj.ship_id],
                    _om9 = [],
                    _oma = [],
                    _omb = _olj.have_slot_ids();
                [410, 411].forEach(function(_omc) {
                    var _omd = null;
                    _omb.indexOf(_omc.toString()) > -1 && (_oma[_omc] = _olj.get_each_level_nums(_omc), null == _om9[_omc] && (_om9[_omc] = []), _oma[_omc].forEach(function(_ome, _omf) {
                        var _omg = null;
                        for (var _omh = 1; _omh <= _olj.SLOT_LEVEL_MAX; _omh++) null == _om9[_omc][_omh] && (_om9[_omc][_omh] = 0), _omf >= _omh && (_om9[_omc][_omh] += _ome);
                    }));
                });
                var _omi = _oma[410],
                    _omj = _oma[411];
                if (1 == _om8) {
                    if (_omi) {
                        _oll.tyku += 1;
                        var _omk = _om9[410];
                        _omk[7] >= 1 && (_oll.houg += 1), _omk[10] >= 1 && (_oll.kaih += 1);
                    }
                    if (_omj) {
                        _oll.tyku += 2;
                        var _oml = _om9[411];
                        _oml[2] >= 1 && (_oll.houg += 1), _oml[4] >= 1 && (_oll.kaih += 1), _oml[6] >= 1 && (_oll.houm += 1), _oml[8] >= 1 && (_oll.tyku += 1), _oml[10] >= 1 && (_oll.houg += 1);
                    }
                }
            }
            return _oll;
        };
    },
    86856: function(_omm, _omn, _omo) {
        'use strict';
        var _omp = null;
        var _omq = this && this.__importDefault || function(_omr) {
            var _oms = null;
            return _omr && _omr.__esModule ? _omr : {
                'default': _omr
            };
        };
        defineModule(_omn);
        Object.defineProperty(_omn, '__esModule', {
            'value': true
        }), _omn.getSlot503PersonalEffect = void 0;
        var _omt = _omo(74496),
            _omu = _omq(_omo(18622));
        _omn.getSlot503PersonalEffect = function(_omv) {
            var _omw = null,
                _omx = new _omt.SlotItemEffectModel(),
                _omy = _omv.get_slotnums(503),
                _omz = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4
                },
                _on0 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _on1 = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3
                },
                _on2 = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2
                },
                _on3 = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1
                },
                _on4 = {
                    591: 1,
                    592: 2,
                    593: 2,
                    954: 3
                };
            if (_omz[_omv.ship_id]) {
                var _on5 = _omz[_omv.ship_id];
                _omx.houg += _omy * _on5;
            }
            if (_on0[_omv.ship_id]) {
                var _on6 = _on0[_omv.ship_id];
                _omx.tyku += _omy * _on6;
            }
            if (_on1[_omv.ship_id]) {
                var _on7 = _on1[_omv.ship_id],
                    _on8 = _omv.get_each_level_nums(503),
                    _on9 = [];
                _on8.forEach(function(_ona, _onb) {
                    var _onc = null;
                    for (var _ond = 1; _ond <= _omv.SLOT_LEVEL_MAX; _ond++) _onb >= _ond && (null == _on9[_ond] && (_on9[_ond] = 0), _on9[_ond] += _ona);
                }), 1 == _on7 ? (_omx.houm += 2 * _omy, _on9[1] > 0 && (_omx.houg += 1 * _on9[1]), _on9[2] > 0 && (_omx.tyku += 1 * _on9[2]), _on9[4] > 0 && (_omx.houm += 1 * _on9[4]), _on9[6] > 0 && (_omx.houg += 1 * _on9[6]), _on9[8] > 0 && (_omx.tyku += 1 * _on9[8]), _on9[10] > 0 && (_omx.houm += 1 * _on9[10])) : 2 == _on7 ? (_omx.houm += 1 * _omy, _on9[2] > 0 && (_omx.houg += 1 * _on9[2]), _on9[4] > 0 && (_omx.tyku += 1 * _on9[4]), _on9[6] > 0 && (_omx.houm += 1 * _on9[6]), _on9[8] > 0 && (_omx.houg += 1 * _on9[8]), _on9[10] > 0 && (_omx.houm += 1 * _on9[10])) : 3 == _on7 && (_on9[4] > 0 && (_omx.houm += 1 * _on9[4]), _on9[7] > 0 && (_omx.houg += 1 * _on9[7]), _on9[10] > 0 && (_omx.tyku += 1 * _on9[10]));
            }
            var _one = 0;
            _on2[_omv.ship_id] && (_one = _on2[_omv.ship_id]);
            var _onf = 0;
            _on4[_omv.ship_id] && (_onf = _on4[_omv.ship_id]);
            var _ong = 0,
                _onh = 0,
                _oni = _omv.have_slot_ids();
            if (_one + _onf > 0)
                for (var _onj = 0, _onk = _oni; _onj < _onk.length; _onj++) {
                    var _onl = _onk[_onj],
                        _onm = _omu.default.model.slot.getMst(_onl),
                        _onn = _onm.equipType;
                    12 != _onn && 13 != _onn || (_onm.sakuteki >= 5 && (_ong += _omv.get_slotnums(parseInt(_onl))), _onm.taiku >= 2 && _omv.get_slotnums(parseInt(_onl)), _onm.meichu >= 8 && (_onh += _omv.get_slotnums(parseInt(_onl))));
                }
            1 == _one ? _ong >= 1 && (_omx.houg += 3, _omx.houm += 3, _omx.kaih += 2) : 2 == _one && _ong >= 1 && (_omx.houg += 2, _omx.houm += 2, _omx.kaih += 1);
            var _ono = 0,
                _onp = [],
                _onq = [];
            if (_on3[_omv.ship_id]) {
                _ono = _on3[_omv.ship_id];
                var _onr = _omv.have_slot_ids();
                [174].forEach(function(_ons) {
                    var _ont = null;
                    _onr.indexOf(_ons.toString()) > -1 && (_onq[_ons] = _omv.get_each_level_nums(_ons), null == _onp[_ons] && (_onp[_ons] = []), _onq[_ons].forEach(function(_onu, _onv) {
                        var _onw = null;
                        for (var _onx = 1; _onx <= _omv.SLOT_LEVEL_MAX; _onx++) null == _onp[_ons][_onx] && (_onp[_ons][_onx] = 0), _onv >= _onx && (_onp[_ons][_onx] += _onu);
                    }));
                });
            }
            if (_ono > 0) {
                var _ony = _onq[174];
                if (1 == _ono && _ony) {
                    var _onz = _onp[174];
                    _omx.raig += 4, _onz[6] >= 1 && (_omx.raig += 1), _onz[8] >= 1 && (_omx.houm += 1), _onz[10] >= 1 && (_omx.houg += 1);
                }
            }
            return _onh > 0 && (_onf >= 1 && _onf <= 3 && (_omx.houg += 2, _omx.houm += 2, _omx.kaih += 2), 1 == _onf ? _omx.houg += 1 : 3 == _onf && (_omx.houg += 2)), _omx;
        };
    },
    78123: function(_oo0, _oo1, _oo2) {
        'use strict';
        var _oo3 = null;
        var _oo4 = this && this.__importDefault || function(_oo5) {
            var _oo6 = null;
            return _oo5 && _oo5.__esModule ? _oo5 : {
                'default': _oo5
            };
        };
        defineModule(_oo1);
        Object.defineProperty(_oo1, '__esModule', {
            'value': true
        }), _oo1.getSlot505PersonalEffect = void 0;
        var _oo7 = _oo2(74496),
            _oo8 = _oo4(_oo2(18622));
        _oo1.getSlot505PersonalEffect = function(_oo9) {
            var _ooa = null,
                _oob = new _oo7.SlotItemEffectModel(),
                _ooc = false,
                _ood = new _oo7.SlotItemEffectModel();
            if (2 == _oo9.stype ? (_ood.houg += 1, _ood.tyku += 2, _ood.kaih += 2, _ooc = true) : 1 == _oo9.stype ? (_ood.houg += 1, _ood.tyku += 1, _ood.kaih += 1, _ooc = true) : 3 == _oo9.stype || 21 == _oo9.stype || 4 == _oo9.stype ? (_ood.tyku += 1, _ood.kaih += 2, _ooc = true) : 5 != _oo9.stype && 6 != _oo9.stype && 16 != _oo9.stype || (_ood.tyku += 1, _ood.kaih += 1, _ooc = true), _ooc) {
                var _ooe = _oo9.get_slotnums(505);
                _oob.add(_ood.multiply(_ooe));
            }
            var _oof = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    668: 2,
                    951: 2,
                    975: 2,
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
                _oog = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2
                },
                _ooh = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _oof[_oo9.ship_id] ? (_oob.houg += 2, _oob.tyku += 3, _oob.kaih += 4) : 2 == _oof[_oo9.ship_id] ? (_oob.houg += 1, _oob.tyku += 2, _oob.kaih += 3) : 3 == _oof[_oo9.ship_id] ? (_oob.tyku += 2, _oob.kaih += 2) : 4 == _oof[_oo9.ship_id] ? (_oob.tyku += 1, _oob.kaih += 2) : 5 == _oof[_oo9.ship_id] && (_oob.houg += 1, _oob.tyku += 1, _oob.kaih += 1);
            var _ooi = 0;
            if (_oog[_oo9.ship_id] && _ooi++, _ooh[_oo9.ship_id] && _ooi++, 0 == _ooi) return _oob;
            for (var _ooj = 0, _ook = 0, _ool = 0, _oom = _oo9.have_slot_ids(); _ool < _oom.length; _ool++) {
                var _oon = _oom[_ool],
                    _ooo = _oo8.default.model.slot.getMst(_oon),
                    _oop = _ooo.equipType;
                12 != _oop && 13 != _oop || (_ooo.sakuteki >= 5 && (_ooj += _oo9.get_slotnums(parseInt(_oon))), _ooo.taiku >= 2 && (_ook += _oo9.get_slotnums(parseInt(_oon))));
            }
            var _ooq = _oog[_oo9.ship_id];
            _ook > 0 && _ooq > 0 && (1 == _ooq ? (_oob.houg += 1, _oob.tyku += 2, _oob.kaih += 3) : 2 == _ooq && (_oob.tyku += 2, _oob.kaih += 2));
            var _oor = _ooh[_oo9.ship_id];
            return _ooj > 0 && _oor > 0 && 1 == _oor && (_oob.houg += 1, _oob.kaih += 1), _oob;
        };
    },
    25765: (_oos, _oot, _oou) => {
        'use strict';
        var _oov = null;
        defineModule(_oot);
        Object.defineProperty(_oot, '__esModule', {
            'value': true
        }), _oot.getSlot506PersonalEffect = void 0;
        var _oow = _oou(74496);
        _oot.getSlot506PersonalEffect = function(_oox) {
            var _ooy = null,
                _ooz = new _oow.SlotItemEffectModel();
            return 961 == _oox.ship_id ? (_ooz.houg += 2, _ooz.houm += 3, _ooz.tyku += 2, _ooz.kaih += 4) : 145 == _oox.ship_id || 497 == _oox.ship_id || 656 == _oox.ship_id || 557 == _oox.ship_id || 558 == _oox.ship_id || 951 == _oox.ship_id || 975 == _oox.ship_id ? (_ooz.houg += 1, _ooz.houm += 2, _ooz.tyku += 1, _ooz.kaih += 3) : 578 != _oox.ship_id && 419 != _oox.ship_id && 464 != _oox.ship_id && 470 != _oox.ship_id && 407 != _oox.ship_id && 235 != _oox.ship_id && 147 != _oox.ship_id && 538 != _oox.ship_id && 537 != _oox.ship_id && 955 != _oox.ship_id && 960 != _oox.ship_id || (_ooz.houg += 1, _ooz.houm += 1, _ooz.tyku += 1, _ooz.kaih += 2), _ooz;
        };
    },
    88271: function(_op0, _op1, _op2) {
        'use strict';
        var _op3 = null;
        var _op4 = this && this.__importDefault || function(_op5) {
            var _op6 = null;
            return _op5 && _op5.__esModule ? _op5 : {
                'default': _op5
            };
        };
        defineModule(_op1);
        Object.defineProperty(_op1, '__esModule', {
            'value': true
        }), _op1.getSlot50PersonalEffect = void 0;
        var _op7 = _op2(74496),
            _op8 = _op4(_op2(18622));
        _op1.getSlot50PersonalEffect = function(_op9) {
            var _opa = null,
                _opb = new _op7.SlotItemEffectModel(),
                _opc = false,
                _opd = new _op7.SlotItemEffectModel();
            7 != _op9.ctype && 13 != _op9.ctype && 8 != _op9.ctype && 29 != _op9.ctype && 9 != _op9.ctype && 31 != _op9.ctype || (_opd.houg += 1, _opc = true), 8 != _op9.ctype && 29 != _op9.ctype && 9 != _op9.ctype && 31 != _op9.ctype || (_opd.houg += 1, _opd.kaih += 1, _opc = true);
            var _ope = _op9.get_slotnums(50);
            9 != _op9.ctype && 31 != _op9.ctype || _ope >= 2 && (_opd.houg += 1, _opc = true);
            var _opf = 0;
            if (501 != _op9.ship_id && 506 != _op9.ship_id && 502 != _op9.ship_id && 507 != _op9.ship_id || (_opd.houg += 1, _opc = true, _opf = 1), 0 == _opc) return _opb;
            _opb = _opd.multiply(_ope);
            for (var _opg = 0, _oph = 0, _opi = _op9.have_slot_ids(); _oph < _opi.length; _oph++) {
                var _opj = _opi[_oph],
                    _opk = _op8.default.model.slot.getMst(_opj),
                    _opl = _opk.equipType;
                12 != _opl && 13 != _opl || _opk.sakuteki >= 5 && (_opg += _op9.get_slotnums(parseInt(_opj)));
            }
            if (_opg > 0) {
                if (7 == _op9.ctype || 13 == _op9.ctype) 0 == _op9.get_slotnums(90) && (_opb.houg += 1, _opb.kaih += 1, _opb.raig += 1);
                else 8 != _op9.ctype && 29 != _op9.ctype && 9 != _op9.ctype && 31 != _op9.ctype || (_opb.houg += 3, _opb.kaih += 2, _opb.raig += 2);
                501 != _op9.ship_id && 506 != _op9.ship_id || (_opb.houg += 1, _opb.kaih += 1);
            }
            var _opm = _op9.get_slotnums(30),
                _opn = _op9.get_slotnums(410);
            return 1 == _opf && (_opm + _opn > 0 && (_opb.houg += 1, _opb.tyku += 3, _opb.kaih += 2), _opn > 0 && (_opb.houg += 2)), _opb;
        };
    },
    28221: (_opo, _opp, _opq) => {
        'use strict';
        var _opr = null;
        defineModule(_opp);
        Object.defineProperty(_opp, '__esModule', {
            'value': true
        }), _opp.getSlot510PersonalEffect = void 0;
        var _ops = _opq(74496);
        _opp.getSlot510PersonalEffect = function(_opt) {
            var _opu = null,
                _opv = new _ops.SlotItemEffectModel(),
                _opw = false,
                _opx = new _ops.SlotItemEffectModel();
            if ('イギリス' == _opt.getCountryName() && (_opx.houg += 2, _opx.tais += 3, _opx.kaih += 2, _opx.saku += 2, _opw = true), 88 == _opt.ctype && (_opv.houg += 4, _opv.kaih += 2, _opx.saku += 3, _opx.houm += 2, _opw = true), 0 == _opw) return _opv;
            var _opy = _opt.get_slotnums(510);
            return _opv.add(_opx.multiply(_opy)), _opv;
        };
    },
    14830: (_opz, _oq0, _oq1) => {
        'use strict';
        var _oq2 = null;
        defineModule(_oq0);
        Object.defineProperty(_oq0, '__esModule', {
            'value': true
        }), _oq0.getSlot511PersonalEffect = void 0;
        var _oq3 = _oq1(74496);
        _oq0.getSlot511PersonalEffect = function(_oq4) {
            var _oq5 = null,
                _oq6 = new _oq3.SlotItemEffectModel();
            return 122 == _oq4.ctype ? (_oq6.raig += 3, _oq6.kaih += 4) : 114 == _oq4.ctype && (_oq6.raig += 1, _oq6.kaih += 2), _oq6;
        };
    },
    54047: (_oq7, _oq8, _oq9) => {
        'use strict';
        var _oqa = null;
        defineModule(_oq8);
        Object.defineProperty(_oq8, '__esModule', {
            'value': true
        }), _oq8.getSlot517PersonalEffect = void 0;
        var _oqb = _oq9(74496);
        _oq8.getSlot517PersonalEffect = function(_oqc) {
            var _oqd = null,
                _oqe = new _oqb.SlotItemEffectModel();
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
            }[_oqc.ctype] && 74 != _oqc.ctype && 77 != _oqc.ctype && 85 != _oqc.ctype && 117 != _oqc.ctype && 104 != _oqc.ctype || (_oqe.houm += 1, _oqe.kaih += 1, _oqe.saku += 1), 38 == _oqc.ctype && (_oqe.houg += 1, _oqe.houm += 1), 960 == _oqc.ship_id ? (_oqe.houg += 2, _oqe.houm += 1, _oqe.kaih += 3, _oqe.saku += 2) : 955 != _oqc.ship_id && 578 != _oqc.ship_id && 961 != _oqc.ship_id && 656 != _oqc.ship_id && 464 != _oqc.ship_id && 470 != _oqc.ship_id && 419 != _oqc.ship_id && 407 != _oqc.ship_id && 235 != _oqc.ship_id && 147 != _oqc.ship_id && 975 != _oqc.ship_id || (_oqe.houg += 1, _oqe.houm += 1, _oqe.kaih += 2, _oqe.saku += 1);
            for (var _oqf = [], _oqg = function(_oqh) {
                    var _oqi = null,
                        _oqj = _oqc.get_each_level_nums(_oqh);
                    null == _oqf[_oqh] && (_oqf[_oqh] = []), _oqj.forEach(function(_oqk, _oql) {
                        var _oqm = null;
                        for (var _oqn = 1; _oqn <= _oqc.SLOT_LEVEL_MAX; _oqn++) null == _oqf[_oqh][_oqn] && (_oqf[_oqh][_oqn] = 0), _oql >= _oqn && (_oqf[_oqh][_oqn] += _oqk);
                    });
                }, _oqo = 0, _oqp = [267, 366, 450, 517]; _oqo < _oqp.length; _oqo++) {
                _oqg(_oqp[_oqo]);
            }
            var _oqq = _oqf[517];
            return _oqq[7] > 0 && (_oqe.houm += 1), _oqq[8] > 0 && (_oqe.kaih += 1), _oqq[9] > 0 && (_oqe.houg += 1), _oqq[10] > 0 && (_oqe.houm += 1), (_oqf[267][3] > 0 || _oqf[366][3] > 0) && (_oqe.houg += 1, _oqe.houm += 1, 38 == _oqc.ctype && (_oqe.houg += 1, _oqe.houm += 1), _oqf[450][4] > 0 && (_oqe.houg += 1, _oqe.houm += 1, _oqe.tyku += 4, _oqe.kaih += 3)), _oqe;
        };
    },
    76054: (_oqr, _oqs, _oqt) => {
        'use strict';
        var _oqu = null;
        defineModule(_oqs);
        Object.defineProperty(_oqs, '__esModule', {
            'value': true
        }), _oqs.getSlot518PersonalEffect = void 0;
        var _oqv = _oqt(74496);
        _oqs.getSlot518PersonalEffect = function(_oqw) {
            var _oqx = null,
                _oqy = new _oqv.SlotItemEffectModel(),
                _oqz = false,
                _or0 = new _oqv.SlotItemEffectModel();
            if (34 != _oqw.ctype && 56 != _oqw.ctype || (_or0.houg += 1, _or0.tyku += 1, _or0.tais += 1, _or0.kaih += 1, _oqz = true), 16 == _oqw.stype && (_or0.houg += 1, _or0.raig += 1, _or0.kaih += 1, _oqz = true), 622 != _oqw.ship_id && 624 != _oqw.ship_id && 623 != _oqw.ship_id || (_or0.houg += 1, _oqz = true), 622 != _oqw.ship_id && 624 != _oqw.ship_id || (_or0.tyku += 1, _oqz = true), 624 == _oqw.ship_id && (_or0.tais += 2, _oqz = true), 0 == _oqz) return _oqy;
            var _or1 = _oqw.get_slotnums(518);
            return _oqy.add(_or0.multiply(_or1)), _oqy;
        };
    },
    93053: (_or2, _or3, _or4) => {
        'use strict';
        var _or5 = null;
        defineModule(_or3);
        Object.defineProperty(_or3, '__esModule', {
            'value': true
        }), _or3.getSlot519PersonalEffect = void 0;
        var _or6 = _or4(74496);
        _or3.getSlot519PersonalEffect = function(_or7) {
            var _or8 = null,
                _or9 = new _or6.SlotItemEffectModel();
            return 122 == _or7.ctype && (_or9.houm += 2, _or9.kaih += 2), 114 == _or7.ctype && (_or9.raig += 1, _or9.houm += 2, _or9.kaih += 2), _or9;
        };
    },
    81254: (_ora, _orb, _orc) => {
        'use strict';
        var _ord = null;
        defineModule(_orb);
        Object.defineProperty(_orb, '__esModule', {
            'value': true
        }), _orb.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _ore = _orc(74496);
        _orb.getSlot51cmSeriesGunPersonalEffect = function(_orf) {
            var _org = null,
                _orh = new _ore.SlotItemEffectModel(),
                _ori = false,
                _orj = new _ore.SlotItemEffectModel(),
                _ork = _orf.get_slotnums(142),
                _orl = _orf.get_slotnums(460),
                _orm = _ork + _orl;
            if (916 != _orf.ship_id && 911 != _orf.ship_id && 546 != _orf.ship_id || (_orj.houg += 1, _orj.houm += 1, _orl >= 1 && (_orh.kaih += 1, _orh.houm += 1), _ori = true), 37 == _orf.ctype && _orm >= 1 && (_orh.houg += 1, _orh.houm += 2), 0 == _ori) return _orh;
            var _orn = _orf.get_slotnums(128) + _orf.get_slotnums(281);
            return _orh.add(_orj.multiply(_orn)), _orh;
        };
    },
    88792: (_oro, _orp, _orq) => {
        'use strict';
        var _orr = null;
        defineModule(_orp);
        Object.defineProperty(_orp, '__esModule', {
            'value': true
        }), _orp.getSlot520PersonalEffect = void 0;
        var _ors = _orq(74496);
        _orp.getSlot520PersonalEffect = function(_ort) {
            var _oru = null,
                _orv = new _ors.SlotItemEffectModel(),
                _orw = false,
                _orx = new _ors.SlotItemEffectModel(),
                _ory = 0,
                _orz = 0,
                _os0 = 0,
                _os1 = _ort.get_slotnums(520);
            7 == _ort.ctype || 13 == _ort.ctype ? (_orx.houg += 1, _orw = true, _orz = 1, _os0 = 1) : 8 == _ort.ctype || 29 == _ort.ctype ? (_orx.houg += 2, _orx.kaih += 1, _orw = true, _orz = 2, _os0 = 1) : 9 != _ort.ctype && 31 != _ort.ctype || (_orx.houg += 3, _orx.kaih += 1, _orx.houm += 1, _orw = true, _orz = 2, _os0 = 1, 2 == _os1 && (_orv.houg += 2), _os1 >= 3 && (_orv.houg += 4));
            var _os2 = _ort.get_have_rader_nums().water_rader,
                _os3 = 0,
                _os4 = 0;
            if (_orz + _os0 > 0) {
                for (var _os5 = _ort.getSpItemDict_FukuhouTaikuHeisou(), _os6 = _ort.getSpItemDict_Tansou21GouDentan(), _os7 = 0, _os8 = _ort.have_slot_ids(); _os7 < _os8.length; _os7++) {
                    var _os9 = _os8[_os7],
                        _osa = parseInt(_os9);
                    null != _os5[_osa] ? (_os5[_osa] += _ort.get_slotnums(_osa), _os3 += _ort.get_slotnums(_osa)) : null != _os6[_osa] && (_os6[_osa] += _ort.get_slotnums(_osa), _os4 += _ort.get_slotnums(_osa));
                }
                _os2 > 0 && (1 == _orz ? (_orv.houg += 2, _orv.raig += 2, _orv.kaih += 1, _orv.houm += 1) : 2 == _orz && (_orv.houg += 3, _orv.raig += 2, _orv.kaih += 2, _orv.houm += 1)), _os3 > 0 && 1 == _os0 && (_orv.houg += 1, _orv.tyku += 4, _orv.kaih += 4, _orv.houm += 1);
            }
            if (269 == _ort.ship_id || 265 == _ort.ship_id || 319 == _ort.ship_id ? (2 == _os1 && (_orv.houg += 2), _os1 >= 3 && (_orv.houg += 4)) : 501 != _ort.ship_id && 506 != _ort.ship_id && 502 != _ort.ship_id && 507 != _ort.ship_id && 503 != _ort.ship_id && 504 != _ort.ship_id || (_orx.houg += 1, _orw = true, _os2 >= 1 && (_orv.houg += 1, _orv.kaih += 1, _orv.houm += 2), _os4 >= 1 && (_orv.houg += 1, _orv.tyku += 3, _orv.kaih += 2, _orv.houm += 1), _ort.get_slotnums(410) > 0 && (_orv.houg += 2, _orv.tyku += 3, _orv.kaih += 2, _orv.houm += 1), _ory = 1), 502 == _ort.ship_id || 269 == _ort.ship_id || 265 == _ort.ship_id || 319 == _ort.ship_id ? (_orx.houg += 1, _orx.houm += 1, _orw = true) : 507 == _ort.ship_id && (_orx.houg += 1, _orx.houm += 2, _orx.tyku += 1, _orw = true), _orw && _orv.add(_orx.multiply(_os1)), 0 == _ory) return _orv;
            var _osb = _ort.get_each_level_over_nums([520]),
                _osc = _osb.slot[520][7],
                _osd = _osb.slot[520][10];
            return 1 == _ory && (_osc > 0 && (_orv.houg += 1 * _osc), _osd > 0 && (_orv.houm += 1 * _osd)), _orv;
        };
    },
    33242: (_ose, _osf, _osg) => {
        'use strict';
        var _osh = null;
        defineModule(_osf);
        Object.defineProperty(_osf, '__esModule', {
            'value': true
        }), _osf.getSlot521PersonalEffect = void 0;
        var _osi = _osg(74496);
        _osf.getSlot521PersonalEffect = function(_osj) {
            var _osk = null,
                _osl = new _osi.SlotItemEffectModel(),
                _osm = false,
                _osn = new _osi.SlotItemEffectModel(),
                _oso = 0;
            if (52 == _osj.ctype && (_oso = 1), 183 == _osj.ship_id ? (_osn.houg += 1, _osn.houm += 1, _osn.saku += 2, _osn.kaih += 2, _osm = true) : 321 == _osj.ship_id ? (_osn.houg += 2, _osn.houm += 2, _osn.saku += 3, _osn.kaih += 3, _osm = true) : 507 == _osj.ship_id && (_osn.houg += 3, _osn.tyku += 1, _osn.houm += 3, _osn.saku += 2, _osn.kaih += 2, _osm = true, _oso = 1), _osm) {
                var _osp = _osj.get_slotnums(521);
                _osl.add(_osn.multiply(_osp));
            }
            if (0 == _oso) return _osl;
            var _osq = _osj.get_each_level_over_nums([521]).slot[521];
            return 1 == _oso && (_osq[1] >= 1 && (_osl.houm += 1 * _osq[1]), _osq[2] >= 1 && (_osl.kaih += 1 * _osq[2]), _osq[3] >= 1 && (_osl.saku += 1 * _osq[3], _osl.raig += 1 * _osq[3]), _osq[4] >= 1 && (_osl.houg += 1 * _osq[4]), _osq[6] >= 1 && (_osl.houm += 1 * _osq[6]), _osq[8] >= 1 && (_osl.saku += 1 * _osq[8]), _osq[10] >= 1 && (_osl.houm += 1 * _osq[10])), _osl;
        };
    },
    3296: (_osr, _oss, _ost) => {
        'use strict';
        var _osu = null;
        defineModule(_oss);
        Object.defineProperty(_oss, '__esModule', {
            'value': true
        }), _oss.getSlot522_523PersonalEffect = void 0;
        var _osv = _ost(74496);
        _oss.getSlot522_523PersonalEffect = function(_osw) {
            var _osx = null,
                _osy = new _osv.SlotItemEffectModel(),
                _osz = false,
                _ot0 = new _osv.SlotItemEffectModel(),
                _ot1 = 0,
                _ot2 = _osw.get_slotnums(522),
                _ot3 = _osw.get_slotnums(523),
                _ot4 = _ot2 + _ot3;
            if (14 == _osw.stype && (_ot0.raig += 1, _ot0.kaih += 5, _ot0.houm += 1, _ot0.saku += 3, _osz = true, _ot3 >= 1 && (_osy.raig += 2 * _ot3, _osy.baku += 2 * _ot3, _osy.kaih += 1 * _ot3, _osy.houm += 1 * _ot3, _osy.saku += 1 * _ot3), _ot1 = 1), 0 == _osz) return _osy;
            if (_osy.add(_ot0.multiply(_ot4)), 0 == _ot1) return _osy;
            var _ot5 = _osw.get_each_level_over_nums([522, 523]),
                _ot6 = _ot5.slot[522],
                _ot7 = _ot5.slot[523];
            if (1 == _ot1) {
                if (_ot6[1] >= 1 || _ot7[1] >= 1) {
                    var _ot8 = _ot6[1] + _ot7[1];
                    _osy.raig += 1 * _ot8;
                }
                if (_ot6[2] >= 1 || _ot7[2] >= 1) {
                    var _ot9 = _ot6[2] + _ot7[2];
                    _osy.houm += 1 * _ot9;
                }
                if (_ot6[3] >= 1 || _ot7[3] >= 1) {
                    var _ota = _ot6[3] + _ot7[3];
                    _osy.kaih += 1 * _ota;
                }
                if (_ot6[5] >= 1 || _ot7[5] >= 1) {
                    var _otb = _ot6[5] + _ot7[5];
                    _osy.saku += 1 * _otb;
                }
                if (_ot6[8] >= 1 || _ot7[8] >= 1) {
                    var _otc = _ot6[8] + _ot7[8];
                    _osy.houm += 1 * _otc;
                }
                if (_ot6[10] >= 1 || _ot7[10] >= 1) {
                    var _otd = _ot6[10] + _ot7[10];
                    _osy.kaih += 1 * _otd;
                }
            }
            return _osy;
        };
    },
    59415: (_ote, _otf, _otg) => {
        'use strict';
        var _oth = null;
        defineModule(_otf);
        Object.defineProperty(_otf, '__esModule', {
            'value': true
        }), _otf.getSlot524PersonalEffect = void 0;
        var _oti = _otg(74496);
        _otf.getSlot524PersonalEffect = function(_otj) {
            var _otk = null,
                _otl = new _oti.SlotItemEffectModel(),
                _otm = false,
                _otn = new _oti.SlotItemEffectModel(),
                _oto = 0,
                _otp = 0;
            if (17 != _otj.stype && 19 != _otj.stype && 20 != _otj.stype && 21 != _otj.stype && 22 != _otj.stype || (_otn.houg += 1, _otn.tyku += 2, _otn.kaih += 2, _otn.houm += 1, _otm = true, _oto = 1, _otp = 1), 0 == _otm) return _otl;
            var _otq = _otj.get_slotnums(524);
            _otl.add(_otn.multiply(_otq));
            var _otr = _otj.get_have_rader_nums().air_rader;
            if (1 == _otp && _otr >= 1 && (_otl.tyku += 2, _otl.kaih += 2), 0 == _oto) return _otl;
            var _ots = _otj.get_each_level_over_nums([524]).slot[524];
            return 1 == _oto && (_ots[1] >= 1 && (_otl.kaih += 1 * _ots[1]), _ots[2] >= 1 && (_otl.kaih += 1 * _ots[2]), _ots[4] >= 1 && (_otl.tyku += 1 * _ots[4]), _ots[6] >= 1 && (_otl.kaih += 1 * _ots[6]), _ots[7] >= 1 && (_otl.houm += 1 * _ots[7]), _ots[8] >= 1 && (_otl.tyku += 1 * _ots[8]), _ots[9] >= 1 && (_otl.kaih += 1 * _ots[9]), _ots[10] >= 1 && (_otl.houg += 1 * _ots[10])), _otl;
        };
    },
    36731: (_ott, _otu, _otv) => {
        'use strict';
        var _otw = null;
        defineModule(_otu);
        Object.defineProperty(_otu, '__esModule', {
            'value': true
        }), _otu.getSlot527PersonalEffect = void 0;
        var _otx = _otv(74496);
        _otu.getSlot527PersonalEffect = function(_oty) {
            var _otz = null,
                _ou0 = new _otx.SlotItemEffectModel(),
                _ou1 = 0;
            if ('イギリス' == _oty.getCountryName() && (_ou1 = 1, _ou0.tyku += 2, _ou0.houm += 1, _ou0.kaih += 1, _ou0.saku += 2, 88 == _oty.ctype && (_ou0.houg += 2), 67 == _oty.ctype && (_ou0.houg += 1)), 0 == _ou1) return _ou0;
            var _ou2 = _oty.get_each_level_over_nums([527]),
                _ou3 = _ou2.slot[527][2],
                _ou4 = _ou2.slot[527][4],
                _ou5 = _ou2.slot[527][7],
                _ou6 = _ou2.slot[527][10];
            return 1 == _ou1 && (_ou3 >= 1 && (_ou0.tyku += 1), _ou4 >= 1 && (_ou0.kaih += 1), _ou5 >= 1 && (_ou0.tyku += 1), _ou6 >= 1 && (_ou0.houm += 1)), _ou0;
        };
    },
    30450: (_ou7, _ou8, _ou9) => {
        'use strict';
        var _oua = null;
        defineModule(_ou8);
        Object.defineProperty(_ou8, '__esModule', {
            'value': true
        }), _ou8.getSlot528PersonalEffect = void 0;
        var _oub = _ou9(74496);
        _ou8.getSlot528PersonalEffect = function(_ouc) {
            var _oud = null,
                _oue = new _oub.SlotItemEffectModel(),
                _ouf = false,
                _oug = new _oub.SlotItemEffectModel(),
                _ouh = 0;
            if ('イギリス' == _ouc.getCountryName() && (_oug.houg += 1, _oug.houm += 2, _oug.kaih += 1, 108 == _ouc.ctype && (_oug.houg += 1, _oug.kaih += 1), _ouf = true, _ouh = 1), 0 == _ouf) return _oue;
            var _oui = _ouc.get_slotnums(528);
            if (_oue.add(_oug.multiply(_oui)), 0 == _ouh) return _oue;
            var _ouj = _ouc.get_each_level_over_nums([528]),
                _ouk = _ouj.slot[528][2],
                _oul = _ouj.slot[528][4],
                _oum = _ouj.slot[528][7],
                _oun = _ouj.slot[528][10];
            return 1 == _ouh && (_ouk >= 1 && (_oue.houg += 1 * _ouk), _oul >= 1 && (_oue.houm += 1 * _oul), _oum >= 1 && (_oue.kaih += 1 * _oum), _oun >= 1 && (_oue.houm += 1 * _oun)), _oue;
        };
    },
    23035: (_ouo, _oup, _ouq) => {
        'use strict';
        var _our = null;
        defineModule(_oup);
        Object.defineProperty(_oup, '__esModule', {
            'value': true
        }), _oup.getSlot58PersonalEffect = void 0;
        var _ous = _ouq(74496);
        _oup.getSlot58PersonalEffect = function(_out) {
            var _ouu = null,
                _ouv = new _ous.SlotItemEffectModel(),
                _ouw = new _ous.SlotItemEffectModel();
            if ('しまかぜ' != _out.yomi && 4 != _out.stype && 54 != _out.ctype || (_ouw.raig = 1), !_ouw.exists()) return _ouv;
            var _oux = _out.get_slotnums(58);
            return _ouv = _ouw.multiply(_oux);
        };
    },
    47169: (_ouy, _ouz, _ov0) => {
        'use strict';
        var _ov1 = null;
        defineModule(_ouz);
        Object.defineProperty(_ouz, '__esModule', {
            'value': true
        }), _ouz.getSlot59PersonalEffect = void 0;
        var _ov2 = _ov0(74496);
        _ouz.getSlot59PersonalEffect = function(_ov3) {
            var _ov4 = null,
                _ov5 = new _ov2.SlotItemEffectModel();
            return 501 != _ov3.ship_id && 506 != _ov3.ship_id && 502 != _ov3.ship_id && 507 != _ov3.ship_id || (_ov5.tyku += 1, _ov5.kaih += 1), _ov5;
        };
    },
    87845: (_ov6, _ov7, _ov8) => {
        'use strict';
        var _ov9 = null;
        defineModule(_ov7);
        Object.defineProperty(_ov7, '__esModule', {
            'value': true
        }), _ov7.getSlot5PersonalEffect = void 0;
        var _ova = _ov8(74496);
        _ov7.getSlot5PersonalEffect = function(_ovb) {
            var _ovc = null,
                _ovd = new _ova.SlotItemEffectModel(),
                _ove = false,
                _ovf = new _ova.SlotItemEffectModel();
            if (52 != _ovb.ctype && 9 != _ovb.ctype || (_ovf.houg += 1, 52 == _ovb.ctype && (_ovf.houg = _ovf.houg + 1), _ove = true), 0 == _ove) return _ovd;
            var _ovg = _ovb.get_slotnums(5);
            return _ovd.add(_ovf.multiply(_ovg)), _ovd;
        };
    },
    92253: (_ovh, _ovi, _ovj) => {
        'use strict';
        var _ovk = null;
        defineModule(_ovi);
        Object.defineProperty(_ovi, '__esModule', {
            'value': true
        }), _ovi.getSlot60_154_219PersonalEffec = void 0;
        var _ovl = _ovj(74496);
        _ovi.getSlot60_154_219PersonalEffec = function(_ovm) {
            var _ovn = null,
                _ovo = new _ovl.SlotItemEffectModel(),
                _ovp = false,
                _ovq = new _ovl.SlotItemEffectModel();
            if ('じゅんよう' != _ovm.yomi && 'ひよう' != _ovm.yomi && 'ずいほう' != _ovm.yomi && 'ちとせ' != _ovm.yomi && 'ちよだ' != _ovm.yomi || (_ovq.houg += 1, _ovq.tyku += 1, _ovq.kaih += 1, _ovp = true), 185 != _ovm.ship_id && 318 != _ovm.ship_id && 282 != _ovm.ship_id || (_ovq.houg += 1, _ovq.tyku += 1, _ovq.kaih += 1, _ovp = true), 888 != _ovm.ship_id && 883 != _ovm.ship_id || (_ovq.houg += 2, _ovq.tyku += 1, _ovq.kaih += 2, _ovp = true), 0 == _ovp) return _ovo;
            var _ovr = _ovm.get_slotnums(60) + _ovm.get_slotnums(154) + _ovm.get_slotnums(219);
            return _ovo.add(_ovq.multiply(_ovr)), _ovo;
        };
    },
    2578: (_ovs, _ovt, _ovu) => {
        'use strict';
        var _ovv = null;
        defineModule(_ovt);
        Object.defineProperty(_ovt, '__esModule', {
            'value': true
        }), _ovt.getSlot61PersonalEffect2 = _ovt.getSlot61PersonalEffect = void 0;
        var _ovw = _ovu(74496);
        _ovt.getSlot61PersonalEffect = function(_ovx) {
            var _ovy = null,
                _ovz = new _ovw.SlotItemEffectModel();
            if (553 == _ovx.ship_id) _ovz.houg = 3, _ovz.kaih = 2, _ovz.souk = 1, _ovz.houm = 5, _ovz.leng = 1;
            else {
                if (554 == _ovx.ship_id) _ovz.houg = 3, _ovz.kaih = 3, _ovz.souk = 3, _ovz.houm = 5, _ovz.leng = 1;
                else {
                    if (196 == _ovx.ship_id) _ovz.houm = 5, _ovz.leng = 1;
                    else {
                        if (197 != _ovx.ship_id) return _ovz;
                        _ovz.houm = 5, _ovz.leng = 1;
                    }
                }
            }
            return _ovz;
        }, _ovt.getSlot61PersonalEffect2 = function(_ow0) {
            var _ow1 = null,
                _ow2 = new _ovw.SlotItemEffectModel();
            if (null == _ow0.have_slots_dict[61]) return _ow2;
            for (var _ow3 = 0, _ow4 = 0, _ow5 = _ow0.have_slots_dict[61]; _ow4 < _ow5.length; _ow4++) {
                var _ow6 = _ow5[_ow4].level;
                _ow3 < _ow6 && (_ow3 = _ow6);
            }
            return 0 == _ow3 || ('そうりゅう' == _ow0.yomi ? (_ow2.houg += 3, _ow2.saku += 3) : 'ひりゅう' == _ow0.yomi && (_ow2.houg += 2, _ow2.saku += 2), 508 != _ow0.ship_id && 509 != _ow0.ship_id && 560 != _ow0.ship_id || (_ow2.houg += 1, _ow2.saku += 1), _ow3 >= 8 && 197 == _ow0.ship_id && (_ow2.houg += 1, _ow2.saku += 1)), _ow2;
        };
    },
    17143: (_ow7, _ow8, _ow9) => {
        'use strict';
        var _owa = null;
        defineModule(_ow8);
        Object.defineProperty(_ow8, '__esModule', {
            'value': true
        }), _ow8.getSlot63PersonalEffect = void 0;
        var _owb = _ow9(74496);
        _ow8.getSlot63PersonalEffect = function(_owc) {
            var _owd = null,
                _owe = new _owb.SlotItemEffectModel(),
                _owf = new _owb.SlotItemEffectModel();
            1 != _owc.ctype && 5 != _owc.ctype && 10 != _owc.ctype || (_owf.tyku += 1), 'ゆうだち' == _owc.yomi && (_owf.houg += 1, _owf.tyku += 1, _owf.kaih += 2), 145 == _owc.ship_id || 961 == _owc.ship_id ? _owf.houg += 1 : 144 == _owc.ship_id ? _owf.raig += 1 : 469 == _owc.ship_id ? _owf.kaih += 2 : 242 == _owc.ship_id || 497 == _owc.ship_id || 244 == _owc.ship_id || 498 == _owc.ship_id || 975 == _owc.ship_id ? _owf.kaih += 1 : 627 == _owc.ship_id ? _owf.houg += 1 : 903 != _owc.ship_id && 908 != _owc.ship_id || (_owf.houg += 2);
            var _owg = true;
            if (_owf.exists() || (_owg = false), 0 == _owg) return _owe;
            var _owh = _owc.get_slotnums(63);
            return _owe = _owf.multiply(_owh);
        };
    },
    16164: (_owi, _owj, _owk) => {
        'use strict';
        var _owl = null;
        defineModule(_owj);
        Object.defineProperty(_owj, '__esModule', {
            'value': true
        }), _owj.getSlot67PersonalEffect = void 0;
        var _owm = _owk(74496);
        _owj.getSlot67PersonalEffect = function(_own) {
            var _owo = null,
                _owp = new _owm.SlotItemEffectModel(),
                _owq = new _owm.SlotItemEffectModel();
            if (13 != _own.stype && 14 != _own.stype && (_owq.raig = -5), !_owq.exists()) return _owp;
            var _owr = _own.get_slotnums(67);
            return _owp = _owq.multiply(_owr);
        };
    },
    35023: (_ows, _owt, _owu) => {
        'use strict';
        var _owv = null;
        defineModule(_owt);
        Object.defineProperty(_owt, '__esModule', {
            'value': true
        }), _owt.getSlot69PersonalEffect = void 0;
        var _oww = _owu(74496);
        _owt.getSlot69PersonalEffect = function(_owx) {
            var _owy = null,
                _owz = new _oww.SlotItemEffectModel(),
                _ox0 = false,
                _ox1 = new _oww.SlotItemEffectModel();
            if (554 == _owx.ship_id || 646 == _owx.ship_id ? (_ox1.houg += 1, _ox1.tais += 2, _ox0 = true) : 553 == _owx.ship_id && (_ox1.houg += 1, _ox1.tais += 1, _ox0 = true), 0 == _ox0) return _owz;
            var _ox2 = _owx.get_slotnums(69);
            return _owz.add(_ox1.multiply(_ox2)), _owz;
        };
    },
    78707: (_ox3, _ox4, _ox5) => {
        'use strict';
        var _ox6 = null;
        defineModule(_ox4);
        Object.defineProperty(_ox4, '__esModule', {
            'value': true
        }), _ox4.getSlot70PersonalEffect = void 0;
        var _ox7 = _ox5(74496);
        _ox4.getSlot70PersonalEffect = function(_ox8) {
            var _ox9 = null,
                _oxa = new _ox7.SlotItemEffectModel(),
                _oxb = false,
                _oxc = new _ox7.SlotItemEffectModel();
            if ('やましおまる' == _ox8.yomi && (_oxc.houg += 1, _oxc.tais += 1, _oxb = true), 0 == _oxb) return _oxa;
            var _oxd = _ox8.get_slotnums(70);
            return _oxa.add(_oxc.multiply(_oxd)), _oxa;
        };
    },
    44680: function(_oxe, _oxf, _oxg) {
        'use strict';
        var _oxh = null;
        var _oxi = this && this.__importDefault || function(_oxj) {
            var _oxk = null;
            return _oxj && _oxj.__esModule ? _oxj : {
                'default': _oxj
            };
        };
        defineModule(_oxf);
        Object.defineProperty(_oxf, '__esModule', {
            'value': true
        }), _oxf.getSlot78PersonalEffect = void 0;
        var _oxl = _oxg(74496),
            _oxm = _oxi(_oxg(18622));
        _oxf.getSlot78PersonalEffect = function(_oxn) {
            var _oxo = null,
                _oxp = new _oxl.SlotItemEffectModel(),
                _oxq = false,
                _oxr = new _oxl.SlotItemEffectModel(),
                _oxs = 0,
                _oxt = 0,
                _oxu = false;
            if (48 == _oxn.ctype && (_oxr.houg += 1, _oxr.kaih += 1, _oxs = 1, _oxt = 1, _oxu = true, _oxq = true), 0 == _oxq) return _oxp;
            var _oxv = _oxn.get_slotnums(78);
            _oxp.add(_oxr.multiply(_oxv));
            var _oxw = 0,
                _oxx = _oxn.get_each_level_nums(78),
                _oxy = 0;
            if (_oxu) {
                _oxx.map(function(_oxz, _oy0) {
                    _oy0 >= 7 && (_oxy += _oxz);
                });
                for (var _oy1 = 0, _oy2 = _oxn.have_slot_ids(); _oy1 < _oy2.length; _oy1++) {
                    var _oy3 = _oy2[_oy1],
                        _oy4 = _oxm.default.model.slot.getMst(_oy3),
                        _oy5 = _oy4.equipType;
                    12 != _oy5 && 13 != _oy5 || _oy4.sakuteki >= 5 && (_oxw += _oxn.get_slotnums(parseInt(_oy3)));
                }
            }
            if (1 == _oxs && _oxw > 0 && (_oxp.houg += 2, _oxp.kaih += 2, _oxp.raig += 2), 1 == _oxt) {
                _oxp.houg += 1 * _oxy;
                var _oy6 = _oxx[10];
                _oxp.souk += 1 * _oy6;
            }
            return _oxp;
        };
    },
    45749: (_oy7, _oy8, _oy9) => {
        'use strict';
        var _oya = null;
        defineModule(_oy8);
        Object.defineProperty(_oy8, '__esModule', {
            'value': true
        }), _oy8.getSlot79And81PersonalEffect = void 0;
        var _oyb = _oy9(74496);
        _oy8.getSlot79And81PersonalEffect = function(_oyc) {
            var _oyd = null,
                _oye = new _oyb.SlotItemEffectModel(),
                _oyf = new _oyb.SlotItemEffectModel();
            if (553 == _oyc.ship_id) _oyf.houg = 3;
            else {
                if (82 == _oyc.ship_id) _oyf.houg = 2;
                else {
                    if (88 == _oyc.ship_id) _oyf.houg = 2;
                    else {
                        if (554 == _oyc.ship_id) _oyf.houg = 3;
                        else {
                            if (411 == _oyc.ship_id) _oyf.houg = 2;
                            else {
                                if (412 != _oyc.ship_id) return _oye;
                                _oyf.houg = 2;
                            }
                        }
                    }
                }
            }
            var _oyg = _oyc.get_slotnums(79) + _oyc.get_slotnums(81);
            return _oye = _oyf.multiply(_oyg);
        };
    },
    37334: (_oyh, _oyi, _oyj) => {
        'use strict';
        var _oyk = null;
        defineModule(_oyi);
        Object.defineProperty(_oyi, '__esModule', {
            'value': true
        }), _oyi.getSlot82PersonalEffect = void 0;
        var _oyl = _oyj(74496);
        _oyi.getSlot82PersonalEffect = function(_oym) {
            var _oyn = null,
                _oyo = new _oyl.SlotItemEffectModel(),
                _oyp = new _oyl.SlotItemEffectModel();
            if (76 == _oym.ctype && (_oyp.tais = 1, _oyp.kaih = 1), !_oyp.exists()) return _oyo;
            var _oyq = _oym.get_slotnums(82);
            return _oyo = _oyp.multiply(_oyq);
        };
    },
    2603: function(_oyr, _oys, _oyt) {
        'use strict';
        var _oyu = null;
        var _oyv = this && this.__importDefault || function(_oyw) {
            var _oyx = null;
            return _oyw && _oyw.__esModule ? _oyw : {
                'default': _oyw
            };
        };
        defineModule(_oys);
        Object.defineProperty(_oys, '__esModule', {
            'value': true
        }), _oys.getSlot84PersonalEffect = void 0;
        var _oyy = _oyt(74496),
            _oyz = _oyv(_oyt(18622));
        _oys.getSlot84PersonalEffect = function(_oz0) {
            var _oz1 = null,
                _oz2 = new _oyy.SlotItemEffectModel(),
                _oz3 = _oz0.get_each_level_nums(84),
                _oz4 = 0,
                _oz5 = 0;
            if (_oz3.forEach(function(_oz6, _oz7) {
                    _oz7 >= 4 && (_oz4 += _oz6), _oz7 >= 7 && (_oz5 += _oz6);
                }), 0 == _oz4) return _oz2;
            for (var _oz8 = 0, _oz9 = 0, _oza = _oz0.have_slot_ids(); _oz9 < _oza.length; _oz9++) {
                var _ozb = _oza[_oz9],
                    _ozc = _oyz.default.model.slot.getMst(_ozb),
                    _ozd = _ozc.equipType;
                12 != _ozd && 13 != _ozd || (_ozc.sakuteki >= 5 && _oz0.get_slotnums(parseInt(_ozb)), _ozc.taiku >= 2 && (_oz8 += _oz0.get_slotnums(parseInt(_ozb))));
            }
            var _oze = _oz0.getCountryName();
            _oz4 >= 1 && (_oz2.tyku += 1 * _oz4, _oz2.kaih += 1 * _oz4, 'ドイツ' != _oze && 'イタリア' != _oze || (_oz2.tyku += 1 * _oz4, _oz2.kaih += 1 * _oz4), _oz8 >= 1 && (_oz2.tyku += 1)), _oz5 >= 1 && (_oz2.tyku += 1 * _oz5, _oz2.houg += 1 * _oz5);
            var _ozf = _oz3[10];
            return _ozf >= 1 && (_oz2.tyku += 1 * _ozf, _oz2.kaih += 1 * _ozf, 'ドイツ' != _oze && 'イタリア' != _oze || (_oz2.houg += 1)), _oz2;
        };
    },
    90725: (_ozg, _ozh, _ozi) => {
        'use strict';
        var _ozj = null;
        defineModule(_ozh);
        Object.defineProperty(_ozh, '__esModule', {
            'value': true
        }), _ozh.getSlot85PersonalEffect = void 0;
        var _ozk = _ozi(74496);
        _ozh.getSlot85PersonalEffect = function(_ozl) {
            var _ozm = null,
                _ozn = new _ozk.SlotItemEffectModel(),
                _ozo = _ozl.get_each_level_over_nums([85]),
                _ozp = _ozo.slot[85][6],
                _ozq = _ozo.slot[85][8],
                _ozr = _ozo.slot[85][10],
                _ozs = _ozl.get_have_rader_nums().air_rader,
                _ozt = _ozl.getCountryName();
            return _ozp > 0 && (_ozn.tyku += 1 * _ozp, _ozn.kaih += 1 * _ozp, _ozs >= 1 && (_ozn.tyku += 2)), _ozq > 0 && (_ozn.houg += 1 * _ozq, 'ドイツ' != _ozt && 'イタリア' != _ozt || (_ozn.tyku += 1 * _ozq, _ozn.kaih += 1 * _ozq)), _ozr > 0 && (_ozn.kaih += 1 * _ozr, _ozn.houm += 1 * _ozr, 'ドイツ' != _ozt && 'イタリア' != _ozt || (_ozn.houg += 1)), _ozn;
        };
    },
    29180: (_ozu, _ozv, _ozw) => {
        'use strict';
        var _ozx = null;
        defineModule(_ozv);
        Object.defineProperty(_ozv, '__esModule', {
            'value': true
        }), _ozv.getSlot87PersonalEffect = void 0;
        var _ozy = _ozw(74496);
        _ozv.getSlot87PersonalEffect = function(_ozz) {
            var _p00 = null,
                _p01 = new _ozy.SlotItemEffectModel(),
                _p02 = false,
                _p03 = new _ozy.SlotItemEffectModel(),
                _p04 = 0;
            if (951 == _ozz.ship_id ? (_p03.houg += 1, _p03.kaih += 1, _p03.raig += 1, _p03.houm += 1, _p02 = true, _p04 = 1) : 181 == _ozz.ship_id || 316 == _ozz.ship_id || 50 == _ozz.ship_id || 229 == _ozz.ship_id || 961 == _ozz.ship_id ? _p04 = 2 : 591 != _ozz.ship_id && 592 != _ozz.ship_id && 593 != _ozz.ship_id && 954 != _ozz.ship_id || (_p01.kaih += 2, _p01.raig += 1, _p04 = 3), 38 != _ozz.ctype && 54 != _ozz.ctype && 101 != _ozz.ctype || (_p04 = 4), _p02) {
                var _p05 = _ozz.get_slotnums(87);
                _p01.add(_p03.multiply(_p05));
            }
            if (0 == _p04) return _p01;
            var _p06 = _ozz.get_each_level_nums(87),
                _p07 = [];
            return _p04 > 0 && _p06.forEach(function(_p08, _p09) {
                var _p0a = null;
                for (var _p0b = 1; _p0b <= _ozz.SLOT_LEVEL_MAX; _p0b++) null == _p07[_p0b] && (_p07[_p0b] = 0), _p09 >= _p0b && (_p07[_p0b] += _p08);
            }), 1 == _p04 ? (_p07[6] >= 1 && (_p01.tyku += 1 * _p07[6]), _p07[7] >= 1 && (_p01.kaih += 1 * _p07[7]), _p07[8] >= 1 && (_p01.raig += 1 * _p07[8]), _p07[9] >= 1 && (_p01.houg += 1 * _p07[9]), _p07[10] >= 1 && (_p01.houm += 1 * _p07[10])) : 2 == _p04 ? (_p07[6] >= 1 && (_p01.kaih += 1 * _p07[6]), _p07[7] >= 1 && (_p01.raig += 1 * _p07[7]), _p07[8] >= 1 && (_p01.houg += 1 * _p07[8]), _p07[9] >= 1 && (_p01.houm += 1 * _p07[9]), _p07[10] >= 1 && (_p01.kaih += 1 * _p07[10])) : 3 == _p04 ? (_p07[6] > 0 && (_p01.kaih += 1), _p07[8] > 0 && (_p01.raig += 1), _p07[10] > 0 && (_p01.houg += 1)) : 4 == _p04 && (_p07[7] >= 1 && (_p01.kaih += 1 * _p07[7]), _p07[8] >= 1 && (_p01.raig += 1 * _p07[8]), _p07[10] >= 1 && (_p01.houm += 1 * _p07[10])), _p01;
        };
    },
    68685: function(_p0c, _p0d, _p0e) {
        'use strict';
        var _p0f = null;
        var _p0g = this && this.__importDefault || function(_p0h) {
            var _p0i = null;
            return _p0h && _p0h.__esModule ? _p0h : {
                'default': _p0h
            };
        };
        defineModule(_p0d);
        Object.defineProperty(_p0d, '__esModule', {
            'value': true
        }), _p0d.getSlot90PersonalEffect = void 0;
        var _p0j = _p0e(74496),
            _p0k = _p0g(_p0e(18622));
        _p0d.getSlot90PersonalEffect = function(_p0l) {
            var _p0m = null,
                _p0n = new _p0j.SlotItemEffectModel(),
                _p0o = new _p0j.SlotItemEffectModel();
            if (142 == _p0l.ship_id ? (_p0o.houg += 2, _p0o.kaih += 1) : 295 == _p0l.ship_id || 416 == _p0l.ship_id || 417 == _p0l.ship_id ? _p0o.houg += 1 : 264 == _p0l.ship_id ? (_p0o.houg += 1, _p0o.tyku += 1) : 501 != _p0l.ship_id && 506 != _p0l.ship_id && 502 != _p0l.ship_id && 507 != _p0l.ship_id || (_p0o.houg += 1), 7 != _p0l.ctype && 13 != _p0l.ctype && 8 != _p0l.ctype && 29 != _p0l.ctype && 9 != _p0l.ctype && 31 != _p0l.ctype || (_p0o.houg += 1), _p0o.exists()) {
                var _p0p = _p0l.get_slotnums(90);
                _p0n = _p0o.multiply(_p0p);
            }
            var _p0q = [];
            if ('あおば' == _p0l.yomi && (_p0q[1] = 1), 13 != _p0l.ctype && 7 != _p0l.ctype || (_p0q[2] = 1), 0 == _p0q.length) return _p0n;
            for (var _p0r = 0, _p0s = 0, _p0t = 0, _p0u = _p0l.have_slot_ids(); _p0t < _p0u.length; _p0t++) {
                var _p0v = _p0u[_p0t],
                    _p0w = _p0k.default.model.slot.getMst(_p0v),
                    _p0x = _p0w.equipType;
                12 != _p0x && 13 != _p0x || (_p0w.sakuteki >= 5 && (_p0r += _p0l.get_slotnums(parseInt(_p0v))), _p0w.taiku >= 2 && (_p0s += _p0l.get_slotnums(parseInt(_p0v))));
            }
            return _p0s > 0 && null != _p0q[1] && (_p0n.tyku += 5, _p0n.kaih += 2), _p0r > 0 && null != _p0q[2] && (_p0n.houg += 3, _p0n.kaih += 2, _p0n.raig += 2), _p0n;
        };
    },
    26078: (_p0y, _p0z, _p10) => {
        'use strict';
        var _p11 = null;
        defineModule(_p0z);
        Object.defineProperty(_p0z, '__esModule', {
            'value': true
        }), _p0z.getSlot93PersonalEffect = void 0;
        var _p12 = _p10(74496);
        _p0z.getSlot93PersonalEffect = function(_p13) {
            var _p14 = null,
                _p15 = new _p12.SlotItemEffectModel();
            return 'そうりゅう' == _p13.yomi ? _p15.houg = 1 : 'ひりゅう' == _p13.yomi && (_p15.houg = 3), _p15;
        };
    },
    20829: (_p16, _p17, _p18) => {
        'use strict';
        var _p19 = null;
        defineModule(_p17);
        Object.defineProperty(_p17, '__esModule', {
            'value': true
        }), _p17.getSlot94PersonalEffect = void 0;
        var _p1a = _p18(74496);
        _p17.getSlot94PersonalEffect = function(_p1b) {
            var _p1c = null,
                _p1d = new _p1a.SlotItemEffectModel();
            if (196 == _p1b.ship_id) _p1d.houg = 7;
            else {
                if (197 != _p1b.ship_id) return _p1d;
                _p1d.houg = 3;
            }
            return _p1d;
        };
    },
    6880: (_p1e, _p1f, _p1g) => {
        'use strict';
        var _p1h = null;
        defineModule(_p1f);
        Object.defineProperty(_p1f, '__esModule', {
            'value': true
        }), _p1f.getSlot99PersonalEffect = void 0;
        var _p1i = _p1g(74496);
        _p1f.getSlot99PersonalEffect = function(_p1j) {
            var _p1k = null,
                _p1l = new _p1i.SlotItemEffectModel();
            return 'そうりゅう' == _p1j.yomi ? _p1l.houg = 4 : 'ひりゅう' == _p1j.yomi && (_p1l.houg = 1), _p1l;
        };
    },
    21403: (_p1m, _p1n, _p1o) => {
        'use strict';
        var _p1p = null;
        defineModule(_p1n);
        Object.defineProperty(_p1n, '__esModule', {
            'value': true
        }), _p1n.getSlotCorsairMkIIPersonalEffect = void 0;
        var _p1q = _p1o(74496);
        _p1n.getSlotCorsairMkIIPersonalEffect = function(_p1r) {
            var _p1s = null,
                _p1t = new _p1q.SlotItemEffectModel(),
                _p1u = false,
                _p1v = new _p1q.SlotItemEffectModel();
            112 == _p1r.ctype && (_p1v.houg += 1, _p1v.tyku += 1, _p1v.kaih += 2, _p1u = true);
            var _p1w = _p1r.getCountryName();
            if (67 == _p1r.ctype || 78 == _p1r.ctype || 82 == _p1r.ctype || 88 == _p1r.ctype || 108 == _p1r.ctype || 112 == _p1r.ctype ? (_p1v.houg += 1, _p1v.tyku += 2, _p1v.kaih += 3, _p1u = true) : 'アメリカ' == _p1w && (_p1v.houg += 1, _p1v.tyku += 1, _p1v.kaih += 2, _p1u = true), 0 == _p1u) return _p1t;
            var _p1x = _p1r.get_slotnums(434) + _p1r.get_slotnums(435);
            return _p1t.add(_p1v.multiply(_p1x)), _p1t;
        };
    },
    9195: (_p1y, _p1z, _p20) => {
        'use strict';
        var _p21 = null;
        defineModule(_p1z);
        Object.defineProperty(_p1z, '__esModule', {
            'value': true
        }), _p1z.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _p22 = _p20(74496);
        _p1z.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_p23) {
            var _p24 = null,
                _p25 = new _p22.SlotItemEffectModel(),
                _p26 = false,
                _p27 = new _p22.SlotItemEffectModel();
            if (56 == _p23.ctype && (_p27.tais += 3, _p27.kaih += 2, _p26 = true), 0 == _p26) return _p25;
            var _p28 = _p23.get_slotnums(44) + _p23.get_slotnums(45) + _p23.get_slotnums(287) + _p23.get_slotnums(288);
            return _p25.add(_p27.multiply(_p28)), _p25;
        };
    },
    93297: (_p29, _p2a, _p2b) => {
        'use strict';
        var _p2c = null;
        defineModule(_p2a);
        Object.defineProperty(_p2a, '__esModule', {
            'value': true
        }), _p2a.getSlotDomesticSonarPersonalEffect = void 0;
        var _p2d = _p2b(74496);
        _p2a.getSlotDomesticSonarPersonalEffect = function(_p2e) {
            var _p2f = null,
                _p2g = new _p2d.SlotItemEffectModel();
            return 56 == _p2e.ctype && (_p2g.tais += 2, _p2g.kaih += 3), _p2g;
        };
    },
    45482: (_p2h, _p2i, _p2j) => {
        'use strict';
        var _p2k = null;
        defineModule(_p2i);
        Object.defineProperty(_p2i, '__esModule', {
            'value': true
        }), _p2i.getSlotOtherSuiseiPersonalEffect = void 0;
        var _p2l = _p2j(74496);
        _p2i.getSlotOtherSuiseiPersonalEffect = function(_p2m) {
            var _p2n = null,
                _p2o = new _p2l.SlotItemEffectModel(),
                _p2p = new _p2l.SlotItemEffectModel();
            if (553 == _p2m.ship_id) _p2p.houg = 2;
            else {
                if (554 != _p2m.ship_id) return _p2o;
                _p2p.houg = 2;
            }
            var _p2q = _p2m.get_slotnums(24) + _p2m.get_slotnums(57) + _p2m.get_slotnums(111);
            return _p2o = _p2p.multiply(_p2q);
        };
    },
    45927: (_p2r, _p2s, _p2t) => {
        'use strict';
        var _p2u = null;
        defineModule(_p2s);
        Object.defineProperty(_p2s, '__esModule', {
            'value': true
        }), _p2s.getSlotSmokePersonalEffect = void 0;
        var _p2v = _p2t(74496);
        _p2s.getSlotSmokePersonalEffect = function(_p2w) {
            var _p2x = null,
                _p2y = new _p2v.SlotItemEffectModel(),
                _p2z = false,
                _p30 = new _p2v.SlotItemEffectModel();
            if (959 == _p2w.ship_id && (_p30.kaih += 4, _p2z = true), 'ジョンストン' == _p2w.yomi || 'サミュエル・B・ロバーツ' == _p2w.yomi || 'せんだい' == _p2w.yomi || 'はるかぜ' == _p2w.yomi || 'かみかぜ' == _p2w.yomi || 'しきなみ' == _p2w.yomi || 'うらなみ' == _p2w.yomi || 'あおば' == _p2w.yomi ? (_p30.kaih += 3, _p2z = true) : 'いなづま' != _p2w.yomi && 'はぐろ' != _p2w.yomi && 'はつしも' != _p2w.yomi && 'かすみ' != _p2w.yomi && 'ふぶき' != _p2w.yomi && 'あたご' != _p2w.yomi && 'あまぎり' != _p2w.yomi && 'はまなみ' != _p2w.yomi || (_p30.kaih += 2, _p2z = true), 0 == _p2z) return _p2y;
            var _p31 = _p2w.get_slotnums(500) + _p2w.get_slotnums(501);
            return _p2y.add(_p30.multiply(_p31)), _p2y;
        };
    },
    32666: (_p32, _p33, _p34) => {
        'use strict';
        var _p35 = null;
        defineModule(_p33);
        Object.defineProperty(_p33, '__esModule', {
            'value': true
        }), _p33.getSlotTokuYonPersonalEffect = void 0;
        var _p36 = _p34(74496);
        _p33.getSlotTokuYonPersonalEffect = function(_p37) {
            var _p38 = null,
                _p39 = new _p36.SlotItemEffectModel(),
                _p3a = false,
                _p3b = new _p36.SlotItemEffectModel(),
                _p3c = 0,
                _p3d = _p37.get_slotnums(525),
                _p3e = _p37.get_slotnums(526),
                _p3f = _p3d + _p3e;
            if (13 != _p37.stype && 14 != _p37.stype || (_p3b.houg += 1, _p3b.raig += 2, _p3b.kaih -= 1, _p3a = true, _p3c = 1, 'い36' != _p37.yomi && 'い41' != _p37.yomi || (_p39.houg += 2, _p39.raig += 1, _p39.houm += 2), _p3e >= 1 && (_p39.houg += 1 * _p3e, _p39.raig += 1 * _p3e, _p39.houm += 1 * _p3e)), 0 == _p3a) return _p39;
            if (_p39.add(_p3b.multiply(_p3f)), 0 == _p3c) return _p39;
            var _p3g = _p37.get_each_level_over_nums([525, 526]),
                _p3h = _p3g.slot[525],
                _p3i = _p3g.slot[526];
            if (1 == _p3c) {
                if (_p3h[1] >= 1 || _p3i[1] >= 1) {
                    var _p3j = _p3h[1] + _p3i[1];
                    _p39.raig += 1 * _p3j;
                }
                if (_p3i[2] >= 1) {
                    var _p3k = _p3h[2] + _p3i[2];
                    _p39.houg += 1 * _p3k;
                }
                if (_p3h[3] >= 1 || _p3i[3] >= 1) {
                    var _p3l = _p3h[3] + _p3i[3];
                    _p39.houm += 1 * _p3l;
                }
                if (_p3i[4] >= 1) {
                    var _p3m = _p3h[4] + _p3i[4];
                    _p39.raig += 1 * _p3m;
                }
                if (_p3h[6] >= 1 || _p3i[6] >= 1) {
                    var _p3n = _p3h[6] + _p3i[6];
                    _p39.houm += 1 * _p3n;
                }
                if (_p3i[8] >= 1) {
                    var _p3o = _p3h[8] + _p3i[8];
                    _p39.houg += 1 * _p3o;
                }
                if (_p3h[10] >= 1 || _p3i[10] >= 1) {
                    var _p3p = _p3h[10] + _p3i[10];
                    _p39.raig += 1 * _p3p;
                }
            }
            return _p39;
        };
    },
    29805: (_p3q, _p3r, _p3s) => {
        'use strict';
        var _p3t = null;
        defineModule(_p3r);
        Object.defineProperty(_p3r, '__esModule', {
            'value': true
        }), _p3r.getSlotType10PersonalEffect = void 0;
        var _p3u = _p3s(74496);
        _p3r.getSlotType10PersonalEffect = function(_p3v) {
            var _p3w = null,
                _p3x = new _p3u.SlotItemEffectModel();
            return 662 == _p3v.ship_id || 663 == _p3v.ship_id || 668 == _p3v.ship_id ? (_p3x.houg += 2, _p3x.kaih += 1, _p3x.tais += 3) : 501 != _p3v.ship_id && 506 != _p3v.ship_id && 502 != _p3v.ship_id && 507 != _p3v.ship_id || (_p3x.houg += 2), _p3x;
        };
    },
    58913: (_p3y, _p3z, _p40) => {
        'use strict';
        var _p41 = null;
        defineModule(_p3z);
        Object.defineProperty(_p3z, '__esModule', {
            'value': true
        }), _p3z.getSlotType11PersonalEffect = void 0;
        var _p42 = _p40(74496);
        _p3z.getSlotType11PersonalEffect = function(_p43) {
            var _p44 = null,
                _p45 = new _p42.SlotItemEffectModel();
            return 662 == _p43.ship_id || 663 == _p43.ship_id || 668 == _p43.ship_id ? (_p45.houg += 1, _p45.kaih += 1, _p45.tais += 1) : 501 != _p43.ship_id && 506 != _p43.ship_id && 502 != _p43.ship_id && 507 != _p43.ship_id || (_p45.houg += 1, _p45.kaih += 1), _p45;
        };
    },
    55421: (_p46, _p47, _p48) => {
        'use strict';
        var _p49 = null;
        defineModule(_p47);
        Object.defineProperty(_p47, '__esModule', {
            'value': true
        }), _p47.getSlotType25PersonalEffect = void 0;
        var _p4a = _p48(74496);
        _p47.getSlotType25PersonalEffect = function(_p4b) {
            var _p4c = null,
                _p4d = new _p4a.SlotItemEffectModel();
            return 662 == _p4b.ship_id ? (_p4d.tais += 4, _p4d.kaih += 1) : 663 != _p4b.ship_id && 668 != _p4b.ship_id || (_p4d.tais += 3, _p4d.kaih += 1), _p4d;
        };
    },
    272: function(_p4e, _p4f, _p4g) {
        'use strict';
        var _p4h = null;
        var _p4i = this && this.__importDefault || function(_p4j) {
            var _p4k = null;
            return _p4j && _p4j.__esModule ? _p4j : {
                'default': _p4j
            };
        };
        defineModule(_p4f);
        Object.defineProperty(_p4f, '__esModule', {
            'value': true
        }), _p4f.getSlotType9PersonalEffect = void 0;
        var _p4l = _p4g(74496),
            _p4m = _p4i(_p4g(18622));
        _p4f.getSlotType9PersonalEffect = function(_p4n) {
            var _p4o = null,
                _p4p = new _p4l.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_p4n.stype]) return _p4p;
            for (var _p4q = 0, _p4r = 0, _p4s = _p4n.have_slot_ids(); _p4r < _p4s.length; _p4r++) {
                var _p4t = _p4s[_p4r];
                if (9 == _p4m.default.model.slot.getMst(_p4t).equipType)
                    for (var _p4u = 0, _p4v = _p4n.have_slots_dict[parseInt(_p4t)]; _p4u < _p4v.length; _p4u++) {
                        var _p4w = _p4v[_p4u].level;
                        _p4q < _p4w && (_p4q = _p4w);
                    }
            }
            return _p4q >= 2 && (_p4p.saku += 1), _p4q >= 4 && (_p4p.houg += 1), _p4q >= 6 && (_p4p.saku += 1), _p4q >= 10 && (_p4p.houg += 1, _p4p.saku += 1), _p4p;
        };
    },
    54518: (_p4x, _p4y, _p4z) => {
        'use strict';
        var _p50 = null;
        defineModule(_p4y);
        Object.defineProperty(_p4y, '__esModule', {
            'value': true
        }), _p4y.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _p51 = _p4z(74496);
        _p4y.getSlot_16InchMkXRensouhou_PersonalEffect = function(_p52) {
            var _p53 = null,
                _p54 = new _p51.SlotItemEffectModel();
            if (93 == _p52.ctype) {
                var _p55 = _p52.get_slotnums(330);
                _p55 > 0 && (_p54.houg = _p54.houg + 1 * _p55);
                var _p56 = _p52.get_slotnums(331);
                _p56 > 0 && (_p54.houg = _p54.houg + 1 * _p56, 1496 != _p52.ship_id && 918 != _p52.ship_id || (_p54.houg = _p54.houg + 1 * _p56, _p54.kaih = _p54.kaih + 1 * _p56));
                var _p57 = _p52.get_slotnums(332);
                return _p57 > 0 && (_p54.houg = _p54.houg + 1 * _p57, 1496 != _p52.ship_id && 918 != _p52.ship_id || (_p54.houg = _p54.houg + 1 * _p57, _p54.kaih = _p54.kaih + 1 * _p57, _p54.tyku = _p54.tyku + 1 * _p57)), _p54;
            }
            var _p58 = new _p51.SlotItemEffectModel();
            if (19 == _p52.ctype ? (_p58.houg = 1, (541 == _p52.ship_id || 573 == _p52.ship_id) && (_p58.houg += 1)) : 88 == _p52.ctype && (_p58.houg = 1, 576 == _p52.ship_id && (_p58.houg += 1)), !_p58.exists()) return _p54;
            var _p59 = _p52.get_slotnums(330) + _p52.get_slotnums(331) + _p52.get_slotnums(332);
            return _p54 = _p58.multiply(_p59);
        };
    },
    79353: (_p5a, _p5b, _p5c) => {
        'use strict';
        var _p5d = null;
        defineModule(_p5b);
        Object.defineProperty(_p5b, '__esModule', {
            'value': true
        }), _p5b.getZuiunSeriesEffect = void 0;
        var _p5e = _p5c(74496);
        _p5b.getZuiunSeriesEffect = function(_p5f) {
            var _p5g = null,
                _p5h = new _p5e.SlotItemEffectModel(),
                _p5i = false,
                _p5j = new _p5e.SlotItemEffectModel();
            if (662 == _p5f.ship_id ? (_p5h.houg += 2, _p5h.kaih += 1) : 663 == _p5f.ship_id || 668 == _p5f.ship_id || 501 == _p5f.ship_id || 506 == _p5f.ship_id ? (_p5h.houg += 2, _p5j.kaih += 1, _p5j.tyku += 1, _p5i = true) : 502 != _p5f.ship_id && 507 != _p5f.ship_id || (_p5h.houg += 1, _p5j.kaih += 1, _p5j.tyku += 1, _p5i = true), 0 == _p5i) return _p5h;
            var _p5k = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_p5l) {
                var _p5m = null;
                _p5k += _p5f.get_slotnums(_p5l);
            }), _p5h.add(_p5j.multiply(_p5k)), _p5h;
        };
    },
    89051: function(_p5n, _p5o, _p5p) {
        'use strict';
        var _p5q = null;
        var _p5r = this && this.__createBinding || (Object.create ? function(_p5s, _p5t, _p5u, _p5v) {
                var _p5w = null;
                void 0 === _p5v && (_p5v = _p5u);
                var _p5x = Object.getOwnPropertyDescriptor(_p5t, _p5u);
                _p5x && !('get' in _p5x ? !_p5t.__esModule : _p5x.writable || _p5x.configurable) || (_p5x = {
                    'enumerable': true,
                    'get': function() {
                        return _p5t[_p5u];
                    }
                }), Object.defineProperty(_p5s, _p5v, _p5x);
            } : function(_p5y, _p5z, _p60, _p61) {
                void 0 === _p61 && (_p61 = _p60), _p5y[_p61] = _p5z[_p60];
            }),
            _p62 = this && this.__exportStar || function(_p63, _p64) {
                var _p65 = null;
                for (var _p66 in _p63) 'default' === _p66 || Object.prototype.hasOwnProperty.call(_p64, _p66) || _p5r(_p64, _p63, _p66);
            };
        defineModule(_p5o);
        Object.defineProperty(_p5o, '__esModule', {
            'value': true
        }), _p62(_p5p(34165), _p5o), _p62(_p5p(81018), _p5o), _p62(_p5p(56716), _p5o), _p62(_p5p(17713), _p5o), _p62(_p5p(54518), _p5o), _p62(_p5p(66985), _p5o), _p62(_p5p(88102), _p5o), _p62(_p5p(66904), _p5o), _p62(_p5p(98137), _p5o), _p62(_p5p(69954), _p5o), _p62(_p5p(22218), _p5o), _p62(_p5p(88271), _p5o), _p62(_p5p(23035), _p5o), _p62(_p5p(2578), _p5o), _p62(_p5p(17143), _p5o), _p62(_p5p(16164), _p5o), _p62(_p5p(35023), _p5o), _p62(_p5p(44680), _p5o), _p62(_p5p(45749), _p5o), _p62(_p5p(37334), _p5o), _p62(_p5p(29180), _p5o), _p62(_p5p(68685), _p5o), _p62(_p5p(26078), _p5o), _p62(_p5p(20829), _p5o), _p62(_p5p(6880), _p5o), _p62(_p5p(17213), _p5o), _p62(_p5p(40176), _p5o), _p62(_p5p(32889), _p5o), _p62(_p5p(11285), _p5o), _p62(_p5p(96200), _p5o), _p62(_p5p(9115), _p5o), _p62(_p5p(37173), _p5o), _p62(_p5p(21713), _p5o), _p62(_p5p(59823), _p5o), _p62(_p5p(57440), _p5o), _p62(_p5p(29240), _p5o), _p62(_p5p(40885), _p5o), _p62(_p5p(19614), _p5o), _p62(_p5p(87220), _p5o), _p62(_p5p(81367), _p5o), _p62(_p5p(13052), _p5o), _p62(_p5p(94968), _p5o), _p62(_p5p(48658), _p5o), _p62(_p5p(1906), _p5o), _p62(_p5p(61887), _p5o), _p62(_p5p(47970), _p5o), _p62(_p5p(31797), _p5o), _p62(_p5p(45738), _p5o), _p62(_p5p(34718), _p5o), _p62(_p5p(69245), _p5o), _p62(_p5p(18478), _p5o), _p62(_p5p(2899), _p5o), _p62(_p5p(57120), _p5o), _p62(_p5p(74985), _p5o), _p62(_p5p(9234), _p5o), _p62(_p5p(30802), _p5o), _p62(_p5p(97002), _p5o), _p62(_p5p(16748), _p5o), _p62(_p5p(53618), _p5o), _p62(_p5p(72573), _p5o), _p62(_p5p(8955), _p5o), _p62(_p5p(98947), _p5o), _p62(_p5p(44726), _p5o), _p62(_p5p(93065), _p5o), _p62(_p5p(85767), _p5o), _p62(_p5p(38314), _p5o), _p62(_p5p(59747), _p5o), _p62(_p5p(40649), _p5o), _p62(_p5p(13533), _p5o), _p62(_p5p(12138), _p5o), _p62(_p5p(30042), _p5o), _p62(_p5p(33623), _p5o), _p62(_p5p(85630), _p5o), _p62(_p5p(88736), _p5o), _p62(_p5p(49341), _p5o), _p62(_p5p(74306), _p5o), _p62(_p5p(83898), _p5o), _p62(_p5p(71873), _p5o), _p62(_p5p(53122), _p5o), _p62(_p5p(51063), _p5o), _p62(_p5p(91491), _p5o), _p62(_p5p(85495), _p5o), _p62(_p5p(65365), _p5o), _p62(_p5p(98164), _p5o), _p62(_p5p(38114), _p5o), _p62(_p5p(21003), _p5o), _p62(_p5p(77010), _p5o), _p62(_p5p(39126), _p5o), _p62(_p5p(72176), _p5o), _p62(_p5p(33846), _p5o), _p62(_p5p(97157), _p5o), _p62(_p5p(63406), _p5o), _p62(_p5p(66373), _p5o), _p62(_p5p(19707), _p5o), _p62(_p5p(63978), _p5o), _p62(_p5p(92382), _p5o), _p62(_p5p(78415), _p5o), _p62(_p5p(23090), _p5o), _p62(_p5p(18776), _p5o), _p62(_p5p(39656), _p5o), _p62(_p5p(66039), _p5o), _p62(_p5p(64679), _p5o), _p62(_p5p(95953), _p5o), _p62(_p5p(86384), _p5o), _p62(_p5p(65345), _p5o), _p62(_p5p(46514), _p5o), _p62(_p5p(81976), _p5o), _p62(_p5p(89331), _p5o), _p62(_p5p(73973), _p5o), _p62(_p5p(21178), _p5o), _p62(_p5p(5079), _p5o), _p62(_p5p(95014), _p5o), _p62(_p5p(53099), _p5o), _p62(_p5p(76201), _p5o), _p62(_p5p(24931), _p5o), _p62(_p5p(60978), _p5o), _p62(_p5p(74312), _p5o), _p62(_p5p(54350), _p5o), _p62(_p5p(26262), _p5o), _p62(_p5p(45530), _p5o), _p62(_p5p(44053), _p5o), _p62(_p5p(65441), _p5o), _p62(_p5p(33258), _p5o), _p62(_p5p(92168), _p5o), _p62(_p5p(85975), _p5o), _p62(_p5p(98467), _p5o), _p62(_p5p(88348), _p5o), _p62(_p5p(21097), _p5o), _p62(_p5p(37273), _p5o), _p62(_p5p(72694), _p5o), _p62(_p5p(62067), _p5o), _p62(_p5p(87817), _p5o), _p62(_p5p(93526), _p5o), _p62(_p5p(33084), _p5o), _p62(_p5p(97831), _p5o), _p62(_p5p(45482), _p5o), _p62(_p5p(272), _p5o), _p62(_p5p(69377), _p5o), _p62(_p5p(31127), _p5o), _p62(_p5p(79353), _p5o), _p62(_p5p(17274), _p5o), _p62(_p5p(91302), _p5o), _p62(_p5p(82229), _p5o), _p62(_p5p(10325), _p5o), _p62(_p5p(351), _p5o), _p62(_p5p(4050), _p5o), _p62(_p5p(29805), _p5o), _p62(_p5p(58913), _p5o), _p62(_p5p(55421), _p5o), _p62(_p5p(87845), _p5o), _p62(_p5p(17562), _p5o), _p62(_p5p(78466), _p5o), _p62(_p5p(40061), _p5o), _p62(_p5p(9195), _p5o), _p62(_p5p(93297), _p5o), _p62(_p5p(15133), _p5o), _p62(_p5p(55747), _p5o), _p62(_p5p(33155), _p5o), _p62(_p5p(79086), _p5o), _p62(_p5p(2306), _p5o), _p62(_p5p(14386), _p5o), _p62(_p5p(80225), _p5o), _p62(_p5p(17732), _p5o), _p62(_p5p(47169), _p5o), _p62(_p5p(77670), _p5o), _p62(_p5p(79988), _p5o), _p62(_p5p(92253), _p5o), _p62(_p5p(74428), _p5o), _p62(_p5p(16498), _p5o), _p62(_p5p(2631), _p5o), _p62(_p5p(27177), _p5o), _p62(_p5p(94781), _p5o), _p62(_p5p(53908), _p5o), _p62(_p5p(79813), _p5o), _p62(_p5p(16088), _p5o), _p62(_p5p(93733), _p5o), _p62(_p5p(69939), _p5o), _p62(_p5p(33734), _p5o), _p62(_p5p(34432), _p5o), _p62(_p5p(97423), _p5o), _p62(_p5p(23551), _p5o), _p62(_p5p(99791), _p5o), _p62(_p5p(21403), _p5o), _p62(_p5p(6173), _p5o), _p62(_p5p(23934), _p5o), _p62(_p5p(53709), _p5o), _p62(_p5p(88838), _p5o), _p62(_p5p(99790), _p5o), _p62(_p5p(18387), _p5o), _p62(_p5p(70941), _p5o), _p62(_p5p(35025), _p5o), _p62(_p5p(2603), _p5o), _p62(_p5p(78707), _p5o), _p62(_p5p(89058), _p5o), _p62(_p5p(84372), _p5o), _p62(_p5p(96804), _p5o), _p62(_p5p(33896), _p5o), _p62(_p5p(11031), _p5o), _p62(_p5p(71383), _p5o), _p62(_p5p(55888), _p5o), _p62(_p5p(2258), _p5o), _p62(_p5p(38003), _p5o), _p62(_p5p(92174), _p5o), _p62(_p5p(43768), _p5o), _p62(_p5p(73254), _p5o), _p62(_p5p(55734), _p5o), _p62(_p5p(81254), _p5o), _p62(_p5p(65455), _p5o), _p62(_p5p(70362), _p5o), _p62(_p5p(61977), _p5o), _p62(_p5p(43607), _p5o), _p62(_p5p(68086), _p5o), _p62(_p5p(78173), _p5o), _p62(_p5p(22581), _p5o), _p62(_p5p(20418), _p5o), _p62(_p5p(93373), _p5o), _p62(_p5p(13053), _p5o), _p62(_p5p(47874), _p5o), _p62(_p5p(42788), _p5o), _p62(_p5p(57664), _p5o), _p62(_p5p(44990), _p5o), _p62(_p5p(17712), _p5o), _p62(_p5p(83957), _p5o), _p62(_p5p(78539), _p5o), _p62(_p5p(96282), _p5o), _p62(_p5p(49679), _p5o), _p62(_p5p(45927), _p5o), _p62(_p5p(90312), _p5o), _p62(_p5p(86856), _p5o), _p62(_p5p(78123), _p5o), _p62(_p5p(25765), _p5o), _p62(_p5p(29493), _p5o), _p62(_p5p(28221), _p5o), _p62(_p5p(14830), _p5o), _p62(_p5p(54047), _p5o), _p62(_p5p(76054), _p5o), _p62(_p5p(90725), _p5o), _p62(_p5p(93053), _p5o), _p62(_p5p(88792), _p5o), _p62(_p5p(33242), _p5o), _p62(_p5p(59415), _p5o), _p62(_p5p(3296), _p5o), _p62(_p5p(32666), _p5o), _p62(_p5p(36731), _p5o), _p62(_p5p(30450), _p5o), _p62(_p5p(85127), _p5o), _p62(_p5p(87204), _p5o), _p62(_p5p(2380), _p5o);
    },
    82692: function(_p67, _p68, _p69) {
        'use strict';
        var _p6a = null;
        var _p6b = this && this.__createBinding || (Object.create ? function(_p6c, _p6d, _p6e, _p6f) {
                var _p6g = null;
                void 0 === _p6f && (_p6f = _p6e);
                var _p6h = Object.getOwnPropertyDescriptor(_p6d, _p6e);
                _p6h && !('get' in _p6h ? !_p6d.__esModule : _p6h.writable || _p6h.configurable) || (_p6h = {
                    'enumerable': true,
                    'get': function() {
                        return _p6d[_p6e];
                    }
                }), Object.defineProperty(_p6c, _p6f, _p6h);
            } : function(_p6i, _p6j, _p6k, _p6l) {
                void 0 === _p6l && (_p6l = _p6k), _p6i[_p6l] = _p6j[_p6k];
            }),
            _p6m = this && this.__setModuleDefault || (Object.create ? function(_p6n, _p6o) {
                var _p6p = null;
                Object.defineProperty(_p6n, 'default', {
                    'enumerable': true,
                    'value': _p6o
                });
            } : function(_p6q, _p6r) {
                var _p6s = null;
                _p6q.default = _p6r;
            }),
            _p6t = this && this.__importStar || function(_p6u) {
                var _p6v = null;
                if (_p6u && _p6u.__esModule) return _p6u;
                var _p6w = {};
                if (null != _p6u) {
                    for (var _p6x in _p6u) 'default' !== _p6x && Object.prototype.hasOwnProperty.call(_p6u, _p6x) && _p6b(_p6w, _p6u, _p6x);
                }
                return _p6m(_p6w, _p6u), _p6w;
            };
        defineModule(_p68);
        Object.defineProperty(_p68, '__esModule', {
            'value': true
        }), _p68.SlotItemEffectUtil = void 0;
        var _p6y, _p6z = _p69(73785),
            _p70 = _p6t(_p69(89051)),
            _p71 = _p69(74496);
        ! function(_p72) {
            var _p73 = null;
            _p72.getSlotitemEffect = function(_p74, _p75) {
                var _p76 = null;
                if (null == _p74 || null == _p75) return null;
                for (var _p77 = new _p6z.SlotItemEffectParamModel(_p74, _p75), _p78 = [{
                        'isExecute': Boolean(_p77.get_type3_nums(9)),
                        'execFunc': _p70.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_type3_nums(10)),
                        'execFunc': _p70.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_type3_nums(11)),
                        'execFunc': _p70.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_type3_nums(12)) || Boolean(_p77.get_type3_nums(13)),
                        'execFunc': _p70.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_p77.get_type3_nums(25)),
                        'execFunc': _p70.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_type3_nums(29)),
                        'execFunc': _p70.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_p77.get_type3_nums(42)),
                        'execFunc': _p70.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(3)) || Boolean(_p77.get_slotnums(122)),
                        'execFunc': _p70.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(5)),
                        'execFunc': _p70.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(12)),
                        'execFunc': _p70.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(15)),
                        'execFunc': _p70.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(18)) || Boolean(_p77.get_slotnums(52)),
                        'execFunc': _p70.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(19)),
                        'execFunc': _p70.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(24)) || Boolean(_p77.get_slotnums(57)) || Boolean(_p77.get_slotnums(111)),
                        'execFunc': _p70.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(26)) || Boolean(_p77.get_slotnums(62)) || Boolean(_p77.get_slotnums(79)) || Boolean(_p77.get_slotnums(80)) || Boolean(_p77.get_slotnums(81)) || Boolean(_p77.get_slotnums(207)) || Boolean(_p77.get_slotnums(208)),
                        'execFunc': _p70.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(35)),
                        'execFunc': _p70.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(39)) || Boolean(_p77.get_slotnums(40)) || Boolean(_p77.get_slotnums(49)) || Boolean(_p77.get_slotnums(131)),
                        'execFunc': _p70.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(30)) || Boolean(_p77.get_slotnums(410)),
                        'execFunc': _p70.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(44)) || Boolean(_p77.get_slotnums(45)) || Boolean(_p77.get_slotnums(287)) || Boolean(_p77.get_slotnums(288)),
                        'execFunc': _p70.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(46)) || Boolean(_p77.get_slotnums(47)) || Boolean(_p77.get_slotnums(149)) || Boolean(_p77.get_slotnums(132)) || Boolean(_p77.get_slotnums(438)),
                        'execFunc': _p70.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(47)) || Boolean(_p77.get_slotnums(438)),
                        'execFunc': _p70.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(50)),
                        'execFunc': _p70.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(58)),
                        'execFunc': _p70.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(59)),
                        'execFunc': _p70.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(60)) || Boolean(_p77.get_slotnums(154)) || Boolean(_p77.get_slotnums(219)),
                        'execFunc': _p70.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(61)),
                        'execFunc': _p70.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(61)),
                        'execFunc': _p70.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(63)),
                        'execFunc': _p70.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(66)) || Boolean(_p77.get_slotnums(220)),
                        'execFunc': _p70.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(67)),
                        'execFunc': _p70.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(69)),
                        'execFunc': _p70.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(70)),
                        'execFunc': _p70.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(76)) || Boolean(_p77.get_slotnums(114)),
                        'execFunc': _p70.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(78)),
                        'execFunc': _p70.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(79)) || Boolean(_p77.get_slotnums(81)),
                        'execFunc': _p70.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(82)),
                        'execFunc': _p70.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(84)),
                        'execFunc': _p70.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(85)),
                        'execFunc': _p70.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(87)),
                        'execFunc': _p70.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(90)),
                        'execFunc': _p70.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(93)),
                        'execFunc': _p70.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(94)),
                        'execFunc': _p70.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(99)),
                        'execFunc': _p70.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(100)),
                        'execFunc': _p70.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(104)),
                        'execFunc': _p70.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(106)) || Boolean(_p77.get_slotnums(450)),
                        'execFunc': _p70.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(115)),
                        'execFunc': _p70.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(118)) || Boolean(_p77.get_slotnums(521)),
                        'execFunc': _p70.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(119)),
                        'execFunc': _p70.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(121)),
                        'execFunc': _p70.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(122)),
                        'execFunc': _p70.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(123)),
                        'execFunc': _p70.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(124)),
                        'execFunc': _p70.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(128)) || Boolean(_p77.get_slotnums(281)),
                        'execFunc': _p70.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(129)),
                        'execFunc': _p70.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(132)),
                        'execFunc': _p70.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(136)),
                        'execFunc': _p70.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(139)),
                        'execFunc': _p70.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(143)),
                        'execFunc': _p70.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(144)),
                        'execFunc': _p70.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(147)) || Boolean(_p77.get_slotnums(393)) || Boolean(_p77.get_slotnums(394)),
                        'execFunc': _p70.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(149)),
                        'execFunc': _p70.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(165)) || Boolean(_p77.get_slotnums(216)),
                        'execFunc': _p70.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(171)),
                        'execFunc': _p70.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(174)),
                        'execFunc': _p70.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(179)),
                        'execFunc': _p70.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(184)),
                        'execFunc': _p70.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(188)),
                        'execFunc': _p70.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(189)),
                        'execFunc': _p70.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(194)),
                        'execFunc': _p70.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(195)),
                        'execFunc': _p70.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(204)),
                        'execFunc': _p70.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(217)),
                        'execFunc': _p70.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(220)),
                        'execFunc': _p70.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(227)),
                        'execFunc': _p70.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(228)),
                        'execFunc': _p70.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(229)),
                        'execFunc': _p70.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(234)),
                        'execFunc': _p70.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(235)),
                        'execFunc': _p70.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(237)) || Boolean(_p77.get_slotnums(322)) || Boolean(_p77.get_slotnums(323)) || Boolean(_p77.get_slotnums(490)),
                        'execFunc': _p70.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(237)),
                        'execFunc': _p70.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(238)) || Boolean(_p77.get_slotnums(239)),
                        'execFunc': _p70.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(242)),
                        'execFunc': _p70.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(243)),
                        'execFunc': _p70.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(244)),
                        'execFunc': _p70.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(245)) || Boolean(_p77.get_slotnums(246)) || Boolean(_p77.get_slotnums(468)),
                        'execFunc': _p70.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(247)),
                        'execFunc': _p70.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(266)),
                        'execFunc': _p70.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(266)),
                        'execFunc': _p70.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(267)) || Boolean(_p77.get_slotnums(366)),
                        'execFunc': _p70.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(267)) || Boolean(_p77.get_slotnums(366)),
                        'execFunc': _p70.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(268)),
                        'execFunc': _p70.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(271)),
                        'execFunc': _p70.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(275)),
                        'execFunc': _p70.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(277)),
                        'execFunc': _p70.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(278)),
                        'execFunc': _p70.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(279)),
                        'execFunc': _p70.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(282)),
                        'execFunc': _p70.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(283)),
                        'execFunc': _p70.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(285)),
                        'execFunc': _p70.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(286)),
                        'execFunc': _p70.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(286)),
                        'execFunc': _p70.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(286)),
                        'execFunc': _p70.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(287)),
                        'execFunc': _p70.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(288)),
                        'execFunc': _p70.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(289)),
                        'execFunc': _p70.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(290)),
                        'execFunc': _p70.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(291)),
                        'execFunc': _p70.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(292)),
                        'execFunc': _p70.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(293)),
                        'execFunc': _p70.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(294)),
                        'execFunc': _p70.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(295)),
                        'execFunc': _p70.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(296)),
                        'execFunc': _p70.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(297)),
                        'execFunc': _p70.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(298)) || Boolean(_p77.get_slotnums(299)) || Boolean(_p77.get_slotnums(300)),
                        'execFunc': _p70.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(301)),
                        'execFunc': _p70.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(302)),
                        'execFunc': _p70.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(303)),
                        'execFunc': _p70.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(304)),
                        'execFunc': _p70.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(305)) || Boolean(_p77.get_slotnums(306)),
                        'execFunc': _p70.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(307)),
                        'execFunc': _p70.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(308)),
                        'execFunc': _p70.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(310)) || Boolean(_p77.get_slotnums(518)),
                        'execFunc': _p70.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(313)),
                        'execFunc': _p70.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(314)),
                        'execFunc': _p70.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(315)),
                        'execFunc': _p70.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(316)),
                        'execFunc': _p70.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(317)),
                        'execFunc': _p70.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(318)),
                        'execFunc': _p70.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(319)),
                        'execFunc': _p70.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(320)),
                        'execFunc': _p70.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(322)),
                        'execFunc': _p70.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(323)),
                        'execFunc': _p70.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(324)) || Boolean(_p77.get_slotnums(325)),
                        'execFunc': _p70.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(326)),
                        'execFunc': _p70.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(327)),
                        'execFunc': _p70.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(328)),
                        'execFunc': _p70.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(329)),
                        'execFunc': _p70.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(330)) || Boolean(_p77.get_slotnums(331)) || Boolean(_p77.get_slotnums(332)),
                        'execFunc': _p70.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(335)),
                        'execFunc': _p70.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(336)),
                        'execFunc': _p70.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(337)),
                        'execFunc': _p70.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(338)),
                        'execFunc': _p70.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(339)),
                        'execFunc': _p70.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(340)),
                        'execFunc': _p70.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(341)),
                        'execFunc': _p70.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(342)),
                        'execFunc': _p70.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(343)),
                        'execFunc': _p70.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(344)),
                        'execFunc': _p70.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(345)),
                        'execFunc': _p70.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(346)),
                        'execFunc': _p70.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(347)),
                        'execFunc': _p70.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(356)) || Boolean(_p77.get_slotnums(357)),
                        'execFunc': _p70.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(358)),
                        'execFunc': _p70.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(359)),
                        'execFunc': _p70.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(360)) || Boolean(_p77.get_slotnums(361)),
                        'execFunc': _p70.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(362)) || Boolean(_p77.get_slotnums(363)),
                        'execFunc': _p70.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(364)),
                        'execFunc': _p70.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(365)),
                        'execFunc': _p70.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(367)),
                        'execFunc': _p70.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(368)),
                        'execFunc': _p70.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(369)),
                        'execFunc': _p70.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(370)),
                        'execFunc': _p70.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(371)),
                        'execFunc': _p70.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(372)),
                        'execFunc': _p70.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(373)),
                        'execFunc': _p70.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(374)),
                        'execFunc': _p70.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(375)),
                        'execFunc': _p70.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(376)),
                        'execFunc': _p70.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(377)),
                        'execFunc': _p70.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(378)),
                        'execFunc': _p70.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(379)),
                        'execFunc': _p70.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(380)),
                        'execFunc': _p70.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(381)),
                        'execFunc': _p70.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(382)) || Boolean(_p77.get_slotnums(509)),
                        'execFunc': _p70.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(383)),
                        'execFunc': _p70.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(384)),
                        'execFunc': _p70.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(385)),
                        'execFunc': _p70.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(386)),
                        'execFunc': _p70.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(387)),
                        'execFunc': _p70.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(389)),
                        'execFunc': _p70.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(390)),
                        'execFunc': _p70.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(391)),
                        'execFunc': _p70.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(392)),
                        'execFunc': _p70.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(397)),
                        'execFunc': _p70.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(398)),
                        'execFunc': _p70.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(399)),
                        'execFunc': _p70.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(400)),
                        'execFunc': _p70.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(407)),
                        'execFunc': _p70.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(408)),
                        'execFunc': _p70.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(409)),
                        'execFunc': _p70.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(411)),
                        'execFunc': _p70.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(412)),
                        'execFunc': _p70.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(413)),
                        'execFunc': _p70.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(414)),
                        'execFunc': _p70.getSlot414PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(415)),
                        'execFunc': _p70.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(419)),
                        'execFunc': _p70.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(420)),
                        'execFunc': _p70.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(421)),
                        'execFunc': _p70.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(422)),
                        'execFunc': _p70.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(423)),
                        'execFunc': _p70.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(424)),
                        'execFunc': _p70.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(425)),
                        'execFunc': _p70.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(426)) || Boolean(_p77.get_slotnums(427)) || Boolean(_p77.get_slotnums(428)) || Boolean(_p77.get_slotnums(429)),
                        'execFunc': _p70.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(430)),
                        'execFunc': _p70.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(434)) || Boolean(_p77.get_slotnums(435)),
                        'execFunc': _p70.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(437)),
                        'execFunc': _p70.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(438)),
                        'execFunc': _p70.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(439)),
                        'execFunc': _p70.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(440)) || Boolean(_p77.get_slotnums(441)),
                        'execFunc': _p70.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(442)) || Boolean(_p77.get_slotnums(443)),
                        'execFunc': _p70.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(447)),
                        'execFunc': _p70.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(450)),
                        'execFunc': _p70.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(451)),
                        'execFunc': _p70.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(455)),
                        'execFunc': _p70.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(456)),
                        'execFunc': _p70.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(457)) || Boolean(_p77.get_slotnums(461)),
                        'execFunc': _p70.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(458)),
                        'execFunc': _p70.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(463)),
                        'execFunc': _p70.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(464)),
                        'execFunc': _p70.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(465)),
                        'execFunc': _p70.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(466)),
                        'execFunc': _p70.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(467)),
                        'execFunc': _p70.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(470)) || Boolean(_p77.get_slotnums(529)),
                        'execFunc': _p70.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(471)),
                        'execFunc': _p70.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(472)),
                        'execFunc': _p70.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(473)),
                        'execFunc': _p70.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(474)),
                        'execFunc': _p70.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(478)),
                        'execFunc': _p70.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(483)),
                        'execFunc': _p70.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(485)),
                        'execFunc': _p70.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(486)),
                        'execFunc': _p70.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(487)),
                        'execFunc': _p70.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(488)),
                        'execFunc': _p70.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(489)) || Boolean(_p77.get_slotnums(491)),
                        'execFunc': _p70.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(500)) || Boolean(_p77.get_slotnums(501)),
                        'execFunc': _p70.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(502)),
                        'execFunc': _p70.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(503)),
                        'execFunc': _p70.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(505)),
                        'execFunc': _p70.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(506)),
                        'execFunc': _p70.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(507)) || Boolean(_p77.get_slotnums(508)),
                        'execFunc': _p70.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(510)),
                        'execFunc': _p70.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(511)) || Boolean(_p77.get_slotnums(512)),
                        'execFunc': _p70.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(517)),
                        'execFunc': _p70.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(518)),
                        'execFunc': _p70.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(519)),
                        'execFunc': _p70.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(520)),
                        'execFunc': _p70.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(521)),
                        'execFunc': _p70.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(522)) || Boolean(_p77.get_slotnums(523)),
                        'execFunc': _p70.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(524)),
                        'execFunc': _p70.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(525)) || Boolean(_p77.get_slotnums(526)),
                        'execFunc': _p70.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(527)),
                        'execFunc': _p70.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_p77.get_slotnums(528)),
                        'execFunc': _p70.getSlot528PersonalEffect
                    }], _p79 = new _p71.SlotItemEffectModel(), _p7a = 0, _p7b = _p78; _p7a < _p7b.length; _p7a++) {
                    var _p7c = _p7b[_p7a];
                    if (_p7c.isExecute) {
                        var _p7d = _p7c.execFunc(_p77);
                        0, _p79.add(_p7d);
                    }
                }
                return _p79;
            };
        }(_p6y || (_p68.SlotItemEffectUtil = _p6y = {}));
    },
}