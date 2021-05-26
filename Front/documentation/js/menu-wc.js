'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pim documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-db057e11d0d2f5ef3d75f0887fbe98ed"' : 'data-target="#xs-components-links-module-AppModule-db057e11d0d2f5ef3d75f0887fbe98ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-db057e11d0d2f5ef3d75f0887fbe98ed"' :
                                            'id="xs-components-links-module-AppModule-db057e11d0d2f5ef3d75f0887fbe98ed"' }>
                                            <li class="link">
                                                <a href="components/AlertHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlerteValidationCandidaturesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlerteValidationCandidaturesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CandidatureMotivationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CandidatureMotivationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LotsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LotsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LotsDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LotsDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonnelsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonnelsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SitesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SitesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaxonomieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaxonomieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaxonomieDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaxonomieDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-db057e11d0d2f5ef3d75f0887fbe98ed"' : 'data-target="#xs-pipes-links-module-AppModule-db057e11d0d2f5ef3d75f0887fbe98ed"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-db057e11d0d2f5ef3d75f0887fbe98ed"' :
                                            'id="xs-pipes-links-module-AppModule-db057e11d0d2f5ef3d75f0887fbe98ed"' }>
                                            <li class="link">
                                                <a href="pipes/SearchFilterPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchFilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlerteService.html" data-type="entity-link">AlerteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CandidatureService.html" data-type="entity-link">CandidatureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EspeceService.html" data-type="entity-link">EspeceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LotService.html" data-type="entity-link">LotService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonnelService.html" data-type="entity-link">PersonnelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SiteService.html" data-type="entity-link">SiteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilisateurService.html" data-type="entity-link">UtilisateurService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});