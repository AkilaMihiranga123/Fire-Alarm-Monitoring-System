package com.client.java;

import java.awt.Component;

import javax.swing.JTable;
import javax.swing.table.DefaultTableCellRenderer;
import javax.swing.table.TableCellRenderer;

public class TableRowColor implements TableCellRenderer {
	private static final TableCellRenderer RENDERER = new DefaultTableCellRenderer();

	@Override
	public Component getTableCellRendererComponent(JTable table, Object value, boolean isSelected, boolean hasFocus,
			int row, int column) {
		Component c = RENDERER.getTableCellRendererComponent(table, value, isSelected, hasFocus, row, column);
		if (column == 4) {
			//get column value
			Object result = table.getModel().getValueAt(row, column);
			int smokeLevel = Integer.parseInt(result.toString());
			//if smoke level grater than 5,then show it in red color.
			if (smokeLevel > 5 && smokeLevel <= 10) {
				c.setForeground(java.awt.Color.RED);
			//if smoke level less than 5,then show it in black color.	
			} else if (smokeLevel < 5) {
				c.setForeground(java.awt.Color.BLACK);
			}

		} else if (column == 5) {
			//get column value
			Object result = table.getModel().getValueAt(row, column);
			int co2Level = Integer.parseInt(result.toString());
			//if CO2 level grater than 5,then show it in red color.
			if (co2Level > 5 && co2Level <= 10) {
				c.setForeground(java.awt.Color.RED);
			//if smoke level less than 5,then show it in black color.
			} else if (co2Level < 5) {
				c.setForeground(java.awt.Color.BLACK);
			}
		} else if (column == 6) {
			Object result = table.getModel().getValueAt(row, column);
			String status = result.toString();
			//if status equal "true",then show it in red color.
			if (status.equals("true")) {
				c.setForeground(java.awt.Color.RED);
			//if status equal "false",then show it in green color.
			} else if (status.equals("false")) {
				c.setForeground(java.awt.Color.GREEN);
			}
		} else {
			//show in black color.
			c.setForeground(java.awt.Color.BLACK);
		}

		return c;
	}
}
