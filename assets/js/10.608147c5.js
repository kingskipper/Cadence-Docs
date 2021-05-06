(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{394:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"install-cadence-service-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-cadence-service-locally"}},[s._v("#")]),s._v(" Install Cadence Service Locally")]),s._v(" "),a("h2",{attrs:{id:"install-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-docker"}},[s._v("#")]),s._v(" Install docker")]),s._v(" "),a("p",[s._v("Follow the Docker installation instructions found here: "),a("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.docker.com/engine/installation/"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"run-cadence-server-using-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-cadence-server-using-docker-compose"}},[s._v("#")]),s._v(" Run Cadence Server Using Docker Compose")]),s._v(" "),a("p",[s._v("Download the Cadence docker-compose file:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -O https://raw.githubusercontent.com/uber/cadence/master/docker/docker-compose.yml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -O https://raw.githubusercontent.com/uber/cadence/master/docker/prometheus_config.yml\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("675")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("675")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("958")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" --:--:-- --:--:-- --:--:--   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("958")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\ndocker-compose.yml\n")])])]),a("p",[s._v("Start Cadence Service:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docker-compose up\nCreating network "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"quick_start_default"')]),s._v(" with the default driver\nPulling cadence "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ubercadence/server:0.5.8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v(".8: Pulling from ubercadence/server\ndb0035920883: Pull complete\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n27ec3755f89c: Pull complete\n0a5d2a29a5e5: Pull complete\nCreating quick_start_statsd_1    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating quick_start_cassandra_1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating quick_start_cadence_1   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating quick_start_cadence-web_1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nAttaching to quick_start_cassandra_1, quick_start_statsd_1, quick_start_cadence_1, quick_start_cadence-web_1\nstatsd_1       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *** Running /etc/my_init.d/00_regen_ssh_host_keys.sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nstatsd_1       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *** Running /etc/my_init.d/01_conf_init.sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ncadence_1      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CADENCE_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/cadence\ncadence_1      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cassandra\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ncadence_1      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"level"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-06-06T15:26:38.199Z"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Get dynamic config"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"matching.longPollExpirationInterval"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1m0s"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default-value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1m0s"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logging-call-at"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config.go:57"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\ncadence_1      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"level"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-06-06T15:26:38.199Z"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Get dynamic config"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"matching.updateAckInterval"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1m0s"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default-value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1m0s"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logging-call-at"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config.go:57"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ncadence_1      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"level"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-06-06T15:27:24.905Z"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Get dynamic config"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"history.timerProcessorCompleteTimerFailureRetryCount"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default-value"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logging-call-at"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"config.go:57"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"register-a-domain-using-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-a-domain-using-the-cli"}},[s._v("#")]),s._v(" Register a Domain Using the CLI")]),s._v(" "),a("p",[s._v("From a different console window:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docker run --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host --rm ubercadence/cli:master --do test-domain domain register -rd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nUnable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" image "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ubercadence/cli:master'")]),s._v(" locally\nmaster: Pulling from ubercadence/cli\n22dc81ace0ea: Pull complete\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nda2cfe74be81: Pull complete\n5320bde81c0c: Pull complete\nDigest: sha256:f5e5e708347909c8d3f74c47878b201d91606994394e94eaede9a80e3b9f077b\nStatus: Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ubercadence/cli:master\nDomain test-domain successfully registered.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("Check that the domain is indeed registered:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docker run --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host --rm ubercadence/cli:master --do test-domain domain describe\nName: test-domain\nDescription:\nOwnerEmail:\nDomainData: map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nStatus: REGISTERED\nRetentionInDays: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nEmitMetrics: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nActiveClusterName: active\nClusters: active\nArchivalStatus: DISABLED\nBad binaries to reset:\n+-----------------+----------+------------+--------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" BINARY CHECKSUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" OPERATOR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" START TIME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" REASON "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------+----------+------------+--------+\n+-----------------+----------+------------+--------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h2",{attrs:{id:"what-s-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[s._v("#")]),s._v(" What's Next")]),s._v(" "),a("p",[s._v("Go to "),a("a",{attrs:{href:"/docs/get-started/java-hello-world"}},[s._v("Java HelloWorld")]),s._v(" or "),a("a",{attrs:{href:"/docs/get-started/golang-hello-world"}},[s._v("Golang HelloWorld")]),s._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);