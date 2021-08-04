import "@hotwired/turbo-rails"
import "channels"
import "controllers"
import "core-js/stable"
import "regenerator-runtime/runtime"
import * as ActiveStorage from "@rails/activestorage"
import Rails from "@rails/ujs"

Rails.start()
ActiveStorage.start()