import { Component, OnInit } from '@angular/core';

interface row {
  'Property': string,
  'SanerNow'?: string,
  'Intruder'?: string,
  'ManageEngine'?: string,
  'NessusPro'?: string,
  'Qualys'?: string,
}


@Component({
  selector: 'app-comp-table',
  templateUrl: './comp-table.component.html',
  styleUrls: ['./comp-table.component.scss']
})
export class CompTableComponent implements OnInit {
  selected_apps: string[] = ['Property']

  all_apps: string[] = ['SanerNow', 'Intruder', 'ManageEngine', 'NessusPro', 'Qualys']
  table_data: row[] = [
    {
      "Property": "Active Scanning",
      "SanerNow": "✅",
      "Intruder": "✅",
      "ManageEngine": "✅",
      "NessusPro": "✅",
      "Qualys": "✅"
    },
    {
      "Property": "Passive Scanning",
      "SanerNow": "✅",
      "Intruder": "❌",
      "ManageEngine": "❌",
      "NessusPro": "❌",
      "Qualys": "✅"
    },
    {
      "Property": "Vulnerability Assessment",
      "SanerNow": "✅",
      "Intruder": "✅",
      "ManageEngine": "✅",
      "NessusPro": "✅",
      "Qualys": "✅"
    },
    {
      "Property": "Web Application Scanning",
      "SanerNow": "✅",
      "Intruder": "✅",
      "ManageEngine": "✅",
      "NessusPro": "✅",
      "Qualys": "✅"
    },
    {
      "Property": "Network Scanning",
      "SanerNow": "✅",
      "Intruder": "✅",
      "ManageEngine": "✅",
      "NessusPro": "✅",
      "Qualys": "✅"
    },
    {
      "Property": "Cloud Infrastructure Scanning",
      "SanerNow": "✅",
      "Intruder": "✅",
      "ManageEngine": "✅",
      "NessusPro": "✅",
      "Qualys": "✅"
    },
    {
      "Property": "Configuration Management",
      "SanerNow": "✅",
      "Intruder": "❌",
      "ManageEngine": "✅",
      "NessusPro": "❌",
      "Qualys": "✅"
    },
    {
      "Property": "Compliance Management",
      "SanerNow": "✅",
      "Intruder": "❌",
      "ManageEngine": "✅",
      "NessusPro": "❌",
      "Qualys": "✅"
    },
    {
      "Property": "Patch Management",
      "SanerNow": "✅",
      "Intruder": "❌",
      "ManageEngine": "✅",
      "NessusPro": "❌",
      "Qualys": "✅"
    },
    {
      "Property": "Risk Assessment",
      "SanerNow": "✅",
      "Intruder": "✅",
      "ManageEngine": "✅",
      "NessusPro": "✅",
      "Qualys": "✅"
    },
    {
      "Property": "Threat Intelligence",
      "SanerNow": "✅",
      "Intruder": "✅",
      "ManageEngine": "✅",
      "NessusPro": "✅",
      "Qualys": "✅"
    },
    {
      "Property": "Asset Management",
      "SanerNow": "✅",
      "Intruder": "❌",
      "ManageEngine": "✅",
      "NessusPro": "✅",
      "Qualys": "✅"
    },
    {
      "Property": "Reporting and Analytics",
      "SanerNow": "✅",
      "Intruder": "✅",
      "ManageEngine": "✅",
      "NessusPro": "✅",
      "Qualys": "✅"
    },
    {
      "Property": "Integration with Other Tools",
      "SanerNow": "✅",
      "Intruder": "✅",
      "ManageEngine": "✅",
      "NessusPro": "✅",
      "Qualys": "✅"
    },
    {
      "Property": "Deployment Options",
      "SanerNow": "Cloud-based",
      "Intruder": "Cloud-based",
      "ManageEngine": "On-premises/cloud-based",
      "NessusPro": "On-premises/cloud-based",
      "Qualys": "On-premises/cloud-based"
    },
    {
      "Property": "Supported Operating Systems",
      "SanerNow": "Windows, Mac, Linux, Android, iOS",
      "Intruder": "Windows, Mac, Linux",
      "ManageEngine": "Windows, Mac",
      "NessusPro": "Windows, Mac, Linux, Unix",
      "Qualys": "Windows, Mac, Linux, Unix"
    },
    {
      "Property": "Price",
      "SanerNow": "$2.5/year per endpoint",
      "Intruder": "$8/year per asset scanned",
      "ManageEngine": "$3.5/year per endpoint",
      "NessusPro": "$17.4/year per IP",
      "Qualys": "$19.95/year per asset"
    },
    {
      "Property": "Free Trial Duration",
      "SanerNow": "30-day free trial",
      "Intruder": "14-day free trial",
      "ManageEngine": "30-day free trial",
      "NessusPro": "7-day free trial",
      "Qualys": "14-day free trial"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  selectApps(event: any, app: any) {
    console.log(event.target.checked, app);
    if (event.target.checked) {
      this.selected_apps.splice(this.all_apps.indexOf(app) + 1, 0, app)
    } else {
      this.selected_apps = this.selected_apps.filter(a => a !== app)
    }
  }
}
