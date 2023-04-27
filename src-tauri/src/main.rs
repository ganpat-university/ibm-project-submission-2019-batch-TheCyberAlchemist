#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use futures::executor::block_on;

use serde::{Serialize, Deserialize};

fn main() {
    // println!("here");
    let _a = tauri::Builder::default()
        .invoke_handler(
            tauri::generate_handler![
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
