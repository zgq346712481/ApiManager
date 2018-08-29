
/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
/**
 * projectId : 项目ID
 * projectName : 项目名称
 * moduleId : 模块ID
 * moduleName : 模块名称
 * menu_a : 一级导航菜单
 * menu_b : 二级导航菜单
 * dataType : interface、module、article 等数据类型，用于模块接口跳转
 *
 */
var commonUrlParam = 'projectId&projectName&moduleId&moduleName&menu_a&menu_b&dataType';
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('user/project/list?projectShowType=3&menu_b=menu_create_join&type=-1&menu_a=menu-project');
	/*********************后台*******************/
	$stateProvider.state('loginOrRegister', {
		url : '/login',
		views : {
			'main' : {
				templateUrl : 'resources/html/admin/login.tpl.html?v=v8.0.5'
			}
		}
	}).state('register', {
		url : '/register',
		views : {
			'main' : {
				templateUrl : 'resources/html/admin/register.tpl.html?v=v8.0.5'
			}
		}
	}).state('findPwd', {
		url : '/findPwd',
		views : {
			'main' : {
				templateUrl : 'resources/html/user/findPwd.tpl.html?v=v8.0.5'
			}
		}
	}).state('menuList', {
		url : '/admin/menu/list?parentId&type&menuName&menu_a&menu_b',
		views : {
			'main' : {
				templateUrl : 'resources/html/admin/menuList.tpl.html?v=v8.0.5'
			},
			'page@menuList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},
			'detail' : {
				templateUrl : function($stateParems){
					return 'resources/html/admin/menuDetail.tpl.html?v=v8.0.5';
				}
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuMenu.tpl.html?v=v8.0.5';
                }
            }
		}
	}).state('projectList', {
		url : '/user/project/list?projectShowType&type&menu_a&menu_b&projectId&projectName',
		views : {
			'main' :{
				templateUrl : function($stateParems){
					return 'resources/html/user/projectList.tpl.html?v=v8.0.5';
				}
			},'page@projectList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},'detail' : {
				templateUrl : function($stateParems){
					return 'resources/html/user/projectDetail.tpl.html?v=v8.0.5';
				}
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuProject.tpl.html?v=v8.0.5';
                }
            }

		}
	}).state('project', {
        url : '/user/project?' + commonUrlParam,
        views : {
            'main' :{
                templateUrl : function($stateParems){
                    return 'resources/html/user/project.tpl.html?v=v8.0.5';
                }
            },'detail' : {
                templateUrl : function($stateParems){
                    return 'resources/html/user/projectDetail.tpl.html?v=v8.0.5';
                }
            },'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            }

        }
    }).state('moduleList', {
		url : '/user/module/list?name&' + commonUrlParam,
		views : {
			'main' : {
				templateUrl : 'resources/html/user/moduleList.tpl.html?v=v8.0.5'
			},
			'page@moduleList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},
			'detail' : {
				templateUrl : function($stateParems){
					return 'resources/html/user/moduleDetail.tpl.html?v=v8.0.5';
				}
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            }
		}
	}).state('interfaceList', {
		url : '/user/interface/list?' + commonUrlParam,
		views : {
			'main' : {
				templateUrl : 'resources/html/user/interfaceList.tpl.html?v=v8.0.5'
			},
			'page@interfaceList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},
			'detail' : {
				templateUrl : function($stateParems){
					return 'resources/html/user/interfaceDetail.tpl.html?v=v8.0.5';
				}
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            },
			'interResEditorDiv@interfaceList' : {
				templateUrl : 'resources/html/subTpl/interResEditorDiv.tpl.html?v=v8.0.5'
			},
			'interFormParamDiv@interfaceList' : {
				templateUrl : 'resources/html/subTpl/interFormParamDiv.tpl.html?v=v8.0.5'
			},
			'interHeaderDiv@interfaceList' : {
				templateUrl : 'resources/html/subTpl/interHeaderDiv.tpl.html?v=v8.0.5'
			},
			'interParamRemakDiv@interfaceList' : {
				templateUrl : 'resources/html/subTpl/interParamRemakDiv.tpl.html?v=v8.0.5'
			}
			
		}
	}).state('errorList', {
		url : '/user/error/list?' + commonUrlParam,
		views : {
			'main' : {
				templateUrl : 'resources/html/user/errorList.tpl.html?v=v8.0.5'
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            },
			'page@errorList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},
			'detail' : {
				templateUrl : function($stateParems){
					return 'resources/html/user/errorDetail.tpl.html?v=v8.0.5';
				}
			}
		}
	}).state('projectUserList', {
        url : '/user/projectUser/list?projectId&name&projectName&menu_a&menu_b',
        views : {
            'main' : {
                templateUrl : 'resources/html/user/projectUserList.tpl.html?v=v8.0.5'
            },'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            },
            'page@projectUserList' : {
                templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
            },
            'detail' : {
                templateUrl : function($stateParems){
                    return 'resources/html/user/projectUserDetail.tpl.html?v=v8.0.5';
                }
            }
        }
    }).state('projectLogList', {
        url : '/user/log/list?identy&' + commonUrlParam,
        views : {
            'main' : {
                templateUrl : 'resources/html/admin/logList.tpl.html?v=v8.0.5'
            },'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            },
            'page@projectLogList' : {
                templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
            },
            'detail' : {
                templateUrl : function($stateParems){
                    return 'resources/html/admin/logDetail.tpl.html?v=v8.0.5';
                }
            }
        }
    }).state('articleList', {
        url : '/user/article/list?currentPage&name&category&' + commonUrlParam,
        views : {
            'main' : {
                templateUrl : function($stateParems){
                    return 'resources/html/user/articleList.tpl.html?v=v8.0.5';
                }
            },
            'page@articleList' : {
                templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
            },'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            }
        }
    }).state('dictionaryList', {
        url : '/user/dictionary/list?currentPage&name&category&' + commonUrlParam,
        views : {
            'main' : {
                templateUrl : function($stateParems){
                    return 'resources/html/user/dictionaryList.tpl.html?v=v8.0.5';
                }
            },
            'page@dictionaryList' : {
                templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
            },'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            }
        }
    }).state('userEditArticle', {
        url : '/user/article/edit?id&' + commonUrlParam,
        views : {
           'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            }, 'main' : {
                templateUrl : function($stateParems){
                    return 'resources/html/user/articleEdit.tpl.html?v=v8.0.5';
                }
            }
        }
    }).state('userViewArticle', {
        url : '/user/article/view?id&' + commonUrlParam,
        views : {
            'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            }, 'main' : {
                templateUrl : function($stateParems){
                    return 'resources/html/user/articleDetail.tpl.html?v=v8.0.5';
                }
            }
        }
    }).state('editDictionary', {
        url : '/user/dictionary/edit?id&' + commonUrlParam,
        views : {
            'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            }, 'main' : {
                templateUrl : function($stateParems){
                    return 'resources/html/user/dictionaryDetail.tpl.html?v=v8.0.5';
                }
            }
        }
    }).state('sourceList', {
		url : '/user/source/list?projectId&moduleId&moduleName&projectName&menu_a&menu_b',
		views : {
			'main' : {
				templateUrl : 'resources/html/user/sourceList.tpl.html?v=v8.0.5'
			},
			'page@sourceList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            },'detail' : {
				templateUrl : function($stateParems){
					return 'resources/html/user/sourceDetail.tpl.html?v=v8.0.5';
				}
			}
		}
	}).state('settingList', {
		url : '/admin/setting/list?key&menu_a&menu_b',
		views : {
			'main' : {
				templateUrl : 'resources/html/admin/settingList.tpl.html?v=v8.0.5'
			},
			'page@settingList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuSetting.tpl.html?v=v8.0.5';
                }
            }
		}
	}).state('settingDetail', {
		url : '/admin/setting/detail?type&id&menu_a&menu_b',
		views : {
			'main' :{
				templateUrl : function($stateParems){
					return 'resources/html/admin/settingDetail_'+$stateParems.type+'.tpl.html?v=v8.0.5';
				}
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuSetting.tpl.html?v=v8.0.5';
                }
            }
		}
	}).state('hotSearchList', {
        url : '/admin/hotSearch/list?menu_a&menu_b',
        views : {
            'main' : {
                templateUrl : 'resources/html/admin/hotSearchList.tpl.html?v=v8.0.5'
            },
            'page@hotSearchList' : {
                templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
            },'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuSetting.tpl.html?v=v8.0.5';
                }
            }
        }
    }).state('configProperties', {
		url : '/admin/config/properties?menu_a&menu_b',
		views : {
			'main' :{
				templateUrl : function($stateParems){
					return 'resources/html/admin/config.properties.html';
				}
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuSetting.tpl.html?v=v8.0.5';
                }
            }
		}
	}).state('dictionaryImoprtFromSql', {
		url : '/user/article/dictionary/importFromSql?menu_a',
		views : {
			'main' :{
				templateUrl : function($stateParems){
					return 'resources/html/user/dictionaryImportFromSql.tpl.html?v=v8.0.5';
				}
			}
		}
	}).state('userList', {
		url : '/admin/user/list?menu_a&menu_b',
		views : {
			'main' : {
				templateUrl : 'resources/html/admin/userList.tpl.html?v=v8.0.5'
			},
			'page@userList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},
			'detail' : {
				templateUrl : function($stateParems){
					return 'resources/html/admin/userDetail.tpl.html?v=v8.0.5';
				}
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuSetting.tpl.html?v=v8.0.5';
                }
            }
		}
	}).state('commentList', {
		url : '/user/comment/list?articleId&' + commonUrlParam,
		views : {
			'main' : {
				templateUrl : 'resources/html/user/commentList.tpl.html?v=v8.0.5'
			},
			'page@commentList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},
			'detail' : {
				templateUrl : function($stateParems){
					return 'resources/html/user/commentDetail.tpl.html?v=v8.0.5';
				}
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuModule.tpl.html?v=v8.0.5';
                }
            }
		}
	}).state('roleList', {
		url : '/admin/role/list?menu_a&menu_b',
		views : {
			'main' : {
				templateUrl : 'resources/html/admin/roleList.tpl.html?v=v8.0.5'
			},
			'page@roleList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},
			'detail' : {
				templateUrl : function($stateParems){
					return 'resources/html/admin/roleDetail.tpl.html?v=v8.0.5';
				}
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuSetting.tpl.html?v=v8.0.5';
                }
            }
		}
	}).state('profile', {
		url : '/profile?menu_a',
		views : {
			'main' : {
				templateUrl : 'resources/html/admin/userDetail.tpl.html?v=v8.0.5'
			}
		}
	}).state('adminLogList', {
		url : '/admin/log/list?identy&menu_a&menu_b',
		views : {
			'main' : {
				templateUrl : 'resources/html/admin/logList.tpl.html?v=v8.0.5'
			},
			'page@adminLogList' : {
				templateUrl : 'resources/html/admin/page.tpl.html?v=v8.0.5'
			},
			'detail' : {
				templateUrl : function($stateParems){
					return 'resources/html/admin/logDetail.tpl.html?v=v8.0.5';
				}
			},'subMenu' :{
                templateUrl : function($stateParems){
                    return 'resources/html/subTpl/subMenuSetting.tpl.html?v=v8.0.5';
                }
            }
		}
	})
	
});